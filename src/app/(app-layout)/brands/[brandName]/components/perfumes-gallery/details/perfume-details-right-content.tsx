import { ApiImageSrc, PerfumeRightContent } from "@/lib/types/general";
import { capitalizePerfumeComponents } from "@/lib/utils/perfume";
import Image from "next/image";

type PerfumeDetailsRightContentProps = {
  rightImage: {
    id: number;
    src: ApiImageSrc["src"];
    components: string[];
  };
  rightContent: PerfumeRightContent[];
};

export function PerfumeDetailsRightContent({
  rightImage,
  rightContent,
}: PerfumeDetailsRightContentProps) {
  const ingredients = capitalizePerfumeComponents(rightImage.components);

  return (
    <div>
      {rightImage && (
        <>
          <Image
            alt={ingredients}
            loading="lazy"
            width={340}
            height={340}
            src={rightImage.src?.src}
            className="perfume-details__ingredients-img"
          />
          <p className="perfume-details__ingredients-text">{ingredients}</p>
        </>
      )}
      <div className="perfume-details__right-content">
        {rightContent.map((rightContentData) => {
          // TODO: поменять формат данных

          const isOlfactoryGroup =
            rightContentData.subtext.includes("Ольфакторное");

          const flavours = rightContentData.text
            .split(",")
            .map((flavour, index) => {
              return index === 0
                ? flavour.toUpperCase()
                : flavour.toLowerCase();
            })
            .join(",");

          return (
            <div key={rightContentData.id}>
              <span className="perfume-details__subtext text-sm">
                {rightContentData.subtext}
              </span>

              <p className="perfume-details__text text-lg">
                {isOlfactoryGroup ? flavours : rightContentData.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
