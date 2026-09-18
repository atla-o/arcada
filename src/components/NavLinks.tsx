"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/clubs", label: "clubs" },
  { href: "/events", label: "events" },
  { href: "/documents", label: "documents" },
  { href: "/membership", label: "membership" },
] as const;

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs tracking-wide">
      {links.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                active
                  ? "underline decoration-ink"
                  : "no-underline hover:underline"
              }
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
