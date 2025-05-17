// Imports
import prisma from "./prisma";
import { hashPassword } from "./password";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: { name, email, password: passwordHash },
    });

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}
