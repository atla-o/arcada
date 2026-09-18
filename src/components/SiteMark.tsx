import { cn } from "@/lib/cn";

type SiteMarkProps = {
  className?: string;
  title?: string;
};

export function SiteMark({ className, title = "Arcada" }: SiteMarkProps) {
  return (
    <svg
      viewBox="0 0 80 44"
      role="img"
      aria-label={title}
      className={cn("text-ink", className)}
    >
      <title>{title}</title>
      <path
        d="M8 38 A 32 32 0 0 1 72 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
