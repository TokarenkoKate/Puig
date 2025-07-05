"use client";

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
      {text && <p className="perfume-universe__content-item">{text}</p>}
      {url && (
        <div className="perfume-universe__content-item">
          <iframe
            src={url}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video-0"
            width="100%"
            height="315"
          ></iframe>
        </div>
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
