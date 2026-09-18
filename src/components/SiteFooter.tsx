import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="no-print mt-auto shrink-0">
      <p className="site-wrap py-3 text-center font-display text-sm sm:py-4 sm:text-base">
        <Link href="/documents#purpose" scroll={false}>
          {site.name}
        </Link>
        <span className="mx-2" aria-hidden="true">
          –
        </span>
        <Link href="/membership" scroll={false}>
          {site.footerLine}
        </Link>
      </p>
    </footer>
  );
}
