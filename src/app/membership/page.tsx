import type { Metadata } from "next";
import Link from "next/link";
import { MembershipForm } from "@/components/MembershipForm";
import { clubs } from "@/lib/clubs";

export const metadata: Metadata = {
  title: "membership",
  description:
    "Send a note of interest to sit with ancestry club, spiritual club, political club, or education club.",
};

type MembershipPageProps = {
  searchParams: Promise<{ noted?: string; error?: string }>;
};

export default async function MembershipPage({
  searchParams,
}: MembershipPageProps) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <p className="font-mono text-xs tracking-wide">the house</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">membership</h1>
      <p className="mt-4 max-w-xl text-lg">
        Send a note of interest. Name the club you mean to sit with. We write
        back with the next sitting.
      </p>
      <ul className="mt-6 font-mono text-xs tracking-wide">
        {clubs.map((club) => (
          <li key={club.slug}>
            <Link href={`/clubs/${club.slug}`}>{club.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <MembershipForm
          noted={params.noted === "1"}
          error={params.error === "1"}
        />
      </div>
    </div>
  );
}
