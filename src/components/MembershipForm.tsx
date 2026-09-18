import { clubs } from "@/lib/clubs";

type MembershipFormProps = {
  noted?: boolean;
  error?: boolean;
};

export function MembershipForm({ noted = false, error = false }: MembershipFormProps) {
  return (
    <form
      action="/api/membership"
      method="post"
      className="max-w-xl border border-ink p-6 sm:p-8"
    >
      <p className="font-mono text-xs tracking-wide">Note of interest</p>
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
            className="border border-ink bg-paper px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="membership-club">
          <span className="font-mono text-xs tracking-wide">club</span>
          <select
            id="membership-club"
            name="club"
            required
            defaultValue=""
            className="border border-ink bg-paper px-3 py-2"
          >
            <option value="" disabled>
              choose a club
            </option>
            {clubs.map((club) => (
              <option key={club.slug} value={club.name}>
                {club.name}
              </option>
            ))}
            <option value="the house">the house</option>
          </select>
        </label>
        <label className="flex flex-col gap-2" htmlFor="membership-note">
          <span className="font-mono text-xs tracking-wide">note</span>
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
        className="mt-6 border border-ink bg-ink px-5 py-2 font-mono text-xs tracking-wide text-paper hover:bg-paper hover:text-ink"
      >
        send note
      </button>
      <p className="mt-4 text-base" role="status" aria-live="polite">
        {noted
          ? "Interest noted. The house will write back."
          : error
            ? "The house could not take that note. Check the fields and send it again."
            : ""}
      </p>
    </form>
  );
}
