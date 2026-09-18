import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { PaperList } from "@/components/PaperList";
import { papers } from "@/lib/documents";

export const metadata: Metadata = {
  title: "documents",
  description:
    "Papers of Arcada and of the ancestry club, spiritual club, political club, and education club.",
};

export default function DocumentsPage() {
  return (
    <PageFrame
      kicker="the house"
      title="documents"
      intro="Standing orders, membership, and the four club papers. Jump to a paper, or print the page. Ink on paper is the point."
    >
      <div className="mt-8">
        <PaperList papers={papers} />
      </div>
    </PageFrame>
  );
}
