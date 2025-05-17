import Link from "next/link";

// Types
import {
  AuthRedirectProps,
  AuthValidationTextProps,
  AuthWrapperProps,
} from "./types";

// Imports
import Divider from "../divider/divider";
import ParticlesBG from "../particles-bg/particles-bg";

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

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => (
  <main className="relative w-full min-h-screen p-6 grid grid-cols-3 lg:grid-cols-5 overflow-hidden">
    <div className="absolute top-6 right-6">
      <Link
        href="/"
        className="text-sm text-[#828a9a] font-medium hover:underline"
      >
        Back to Home
      </Link>
    </div>
    <div className="max-lg:hidden col-span-2 bg-[#f9f9f9] rounded-3xl overflow-hidden">
      <ParticlesBG linkColor="#000" particleNumber={150} />
    </div>
    <div className="col-span-3 custom-flex-center">{children}</div>
  </main>
);

export const AuthValidationText: React.FC<AuthValidationTextProps> = ({
  text,
}) => text && <p className="text-red-500 text-sm">{text.message}</p>;
