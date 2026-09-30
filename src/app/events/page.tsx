import type { Metadata } from "next";
import { EventbriteListing } from "@/components/EventbriteListing";
import { NoticeBoard } from "@/components/NoticeBoard";
import { onlineIntro } from "@/lib/eventbrite";
import { notices } from "@/lib/events";

export const metadata: Metadata = {
  title: "events",
  description:
    "Notice board for Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-8">
      <h1 className="text-center font-display text-3xl tracking-tight sm:text-4xl">
        events
      </h1>
      <p className="mt-2 mb-6 text-center text-sm">
        The notice board. If it is not here, it is not on.
      </p>
      <EventbriteListing />
      <div className="mt-10">
        <NoticeBoard
          notices={notices.filter((notice) => notice.id !== onlineIntro.id)}
        />
      </div>
    </div>
  );
}
