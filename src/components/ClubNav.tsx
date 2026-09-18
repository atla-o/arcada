import Link from "next/link";
import { clubs, type ClubSlug } from "@/lib/clubs";

export function ClubNav({ current }: { current?: ClubSlug }) {
  return (
    <nav aria-label="Clubs" className="border-b border-ink">
      <ul className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-2 px-6 py-3 font-mono text-xs tracking-wide">
        {clubs.map((club) => {
          const active = club.slug === current;
          return (
            <li key={club.slug}>
              <Link
                href={`/clubs/${club.slug}`}
                className={
                  active
                    ? "underline decoration-ink"
                    : "no-underline hover:underline"
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
