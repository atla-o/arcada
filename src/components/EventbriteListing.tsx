import { onlineIntro } from "@/lib/eventbrite";

export function EventbriteListing() {
  return (
    <article
      id="online-intro"
      className="scroll-mt-8 border border-ink bg-paper px-4 py-5 text-left"
    >
      <p className="kicker">{onlineIntro.when}</p>
      <h2 className="mt-2 font-display text-2xl tracking-tight">
        {onlineIntro.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed">{onlineIntro.body}</p>
      <p className="mt-4">
        <a
          href={onlineIntro.publicUrl}
          className="inline-flex h-9 items-center justify-center rounded-none border border-ink bg-ink px-6 font-sans text-sm tracking-wide text-paper no-underline hover:bg-paper hover:text-ink hover:opacity-100"
        >
          Get a ticket
        </a>
      </p>
      <div className="no-print mt-5 border border-ink bg-paper">
        <iframe
          title="Tickets for Arcada social club online intro"
          src={onlineIntro.embedUrl}
          className="block h-[22.5rem] w-full bg-paper"
        />
      </div>
    </article>
  );
}
