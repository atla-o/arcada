import { formatClubDate } from "@/lib/dates";
import { paperClubLabel, type Paper } from "@/lib/documents";

export function PaperList({
  papers,
  showIndex,
}: {
  papers: Paper[];
  showIndex?: boolean;
}) {
  if (papers.length === 0) {
    return <p>No papers filed.</p>;
  }

  const index = showIndex ?? papers.length > 1;

  return (
    <div className="flex flex-col gap-10">
      {index ? (
        <nav aria-label="Papers in this list" className="no-print">
          <p className="font-mono text-xs tracking-wide">jump to a paper</p>
          <ol className="mt-3 border-y border-ink">
            {papers.map((paper) => (
              <li key={paper.slug} className="border-b border-ink last:border-b-0">
                <a
                  href={`#${paper.slug}`}
                  className="flex min-h-11 items-center justify-between gap-4 py-2"
                >
                  <span>{paper.title}</span>
                  <span className="shrink-0 font-mono text-xs tracking-wide">
                    {paperClubLabel(paper.club)}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      {papers.map((paper) => (
        <article
          key={paper.slug}
          id={paper.slug}
          className="scroll-mt-24 border-t border-ink pt-6"
        >
          <p className="font-mono text-xs tracking-wide">
            {formatClubDate(paper.dated)}
            <span aria-hidden="true"> · </span>
            {paperClubLabel(paper.club)}
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight">
            {paper.title}
          </h2>
          <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed">
            {paper.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
