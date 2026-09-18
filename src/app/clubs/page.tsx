import type { Metadata } from "next";
import { ClubDirectory } from "@/components/ClubDirectory";
import { ClubNav } from "@/components/ClubNav";

export const metadata: Metadata = {
  title: "clubs",
  description:
    "The four clubs of Arcada: ancestry club, spiritual club, political club, and education club.",
};

export default function ClubsIndexPage() {
  return (
    <>
      <ClubNav />
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <p className="font-mono text-xs tracking-wide">the house</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">The four clubs</h1>
        <p className="mt-4 max-w-xl text-lg">
          Those are the names. Enter the one you mean to sit with.
        </p>
        <div className="mt-10">
          <ClubDirectory />
        </div>
      </div>
    </>
  );
}
