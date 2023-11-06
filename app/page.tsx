import Navigation from "@/components/Navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function StartPage() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex flex-col gap-4">
      <p>Välkommen till Marsvinsbloggen!</p>
      {session && (
        <p>Du är inloggad som {session.user && session.user.email}</p>
      )}
      <Navigation />
    </div>
  );
}
