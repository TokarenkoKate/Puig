import clsx from "clsx";
import { VideoHTMLAttributes } from "react";
import { VideoComponent } from "../video-component/video-component";
import "./fullscreen-media.css";

type FullscreenMediaProps = {
  videoSrc?: string;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
  className?: string;
};

export function FullscreenMedia({
  videoSrc,
  videoProps,
  className,
}: FullscreenMediaProps) {
  return (
    <div className={clsx("fullscreen-media", className)}>
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
