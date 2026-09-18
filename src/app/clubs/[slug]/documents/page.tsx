import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocumentAccordion } from "@/components/DocumentAccordion";
import { PinViewport } from "@/components/PinViewport";
import { CLUB_SLUGS, getClub, isClubSlug } from "@/lib/clubs";
import { papersFor } from "@/lib/documents";

type ClubDocumentsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CLUB_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ClubDocumentsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) {
    return { title: "documents" };
  }
  return {
    title: `${club.name} documents`,
    description: `Papers of the ${club.name}.`,
  };
}

export default async function ClubDocumentsPage({
  params,
}: ClubDocumentsPageProps) {
  const { slug } = await params;
  if (!isClubSlug(slug)) {
    notFound();
  }
  const club = getClub(slug);
  if (!club) {
    notFound();
  }

  return (
    <div
      data-fit
      className="flex h-full min-h-0 flex-col items-center overflow-hidden px-4 py-2 text-center"
    >
      <PinViewport />
      <div className="my-auto flex max-h-full min-h-0 w-full max-w-xl flex-col">
        <p className="shrink-0 font-sans text-xs tracking-wide">
          <Link href={`/clubs/${club.slug}`}>{club.name}</Link>
        </p>
        <h1 className="mt-1 shrink-0 font-display text-2xl tracking-tight sm:text-3xl">
          documents
        </h1>
        <p className="mt-1 mb-3 shrink-0 text-sm">
          Open a paper. House papers are on the{" "}
          <Link href="/documents">documents</Link> board.
        </p>
        <DocumentAccordion papers={papersFor(club.slug)} />
      </div>
    </div>
  );
}
