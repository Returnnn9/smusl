import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { verifyOtp } from "@/lib/otp-store";
import { normalizePhone } from "@/lib/phone";
import { authConfig } from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || "placeholder",
      clientSecret: process.env.APPLE_SECRET || "placeholder",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const adminEmailFromEnv = (process.env.ADMIN_EMAIL || "admin@smusl.ru").toLowerCase().trim();
        const adminPasswordFromEnv = (process.env.ADMIN_PASSWORD || "").trim();

        const inputEmail = String(credentials.email).toLowerCase().trim();
        const inputPassword = String(credentials.password).trim();

        if (inputEmail === adminEmailFromEnv && adminPasswordFromEnv && inputPassword === adminPasswordFromEnv) {
          return {
            id: "admin-env-id",
            email: adminEmailFromEnv,
            name: "Admin",
            role: "ADMIN",
            twoFactorEnabled: false,
          };
        }

        let user = await prisma.user.findUnique({ where: { email: inputEmail } });



        if (!user || !user.password) return null;

        if (user.lockUntil && new Date(user.lockUntil) > new Date()) {
          throw new Error("Лимит попыток исчерпан. Попробуйте через 15 минут.");
        }

        const isCorrectPassword = await bcrypt.compare(inputPassword, user.password);

        if (!isCorrectPassword) {
          const attempts = (user.loginAttempts || 0) + 1;
          const isLocking = attempts >= 5;
          await prisma.user.update({
            where: { id: user.id },
            data: {
              loginAttempts: attempts,
              lockUntil: isLocking ? new Date(Date.now() + 15 * 60000) : null
            } as any
          });
          throw new Error(isLocking ? "Слишком много попыток. Аккаунт заблокирован." : "Неверный пароль");
        }

        await prisma.user.update({
          where: { id: user.id },
          data: { loginAttempts: 0, lockUntil: null } as any
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role || "USER",
          twoFactorEnabled: user.twoFactorEnabled || false,
        };
      },
    }),
    CredentialsProvider({
      id: 'phone-otp',
      name: 'Phone OTP',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        code: { label: 'Code', type: 'text' },
        name: { label: 'Name', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.code) return null;

        const phone = normalizePhone(String(credentials.phone));
        const ADMIN_PHONE = process.env.ADMIN_PHONE ?? '';
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? '';

        const isAdminAuth = Boolean(
          ADMIN_PHONE && ADMIN_PASSWORD &&
          phone === ADMIN_PHONE &&
          credentials.code === ADMIN_PASSWORD
        );

        if (!isAdminAuth) {
          if (!phone) throw new Error('Неверный формат номера');
          const result = await verifyOtp(phone, String(credentials.code));
          if (!result.ok) throw new Error("Неверный код или срок действия истек");
        }


        const syntheticEmail = `${phone}@sms.local`;
        let user = await prisma.user.findUnique({ where: { email: syntheticEmail } });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: syntheticEmail,
              name: String(credentials?.name || phone).trim(),
              role: 'USER'
            }
          });
        }

        return {
          id: user.id,
          phone: phone ?? undefined,
          name: user.name,
          email: user.email,
          role: isAdminAuth ? 'ADMIN' : user.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
