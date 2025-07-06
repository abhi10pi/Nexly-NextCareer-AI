import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "./generated/prisma";

const db = globalThis.prisma || new PrismaClient();//this is use for query our database

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default db;

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.