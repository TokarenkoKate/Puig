import { PerfumeDescription } from "@/lib/types/general";
import Image from "next/image";

export function PerfumeDetailsDescription({
  description,
}: {
  description: PerfumeDescription[];
}) {
  return (
    <div className="perfume-details__description">
      {description.map((descriptionItem) => {
        return (
          <div
            className="perfume-details__description-item"
            key={descriptionItem.text}
          >
            <p className="perfume-details__description-text">
              {descriptionItem.text}
            </p>
            {descriptionItem.video && (
              <div className="perfume-details__video-wrapper">
                <iframe
                  src={descriptionItem.video}
                  title="Video 1"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="perfume-details__video"
                ></iframe>
              </div>
            )}
            {descriptionItem.image && (
              <div className="relative w-full max-w-[600px] my-4 mx-auto h-auto">
                <Image
                  alt="Image 3"
                  loading="lazy"
                  width={descriptionItem.image.width}
                  height={descriptionItem.image.height}
                  sizes="100vw"
                  src={descriptionItem.image.src}
                  className="rounded-2 w-full h-auto"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
