"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a
        className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`}
        href="/"
      >
        🏴‍☠️ Chat
      </a>
      <a
        className={`mr-4 ${
          pathname === "/retrieval" ? "text-white border-b" : ""
        }`}
        href="/retrieval"
      >
        🐶 Retrieval
      </a>
    </nav>
  );
}
