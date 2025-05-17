"use server";

// Imports
import { createUser } from "@/lib/user";
import { signupSchema } from "@/lib/validators";
import { checkEmailAvailability } from "@/lib/email";

import {
  createSession,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/lib/session";
import { redirect } from "next/navigation";

interface SignupActionResult {
  message?: string;
}

export async function signupAction(
  formData: FormData
): Promise<SignupActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = signupSchema.safeParse(raw);
  if (!result.success) {
    const error = result.error.flatten().fieldErrors;
    return {
      message: Object.values(error).flat().join(", ") || "Invalid form data",
    };
  }

  const { name, email, password } = result.data;

  const emailAvailable = await checkEmailAvailability(email);
  if (!emailAvailable) return { message: "Email already in use" };

  const user = await createUser(name, email, password);

  const sessionToken = await generateSessionToken();
  const session = await createSession(sessionToken, user.id);

  await setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/success");
}
