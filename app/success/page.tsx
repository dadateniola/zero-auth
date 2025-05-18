"use client";

import React from "react";
import { redirect } from "next/navigation";

// Imports
import { logoutAction } from "@/actions/auth/logout";
import LogoutForm from "@/components/auth/logout/logout-form";
import ParticlesBG from "@/components/particles-bg/particles-bg";
import { useAuthContext } from "@/components/providers/auth-context";

const Success = () => {
  // Hooks
  const { user, session } = useAuthContext();

  if (session === null) return redirect("/auth/signin");

  return (
    <main className="w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <ParticlesBG />
      </div>
      <div className="relative w-full h-full custom-flex-center">
        <div className="custom-flex-col gap-5 text-center">
          <h1 className="text-3xl">You are logged in successfully</h1>
          <p className="text-lg">Welcome {user.name}</p>

          {/* Logout form */}
          <form action={logoutAction}>
            <LogoutForm />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Success;
