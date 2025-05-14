import React from "react";

// Imports
import { AuthWrapper } from "@/components/auth/auth-components";

const AuthLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};

export default AuthLayout;
