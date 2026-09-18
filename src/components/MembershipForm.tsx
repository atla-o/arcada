import { clubs } from "@/lib/clubs";

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
      <div className="border border-ink px-4 py-6 text-center" role="status">
        <p>Interest noted. The house will write back.</p>
      </div>
    );
  }

  return (
    <form
      action="/api/membership"
      method="post"
      className="space-y-2 text-left"
      noValidate
    >
      {error ? (
        <p role="alert" className="border border-ink px-3 py-2 text-sm">
          The house could not take that note. Check name, email, and club, then
          send it again.
        </p>
      ) : null}

      <div className="grid grid-cols-2 gap-2">
        <label className="space-y-1" htmlFor="membership-name">
          <span className="kicker block">Name</span>
          <input
            id="membership-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="h-8 w-full rounded-none border border-ink bg-paper px-2"
          />
        </label>
        <label className="space-y-1" htmlFor="membership-email">
          <span className="kicker block">Email</span>
          <input
            id="membership-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-8 w-full rounded-none border border-ink bg-paper px-2"
          />
        </label>
      </div>

      <label className="block space-y-1" htmlFor="membership-club">
        <span className="kicker block">Club</span>
        <select
          id="membership-club"
          name="club"
          required
          defaultValue=""
          className="h-8 w-full rounded-none border border-ink bg-paper px-2"
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

      <label className="block space-y-1" htmlFor="membership-note">
        <span className="kicker block">
          Notes <span className="normal-case tracking-normal">(optional)</span>
        </span>
        <textarea
          id="membership-note"
          name="note"
          rows={2}
          className="min-h-10 w-full rounded-none border border-ink bg-paper px-2 py-1"
          placeholder="What you mean to sit with, in a few lines."
        />
      </label>

      <div className="pt-1 text-center">
        <button
          type="submit"
          className="h-9 rounded-none border border-ink bg-ink px-6 font-sans text-sm tracking-wide text-paper hover:bg-paper hover:text-ink"
        >
          Ask to sit with Arcada
        </button>
      </div>
    </form>
  );
}
