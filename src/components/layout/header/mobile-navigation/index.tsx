"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/svgs/layout/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#collection", label: "Collection" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden flex flex-col">
        <SheetHeader className="hidden">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Explore the website</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col text-center items-center justify-center gap-6 text-xl flex-1">
          <Link href="#home" onClick={() => setOpen(false)}>
            <Logo className="w-10 md:w-14 self-center" />
          </Link>
          {links.map(({ href, label }, index) => {
            return (
              <Link
                key={index}
                href={href}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
