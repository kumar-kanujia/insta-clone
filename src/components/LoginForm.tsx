"use client";

import { signIn } from "next-auth/react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { calSans } from "@/app/font";

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${calSans.className} mb-3 text-2xl dark:text-black`}>
          Please log in to continue.
        </h1>

        <LoginButton clientName="Google" clientType="google" />
        <LoginButton clientName="Github" clientType="github" />
      </div>
    </div>
  );
}

function LoginButton({
  clientType,
  clientName,
}: {
  clientType: "google" | "github";
  clientName: "Google" | "Github";
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full"
      variant={"secondary"}
      aria-disabled={pending}
      onClick={() => signIn(clientType, { callbackUrl: "/dashboard" })}
    >
      Log in with {clientName}
    </Button>
  );
}
