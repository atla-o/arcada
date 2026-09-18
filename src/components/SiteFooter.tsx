import Link from "next/link";
import { clubs } from "@/lib/clubs";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="max-w-sm">
          <p className="text-base">
            Arcada is a public social club. Papers are on this site. Work happens
            on pull requests.
          </p>
          <p className="mt-3">
            <Link href="/membership">Write a note of interest</Link>
          </p>
        </div>
        <ul className="font-mono text-sm tracking-wide">
          {clubs.map((club) => (
            <li key={club.slug}>
              <Link
                href={`/clubs/${club.slug}`}
                className="inline-flex min-h-11 items-center"
              >
                {club.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
