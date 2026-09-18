import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClubNav } from "@/components/ClubNav";
import { InkActions, InkLink } from "@/components/InkLink";
import { PageFrame } from "@/components/PageFrame";
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
      <PageFrame
        kicker={club.name}
        title="documents"
        intro={`Papers of the ${club.name}. House papers are on the house documents board.`}
      >
        <InkActions>
          <InkLink href={`/clubs/${club.slug}`}>back to the club</InkLink>
          <InkLink href="/documents">house documents</InkLink>
        </InkActions>
        <div className="mt-8">
          <PaperList papers={papersFor(club.slug)} />
        </div>
      </PageFrame>
    </>
  );
}
