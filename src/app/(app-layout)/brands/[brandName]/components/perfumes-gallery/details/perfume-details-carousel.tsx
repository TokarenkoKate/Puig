import * as React from "react";

import { ApiImageSrc } from "@/lib/types/general";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function PerfumeDetailsCarousel({ images }: { images: ApiImageSrc[] }) {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalItems, setTotalItems] = React.useState(0);

  React.useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <Carousel
      className="perfume-details__carousel"
      setApi={setCarouselApi}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div key={image.id} className="perfume-details__carousel-item">
              <Image
                alt={image.title}
                loading="lazy"
                width={image.src?.width}
                height={image.src?.height}
                src={image.src?.src}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-between">
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </div>
      <div className="perfume-details__carousel-dots">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`perfume-details__carousel-dot w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "transparent"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
