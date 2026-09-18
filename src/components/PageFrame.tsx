import type { ReactNode } from "react";

export function PageFrame({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      {kicker ? (
        <p className="font-mono text-xs tracking-wide">{kicker}</p>
      ) : null}
      {title ? (
        <h1 className="mt-2 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
      ) : null}
      {intro ? <div className="mt-4 max-w-xl text-lg">{intro}</div> : null}
      {children}
    </div>
  );
}
