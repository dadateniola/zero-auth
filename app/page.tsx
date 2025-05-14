import React from "react";
import Link from "next/link";

// Images
import { Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// Imports
import { Button } from "@/components/ui/button";
import Divider from "@/components/divider/divider";

const Home = () => {
  return (
    <main className="w-full h-screen custom-flex-center">
      <div className="w-[95vw] max-w-[350px] custom-flex-col gap-5">
        <div className="custom-flex-col gap-3">
          <Button
            size={"lg"}
            variant={"outline"}
            className="gap-4 cursor-not-allowed"
          >
            <FcGoogle />
            Sign up with Google
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="gap-4 cursor-not-allowed"
          >
            <FaGithub />
            Sign up with Github
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Divider direction="horizontal" className="flex-1" />
          <p>OR</p>
          <Divider direction="horizontal" className="flex-1" />
        </div>
        <div className="custom-flex-col gap-3">
          <Button asChild size={"lg"} className="gap-4 cursor-not-allowed">
            <Link href={""}>
              <Mail />
              Sign up with Email
            </Link>
          </Button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href={""} className="text-[#828a9a] font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
