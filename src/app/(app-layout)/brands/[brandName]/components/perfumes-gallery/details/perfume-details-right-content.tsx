import { ApiImageSrc, PerfumeRightContent } from "@/lib/types/general";
import Image from "next/image";

type PerfumeDetailsRightContentProps = {
  rightImage: ApiImageSrc;
  rightContent: PerfumeRightContent[];
};

export function PerfumeDetailsRightContent({
  rightImage,
  rightContent,
}: PerfumeDetailsRightContentProps) {
  return (
    <div>
      {rightImage && (
        <>
          <Image
            alt={rightImage.title}
            loading="lazy"
            width={340}
            height={340}
            src={rightImage.src?.src}
            className="perfume-details__ingredients-img"
          />
          <p className="perfume-details__ingredients-text">
            {rightImage.title}
          </p>
        </>
      )}
      <div className="perfume-details__right-content">
        {rightContent.map((rightContentData) => (
          <div key={rightContentData.id}>
            <span className="perfume-details__subtext">
              {rightContentData.subtext}
            </span>
            <p className="perfume-details__text">{rightContentData.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
