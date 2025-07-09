import { ContentImageBlock } from "@/lib/types/components";
import Image from "next/image";

export function ContentBlockImage({ block }: { block: ContentImageBlock }) {
  return (
    <Image
      width={block.width}
      height={block.height}
      alt={block.alt}
      src={block.src}
    />
  );
}
