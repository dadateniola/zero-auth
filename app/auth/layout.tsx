import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

// Imports
import { getCurrentSession } from "@/lib/session";
import ParticlesBG from "@/components/particles-bg/particles-bg";

const AuthLayout: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const { session } = await getCurrentSession();

  if (session) redirect("/success");

  return (
    <main className="relative w-full max-lg:min-h-screen h-full lg:h-screen p-6 grid grid-cols-3 lg:grid-cols-5">
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
};

export default AuthLayout;
