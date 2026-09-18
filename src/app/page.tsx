import Link from "next/link";
import { ClubDirectory } from "@/components/ClubDirectory";
import { NoticeBoard } from "@/components/NoticeBoard";
import { notices } from "@/lib/events";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <section className="max-w-2xl">
        <p className="font-mono text-xs tracking-wide">the house</p>
        <h1 className="mt-3 font-serif text-5xl leading-none tracking-tight sm:text-7xl">
          Four clubs.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          {site.description} Papers are public. Membership starts with a note
          of interest.
        </p>
        <p className="mt-6 font-mono text-xs tracking-wide">
          <Link href="/membership">write a note</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/events">read the board</Link>
        </p>
      </section>

      <div className="mt-12">
        <ClubDirectory />
      </div>

      <div className="mt-16">
        <NoticeBoard notices={notices.slice(0, 3)} heading="Next on the board" />
      </div>
    </div>
  );
}
