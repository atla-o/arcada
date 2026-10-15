import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferPage } from "@/components/OfferPage";
import { CLUB_SLUGS, type ClubSlug, getClub, isClubSlug } from "@/lib/clubs";

const OFFER_IMAGE: Record<ClubSlug, string> = {
  ancestry: "https://devoutshaman.com/shared/offerings/ancestry.jpg",
  intellectual: "https://devoutshaman.com/shared/offerings/education.jpg",
  leisure: "https://devoutshaman.com/shared/offerings/media.jpg",
  political: "https://devoutshaman.com/shared/offerings/political.jpg",
  spiritual: "https://devoutshaman.com/shared/offerings/spiritual.jpg",
};

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

  return <OfferPage club={club} image={OFFER_IMAGE[club.slug]} />;
}
