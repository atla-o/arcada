import { type ClubSlug, clubName } from "./clubs";

export type Paper = {
  slug: string;
  title: string;
  club: ClubSlug | "house";
  dated: string;
  paragraphs: string[];
};

export const papers: Paper[] = [
  {
    slug: "standing-orders",
    title: "Standing orders",
    club: "house",
    dated: "2026-09-01",
    paragraphs: [
      "Arcada is a social club. Four clubs meet in this house: ancestry club, spiritual club, political club, and education club.",
      "Those are the names. We do not give them other names.",
      "Meetings are posted on the events board. Minutes and papers stay on this site.",
      "Membership starts with a note of interest. The house writes back.",
    ],
  },
  {
    slug: "membership-note",
    title: "Membership",
    club: "house",
    dated: "2026-09-01",
    paragraphs: [
      "Send a note of interest. Name the club you mean to sit with, or the house if you are not yet sure.",
      "We will write back with the next sitting and what to bring.",
      "Showing up is the rest of it.",
    ],
  },
  {
    slug: "ancestry-club-paper",
    title: "ancestry club paper",
    club: "ancestry",
    dated: "2026-09-04",
    paragraphs: [
      "We work from records and from speech. A story without a source stays a story.",
      "Family papers brought to a sitting are read, noted, and returned.",
      "No one is owed a lineage they will not document.",
    ],
  },
  {
    slug: "spiritual-club-paper",
    title: "spiritual club paper",
    club: "spiritual",
    dated: "2026-09-04",
    paragraphs: [
      "This is not a congregation. There is no pulpit and no creed of the house.",
      "Each sitting begins in silence. Then a short text. Then speech in turn.",
      "Belief is welcome. Performance is not.",
    ],
  },
  {
    slug: "political-club-paper",
    title: "political club paper",
    club: "political",
    dated: "2026-09-04",
    paragraphs: [
      "Argument is in the open. Bring a position on paper.",
      "Minutes are kept and posted. If you said it, it can be read later.",
      "The club is not a party and does not endorse a ticket.",
    ],
  },
  {
    slug: "education-club-paper",
    title: "education club paper",
    club: "education",
    dated: "2026-09-04",
    paragraphs: [
      "We teach each other. One text, one sitting.",
      "Notes are left for the next group. That is the archive.",
      "A lecture is allowed. A lectern is not required.",
    ],
  },
];

export function papersFor(club: ClubSlug | "house"): Paper[] {
  if (club === "house") {
    return papers.filter((paper) => paper.club === "house");
  }
  return papers.filter((paper) => paper.club === club);
}

export function paperClubLabel(club: Paper["club"]): string {
  return club === "house" ? "the house" : clubName(club);
}

export function getPaper(slug: string): Paper | undefined {
  return papers.find((paper) => paper.slug === slug);
}
