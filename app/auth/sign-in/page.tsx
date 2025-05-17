import React from "react";

// Imports
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// Imports
import { Button } from "@/components/ui/button";
import { OrDivider } from "@/components/auth/auth-components";
import SignInForm from "@/components/auth/sign-in/sign-in-form";

const SignIn = () => {
  return (
    <div className="max-sm:w-full max-sm:max-w-[462px] custom-flex-col gap-6 sm:gap-8">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <div className="custom-flex-col gap-5 [&_input]:h-10">
        <div className="flex gap-3">
          <Button
            size={"lg"}
            variant={"outline"}
            className="flex-1 gap-4 cursor-not-allowed"
          >
            <FcGoogle />
            <p className="max-sm:hidden">Sign in with Google</p>
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="flex-1 gap-4 cursor-not-allowed"
          >
            <FaGithub />
            <p className="max-sm:hidden">Sign in with Github</p>
          </Button>
        </div>
        <OrDivider />
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
