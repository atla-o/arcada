import type { Metadata } from "next";
import { InkActions, InkLink } from "@/components/InkLink";
import { NoticeBoard } from "@/components/NoticeBoard";
import { PageFrame } from "@/components/PageFrame";
import { notices } from "@/lib/events";

export const metadata: Metadata = {
  title: "events",
  description:
    "Events notice board for Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function EventsPage() {
  return (
    <PageFrame
      kicker="the house"
      title="events"
      intro="The notice board. If it is not here, it is not on. Club names open that club."
    >
      <InkActions>
        <InkLink href="/membership" variant="solid">
          write a note
        </InkLink>
      </InkActions>
      <div className="mt-8">
        <NoticeBoard notices={notices} heading="" showIndexLink={false} />
      </div>
    </PageFrame>
  );
}
