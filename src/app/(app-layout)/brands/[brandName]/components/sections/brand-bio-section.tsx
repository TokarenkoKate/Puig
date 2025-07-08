import { ReadMore } from "@/components/custom/read-more/read-more";

type BrandBioSectionProps = {
  content: string[];
  videoSrc: string;
};

export function BrandBioSection({ content, videoSrc }: BrandBioSectionProps) {
  const showReadMode = content.length > 1;
  const restContent = showReadMode ? content.slice(1) : [];

  return (
    <section className="brand-bio w-fixed">
      <div className="brand-bio__texts">
        <p className="brand-bio__text">{content[0]}</p>
        {showReadMode && (
          <ReadMore buttonText="Читать историю">
            {restContent.map((contentText, index) => (
              <p className="brand-bio__text" key={index}>
                {contentText}
              </p>
            ))}
          </ReadMore>
        )}
      </div>
      {videoSrc && (
        <div className="brand-bio__video">
          <video
            src={videoSrc}
            controls
            className="brand-bio__video-item"
            title="video-1"
          />
        </div>
      )}
    </section>
  );
}
