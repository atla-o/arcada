import { type ClubSlug, clubName } from "./clubs";

export type Notice = {
  id: string;
  date: string;
  club: ClubSlug | "house";
  title: string;
  body: string;
};

/** Public Eventbrite listing for the Arcada social club online intro. */
export const eventbritePublicUrl =
  "https://www.eventbrite.com/e/arcada-social-club-online-intro-tickets-2000906407929";

/** Eventbrite checkout / embed widget for iframes. */
export const eventbriteEmbedUrl =
  "https://www.eventbrite.com/tickets-external?eid=2000906407929&ref=etckt";

export const eventbriteEventId = "2000906407929";

export const notices: Notice[] = [
  {
    id: "arcada-social-club-online-intro",
    date: "2026-10-03",
    club: "house",
    title: "Arcada social club — online intro",
    body: "New social club under one house with four clubs: ancestry, spiritual, political, and education. Come hear what Arcada is, how the clubs work, and how to join. Sat 3 Oct 2026, 3pm Eastern, online.",
  },
  {
    id: "family-papers-night",
    date: "2026-10-03",
    club: "ancestry",
    title: "Family papers night",
    body: "Bring a record. We read it aloud and file a note.",
  },
  {
    id: "quiet-reading-hour",
    date: "2026-10-08",
    club: "spiritual",
    title: "Quiet reading hour",
    body: "One short text. Silence, then a circle of remarks.",
  },
  {
    id: "open-floor-local-measures",
    date: "2026-10-12",
    club: "political",
    title: "Open floor on local measures",
    body: "Written positions on the table. Minutes kept.",
  },
  {
    id: "study-circle-how-we-teach",
    date: "2026-10-15",
    club: "education",
    title: "Study circle: how we teach",
    body: "Bring a lesson you have given. We take it apart.",
  },
  {
    id: "all-club-supper",
    date: "2026-10-24",
    club: "house",
    title: "All-club supper",
    body: "The four clubs eat together. Names on the board by 17 Oct.",
  },
];

export function noticesFor(club: ClubSlug | "house"): Notice[] {
  return notices.filter(
    (notice) => notice.club === club || notice.club === "house",
  );
}

export function noticeClubLabel(club: Notice["club"]): string {
  return club === "house" ? "the house" : clubName(club);
}
