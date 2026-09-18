"use client";

import { useEffect, useState } from "react";
import { PrintButton } from "@/components/PrintButton";
import { formatClubDate } from "@/lib/dates";
import type { Paper } from "@/lib/documents";
import { noticeClubLabel, type Notice } from "@/lib/events";

export function DocumentAccordion({
  papers,
  notices = [],
}: {
  papers: Paper[];
  notices?: Notice[];
}) {
  const [open, setOpen] = useState<string | "all" | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (papers.some((paper) => paper.slug === hash)) {
        setOpen(hash);
      }
    };

    applyHash();
    window.scrollTo(0, 0);
    window.addEventListener("hashchange", applyHash);
    const beforePrint = () => setOpen("all");
    const afterPrint = () => applyHash();
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, [papers]);

  function toggle(slug: string) {
    setOpen((current) => (current === slug ? null : slug));
    window.history.replaceState(null, "", `#${slug}`);
  }

  return (
    <div className="flex min-h-0 w-full flex-col">
      <p className="no-print mb-2 shrink-0 text-center">
        <PrintButton />
      </p>
      <div className="flex min-h-0 flex-col overflow-hidden border border-ink">
        {papers.map((paper) => {
          const isOpen = open === "all" || open === paper.slug;
          return (
            <section
              key={paper.slug}
              data-slug={paper.slug}
              className="flex min-h-0 flex-col border-b border-ink last:border-b-0"
            >
              <h2 className="shrink-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 bg-paper px-4 py-2 text-left font-display text-base tracking-tight text-ink no-underline sm:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => toggle(paper.slug)}
                >
                  <span>{paper.title}</span>
                  <span aria-hidden="true" className="text-sm">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
              </h2>
              {isOpen ? (
                <div className="document-panel max-h-[36vh] space-y-2 overflow-y-auto border-t border-ink px-4 py-3 text-left text-sm leading-relaxed">
                  {paper.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {paper.slug === "events" ? (
                    notices.length === 0 ? (
                      <p>The board is clear.</p>
                    ) : (
                      notices.map((notice) => (
                        <article key={notice.id} className="space-y-1">
                          <p className="font-display text-base tracking-tight">
                            {notice.title}
                          </p>
                          <p>
                            {formatClubDate(notice.date)}
                            <span className="mx-2" aria-hidden="true">
                              ·
                            </span>
                            {noticeClubLabel(notice.club)}
                          </p>
                          <p>{notice.body}</p>
                        </article>
                      ))
                    )
                  ) : null}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
