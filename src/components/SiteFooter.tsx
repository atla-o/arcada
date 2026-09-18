import Link from "next/link";
import { clubs } from "@/lib/clubs";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="max-w-sm text-base">
          Arcada is a public social club. Papers are on this site. Work happens
          on pull requests.
        </p>
        <ul className="font-mono text-xs tracking-wide">
          {clubs.map((club) => (
            <li key={club.slug}>
              <Link href={`/clubs/${club.slug}`}>{club.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
