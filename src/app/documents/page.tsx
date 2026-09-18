import type { Metadata } from "next";
import { PaperList } from "@/components/PaperList";
import { papers } from "@/lib/documents";

export const metadata: Metadata = {
  title: "documents",
  description:
    "Papers of Arcada and of the ancestry club, spiritual club, political club, and education club.",
};

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <p className="font-mono text-xs tracking-wide">the house</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">documents</h1>
      <p className="mt-4 max-w-xl text-lg">
        Standing orders, membership, and the four club papers. Print them if
        you like. Ink on paper is the point.
      </p>
      <div className="mt-10">
        <PaperList papers={papers} />
      </div>
    </div>
  );
}
