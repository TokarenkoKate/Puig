export function HeroVideoSection() {
  return (
    <section className="hero">
      <div className="hero__video-background">
        <video autoPlay muted loop playsInline>
          <source src="/assets/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero__shadow-wrapper">
        <h1 className="hero_hero-text">Puig love brands</h1>
      </div>
    </section>
  );
}
