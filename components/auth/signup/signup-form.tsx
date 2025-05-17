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
import { signupAction } from "@/actions/auth/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema } from "@/lib/validators";
import { AuthRedirect, AuthValidationText } from "../auth-components";

// Constants
const ICON_PROPS = {
  size: 20,
  color: "#828a9a",
  strokeWidth: 1.5,
};

const SignUpForm = () => {
  // Hooks
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  // States
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Functinons
  const formatName = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0]?.toUpperCase() + word?.slice(1).toLowerCase())
      .join(" ");
  };

  const onSubmit = async (data: SignupSchema) => {
    setLoading(true);
    try {
      const formData = objectToFormData(data);
      const result = await signupAction(formData);
      console.warn(result.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="custom-flex-col gap-5">
      <div className="custom-flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Dada Teniola"
          onBlur={(e) => {
            const formatted = formatName(e.target.value);
            setValue("name", formatted);
          }}
        />
        <AuthValidationText text={errors.name} />
      </div>
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
              Signing you up...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
        <AuthRedirect
          text="Already have an account?"
          link={{
            text: "Sign In",
            href: "/auth/signin",
          }}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
