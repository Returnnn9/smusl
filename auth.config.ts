import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [], // Providers are populated in auth.ts to avoid Prisma in Edge
  pages: {
    signIn: "/admin/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = (user as any).role ?? "USER";
        token.twoFactorEnabled = (user as any).twoFactorEnabled ?? false;
        if ((user as any).phone) token.phone = (user as any).phone;
      }
      if (trigger === "update" && session) {
        Object.assign(token, session);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = (token.role as string) ?? "USER";
        session.user.twoFactorEnabled = (token.twoFactorEnabled as boolean) ?? false;
        if (token.phone) {
          session.user.phone = token.phone as string;
          if (!session.user.name || session.user.name === token.phone) {
            session.user.name = String(token.phone);
          }
        }
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
