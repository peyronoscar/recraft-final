"use client";

import Link from "next/link";
import { Navbar } from "./navbar";
import { Logo } from "@/svgs/layout/logo";
import { MobileNavigation } from "./mobile-navigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 flex justify-between items-center container">
      <MobileNavigation />
      <Navbar />
      <Link href="#home">
        <Logo className="w-10 md:w-14" />
      </Link>
    </header>
  );
}
