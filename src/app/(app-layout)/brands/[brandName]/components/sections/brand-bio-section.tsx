import { ReadMore } from "@/components/custom/read-more/read-more";
import { ContentBlock, ContentVideoBlock } from "@/lib/types/components";
import { renderContentBlock } from "@/components/custom/content-block/render-content-block";

type BrandBioSectionProps = {
  content: {
    visible: ContentBlock[];
    hidden: ContentBlock[];
  };
  video?: ContentVideoBlock[];
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
        <div className="brand-bio__videos">{video.map(renderContentBlock)}</div>
      )}
    </section>
  );
}
