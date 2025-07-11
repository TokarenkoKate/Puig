import { ContentVideoBlock } from "@/lib/types/components";

export function ContentBlockVideo({ block }: { block: ContentVideoBlock }) {
  return (
    <div className="relative pt-[56.26%] h:0 overflow-hidden">
      <video
        src={block.src}
        controls
        title="video-1"
        className="absolute top-0 left-0 w-full h-full"
        poster={block.previewSrc}
      ></video>
    </div>
  );
}
