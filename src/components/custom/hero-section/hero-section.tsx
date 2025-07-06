import Image from "next/image";
import "./hero-section.css";

type HeroSectionProps = {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
};

export function HeroSection({ videoSrc, imageSrc, title }: HeroSectionProps) {
  return (
    <section className="hero">
      {videoSrc && (
        <div className="hero__background">
          <video autoPlay muted loop playsInline>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {imageSrc && (
        <div className="hero__background">
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
