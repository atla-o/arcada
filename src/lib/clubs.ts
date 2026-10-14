export const CLUB_SLUGS = [
  "ancestry",
  "intellectual",
  "leisure",
  "political",
  "spiritual",
] as const;

export type ClubSlug = (typeof CLUB_SLUGS)[number];

export type Club = {
  slug: ClubSlug;
  name: `${ClubSlug} club`;
  href: `/clubs/${ClubSlug}`;
  intro: [string, string];
};

const sitting =
  "Come to a sitting, or write a note of interest to the utopia social club.";

export const clubs: Club[] = [
  {
    slug: "ancestry",
    name: "ancestry club",
    href: "/clubs/ancestry",
    intro: [
      "Family lines, oral history, and the records that keep them.",
      sitting,
    ],
  },
  {
    slug: "intellectual",
    name: "intellectual club",
    href: "/clubs/intellectual",
    intro: ["Reading, lectures, and thinking in company.", sitting],
  },
  {
    slug: "leisure",
    name: "leisure club",
    href: "/clubs/leisure",
    intro: ["Creative work and the recreation studios.", sitting],
  },
  {
    slug: "political",
    name: "political club",
    href: "/clubs/political",
    intro: ["Civic argument in the open. Positions on paper, not slogans.", sitting],
  },
  {
    slug: "spiritual",
    name: "spiritual club",
    href: "/clubs/spiritual",
    intro: ["Practice, reading, and conversation about belief. No pulpit.", sitting],
  },
];

export function isClubSlug(value: string): value is ClubSlug {
  return (CLUB_SLUGS as readonly string[]).includes(value);
}

export function getClub(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug);
}

export function clubName(slug: ClubSlug): `${ClubSlug} club` {
  return `${slug} club`;
}

export function clubPath(slug: ClubSlug): `/clubs/${ClubSlug}` {
  return `/clubs/${slug}`;
}

export function clubHref(club: ClubSlug | "house"): string {
  return club === "house" ? "/" : clubPath(club);
}
