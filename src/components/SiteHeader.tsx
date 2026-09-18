import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="no-underline">
            <span className="font-serif text-3xl leading-none tracking-tight">
              Arcada
            </span>
          </Link>
          <p className="mt-1 font-mono text-xs tracking-wide">a social club</p>
        </div>
        <nav aria-label="House">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
