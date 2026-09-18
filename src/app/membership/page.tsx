import type { Metadata } from "next";
import Link from "next/link";
import { MembershipForm } from "@/components/MembershipForm";
import { PageFrame } from "@/components/PageFrame";
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
    <PageFrame
      kicker="the house"
      title="membership"
      intro="Send a note of interest. Name the club you mean to sit with. We write back with the next sitting."
    >
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,32rem)] lg:items-start">
        <aside>
          <p className="font-mono text-xs tracking-wide">how it works</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-base">
            <li>Pick a club, or the house if you are not yet sure.</li>
            <li>Send the note.</li>
            <li>We write back with the next sitting and what to bring.</li>
          </ol>
          <p className="mt-6 font-mono text-xs tracking-wide">sittings</p>
          <ul className="mt-3 space-y-3 text-base">
            {clubs.map((club) => (
              <li key={club.slug}>
                <Link href={`/clubs/${club.slug}`} className="font-serif text-lg">
                  {club.name}
                </Link>
                <p className="text-sm">{club.sitting}</p>
              </li>
            ))}
          </ul>
        </aside>
        <MembershipForm
          noted={params.noted === "1"}
          error={params.error === "1"}
        />
      </div>
    </PageFrame>
  );
}
