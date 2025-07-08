import { ValueCardType } from "@/lib/types/components";
import Image from "next/image";

export function ValueCard({ image, title, description }: ValueCardType) {
  return (
    <div className="value-card">
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        className="value-card__image"
      />
      <div className="value-card__column">
        <p className="value-card__title heading-4">{title}</p>
        <p className="value-card__description">{description}</p>
      </div>
    </div>
  );
}
