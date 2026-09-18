import Link from "next/link";
import { clubs, type ClubSlug } from "@/lib/clubs";

export function ClubNav({ current }: { current?: ClubSlug }) {
  return (
    <nav aria-label="Clubs" className="border-b border-ink bg-paper">
      <ul className="mx-auto flex max-w-5xl flex-wrap gap-1 px-4 py-1 font-mono text-sm tracking-wide sm:px-6">
        <li>
          <Link
            href="/clubs"
            className={
              !current
                ? "inline-flex min-h-11 items-center px-2 underline decoration-ink"
                : "inline-flex min-h-11 items-center px-2 no-underline hover:underline"
            }
            aria-current={!current ? "page" : undefined}
          >
            all clubs
          </Link>
        </li>
        {clubs.map((club) => {
          const active = club.slug === current;
          return (
            <li key={club.slug}>
              <Link
                href={`/clubs/${club.slug}`}
                className={
                  active
                    ? "inline-flex min-h-11 items-center px-2 underline decoration-ink"
                    : "inline-flex min-h-11 items-center px-2 no-underline hover:underline"
                }
                aria-current={active ? "page" : undefined}
              >
                {club.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
