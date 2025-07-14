import { VideoComponent } from "@/components/custom/video-component/video-component";
import Image from "next/image";

type PerfumeUniverseHistoryProps = {
  content: {
    text?: string;
    url?: string;
    image?: {
      src: string;
      height: number;
      width: number;
    };
  };
};

export function PerfumeUniverseHistoryContent({
  content,
}: PerfumeUniverseHistoryProps) {
  const { text, url, image } = content;

  return (
    <>
      {text && <p className="perfume-universe__content-item text-sm">{text}</p>}
      {url && (
        <VideoComponent
          src={url}
          controls
          title="video-1"
          width="100%"
          height="315"
          className="perfume-universe__content-item"
        />
      )}
      {image && (
        <Image
          loading="lazy"
          width={image.width}
          height={image.height}
          decoding="async"
          alt={image.src}
          src={image.src}
          className="w-[700px] h-auto mx-auto"
        />
      )}
    </>
  );
}
