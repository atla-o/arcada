"use client";

import { useActionState } from "react";
import {
  loginAdmin,
  type AdminLoginState,
} from "@/app/admin/login/actions";

const initialState: AdminLoginState = { error: null };

export function AdminLoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={action} className="mx-auto mt-8 max-w-sm space-y-4 text-left">
      <label className="block space-y-1" htmlFor="password">
        <span className="kicker block">Admin password</span>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="h-10 w-full rounded-none border border-ink bg-paper px-3"
        />
      </label>
      {state.error ? (
        <p role="alert" className="border border-ink px-3 py-2 text-sm">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="h-10 rounded-none border border-ink bg-ink px-6 font-sans text-sm tracking-wide text-paper hover:bg-paper hover:text-ink disabled:opacity-60"
      >
        {pending ? "Checking…" : "Open the roll"}
      </button>
    </form>
  );
}
