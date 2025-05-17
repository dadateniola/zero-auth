// Imports
import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function verifyPasswordHash(
  hash: string,
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
