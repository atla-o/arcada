import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { CLUB_SLUGS, getClub, isClubSlug } from "@/lib/clubs";

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
    description: club.intro[0],
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
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center">
      <PageIntro title={club.name}>
        <p>{club.intro[0]}</p>
        <p>
          Read the{" "}
          <Link href={`/clubs/${club.slug}/documents`}>club papers</Link>, see{" "}
          <Link href="/events">events</Link>, or ask to join the{" "}
          <Link href="/membership">northern social club</Link>.
        </p>
      </PageIntro>
    </div>
  );
}
