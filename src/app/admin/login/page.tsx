import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { PageIntro } from "@/components/PageIntro";
import { adminPasswordConfigured, isAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAdmin()) {
    redirect("/admin/members");
  }

  return (
    <div className="site-wrap py-12 sm:py-16">
      <div className="mx-auto max-w-md">
        <PageIntro title="Organizers">
          <p>
            This page is for people who keep the membership roll. It is not a
            public membership list.
          </p>
        </PageIntro>
        {adminPasswordConfigured() ? (
          <AdminLoginForm />
        ) : (
          <p
            role="alert"
            className="mt-8 border border-ink px-4 py-3 text-left text-sm"
          >
            Set the <code>ADMIN_PASSWORD</code> environment variable, then
            reload this page.
          </p>
        )}
      </div>
    </div>
  );
}
