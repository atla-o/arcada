import type { ReactNode } from "react";

export function PageIntro({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <h1 className="font-display text-4xl tracking-tight text-pretty sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-5 space-y-4 text-base leading-relaxed sm:text-lg">
          {children}
        </div>
      ) : null}
    </header>
  );
}
