import Link from "next/link";
import { PinViewport } from "@/components/PinViewport";
import { clubs } from "@/lib/clubs";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div
      data-home
      className="flex h-full min-h-0 items-center justify-center px-4"
    >
      <PinViewport />
      <section className="w-full max-w-3xl">
        <h1 className="sr-only">{site.name}</h1>
        <ul className="mx-auto grid w-full max-w-[16rem] grid-cols-1 gap-2 sm:max-w-xs">
          {clubs.map((club) => (
            <li key={club.slug}>
              <Link href={club.href} className="block no-underline hover:opacity-100">
                <article className="rounded-none bg-paper py-0 shadow-none ring-1 ring-ink transition-colors hover:bg-ink hover:text-paper">
                  <div className="flex items-center justify-center px-4 py-3 text-center sm:py-3.5">
                    <h2 className="font-display text-lg font-normal tracking-tight sm:text-xl">
                      {club.name}
                    </h2>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
