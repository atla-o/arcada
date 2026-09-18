import Link from "next/link";
import { clubHref } from "@/lib/clubs";
import { formatClubDate } from "@/lib/dates";
import { noticeClubLabel, type Notice } from "@/lib/events";

export function NoticeBoard({ notices }: { notices: Notice[] }) {
  if (notices.length === 0) {
    return <p>The board is clear.</p>;
  }

  return (
    <ol className="divide-y divide-ink border-y border-ink text-left">
      {notices.map((notice) => (
        <li key={notice.id} className="py-4">
          <p className="font-sans text-xs tracking-wide">
            <time dateTime={notice.date}>{formatClubDate(notice.date)}</time>
            <span aria-hidden="true"> · </span>
            <Link href={clubHref(notice.club)}>{noticeClubLabel(notice.club)}</Link>
          </p>
          <h2 className="mt-1 font-display text-xl tracking-tight">
            {notice.title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed">{notice.body}</p>
          {notice.href ? (
            <p className="mt-2">
              <a href={notice.href}>Get a ticket</a>
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
