// Imports
import { User, Session } from "@/app/generated/prisma";

export type SessionValidationResult =
  | { session: Session; user: User }
  | { session: null; user: null };
