"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="no-print h-8 border border-ink bg-paper px-3 font-sans text-xs tracking-wide text-ink hover:bg-ink hover:text-paper"
      onClick={() => window.print()}
    >
      Print a clean copy
    </button>
  );
}
