"use client";

import React from "react";
import { useFormStatus } from "react-dom";

// Images
import { Loader, LogOut } from "lucide-react";

// Imports
import { Button } from "@/components/ui/button";

const LogoutForm: React.FC = () => {
  // Hooks
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={"lg"}
      variant={"destructive"}
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader className="animate-spin" />
          Logging out...
        </>
      ) : (
        <>
          <LogOut />
          Logout
        </>
      )}
    </Button>
  );
};

export default LogoutForm;
