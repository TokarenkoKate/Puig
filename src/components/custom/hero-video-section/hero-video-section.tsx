import Image from "next/image";
import "./hero-video-section.css";

type HeroVideoSectionProps = {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
};

export function HeroVideoSection({
  videoSrc,
  imageSrc,
  title,
}: HeroVideoSectionProps) {
  return (
    <section className="hero">
      {videoSrc && (
        <div className="hero__video-background">
          <video autoPlay muted loop playsInline>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {imageSrc && (
        <div className="hero__video-background">
          <Image
            src={imageSrc}
            alt={title}
            width={1400}
            height={540}
            className="h-full object-cover"
          />
        </div>
      )}
      <div className="hero__shadow-wrapper">
        <div className="w-fixed">
          <h1 className="hero__hero-text">{title}</h1>
        </div>
      </div>
    </section>
  );
}
