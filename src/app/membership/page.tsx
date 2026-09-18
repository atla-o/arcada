import type { Metadata } from "next";
import Link from "next/link";
import { MembershipForm } from "@/components/MembershipForm";
import { PinViewport } from "@/components/PinViewport";

export const metadata: Metadata = {
  title: "membership",
  description:
    "Ask to sit with Arcada. Membership is show-up, help, keep the peace.",
};

type MembershipPageProps = {
  searchParams: Promise<{ noted?: string; error?: string }>;
};

export default async function MembershipPage({
  searchParams,
}: MembershipPageProps) {
  const params = await searchParams;

  return (
    <div
      data-fit
      className="flex h-full min-h-0 flex-col items-center overflow-hidden px-4 py-2 text-center"
    >
      <PinViewport />
      <div className="my-auto flex max-h-full min-h-0 w-full max-w-md flex-col">
        <h1 className="shrink-0 font-display text-2xl tracking-tight sm:text-3xl">
          northern social club
        </h1>
        <p className="mt-1 mb-3 shrink-0 text-sm">
          Show-up, help, keep the peace. Read the{" "}
          <Link href="/documents">documents</Link> first.
        </p>
        <div className="min-h-0 w-full overflow-y-auto">
          <MembershipForm
            noted={params.noted === "1"}
            error={params.error === "1"}
          />
        </div>
      </div>
    </div>
  );
}
