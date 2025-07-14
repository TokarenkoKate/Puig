import { FullscreenMedia } from "@/components/custom/fullscreen-media/fullscreen-media";
import { ReadMore } from "@/components/custom/read-more/read-more";
import {
  historyVideo,
  historyVideoProps,
  historyTwoVideo,
  historyTwoVideoProps,
} from "@/data/main-page-data";

export function MainPageVideosSection() {
  return (
    <>
      <FullscreenMedia videoSrc={historyVideo} videoProps={historyVideoProps} />
      <div className="pt-10">
        <ReadMore buttonText="Следующее видео">
          <FullscreenMedia
            videoSrc={historyTwoVideo}
            videoProps={historyTwoVideoProps}
          />
        </ReadMore>
      </div>
    </>
  );
}
