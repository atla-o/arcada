import { formatClubDate } from "@/lib/dates";
import { paperClubLabel, type Paper } from "@/lib/documents";

export function PaperList({ papers }: { papers: Paper[] }) {
  if (papers.length === 0) {
    return <p>No papers filed.</p>;
  }

  return (
    <div className="flex flex-col gap-12">
      {papers.map((paper) => (
        <article
          key={paper.slug}
          id={paper.slug}
          className="border-t border-ink pt-6"
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
