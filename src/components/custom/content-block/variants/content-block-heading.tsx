import { ContentHeadingBlock } from "@/lib/types/components";

export function ContentBlockHeading({ block }: { block: ContentHeadingBlock }) {
  return <h4>{block.heading}</h4>;
}
