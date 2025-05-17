"use client";

import React, { useState } from "react";

// Images
import { Eye, EyeOff, Loader } from "lucide-react";

// Imports
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { objectToFormData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinAction } from "@/app/auth/sign-in/actions";
import { SigninSchema, signinSchema } from "@/lib/validators";
import { AuthRedirect, AuthValidationText } from "../auth-components";

// Constants
const ICON_PROPS = {
  size: 20,
  color: "#828a9a",
  strokeWidth: 1.5,
};

const SignInForm = () => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  // States
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Functions
  const onSubmit = async (data: SigninSchema) => {
    setLoading(true);
    try {
      const formData = objectToFormData(data);
      const result = await signinAction(formData);
      console.warn(result.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="custom-flex-col gap-5">
      <div className="custom-flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="example@gmail.com"
        />
        <AuthValidationText text={errors.email} />
      </div>
      <div className="custom-flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-2 -translate-y-1/2 p-1"
          >
            {showPassword ? (
              <EyeOff {...ICON_PROPS} />
            ) : (
              <Eye {...ICON_PROPS} />
            )}
          </button>
        </div>
        <AuthValidationText text={errors.password} />
      </div>
      <div className="custom-flex-col gap-3">
        <Button size={"lg"} disabled={loading}>
          {loading ? (
            <>
              <Loader className="animate-spin" />
              Signing you in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
        <AuthRedirect
          text="Already have an account?"
          link={{
            text: "Sign Up",
            href: "/auth/sign-up",
          }}
        />
      </div>
    </form>
  );
};

export default SignInForm;
