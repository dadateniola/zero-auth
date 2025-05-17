// Imports
import prisma from "./prisma";

export async function checkEmailAvailability(email: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true }, // lightweight query
  });

  return user === null; // true if not found (available)
}
