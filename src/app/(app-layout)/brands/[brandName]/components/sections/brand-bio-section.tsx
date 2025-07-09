import { ReadMore } from "@/components/custom/read-more/read-more";
import { BioSectionContentType } from "@/lib/types/general";
import { BioContent } from "../bio-content/bio-content";

type BrandBioSectionProps = {
  content: {
    visible: BioSectionContentType[];
    hidden: BioSectionContentType[];
  };
  video?: {
    src: string;
    poster?: string;
  };
};

export function BrandBioSection({ content, video }: BrandBioSectionProps) {
  const showReadMode = content.hidden;

  return (
    <section className="brand-bio w-fixed">
      <div className="brand-bio__texts">
        {content.visible.map((content) => (
          <BioContent {...content} key={content.text || content.quote} />
        ))}
        {showReadMode && (
          <ReadMore buttonText="Смотреть всю историю">
            {content.hidden.map((content) => (
              <BioContent {...content} key={content.text || content.quote} />
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
