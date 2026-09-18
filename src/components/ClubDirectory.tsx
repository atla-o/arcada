import Link from "next/link";
import { clubs } from "@/lib/clubs";

export function ClubDirectory() {
  return (
    <ul className="grid border-t border-ink sm:grid-cols-2">
      {clubs.map((club, index) => (
        <li
          key={club.slug}
          className="border-b border-ink sm:odd:border-r"
        >
          <Link
            href={`/clubs/${club.slug}`}
            className="group flex h-full no-underline transition-colors hover:bg-ink hover:text-paper"
          >
            <article className="flex w-full flex-col gap-6 p-6 sm:p-8">
              <p className="font-mono text-xs tracking-wide">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                {club.name}
              </h2>
              <p className="max-w-sm text-base leading-relaxed">
                {club.statement}
              </p>
              <p className="mt-auto font-mono text-xs tracking-wide">
                enter
              </p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
