import Link from "next/link";
import { PinViewport } from "@/components/PinViewport";
import { SiteMark } from "@/components/SiteMark";
import { clubs } from "@/lib/clubs";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div
      data-home
      className="relative flex h-full min-h-0 items-center justify-center px-4"
    >
      <PinViewport />
      <a
        href="https://devoutshaman.com"
        className="absolute top-1 left-1/2 -translate-x-1/2 font-display text-2xl leading-none text-ink no-underline hover:opacity-100 sm:text-3xl"
        aria-label="devoutshaman.com"
      >
        o
      </a>
      <section className="w-full max-w-3xl">
        <h1 className="sr-only">{site.name}</h1>
        <div className="mb-2 flex justify-center">
          <Link href="/" className="text-ink no-underline" aria-label={site.name}>
            <SiteMark className="h-8 w-14 text-ink sm:h-9 sm:w-16" />
          </Link>
        </div>
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
        <p className="mt-5 text-center text-sm">
          <Link href="/events#online-intro">online intro · Sat 3 Oct</Link>
        </p>
      </section>
    </div>
  );
}
