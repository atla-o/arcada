import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logoutAdmin } from "@/app/admin/login/actions";
import { PageIntro } from "@/components/PageIntro";
import { isAdmin } from "@/lib/admin-auth";
import { listMembers } from "@/lib/members";

export const metadata: Metadata = {
  title: "Member roll",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminMembersPage() {
  if (!(await isAdmin())) {
    redirect("/admin/login");
  }

  const members = listMembers();

  return (
    <div className="site-wrap py-12 sm:py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro title="Members">
          <p>
            {members.length === 0
              ? "No one has written in yet."
              : `${members.length} ${members.length === 1 ? "person is" : "people are"} on the roll.`}
          </p>
          <p className="text-sm">
            This roll lives in memory on the running instance. A new instance
            starts empty.
          </p>
        </PageIntro>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="h-10 rounded-none border border-ink bg-paper px-5 font-sans text-sm tracking-wide hover:bg-ink hover:text-paper"
          >
            Sign out
          </button>
        </form>
      </div>

      {members.length === 0 ? (
        <p className="mt-10 border border-dashed border-ink px-4 py-10 text-center">
          The roll is empty. Notes from the public membership form appear here.
        </p>
      ) : (
        <div className="mt-10 overflow-x-auto border border-ink">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Membership notes</caption>
            <thead className="border-b border-ink font-sans text-xs tracking-[0.12em] uppercase">
              <tr>
                <th scope="col" className="px-3 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Club
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Note
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Recorded
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-ink align-top">
                  <td className="px-3 py-3 font-medium">{member.name}</td>
                  <td className="px-3 py-3">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </td>
                  <td className="px-3 py-3">{member.club}</td>
                  <td className="max-w-xs px-3 py-3">{member.note || "—"}</td>
                  <td className="px-3 py-3">{member.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
