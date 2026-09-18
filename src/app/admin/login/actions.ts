"use server";

import { redirect } from "next/navigation";
import {
  adminPasswordConfigured,
  clearAdminSession,
  passwordsMatch,
  setAdminSession,
} from "@/lib/admin-auth";

export type AdminLoginState = { error: string | null };

export async function loginAdmin(
  _prev: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  if (!adminPasswordConfigured()) {
    return { error: "Admin password is not set." };
  }

  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!password || !passwordsMatch(password, expected)) {
    return { error: "That password is not the roll." };
  }

  await setAdminSession();
  redirect("/admin/members");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/login");
}
