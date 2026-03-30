import { prisma } from './lib/prisma';
import * as dotenv from 'dotenv';
dotenv.config();

async function checkOtp() {
  const phone = "79222222222";
  const entry = await prisma.otpCode.findUnique({ where: { phone } });
  if (entry) {
    console.log(`Current OTP for ${phone}: ${entry.code}`);
  } else {
    console.log(`No active OTP found for ${phone}`);
  }
  process.exit();
}

checkOtp();
