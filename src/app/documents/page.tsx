import type { Metadata } from "next";
import { DocumentAccordion } from "@/components/DocumentAccordion";
import { PinViewport } from "@/components/PinViewport";
import { foundingDocuments } from "@/lib/documents";
import { notices } from "@/lib/events";

export const metadata: Metadata = {
  title: "documents",
  description:
    "Purpose, membership, land, events, and legal — the public record of Arcada.",
};

export default function DocumentsPage() {
  return (
    <div
      data-fit
      className="flex h-full min-h-0 flex-col items-center overflow-hidden px-4 py-2 text-center"
    >
      <PinViewport />
      <div className="my-auto flex max-h-full min-h-0 w-full max-w-xl flex-col">
        <h1 className="shrink-0 font-display text-2xl tracking-tight sm:text-3xl">
          Documents
        </h1>
        <p className="mt-1 mb-3 shrink-0 text-sm">
          Open a text. Print shows them all.
        </p>
        <DocumentAccordion papers={foundingDocuments} notices={notices} />
      </div>
    </div>
  );
}
