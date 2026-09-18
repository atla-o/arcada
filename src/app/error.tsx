"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-display text-4xl tracking-tight">A fault in the house</h1>
      <p className="mt-4 max-w-md text-base">
        Try again, or return to <Link href="/">Arcada</Link>.
      </p>
      <button
        type="button"
        className="mt-6 h-9 rounded-none border border-ink bg-paper px-5 font-sans text-sm tracking-wide hover:bg-ink hover:text-paper"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
