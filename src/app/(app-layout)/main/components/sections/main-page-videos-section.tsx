import { ContentBlockVideo } from "@/components/custom/content-block/variants/content-block-video";
import { ReadMore } from "@/components/custom/read-more/read-more";
import { historyTwoVideoBlock, historyVideoBlock } from "@/data/main-page-data";

export function MainPageVideosSection() {
  return (
    <div className="w-fixed">
      <ContentBlockVideo block={historyVideoBlock} />
      <div className="pt-10">
        <ReadMore buttonText="Следующее видео">
          <ContentBlockVideo block={historyTwoVideoBlock} />
        </ReadMore>
      </div>
    </div>
  );
}
