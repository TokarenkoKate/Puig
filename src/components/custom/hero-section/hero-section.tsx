import "./hero-section.css";
import clsx from "clsx";
import { FullscreenMedia } from "../fullscreen-media/fullscreen-media";

type HeroSectionProps = {
  videoSrc?: string;
  title: string;
  className?: string;
};

const heroVideoProps = { loop: true, autoPlay: true, muted: true };

export function HeroSection({ videoSrc, title, className }: HeroSectionProps) {
  return (
    <section className={clsx("hero", className)}>
      <FullscreenMedia
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
