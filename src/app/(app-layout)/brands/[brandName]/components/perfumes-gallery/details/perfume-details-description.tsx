import { PerfumeDescription } from "@/lib/types/general";

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
          </div>
        );
      })}
    </div>
  );
}
