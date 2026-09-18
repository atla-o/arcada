import { clubs } from "@/lib/clubs";

const allowedClubs = new Set([
  ...clubs.map((club) => club.name),
  "the house",
]);

type MembershipNote = {
  name: string;
  email: string;
  club: string;
  note: string;
};

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readNote(request: Request): Promise<MembershipNote> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Partial<MembershipNote>;
    return {
      name: readString(body.name),
      email: readString(body.email),
      club: readString(body.club),
      note: readString(body.note),
    };
  }

  const form = await request.formData();
  return {
    name: readString(form.get("name")),
    email: readString(form.get("email")),
    club: readString(form.get("club")),
    note: readString(form.get("note")),
  };
}

function houseUrl(request: Request, path: string): URL {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto =
    request.headers.get("x-forwarded-proto") ??
    new URL(request.url).protocol.replace(":", "");
  if (host) {
    return new URL(path, `${proto}://${host}`);
  }
  return new URL(path, request.url);
}

function isJsonRequest(request: Request): boolean {
  return (request.headers.get("content-type") ?? "").includes(
    "application/json",
  );
}

export async function POST(request: Request) {
  let note: MembershipNote;
  try {
    note = await readNote(request);
  } catch {
    if (isJsonRequest(request)) {
      return Response.json(
        { ok: false, message: "Send a JSON note." },
        { status: 400 },
      );
    }
    return Response.redirect(houseUrl(request, "/membership?error=1"), 303);
  }

  const json = isJsonRequest(request);

  if (!note.name || !note.email || !note.club) {
    if (json) {
      return Response.json(
        { ok: false, message: "Name, email, and club are required." },
        { status: 400 },
      );
    }
    return Response.redirect(houseUrl(request, "/membership?error=1"), 303);
  }

  if (!isEmail(note.email)) {
    if (json) {
      return Response.json(
        { ok: false, message: "That email cannot be used." },
        { status: 400 },
      );
    }
    return Response.redirect(houseUrl(request, "/membership?error=1"), 303);
  }

  if (!allowedClubs.has(note.club)) {
    if (json) {
      return Response.json(
        {
          ok: false,
          message:
            "Choose ancestry club, spiritual club, political club, education club, or the house.",
        },
        { status: 400 },
      );
    }
    return Response.redirect(houseUrl(request, "/membership?error=1"), 303);
  }

  if (json) {
    return Response.json({
      ok: true,
      message: "Interest noted. The house will write back.",
    });
  }

  return Response.redirect(houseUrl(request, "/membership?noted=1"), 303);
}
