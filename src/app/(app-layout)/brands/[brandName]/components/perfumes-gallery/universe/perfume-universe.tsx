import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { PerfumeUniverse } from "@/lib/types/general";
import { PerfumeUniverseHistory } from "./perfume-universe-history";
import { PerfumeUniverseCard } from "./perfume-universe-card";

type PerfumeUniverseProps = {
  perfumeUniverse: PerfumeUniverse;
  active: boolean;
  onClick: (itemTitle: string) => void;
};

export function PerfumeUniverseComponent({
  perfumeUniverse,
  active,
  onClick,
}: PerfumeUniverseProps) {
  const { title, subtitle, citation, content, images } = perfumeUniverse;

  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState("0px");
  const [bodyOpacity, setBodyOpacity] = useState(0);

  useEffect(() => {
    if (active && bodyRef.current) {
      const scrollHeight = bodyRef.current.scrollHeight;
      setBodyHeight(`${scrollHeight}px`);
      setBodyOpacity(1);

      const timeout = setTimeout(() => {
        setBodyHeight("auto");
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setBodyHeight("0px");
      setBodyOpacity(0);
    }
  }, [active]);

  return (
    <div className="perfume-universe">
      <button
        className={clsx("perfume-universe__accordion-header", {
          "perfume-universe__accordion-header_open": active,
        })}
        onClick={() => onClick(title)}
      >
        <span className="perfume-universe__subtitle text-sm">{subtitle}</span>
        <div className="perfume-universe__title-wrapper">
          <span className="perfume-universe__title heading-3">{title}</span>
        </div>
        <span
          className={clsx("perfume-universe__toggle-button", {
            rotated: active,
          })}
        >
          <Plus width="17" height="17" />
        </span>
      </button>
      <div
        className="perfume-universe__body"
        style={{
          height: bodyHeight,
          opacity: bodyOpacity,
        }}
      >
        <div ref={bodyRef} className="perfume-universe__content">
          <PerfumeUniverseHistory content={content} citation={citation} />
          <div className="perfume-universe__image-wrapper">
            {images.map((image) => (
              <PerfumeUniverseCard perfumeImage={image} key={image.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
