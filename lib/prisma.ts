import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Lazy initialization function to avoid top-level Prisma instance creation during Turbopack builds.
// In Prisma 7, with standard connection strings in the schema, we use the empty constructor.
const getPrisma = (): PrismaClient => {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
};

// Proxy export to ensure Prisma is only initialized on first access
export const prisma = new Proxy({} as PrismaClient, {
  get: (target, prop) => {
    // Return early for special properties or handle potential infinite recursion
    if (prop === '$$typeof' || prop === 'constructor') return (target as any)[prop];
    return (getPrisma() as any)[prop];
  }
});
