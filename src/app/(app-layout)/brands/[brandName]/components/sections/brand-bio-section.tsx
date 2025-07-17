import { ReadMore } from "@/components/custom/read-more/read-more";
import { ContentBlock, ContentVideoBlock } from "@/lib/types/components";
import { renderContentBlock } from "@/components/custom/content-block/render-content-block";
import { ContentBlockVideo } from "@/components/custom/content-block/variants/content-block-video";

type BrandBioSectionProps = {
  content: {
    visible: ContentBlock[];
    hidden: ContentBlock[];
  };
  video?: ContentVideoBlock[];
};

export function BrandBioSection({ content, video }: BrandBioSectionProps) {
  const showReadMode = content.hidden;
  const showReadModeVideo = video && video?.length > 1;

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
        <div className="w-fixed">
          <ContentBlockVideo block={video[0]} />
          {showReadModeVideo && (
            <div className="pt-10">
              <ReadMore buttonText="Следующее видео">
                {video.slice(1).map(renderContentBlock)}
              </ReadMore>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
