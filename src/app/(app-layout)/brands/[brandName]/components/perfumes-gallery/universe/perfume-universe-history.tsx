"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PerfumeUniverse } from "@/lib/types/general";

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
      <p className="perfume-universe__content-item">
        Успех не зависит от славы или власти. Он внутри тебя: в твоей
        способности каждый день бросать себе новый вызов, осознавать свои
        сильные стороны и ставить перед собой цели; знать, к чему ты стремишься,
        и наслаждаться каждым этапом этого пути, усердно работать, но оставаться
        верным своим ценностям и помнить, что следовать им — значит побеждать.
      </p>
      {showReadMode && !showMore && (
        <Button
          className="perfume-universe__read-history"
          onClick={() => setShowMore(true)}
        >
          Читать историю
        </Button>
      )}
      {showMore &&
        restContent.map((textContent, index) => (
          <p className="perfume-universe__content-item" key={index}>
            {textContent.text}
          </p>
        ))}
    </>
  );
}
