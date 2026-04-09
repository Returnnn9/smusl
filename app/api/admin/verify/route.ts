import { NextResponse } from "next/server";
import { getAdminData, verifyTOTP, createSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { createHash } from "crypto";

export async function POST(req: Request) {
 try {
  const { username, code } = await req.json();
  const adminData = await getAdminData();

  if (!adminData || username !== adminData.username) {
   return NextResponse.json({ error: "Неверный логин" }, { status: 401 });
  }

  const isValid = await verifyTOTP(code, adminData.twoFactorSecret);
  if (!isValid) {
   return NextResponse.json({ error: "Неверный код" }, { status: 401 });
  }

  // ── Replay-attack protection ──────────────────────────────────────────────
  // Store a SHA-256 hash of the secret (never the secret itself) + the code.
  // A TOTP code is valid for ~60s (2 windows). We reject duplicates.
  const secretHash = createHash("sha256").update(adminData.twoFactorSecret).digest("hex");

  try {
   await prisma.totpUsed.create({ data: { secret: secretHash, code } });
  } catch {
   // Unique constraint violation — code was already used
   return NextResponse.json({ error: "Код уже был использован. Дождитесь следующего кода." }, { status: 401 });
  }

  // Clean up old entries (older than 90 seconds) to keep the table small
  await prisma.totpUsed.deleteMany({
   where: { usedAt: { lt: new Date(Date.now() - 90_000) } },
  }).catch(() => { /* non-critical, ignore */ });
  // ─────────────────────────────────────────────────────────────────────────

  const session = await createSession(username);

  const response = NextResponse.json({ success: true, redirect: "/admin" });

  response.cookies.set("admin_session", session, {
   httpOnly: true,
   secure: process.env.NODE_ENV === "production",
   sameSite: "strict",   // было "lax" — strict предотвращает CSRF
   maxAge: 60 * 60 * 2,
   path: "/",
  });

  return response;
 } catch (error) {
  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
 }
}
