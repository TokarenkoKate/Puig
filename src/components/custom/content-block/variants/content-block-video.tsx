import { ContentVideoBlock } from "@/lib/types/components";

export function ContentBlockVideo({ block }: { block: ContentVideoBlock }) {
  return (
    <video
      src={block.src}
      controls
      title="video-1"
      width="100%"
      height="315"
      poster={block.previewSrc}
    ></video>
  );
}
