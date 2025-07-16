"use client";

import "./hero-section.css";
import clsx from "clsx";
import { useRef } from "react";
import { FullscreenMedia } from "../fullscreen-media/fullscreen-media";
import { WaveText } from "../wave-text/wave-text";

type HeroSectionProps = {
  videoSrc?: string;
  title: string;
  className?: string;
};

const heroVideoProps = { loop: true, autoPlay: true, muted: true };

export function HeroSection({ videoSrc, title, className }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section className={clsx("hero", className)} ref={ref}>
      <FullscreenMedia
        videoSrc={videoSrc}
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
