"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/opere", label: "Opere" },
  { href: "/eventi", label: "Eventi" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="nav-links">
      {navItems.map(({ href, label }) => {
        const isActive = isActiveLink(href);

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}