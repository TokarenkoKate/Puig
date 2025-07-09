import { ReadMore } from "@/components/custom/read-more/read-more";
import { ContentBlock } from "@/lib/types/components";
import { renderContentBlock } from "@/components/custom/content-block/render-content-block";

type PerfumeUniverseHistoryProps = {
  content: ContentBlock[];
  citation?: string;
};

export function PerfumeUniverseHistory({
  content,
}: PerfumeUniverseHistoryProps) {
  const showReadMode = content.length > 1;
  if (!content.length) return null;
  const visibleContent = content.slice(0, 1);
  const hiddenContent = content.slice(1);

  return (
    <div className="perfume-universe__history">
      {visibleContent.map(renderContentBlock)}
      {showReadMode && (
        <ReadMore buttonText="Читать историю">
          {hiddenContent.map(renderContentBlock)}
        </ReadMore>
      )}
    </div>
  );
}
