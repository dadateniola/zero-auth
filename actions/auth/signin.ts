"use server";

import { redirect } from "next/navigation";

// Imports
import { getUserByEmail } from "@/lib/user";
import { signinSchema } from "@/lib/validators";
import { verifyPasswordHash } from "@/lib/password";

import {
  createSession,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/lib/session";

interface SigninActionResult {
  message?: string;
}

export async function signinAction(
  formData: FormData
): Promise<SigninActionResult> {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = signinSchema.safeParse(raw);
  if (!result.success) {
    const error = result.error.flatten().fieldErrors;
    return {
      message: Object.values(error).flat().join(", ") || "Invalid form data",
    };
  }

  const { email, password } = result.data;

  const user = await getUserByEmail(email);
  if (!user) return { message: "Account does not exist" };

  const isValidPassword = await verifyPasswordHash(
    user.password_hash,
    password
  );
  if (!isValidPassword) return { message: "Invalid password" };

  const sessionToken = await generateSessionToken();
  const session = await createSession(sessionToken, user.id);

  await setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/success");
}
