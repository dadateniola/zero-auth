import React from "react";
import { redirect } from "next/navigation";

// Imports
import { getCurrentSession } from "@/lib/session";
import { logoutAction } from "../auth/logout/actions";
import LogoutForm from "@/components/auth/logout/logout-form";
import ParticlesBG from "@/components/particles-bg/particles-bg";

const Success = async () => {
  const { user, session } = await getCurrentSession();

  if (session === null) return redirect("/auth/sign-in");

  return (
    <main className="w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <ParticlesBG />
      </div>
      <div className="relative w-full h-full custom-flex-center">
        <div className="custom-flex-col gap-5 text-center">
          <h1 className="text-3xl">
            You are logged in successfully
          </h1>
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
