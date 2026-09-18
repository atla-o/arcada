import type { Metadata } from "next";
import {
  eventbriteEmbedUrl,
  eventbritePublicUrl,
  notices,
} from "@/lib/events";
import { NoticeBoard } from "@/components/NoticeBoard";

export const metadata: Metadata = {
  title: "events",
  description:
    "Notice board for Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-8">
      <h1 className="text-center font-display text-3xl tracking-tight sm:text-4xl">
        events
      </h1>
      <p className="mt-2 text-center text-sm">
        The notice board. If it is not here, it is not on.
      </p>

      <section
        aria-label="Arcada social club online intro"
        className="mt-8 border border-ink bg-paper p-4"
      >
        <p className="font-display text-xl tracking-tight">
          Arcada social club — online intro
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          Saturday 3 October 2026, 3:00pm Eastern, online. A new social club
          with four clubs under one house: ancestry, spiritual, political, and
          education. Interested in any of them? Come listen and join if it
          fits.
        </p>
        <p className="mt-4">
          <a
            href={eventbritePublicUrl}
            className="inline-block border border-ink bg-ink px-4 py-2 text-sm text-paper no-underline hover:bg-paper hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Eventbrite listing
          </a>
        </p>
        <div className="mt-4 overflow-hidden border border-ink">
          <iframe
            title="Eventbrite tickets — Arcada social club online intro"
            src={eventbriteEmbedUrl}
            className="h-[26rem] w-full bg-paper"
            loading="lazy"
          />
        </div>
      </section>

      <div className="mt-10">
        <NoticeBoard notices={notices} />
      </div>
    </div>
  );
}
