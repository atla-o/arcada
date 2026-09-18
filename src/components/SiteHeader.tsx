import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3">
        <div>
          <Link href="/" className="no-underline">
            <span className="font-serif text-2xl leading-none tracking-tight sm:text-3xl">
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
