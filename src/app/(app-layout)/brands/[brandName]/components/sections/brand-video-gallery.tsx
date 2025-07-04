import { VideoGalleryItem } from "@/lib/types/general";
import Image from "next/image";

export function BrandVideoGallery({
  videoGalleryItems,
}: {
  videoGalleryItems: VideoGalleryItem[];
}) {
  return (
    <div className="video-gallery-wrapper w-fixed">
      <div className="video-grid">
        {videoGalleryItems.map((videoGalleryItem, index) => (
          <div className="video-thumbnail" key={index}>
            <Image
              alt=""
              loading="lazy"
              width="360"
              height="360"
              decoding="async"
              data-nimg="1"
              className="video-frame"
              src={videoGalleryItem.previewImg}
            />
            <Image
              alt="play"
              loading="lazy"
              width="68"
              height="49"
              decoding="async"
              className="playIcon"
              src="/icons/play.svg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
