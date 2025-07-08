import { PerfumeUniverse } from "@/lib/types/general";
import { PerfumeUniverseHistoryContent } from "./perfume-universe-history-content";
import { ReadMore } from "@/components/custom/read-more/read-more";

type PerfumeUniverseHistoryProps = {
  content: PerfumeUniverse["content"];
  citation?: string;
};

export function PerfumeUniverseHistory({
  content,
  citation,
}: PerfumeUniverseHistoryProps) {
  const showReadMode = content.length > 1;
  if (!content.length) return null;
  const restContent = content.slice(1);

  return (
    <>
      {citation && <h3 className="text-lg font-bold mx-auto">{citation}</h3>}
      <PerfumeUniverseHistoryContent content={content[0]} />
      {showReadMode && (
        <ReadMore buttonText="Читать историю">
          {restContent.map((contentItem, index) => (
            <PerfumeUniverseHistoryContent content={contentItem} key={index} />
          ))}
        </ReadMore>
      )}
    </>
  );
}
