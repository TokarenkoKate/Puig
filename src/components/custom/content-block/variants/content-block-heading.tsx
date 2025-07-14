import { ContentHeadingBlock } from "@/lib/types/components";
import clsx from "clsx";

export function ContentBlockHeading({ block }: { block: ContentHeadingBlock }) {
  return (
    <h4
      className={clsx("heading-4", { "text-center": block.align === "center" })}
    >
      {block.heading}
    </h4>
  );
}
