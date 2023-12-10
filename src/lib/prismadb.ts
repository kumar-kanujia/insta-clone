import { PrismaClient } from "@prisma/client";

declare global {
  var prismadb: PrismaClient | undefined;
}

const prismadb = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismadb = prismadb;

export default prismadb;
