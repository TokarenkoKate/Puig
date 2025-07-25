"use client";

import { Ref, VideoHTMLAttributes } from "react";

type VideoComponentProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string | undefined;
  ref: Ref<HTMLVideoElement>;
};

export function VideoComponent({
  src,
  ref,
  ...videoProps
}: VideoComponentProps) {
  if (!src) return null;

  return (
    <video
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
      ref={ref}
      {...videoProps}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
