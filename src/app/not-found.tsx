import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <PageIntro title="No such page">
        <p>
          That leaf is not in the house. Return to{" "}
          <Link href="/">Arcada</Link>.
        </p>
      </PageIntro>
    </div>
  );
}
