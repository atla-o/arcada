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
            <article className="flex w-full flex-col gap-3 p-5 sm:p-6">
              <p className="font-mono text-xs tracking-wide">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-3xl leading-tight tracking-tight">
                {club.name}
              </h2>
              <p className="max-w-sm text-base leading-relaxed">
                {club.statement}
              </p>
              <p className="max-w-sm text-sm leading-relaxed">{club.sitting}</p>
              <p className="mt-auto pt-2 font-mono text-sm tracking-wide underline decoration-ink underline-offset-4">
                open the club
              </p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
