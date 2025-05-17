import Link from "next/link";

// Types
import { AuthRedirectProps, AuthValidationTextProps } from "./types";

// Imports
import Divider from "../divider/divider";

export const OrDivider: React.FC = () => (
  <div className="flex items-center gap-3">
    <Divider direction="horizontal" className="flex-1" />
    <p>OR</p>
    <Divider direction="horizontal" className="flex-1" />
  </div>
);

export const AuthRedirect: React.FC<AuthRedirectProps> = ({ link, text }) => (
  <p className="text-sm text-center">
    {text}{" "}
    <Link
      href={link.href}
      className="text-[#828a9a] font-medium hover:underline"
    >
      {link.text}
    </Link>
  </p>
);

export const AuthValidationText: React.FC<AuthValidationTextProps> = ({
  text,
}) => text && <p className="text-red-500 text-sm">{text.message}</p>;
