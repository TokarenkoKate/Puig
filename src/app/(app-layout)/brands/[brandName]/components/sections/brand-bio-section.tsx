import { ReadMore } from "@/components/custom/read-more/read-more";
import { ContentBlock } from "@/lib/types/components";
import { renderContentBlock } from "@/components/custom/content-block/render-content-block";

type BrandBioSectionProps = {
  content: {
    visible: ContentBlock[];
    hidden: ContentBlock[];
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
        {content.visible.map(renderContentBlock)}
        {showReadMode && (
          <ReadMore buttonText="Смотреть всю историю">
            {content.hidden.map(renderContentBlock)}
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
