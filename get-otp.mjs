import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config();

async function run() {
  const sql = postgres(process.env.DATABASE_URL);
  try {
    const results = await sql`SELECT code FROM "OtpCode" WHERE phone = '79222222222' ORDER BY "createdAt" DESC LIMIT 1`;
    if (results.length > 0) {
      console.log(`\n================================`);
      console.log(`OTP CODE FOR ADMIN: ${results[0].code}`);
      console.log(`================================\n`);
    } else {
      console.log("No active OTP code found in database for 79222222222.");
    }
  } catch (err) {
    console.error("Database error:", err.message);
  } finally {
    await sql.end();
  }
}

run();
