import { type ClubSlug, clubName } from "./clubs";
import { onlineIntro } from "./eventbrite";

export type Notice = {
  id: string;
  date: string;
  club: ClubSlug | "house";
  title: string;
  body: string;
  href?: string;
};

export const notices: Notice[] = [
  {
    id: onlineIntro.id,
    date: onlineIntro.date,
    club: "house",
    title: onlineIntro.title,
    body: `${onlineIntro.when}. ${onlineIntro.body}`,
    href: onlineIntro.publicUrl,
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
