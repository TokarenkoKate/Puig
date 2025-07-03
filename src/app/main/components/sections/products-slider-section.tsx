"use client";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProductSliderItem = {
  id: number;
  previewImage: string;
  videoSrc: string;
};

const productSliderItems: ProductSliderItem[] = [
  {
    id: 1,
    previewImage: "/assets/images/products-slider/slide_1.webp",
    videoSrc: "/assets/video/products-slider/slide-video_1.mp4",
  },
  {
    id: 2,
    previewImage: "/assets/images/products-slider/slide_2.webp",
    videoSrc: "/assets/video/products-slider/slide-video_2.mp4",
  },
  {
    id: 3,
    previewImage: "/assets/images/products-slider/slide_3.webp",
    videoSrc: "/assets/video/products-slider/slide-video_3.mp4",
  },
  {
    id: 4,
    previewImage: "/assets/images/products-slider/slide_4.webp",
    videoSrc: "/assets/video/products-slider/slide-video_4.mp4",
  },
];

const PRODUCT_SLIDER_DEFAULT_SELECTED_ID = 2;

export function ProductsSlider() {
  const [selectedId, setSelectedId] = useState<number>(
    PRODUCT_SLIDER_DEFAULT_SELECTED_ID
  );

  const onSelectProductItem = (productItemId: number) => {
    setSelectedId(productItemId);
  };

  return (
    <div className="products-slider">
      <div className="products-slider__wrapper">
        {productSliderItems.map((productItem) => (
          <ProductSliderItem
            productItem={productItem}
            key={productItem.id}
            isSelected={selectedId === productItem.id}
            onSelect={onSelectProductItem}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductSliderItem({
  productItem,
  isSelected,
  onSelect,
}: {
  productItem: ProductSliderItem;
  isSelected: boolean;
  onSelect: (productItemId: number) => void;
}) {
  const { id, previewImage, videoSrc } = productItem;

  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

  const onClick = () => {
    onSelect(id);
  };

  return (
    <div className="products-slider__item">
      <div>
        {isSelected ? (
          <div className="products-slider__slide-media">
            <Image
              alt="media"
              loading="lazy"
              width="570"
              height="321"
              decoding="async"
              className="products-slider__slide-img"
              src={previewImage}
            />
            <Dialog
              open={isModalVideoOpen}
              onOpenChange={(open) => {
                if (!open) setIsModalVideoOpen(false);
              }}
            >
              <DialogTrigger asChild>
                <Image
                  alt="play"
                  loading="lazy"
                  width="68"
                  height="49"
                  decoding="async"
                  className="products-slider__play-icon"
                  src="/icons/play.svg"
                  onClick={() => setIsModalVideoOpen(true)}
                />
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay
                  className="fixed inset-0 bg-black/80 z-50"
                  onClick={() => setIsModalVideoOpen(false)}
                />
                <DialogContent className="fixed flex items-center min-w-[800px] justify-center p-0 z-50 bg-transparent border-none shadow-none">
                  <div className=" w-full max-w-[800px]">
                    <video
                      playsInline
                      className="width-full h-[450px]"
                      autoPlay
                      muted
                      loop
                      controls
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        ) : (
          <>
            <div className="products-slider__slide-circle cursor-pointer">
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle
                    className="products-slider__circle-path"
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.5"
                  ></circle>
                </svg>
                <MoveRight
                  width="15"
                  height="15"
                  className="products-slider__arrow-icon"
                />
              </div>
            </div>
            <p
              className="products-slider__slide-text cursor-pointer"
              onClick={onClick}
            >
              нажать, чтобы посмотреть
            </p>
          </>
        )}
      </div>
    </div>
  );
}
