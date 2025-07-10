import { FullscreenMedia } from "../fullscreen-media/fullscreen-media";
import "./hero-section.css";

type HeroSectionProps = {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
};

const heroVideoProps = { loop: true, autoPlay: true, muted: true };

export function HeroSection({ videoSrc, imageSrc, title }: HeroSectionProps) {
  return (
    <section className="hero">
      <FullscreenMedia
        videoSrc={videoSrc}
        imageSrc={imageSrc}
        videoProps={heroVideoProps}
      />
      <div className="hero__shadow-wrapper">
        <div className="w-fixed">
          <h1 className="hero__hero-text heading-1">{title}</h1>
        </div>
      </div>
    </section>
  );
}
