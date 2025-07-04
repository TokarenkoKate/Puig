"use client";

import { useState } from "react";
import { PerfumeUniverse } from "@/lib/types/general";
import { PerfumeUniverseComponent } from "./universe/perfume-universe";
import "./perfumes-gallery.css";

type PerfumesGalleryProps = {
  perfumeUniverses: PerfumeUniverse[];
};

export function PerfumesGallery({ perfumeUniverses }: PerfumesGalleryProps) {
  const [activeItem, setActiveItem] = useState<string | undefined>();

  const onToggleActive = (itemTitle: string) => {
    if (activeItem === itemTitle) {
      setActiveItem(undefined);
    } else {
      setActiveItem(itemTitle);
    }
  };

  return (
    <div className="perfumes-gallery w-fixed">
      <h2 className="perfumes-gallery__title">Парфюмерные вселенные</h2>
      {perfumeUniverses.map((perfumeUniverse) => (
        <PerfumeUniverseComponent
          perfumeUniverse={perfumeUniverse}
          active={activeItem === perfumeUniverse.title}
          onClick={onToggleActive}
          key={perfumeUniverse.title}
        />
      ))}
    </div>
  );
}
