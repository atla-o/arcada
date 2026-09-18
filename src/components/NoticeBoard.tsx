import Link from "next/link";
import { clubHref } from "@/lib/clubs";
import { formatClubDate } from "@/lib/dates";
import { noticeClubLabel, type Notice } from "@/lib/events";

export function NoticeBoard({
  notices,
  heading = "Notice board",
  showIndexLink = true,
}: {
  notices: Notice[];
  heading?: string;
  showIndexLink?: boolean;
}) {
  return (
    <section aria-labelledby="notice-board-heading">
      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-ink pb-3">
        {heading ? (
          <h2
            id="notice-board-heading"
            className="font-serif text-2xl tracking-tight"
          >
            {heading}
          </h2>
        ) : (
          <span id="notice-board-heading" className="sr-only">
            Notice board
          </span>
        )}
        {showIndexLink ? (
          <Link
            href="/events"
            className="inline-flex min-h-11 items-center font-mono text-sm tracking-wide"
          >
            all notices
          </Link>
        ) : null}
      </div>
      {notices.length === 0 ? (
        <p>The board is clear.</p>
      ) : (
        <ol className="divide-y divide-ink border-y border-ink">
          {notices.map((notice) => (
            <li key={notice.id} className="py-4">
              <p className="font-mono text-xs tracking-wide">
                <time dateTime={notice.date}>{formatClubDate(notice.date)}</time>
                <span aria-hidden="true"> · </span>
                <Link href={clubHref(notice.club)}>
                  {noticeClubLabel(notice.club)}
                </Link>
              </p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">
                {notice.title}
              </h3>
              <p className="mt-2 max-w-xl text-base">{notice.body}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
