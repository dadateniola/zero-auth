"use client";

import { createContext, useContext } from "react";

// Types
import type { AuthContextProps, AuthProviderProps } from "./types";

// Context
const AuthContext = createContext<AuthContextProps | null>(null);

// Hook
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};

// Provider
export const AuthProvider: React.FC<AuthProviderProps> = ({
  value,
  children,
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
