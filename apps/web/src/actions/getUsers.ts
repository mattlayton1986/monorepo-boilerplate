'use server';

import { prisma, User } from "database";

// Example server action that requests all users from
// Postgres database via Prisma.
export async function getUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();

  return users;
}