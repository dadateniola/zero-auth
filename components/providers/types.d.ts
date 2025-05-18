// Types
import type { SessionValidationResult } from "@/lib/types";

export interface ClientProviderProps {
  children: React.ReactNode;
}

export type AuthContextProps = SessionValidationResult;

export interface AuthProviderProps {
  children: React.ReactNode;
  value: SessionValidationResult;
}
