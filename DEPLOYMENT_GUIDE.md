# 🚀 Smusl Deployment Guide

This guide details how to move the Smusl application from local development to production.

## 1. Environment Setup 📋

Copy `.env.example` to `.env` on your server and fill in the values:

```bash
cp .env.example .env
```

### Required Variables:
*   **`DATABASE_URL`**: 
    *   **VPS**: Use `file:./dev.db` (SQLite).
    *   **Vercel**: Use a PostgreSQL connection string.
*   **`SITE_PASSWORD`**: Set this to `1234qwerty` (or your preference) to enable the global site lock.
*   **`AUTH_SECRET`**: Run `openssl rand -base64 32` to generate a secure secret for session management.
*   **`SMSRU_API_KEY`**: Your production API key from SMS.ru.
*   **`NEXT_PUBLIC_SITE_URL`**: Your domain (e.g., `https://smuslest.ru`).

## 2. Database Migration 🐘

Before starting the app, you MUST sync the database schema.

### For SQLite (VPS):
```bash
npx prisma db push
```

### For PostgreSQL (Vercel):
1. Change `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma`.
2. Run:
```bash
npx prisma generate
npx prisma migrate deploy
```

## 3. Build & Launch ⚡

Run the following commands to build and start the application:

```bash
npm install
npm run build
npm run start
```

## 4. Pre-Release Lock 🔐

The site is currently in **"Private Beta"** mode.
*   **Locked**: Any visitor will see the `/lock` screen.
*   **Access**: Entering the `SITE_PASSWORD` grants a secure cookie (`smusl_site_access`) for the duration of the session.
*   **Admin**: Login via `/admin/login`. Ensure you add your phone number to the database for OTP.

## 5. Hosting Specifics 🛠️

### Vercel
- **Build Command**: `prisma generate && next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### VPS (Ubuntu + Nginx)
- Use **PM2** to keep the process alive:
  ```bash
  pm2 start npm --name "smusl" -- start
  ```
- Configure Nginx as a reverse proxy to `localhost:3000`.

---
> [!TIP]
> Always verify your `NEXT_PUBLIC_SITE_URL` in the environment variables, as it controls metadata and dynamic API origins.
