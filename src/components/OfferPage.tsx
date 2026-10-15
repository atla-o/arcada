"use client";

import { useEffect, useState } from "react";
import type { Club } from "@/lib/clubs";

type OfferPageProps = {
  club: Club;
  image: string;
};

export function OfferPage({ club, image }: OfferPageProps) {
  const [rich, setRich] = useState(false);
  const [noted, setNoted] = useState(false);

  useEffect(() => {
    try {
      setRich(localStorage.getItem("devo-theme") === "rich");
    } catch (err) {}
    setNoted(new URLSearchParams(window.location.search).get("noted") === "1");
  }, []);

  function flip() {
    const next = !rich;
    setRich(next);
    try {
      localStorage.setItem("devo-theme", next ? "rich" : "simple");
    } catch (err) {}
  }

  const leisure = club.slug === "leisure";

  return (
    <section data-offer data-offer-rich={rich ? "true" : undefined} className="offer">
      <button type="button" className="offer-o" onClick={flip} aria-label="Switch theme">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      {rich ? <img className="offer-photo" src={image} alt="" /> : null}
      <div className={rich ? "offer-card" : "offer-sheet"}>
        <h1>{club.name}</h1>
        <p>{club.intro[0]}</p>
        {noted ? (
          <p>Noted. The house will write back.</p>
        ) : (
          <form action="/api/offer" method="post">
            <input type="hidden" name="club" value={club.name} />
            <input type="hidden" name="next" value={club.href} />
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <button type="submit" name="intent" value="sit">
              Ask to sit
            </button>
            {leisure ? (
              <button type="submit" name="intent" value="book">
                Book the studios
              </button>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
