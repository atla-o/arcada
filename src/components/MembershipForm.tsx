import { clubs } from "@/lib/clubs";
import { InkLink } from "./InkLink";

type MembershipFormProps = {
  noted?: boolean;
  error?: boolean;
};

export function MembershipForm({
  noted = false,
  error = false,
}: MembershipFormProps) {
  if (noted) {
    return (
      <div className="border border-ink p-6 sm:p-8" role="status">
        <p className="font-mono text-xs tracking-wide">note received</p>
        <p className="mt-3 text-lg">
          Interest noted. The house will write back with the next sitting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <InkLink href="/events" variant="solid">
            read the board
          </InkLink>
          <InkLink href="/clubs">open the clubs</InkLink>
        </div>
      </div>
    );
  }

  return (
    <form
      action="/api/membership"
      method="post"
      className="border border-ink p-5 sm:p-7"
    >
      <p className="font-mono text-xs tracking-wide">Note of interest</p>
      {error ? (
        <p
          className="mt-4 border border-ink bg-ink px-3 py-3 text-base text-paper"
          role="alert"
        >
          The house could not take that note. Check name, email, and club, then
          send it again.
        </p>
      ) : null}
      <div className="mt-6 flex flex-col gap-5">
        <label className="flex flex-col gap-2" htmlFor="membership-name">
          <span className="font-mono text-xs tracking-wide">name</span>
          <input
            id="membership-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="border border-ink bg-paper px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="membership-email">
          <span className="font-mono text-xs tracking-wide">email</span>
          <input
            id="membership-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className="border border-ink bg-paper px-3 py-2"
          />
        </label>
        <fieldset className="flex flex-col gap-2">
          <legend className="font-mono text-xs tracking-wide">club</legend>
          <div className="divide-y divide-ink border border-ink">
            {clubs.map((club) => (
              <label
                key={club.slug}
                className="flex cursor-pointer items-start gap-3 px-3 py-3 hover:bg-ink hover:text-paper"
                htmlFor={`membership-club-${club.slug}`}
              >
                <input
                  id={`membership-club-${club.slug}`}
                  name="club"
                  type="radio"
                  value={club.name}
                  required
                  className="mt-1 size-4 accent-ink"
                />
                <span>
                  <span className="block font-serif text-lg leading-tight">
                    {club.name}
                  </span>
                  <span className="mt-1 block text-sm">{club.sitting}</span>
                </span>
              </label>
            ))}
            <label
              className="flex cursor-pointer items-start gap-3 px-3 py-3 hover:bg-ink hover:text-paper"
              htmlFor="membership-club-house"
            >
              <input
                id="membership-club-house"
                name="club"
                type="radio"
                value="the house"
                className="mt-1 size-4 accent-ink"
              />
              <span>
                <span className="block font-serif text-lg leading-tight">
                  the house
                </span>
                <span className="mt-1 block text-sm">
                  Not sure yet. We will help you pick a club.
                </span>
              </span>
            </label>
          </div>
        </fieldset>
        <label className="flex flex-col gap-2" htmlFor="membership-note">
          <span className="font-mono text-xs tracking-wide">
            note <span className="normal-case">(optional)</span>
          </span>
          <textarea
            id="membership-note"
            name="note"
            rows={4}
            className="border border-ink bg-paper px-3 py-2"
            placeholder="What you mean to sit with, in a few lines."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 min-h-11 border border-ink bg-ink px-5 font-mono text-sm tracking-wide text-paper hover:bg-paper hover:text-ink"
      >
        send note
      </button>
    </form>
  );
}
