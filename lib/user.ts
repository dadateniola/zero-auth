// Imports
import prisma from "./prisma";
import { User } from "@prisma/client";
import { hashPassword } from "./password";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: { name, email, password_hash: passwordHash },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user");
  }
}
