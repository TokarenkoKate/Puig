"use client";

import { useState } from "react";
import Image from "next/image";
import { ContentVideoBlock } from "@/lib/types/components";
import { VideoComponent } from "@/components/custom/video-component/video-component";

export function ContentBlockVideo({ block }: { block: ContentVideoBlock }) {
  const { src, previewSrc } = block;

  const [showVideo, setShowVideo] = useState(false);

  const showPreview = previewSrc && !showVideo;

  return (
    <div className="relative pt-[56.26%] h:0 overflow-hidden bg-[#e9e7e6]">
      {showPreview ? (
        <>
          <div className="w-full h-full absolute inset-0 bg-[#e9e7e6] animate-pulse brightness-95" />
          <div
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              alt=""
              loading="lazy"
              fill
              decoding="async"
              data-nimg="1"
              className="w-full h-full object-cover"
              src={previewSrc}
            />
            <Image
              alt="play"
              loading="lazy"
              width="68"
              height="49"
              decoding="async"
              className="absolute bottom-[45%] left-0 right-0 mx-auto"
              src="/icons/play.svg"
            />
          </div>
        </>
      ) : (
        <VideoComponent
          controls
          title="video-1"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={src}
          autoPlay={showVideo}
        />
      )}
    </div>
  );
}
