import { type ClubSlug } from "./clubs";

export type Paper = {
  slug: string;
  title: string;
  paragraphs: readonly string[];
};

export const foundingDocuments: Paper[] = [
  {
    slug: "purpose",
    title: "Purpose",
    paragraphs: [
      "utopiasocial is a utopia social club. Clubs meet in this house: ancestry club, intellectual club, leisure club, political club, and spiritual club.",
      "Those are the names. We do not give them other names.",
      "The house holds papers, a notice board, and a membership roll. Work is public.",
    ],
  },
  {
    slug: "membership",
    title: "Membership",
    paragraphs: [
      "Membership is show-up, help, keep the peace.",
      "Send a note of interest. Name the club you mean to sit with, or the house if you are not yet sure.",
      "The house writes back with the next sitting.",
    ],
  },
  {
    slug: "land",
    title: "Land",
    paragraphs: [
      "The house is the meeting place.",
      "Land, if we hold it later, is for gatherings and study. It is infrastructure for the clubs.",
    ],
  },
  {
    slug: "events",
    title: "Events",
    paragraphs: [
      "If it is not on the notice board, it is not on.",
      "Anyone may attend a public sitting.",
    ],
  },
  {
    slug: "legal",
    title: "Legal",
    paragraphs: [
      "These pages are the public record: purpose, membership, land, events, and this notice.",
      "Names and emails given on the membership form are kept for the roll and for notice of sittings. Do not submit another person’s name or email.",
    ],
  },
];

export const clubPapers: Record<ClubSlug, Paper[]> = {
  ancestry: [
    {
      slug: "ancestry-club-paper",
      title: "ancestry club paper",
      paragraphs: [
        "We work from records and from speech. A story without a source stays a story.",
        "Family papers brought to a sitting are read, noted, and returned.",
      ],
    },
  ],
  spiritual: [
    {
      slug: "spiritual-club-paper",
      title: "spiritual club paper",
      paragraphs: [
        "This is not a congregation. There is no pulpit and no creed of the house.",
        "Each sitting begins in silence. Then a short text. Then speech in turn.",
      ],
    },
  ],
  political: [
    {
      slug: "political-club-paper",
      title: "political club paper",
      paragraphs: [
        "Argument is in the open. Bring a position on paper.",
        "Minutes are kept and posted. The club is not a party and does not endorse a ticket.",
      ],
    },
  ],
  intellectual: [
    {
      slug: "intellectual-club-paper",
      title: "intellectual club paper",
      paragraphs: [
        "One text, one sitting. We read it and speak in turn.",
        "Notes are left for the next group. That is the archive.",
      ],
    },
  ],
  leisure: [
    {
      slug: "leisure-club-paper",
      title: "leisure club paper",
      paragraphs: [
        "Leisure holds creative work and the recreation studios.",
        "A creative sitting starts with a work, then speech in turn. Copies brought to the house are noted and returned.",
        "The recreation studios are for play, walks, and games. The house keeps the time and the place.",
      ],
    },
  ],
};

export function papersFor(club: ClubSlug): Paper[] {
  return clubPapers[club];
}
