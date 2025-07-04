type BrandBioSectionProps = {
  content: string[];
  videoSrc: string;
  paragraphs: string[];
};

export function BrandBioSection({
  content,
  videoSrc,
  paragraphs,
}: BrandBioSectionProps) {
  return (
    <section className="w-fixed">
      <div className="brand-bio">
        <div className="brand-bio__text-wrapper">
          {content.map((text, index) => (
            <div className="brand-bio__content-item" key={index}>
              <h2 className="brand-bio__subtitle"></h2>
              <p className="brand-bio__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="brand-bio__video-group">
        <div className="brand-bio__video-wrapper">
          <div className="brand-bio__video">
            <video
              src={videoSrc}
              controls
              className="brand-bio__video-item"
              title="video-1"
            ></video>
          </div>
        </div>
        {paragraphs.map((paragraph, index) => (
          <div
            className={`brand-bio__video-group-text-${index + 1}`}
            key={index}
          >
            <p className="brand-bio__text">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
