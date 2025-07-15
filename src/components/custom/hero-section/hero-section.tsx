"use client";

import "./hero-section.css";
import { FullscreenMedia } from "../fullscreen-media/fullscreen-media";
import { WaveText } from "../wave-text/wave-text";
import { useRef } from "react";

type HeroSectionProps = {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
};

const heroVideoProps = { loop: true, autoPlay: true, muted: true };

export function HeroSection({ videoSrc, imageSrc, title }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section className="hero" ref={ref}>
      <FullscreenMedia
        videoSrc={videoSrc}
        imageSrc={imageSrc}
        videoProps={heroVideoProps}
        className="hero__media"
      />
      <div className="hero__shadow-wrapper">
        <div className="w-fixed flex items-center">
          <WaveText ref={ref} className="hero__hero-text heading-1">
            {title}
          </WaveText>
        </div>
      </div>
    </section>
  );
}
