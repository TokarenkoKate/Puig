"use client";

import { Button } from "@/components/ui/button";
import { PerfumeUniverse } from "@/lib/types/general";
import { useState } from "react";
import { PerfumeUniverseHistoryContent } from "./perfume-universe-history-content";

type PerfumeUniverseHistoryProps = {
  content: PerfumeUniverse["content"];
  citation?: string;
};

export function PerfumeUniverseHistory({
  content,
  citation,
}: PerfumeUniverseHistoryProps) {
  const showReadMode = content.length > 1;
  const [showMore, setShowMore] = useState(false);
  if (!content.length) return null;
  const restContent = content.slice(1);

  return (
    <>
      {citation && <h3 className="text-lg font-bold mx-auto">{citation}</h3>}
      <PerfumeUniverseHistoryContent content={content[0]} />
      {showReadMode && !showMore && (
        <Button
          className="perfume-universe__read-history"
          onClick={() => setShowMore(true)}
        >
          Читать историю
        </Button>
      )}
      {showMore &&
        restContent.map((contentItem, index) => (
          <PerfumeUniverseHistoryContent content={contentItem} key={index} />
        ))}
    </>
  );
}
