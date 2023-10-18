//import Link from "next/link";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      className={
        "sticky top-0 flex items-center justify-around h-24 bg-purple-800 text-blue-300"
      }
    >
      <Link href="/">
        <h1 className={"text-4xl"}>Marsvinsbloggen</h1>
      </Link>
      <Navigation />
    </header>
  );
}
