import clsx from "clsx";
import { Ref, VideoHTMLAttributes } from "react";
import { VideoComponent } from "../video-component/video-component";
import "./fullscreen-media.css";

type FullscreenMediaProps = {
  videoSrc?: string;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
  className?: string;
  ref: Ref<HTMLVideoElement>;
};

export function FullscreenMedia({
  videoSrc,
  videoProps,
  className,
  ref,
}: FullscreenMediaProps) {
  return (
    <div className={clsx("fullscreen-media", className)}>
      {videoSrc && (
        <VideoComponent
          ref={ref}
          playsInline
          className="fullscreen-media__inner"
          {...videoProps}
          src={videoSrc}
        />
      )}
    </div>
  );
}
