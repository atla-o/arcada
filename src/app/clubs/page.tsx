import type { Metadata } from "next";
import { ClubDirectory } from "@/components/ClubDirectory";
import { ClubNav } from "@/components/ClubNav";
import { PageFrame } from "@/components/PageFrame";

export const metadata: Metadata = {
  title: "clubs",
  description:
    "The four clubs of Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function ClubsIndexPage() {
  return (
    <>
      <ClubNav />
      <PageFrame
        kicker="the house"
        title="The four clubs"
        intro="Those are the names. Open the one you mean to sit with. Sitting times are on each card."
      >
        <div className="mt-8">
          <ClubDirectory />
        </div>
      </PageFrame>
    </>
  );
}
