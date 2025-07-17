import { PerfumeDetails } from "@/lib/types/general";
import { PerfumeDetailsCarousel } from "./perfume-details-carousel";
import { PerfumeDetailsRightContent } from "./perfume-details-right-content";
import { PerfumeDetailsDescription } from "./perfume-details-description";

export function PerfumeDetailsComponent({
  perfumeDetails,
}: {
  perfumeDetails: PerfumeDetails;
}) {
  const {
    brandTitle,
    title,
    transcription,
    imagegallery,
    rightImage,
    rightContent,
    description,
  } = perfumeDetails;

  return (
    <div className="perfume-details">
      <div className="perfume-details__header">
        <h4 className="perfume-details__brand-name">{brandTitle}</h4>
        <div>
          <h3 className="perfume-details__title heading-4">
            {title}
            {transcription && (
              <span className="text-neutral-500">{transcription}</span>
            )}
          </h3>
        </div>
      </div>
      <div className="perfume-details__carousel-wrapper">
        <div>
          <PerfumeDetailsCarousel images={imagegallery} />
        </div>
        <div>
          <PerfumeDetailsRightContent
            rightImage={rightImage?.[0]}
            rightContent={rightContent}
          />
        </div>
      </div>
      <PerfumeDetailsDescription description={description} />
    </div>
  );
}
