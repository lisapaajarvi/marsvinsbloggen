"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl">Logga in här:</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Logga in med Google
      </button>
    </div>
  );
}
