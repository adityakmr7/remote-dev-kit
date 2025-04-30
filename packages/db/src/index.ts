import { Prisma, PrismaClient } from "./generated/prisma/client";

export const prismaClient = new PrismaClient();
export { Prisma };
