import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function StartPage() {
  return (
    <div className="flex flex-col gap-4">
      <p>Välkommen till Marsvinsbloggen!</p>
      <Navigation />
    </div>
  );
}
