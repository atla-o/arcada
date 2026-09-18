export const CLUB_SLUGS = [
  "ancestry",
  "spiritual",
  "political",
  "education",
] as const;

export type ClubSlug = (typeof CLUB_SLUGS)[number];

export type Club = {
  slug: ClubSlug;
  name: `${ClubSlug} club`;
  href: `/clubs/${ClubSlug}`;
  intro: [string, string];
};

export const clubs: Club[] = [
  {
    slug: "ancestry",
    name: "ancestry club",
    href: "/clubs/ancestry",
    intro: [
      "Family lines, oral history, and the records that keep them.",
      "Come to a sitting, or write a note of interest to the northern social club.",
    ],
  },
  {
    slug: "spiritual",
    name: "spiritual club",
    href: "/clubs/spiritual",
    intro: [
      "Practice, reading, and conversation about belief. No pulpit.",
      "Come to a sitting, or write a note of interest to the northern social club.",
    ],
  },
  {
    slug: "political",
    name: "political club",
    href: "/clubs/political",
    intro: [
      "Civic argument in the open. Positions on paper, not slogans.",
      "Come to a sitting, or write a note of interest to the northern social club.",
    ],
  },
  {
    slug: "education",
    name: "education club",
    href: "/clubs/education",
    intro: [
      "Study groups, lectures, and the work of teaching each other.",
      "Come to a sitting, or write a note of interest to the northern social club.",
    ],
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
