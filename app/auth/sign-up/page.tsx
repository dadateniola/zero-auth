import React from "react";

// Imports
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// Imports
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { OrDivider, AuthRedirect } from "@/components/auth/auth-components";

const SignUp = () => {
  return (
    <div className="max-sm:w-full max-sm:max-w-[462px] custom-flex-col gap-6 sm:gap-8">
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <div className="custom-flex-col gap-5 [&_input]:h-10">
        <div className="flex gap-3">
          <Button
            size={"lg"}
            variant={"outline"}
            className="flex-1 gap-4 cursor-not-allowed"
          >
            <FcGoogle />
            <p className="max-sm:hidden">Sign up with Google</p>
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="flex-1 gap-4 cursor-not-allowed"
          >
            <FaGithub />
            <p className="max-sm:hidden">Sign up with Github</p>
          </Button>
        </div>
        <OrDivider />
        <div className="custom-flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="Dada Teniola" />
        </div>
        <div className="custom-flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="custom-flex-col gap-2">
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
          />
        </div>
        <div className="custom-flex-col gap-3">
          <Button size={"lg"}>Sign Up</Button>
          <AuthRedirect
            text="Already have an account?"
            link={{
              text: "Sign In",
              href: "/auth/sign-in",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
