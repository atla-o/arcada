import Link from "next/link";
import { SiteMark } from "@/components/SiteMark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="no-print shrink-0">
      <div className="flex justify-center py-3">
        <Link
          href="/"
          className="text-ink no-underline"
          aria-label={site.name}
        >
          <SiteMark className="h-8 w-14 text-ink sm:h-9 sm:w-16" />
        </Link>
      </div>
    </header>
  );
}
