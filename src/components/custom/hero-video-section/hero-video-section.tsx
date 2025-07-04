import "./hero-video-section.css";

type HeroVideoSectionProps = {
  videoSrc: string;
  title: string;
};

export function HeroVideoSection({ videoSrc, title }: HeroVideoSectionProps) {
  return (
    <section className="hero">
      <div className="hero__video-background">
        <video autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero__shadow-wrapper">
        <div className="w-fixed">
          <h1 className="hero__hero-text">{title}</h1>
        </div>
      </div>
    </section>
  );
}
