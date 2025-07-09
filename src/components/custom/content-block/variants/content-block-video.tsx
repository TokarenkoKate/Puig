import { ContentVideoBlock } from "@/lib/types/components";

export function ContentBlockVideo({ block }: { block: ContentVideoBlock }) {
  const isExternalVideo = block.src.includes("youtube.com");

  return (
    <div className="relative pt-[56.26%] h:0 overflow-hidden">
      {isExternalVideo ? (
        <iframe
          src={block.src}
          title="Video 1"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="315"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      ) : (
        <video
          src={block.src}
          controls
          title="video-1"
          className="absolute top-0 left-0 w-full h-full"
          poster={block.previewSrc}
        ></video>
      )}
    </div>
  );
}
