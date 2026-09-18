import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClubNav } from "@/components/ClubNav";
import { PaperList } from "@/components/PaperList";
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
    <>
      <ClubNav current={club.slug} />
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <p className="font-mono text-xs tracking-wide">
          <Link href={`/clubs/${club.slug}`}>{club.name}</Link>
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">documents</h1>
        <p className="mt-4 max-w-xl text-lg">
          Papers of the {club.name}. House papers are on the{" "}
          <Link href="/documents">documents</Link> board.
        </p>
        <div className="mt-10">
          <PaperList papers={papersFor(club.slug)} />
        </div>
      </div>
    </>
  );
}
