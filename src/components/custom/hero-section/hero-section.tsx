"use client";

import "./hero-section.css";
import clsx from "clsx";
import { FullscreenMedia } from "../fullscreen-media/fullscreen-media";
import { useEffect, useRef } from "react";

type HeroSectionProps = {
  videoSrc?: string;
  title: string;
  className?: string;
};

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const heroVideoProps = { loop: true, autoPlay: true, muted: true };

export function HeroSection({ videoSrc, title, className }: HeroSectionProps) {
  const videoParentRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isSafari() && videoParentRef.current) {
      const player = videoParentRef.current;

      console.log(videoParentRef);
      if (player) {
        player.controls = false;
        // @ts-expect-error allow different spelling
        player.playsinline = true;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;

        setTimeout(() => {
          player.play();
        }, 0);
      }
    }
  }, []);

  return (
    <section className={clsx("hero", className)}>
      <FullscreenMedia
        ref={videoParentRef}
        videoSrc={videoSrc}
        videoProps={heroVideoProps}
        className="hero__media"
      />
      <div className="hero__shadow-wrapper">
        <div className="w-fixed">
          <h1 className="hero__hero-text heading-1">{title}</h1>
        </div>
      </div>
    </section>
  );
}
