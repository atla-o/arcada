import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  solid:
    "inline-flex min-h-11 items-center justify-center border border-ink bg-ink px-4 font-mono text-sm tracking-wide text-paper no-underline hover:bg-paper hover:text-ink",
  outline:
    "inline-flex min-h-11 items-center justify-center border border-ink bg-paper px-4 font-mono text-sm tracking-wide text-ink no-underline hover:bg-ink hover:text-paper",
} as const;

export function InkLink({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}

export function InkActions({ children }: { children: ReactNode }) {
  return <div className="mt-6 flex flex-wrap gap-3">{children}</div>;
}
