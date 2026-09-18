"use client";

import { useEffect } from "react";

export function PinViewport() {
  useEffect(() => {
    const pin = () => window.scrollTo(0, 0);
    history.scrollRestoration = "manual";
    pin();
    window.addEventListener("hashchange", pin);
    return () => window.removeEventListener("hashchange", pin);
  }, []);

  return null;
}
