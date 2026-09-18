export type MemberNote = {
  id: number;
  name: string;
  email: string;
  club: string;
  note: string;
  createdAt: string;
};

const notes: MemberNote[] = [];
let nextId = 1;

export function addMember(
  input: Omit<MemberNote, "id" | "createdAt">,
): MemberNote {
  const row: MemberNote = {
    ...input,
    id: nextId,
    createdAt: new Date().toISOString(),
  };
  nextId += 1;
  notes.unshift(row);
  return row;
}

export function listMembers(): MemberNote[] {
  return notes;
}
