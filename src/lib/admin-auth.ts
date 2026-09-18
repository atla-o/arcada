import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "arcada_admin";

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function sessionToken() {
  const secret = sessionSecret();
  if (!secret) return null;
  return createHmac("sha256", secret)
    .update("arcada-admin-session")
    .digest("hex");
}

export function adminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function passwordsMatch(candidate: string, expected: string) {
  const key = sessionSecret() || "arcada-compare";
  const left = createHmac("sha256", key).update(candidate).digest();
  const right = createHmac("sha256", key).update(expected).digest();
  return timingSafeEqual(left, right);
}

export async function isAdmin() {
  const expected = sessionToken();
  const cookie = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!expected || !cookie) return false;
  if (cookie.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(cookie), Buffer.from(expected));
}

export async function setAdminSession() {
  const token = sessionToken();
  if (!token) return;
  (await cookies()).set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  (await cookies()).delete(ADMIN_COOKIE);
}
