import { renderContentBlock } from "@/components/custom/content-block/render-content-block";
import { ContentBlock } from "@/lib/types/components";

export function PerfumeDetailsDescription({
  description,
}: {
  description: ContentBlock[];
}) {
  return (
    <div className="perfume-details__description">
      <div className="perfume-details__description-content">
        {description.map(renderContentBlock)}
      </div>
    </div>
  );
}
