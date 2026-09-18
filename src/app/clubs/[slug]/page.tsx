import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClubNav } from "@/components/ClubNav";
import { InkActions, InkLink } from "@/components/InkLink";
import { NoticeBoard } from "@/components/NoticeBoard";
import { PageFrame } from "@/components/PageFrame";
import { CLUB_SLUGS, getClub, isClubSlug } from "@/lib/clubs";
import { noticesFor } from "@/lib/events";

type ClubPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CLUB_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) {
    return { title: "club" };
  }
  return {
    title: club.name,
    description: club.statement,
  };
}

export default async function ClubPage({ params }: ClubPageProps) {
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
      <PageFrame kicker="club" title={club.name} intro={club.statement}>
        <div className="mt-6 max-w-xl border border-ink p-4">
          <p className="font-mono text-xs tracking-wide">next sitting</p>
          <p className="mt-2 text-base">{club.sitting}</p>
        </div>

        <h2 className="mt-10 font-serif text-2xl tracking-tight">The work</h2>
        <ul className="mt-3 max-w-xl list-disc space-y-2 pl-5 text-base">
          {club.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <InkActions>
          <InkLink href={`/clubs/${club.slug}/documents`}>documents</InkLink>
          <InkLink href="/membership" variant="solid">
            write a note
          </InkLink>
          <InkLink href="/events">events</InkLink>
        </InkActions>

        <div className="mt-12">
          <NoticeBoard
            notices={noticesFor(club.slug)}
            heading={`${club.name} notices`}
          />
        </div>
      </PageFrame>
    </>
  );
}
