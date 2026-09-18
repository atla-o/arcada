import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs tracking-wide">the house</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">No such page</h1>
      <p className="mt-4 max-w-xl text-lg">
        That leaf is not in the house. Return to the four clubs.
      </p>
      <p className="mt-6 font-mono text-xs tracking-wide">
        <Link href="/">Arcada</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/clubs">clubs</Link>
      </p>
    </div>
  );
}
