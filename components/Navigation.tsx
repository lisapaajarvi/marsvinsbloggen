"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="list-none flex gap-2">
        <li>
          <Link
            className={`link ${pathname === "/login" ? "active" : ""}`}
            href="/login"
          >
            Logga in
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/dagbok" ? "active" : ""}`}
            href="/dagbok"
          >
            Dagbok
          </Link>
        </li>
      </ul>
    </nav>
  );
}
