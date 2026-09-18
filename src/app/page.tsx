import { ClubDirectory } from "@/components/ClubDirectory";
import { InkActions, InkLink } from "@/components/InkLink";
import { NoticeBoard } from "@/components/NoticeBoard";
import { PageFrame } from "@/components/PageFrame";
import { notices } from "@/lib/events";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <PageFrame
      kicker="the house"
      title="Four clubs."
      intro={
        <>
          {site.description} Papers are public. Membership starts with a note of
          interest.
        </>
      }
    >
      <InkActions>
        <InkLink href="/membership" variant="solid">
          write a note
        </InkLink>
        <InkLink href="/events">read the board</InkLink>
      </InkActions>

      <div className="mt-10">
        <ClubDirectory />
      </div>

      <div className="mt-12">
        <NoticeBoard notices={notices.slice(0, 3)} heading="Next on the board" />
      </div>
    </PageFrame>
  );
}
