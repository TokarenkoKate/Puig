import { VideoHTMLAttributes } from "react";
import Image from "next/image";
import "./fullscreen-media.css";
import clsx from "clsx";
import { VideoComponent } from "../video-component/video-component";

type FullscreenMediaProps = {
  videoSrc?: string;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
  imageSrc?: string;
  className?: string;
};

export function FullscreenMedia({
  videoSrc,
  videoProps,
  imageSrc,
  className,
}: FullscreenMediaProps) {
  return (
    <div className={clsx("fullscreen-media", className)}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageSrc}
          width={1400}
          height={540}
          className="fullscreen-media__inner"
        />
      )}
      {videoSrc && (
        <VideoComponent
          playsInline
          className="fullscreen-media__inner"
          {...videoProps}
          src={videoSrc}
        />
      )}
    </div>
  );
}
