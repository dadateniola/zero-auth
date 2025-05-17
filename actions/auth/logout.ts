"use server";

// Imports
import {
  getCurrentSession,
  invalidateSession,
  deleteSessionTokenCookie,
} from "@/lib/session";

import { redirect } from "next/navigation";

export async function logoutAction(): Promise<void> {
  const { session } = await getCurrentSession();

  if (session === null) return redirect("/auth/signin");

  invalidateSession(session.id);
  deleteSessionTokenCookie();

  return redirect("/auth/signin");
}
