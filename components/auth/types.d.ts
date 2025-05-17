import { FieldError } from "react-hook-form";

export interface AuthRedirectProps {
  text: string;
  link: {
    text: string;
    href: string;
  };
}

export interface AuthWrapperProps {
  children: React.ReactNode;
}

export interface AuthValidationTextProps {
  text?: FieldError;
}
