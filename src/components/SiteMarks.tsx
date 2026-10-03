import Link from "next/link";
import { SiteMark } from "@/components/SiteMark";
import { site } from "@/lib/site";

export function SiteMarks() {
  return (
    <div className="flex items-end justify-center gap-3">
      <a
        href="https://devoutshaman.com"
        className="text-ink no-underline hover:opacity-100"
        aria-label="devoutshaman.com"
      >
        <span className="block font-display text-2xl leading-none sm:text-3xl">
          o
        </span>
      </a>
      <Link
        href="/"
        className="text-ink no-underline"
        aria-label={site.name}
      >
        <SiteMark className="h-8 w-14 text-ink sm:h-9 sm:w-16" />
      </Link>
    </div>
  );
}
