import { SiteMarks } from "@/components/SiteMarks";

export function SiteHeader() {
  return (
    <header className="no-print shrink-0">
      <div className="flex justify-center py-3">
        <SiteMarks />
      </div>
    </header>
  );
}
