import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClubNav } from "@/components/ClubNav";
import { NoticeBoard } from "@/components/NoticeBoard";
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
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <p className="font-mono text-xs tracking-wide">club</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
          {club.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{club.statement}</p>
        <p className="mt-4 max-w-2xl text-base">{club.sitting}</p>

        <ul className="mt-8 max-w-xl list-disc space-y-2 pl-5 text-base">
          {club.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-xs tracking-wide">
          <Link href={`/clubs/${club.slug}/documents`}>documents</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/membership">membership</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/events">events</Link>
        </p>

        <div className="mt-16">
          <NoticeBoard
            notices={noticesFor(club.slug)}
            heading={`${club.name} notices`}
          />
        </div>
      </div>
    </>
  );
}
