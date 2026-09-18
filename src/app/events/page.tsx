import type { Metadata } from "next";
import { NoticeBoard } from "@/components/NoticeBoard";
import { notices } from "@/lib/events";

export const metadata: Metadata = {
  title: "events",
  description:
    "Events notice board for Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <p className="font-mono text-xs tracking-wide">the house</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">events</h1>
      <p className="mt-4 max-w-xl text-lg">
        The notice board. If it is not here, it is not on.
      </p>
      <div className="mt-10">
        <NoticeBoard notices={notices} heading="" showIndexLink={false} />
      </div>
    </div>
  );
}
