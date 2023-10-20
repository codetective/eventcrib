import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  db: PrismaClient | undefined;
};

const db =
  globalForPrisma.db ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db;

export default db;
