"use client";

import { Button } from "@/components/ui/button";
import { PerfumeUniverse } from "@/lib/types/general";
import { useState } from "react";
import { PerfumeUniverseHistoryContent } from "./perfume-universe-history-content";

type PerfumeUniverseHistoryProps = {
  content: PerfumeUniverse["content"];
};

export function PerfumeUniverseHistory({
  content,
}: PerfumeUniverseHistoryProps) {
  const showReadMode = content.length > 1;
  const [showMore, setShowMore] = useState(false);
  const restContent = content.slice(1);

  return (
    <>
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
