// Imports
import { User, Session } from "@prisma/client";

export type SessionValidationResult =
  | { session: Session; user: User }
  | { session: null; user: null };
