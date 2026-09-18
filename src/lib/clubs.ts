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
  statement: string;
  work: [string, string, string];
  sitting: string;
};

export const clubs: Club[] = [
  {
    slug: "ancestry",
    name: "ancestry club",
    statement:
      "Family lines, oral history, and the records that keep them.",
    work: [
      "Read family papers and oral accounts.",
      "File what we can verify.",
      "Sit with relatives when they will talk.",
    ],
    sitting: "First Saturday, 14:00. Record table in the north room.",
  },
  {
    slug: "spiritual",
    name: "spiritual club",
    statement:
      "Practice, reading, and conversation about belief. No pulpit.",
    work: [
      "Sit in silence at the start of each meeting.",
      "Read a short text.",
      "Speak in turn, without a pulpit.",
    ],
    sitting: "Wednesday, 19:00. Silence first, then talk.",
  },
  {
    slug: "political",
    name: "political club",
    statement:
      "Civic argument in the open. Positions on paper, not slogans.",
    work: [
      "Argue from a written position.",
      "Keep minutes.",
      "Post those minutes on the board.",
    ],
    sitting: "Second Thursday, 18:30. Minutes posted after.",
  },
  {
    slug: "education",
    name: "education club",
    statement: "Study groups, lectures, and the work of teaching each other.",
    work: [
      "Pick one text per sitting.",
      "Teach each other, not from a lectern.",
      "Leave notes for the next group.",
    ],
    sitting: "Tuesday, 17:00. One text per sitting.",
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

export function clubPath(slug: ClubSlug): string {
  return `/clubs/${slug}`;
}
