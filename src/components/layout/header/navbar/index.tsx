import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#collection", label: "Collection" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="md:flex gap-10 items-center hidden font-medium text-lg">
      {links.map(({ href, label }, index) => {
        return (
          <Link key={index} href={href}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
