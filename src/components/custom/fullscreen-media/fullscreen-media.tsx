import { MediaHTMLAttributes } from "react";
import Image from "next/image";
import "./fullscreen-media.css";

type FullscreenMediaProps = {
  videoSrc?: string;
  videoProps?: MediaHTMLAttributes<HTMLVideoElement>;
  imageSrc?: string;
};

export function FullscreenMedia({
  videoSrc,
  videoProps,
  imageSrc,
}: FullscreenMediaProps) {
  return (
    <div className="fullscreen-media">
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
        <video playsInline {...videoProps} className="fullscreen-media__inner">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
