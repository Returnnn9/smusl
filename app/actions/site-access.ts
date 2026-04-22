"use server"

import { cookies } from "next/headers"

/**
 * Валидирует мастер-пароль сайта и устанавливает куку доступа
 */
export async function verifySitePassword(password: string) {
  const masterPassword = process.env.SITE_PASSWORD || "1234qwerty"
  
  if (password === masterPassword) {
    const cookieStore = await cookies()
    
    cookieStore.set("smusl_site_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })
    
    return { success: true }
  }
  
  return { success: false, error: "Неверный пароль" }
}
