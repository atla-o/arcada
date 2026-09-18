import { InkActions, InkLink } from "@/components/InkLink";
import { PageFrame } from "@/components/PageFrame";

export default function NotFound() {
  return (
    <PageFrame
      kicker="the house"
      title="No such page"
      intro="That leaf is not in the house. Return to the four clubs."
    >
      <InkActions>
        <InkLink href="/" variant="solid">
          Arcada
        </InkLink>
        <InkLink href="/clubs">clubs</InkLink>
      </InkActions>
    </PageFrame>
  );
}
