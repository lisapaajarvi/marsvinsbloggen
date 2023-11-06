"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <h2>Logga in här:</h2>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Logga in med google
      </button>
    </div>
  );
}
