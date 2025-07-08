import { ReadMore } from "@/components/custom/read-more/read-more";

type BrandBioSectionProps = {
  content: string[];
  video?: {
    src: string;
    poster?: string;
  };
};

const VISIBLE_CONTENT_COUNT = 3;

export function BrandBioSection({ content, video }: BrandBioSectionProps) {
  const showReadMode = content.length > VISIBLE_CONTENT_COUNT;
  const visibleContent = content.slice(0, VISIBLE_CONTENT_COUNT);
  const hiddenContent = showReadMode
    ? content.slice(VISIBLE_CONTENT_COUNT)
    : [];

  return (
    <section className="brand-bio w-fixed">
      <div className="brand-bio__texts">
        {visibleContent.map((visibleText) => (
          <p className="brand-bio__text" key={visibleText}>
            {visibleText}
          </p>
        ))}
        {showReadMode && (
          <ReadMore buttonText="Смотреть всю историю">
            {hiddenContent.map((contentText) => (
              <p className="brand-bio__text" key={contentText}>
                {contentText}
              </p>
            ))}
          </ReadMore>
        )}
      </div>
      {video && (
        <div className="brand-bio__video">
          <video
            src={video.src}
            poster={video.poster}
            controls
            className="brand-bio__video-item"
            title="video-1"
          />
        </div>
      )}
    </section>
  );
}
