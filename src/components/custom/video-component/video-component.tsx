"use client";

import { VideoHTMLAttributes } from "react";

type VideoComponentProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string | undefined;
};

export function VideoComponent({ src, ...videoProps }: VideoComponentProps) {
  if (!src) return null;

  return (
    <video
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
      {...videoProps}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
