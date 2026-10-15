import { addMember } from "@/lib/members";
import { clubs } from "@/lib/clubs";

function readString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = readString(form.get("name"));
  const email = readString(form.get("email"));
  const club = readString(form.get("club"));
  const intent = readString(form.get("intent"));
  const next = readString(form.get("next"));
  const match = clubs.find((item) => item.name === club);
  const back = next.startsWith("/clubs/") && !next.startsWith("//") ? next : "/";
  if (!name || !isEmail(email) || !match || (intent !== "sit" && intent !== "book")) {
    return Response.redirect(new URL(`${back}?error=1`, request.url), 303);
  }
  addMember({
    name,
    email,
    club: match.name,
    note: intent === "book" ? "recreation studios" : "ask to sit",
  });
  return Response.redirect(new URL(`${back}?noted=1`, request.url), 303);
}
