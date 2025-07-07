"use client";

import "./image-gallery.css";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageGalleryItem } from "@/lib/types/components";
import { useModalGallery } from "@/lib/hooks/use-modal-gallery";
import { useRef, useEffect } from "react";

export function ImagesGallery({ images }: { images: ImageGalleryItem[] }) {
  const { selectedIndex, selectedItem, selectItem, handleNext, handlePrev } =
    useModalGallery(images);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
        });
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="images-gallery">
      <div className="images-gallery__scroll" ref={scrollRef}>
        {images.map((img, index) => (
          <Dialog
            key={img.src}
            open={selectedIndex === index}
            onOpenChange={(open) => {
              if (!open) selectItem(null);
            }}
          >
            <DialogTrigger asChild>
              <div
                className="images-gallery__slider-item"
                onClick={() => selectItem(index)}
              >
                <Image
                  alt={img.altText}
                  loading="lazy"
                  width={img.width}
                  height={img.height}
                  className="images-gallery__image"
                  src={img.src}
                />
              </div>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay
                className="fixed inset-0 bg-black/80 z-50"
                onClick={() => selectItem(null)}
              />
              <DialogClose asChild className="images-gallery__close-btn">
                <Button variant="ghost" size="icon">
                  <X className="text-white" />
                </Button>
              </DialogClose>
              <DialogContent
                className="images-gallery__modal"
                showCloseButton={false}
              >
                {selectedItem && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="images-gallery__modal-btn"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.altText}
                      width={selectedItem.width}
                      height={selectedItem.height}
                      className="images-gallery__image images-gallery__image_modal"
                      priority
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="images-gallery__modal-btn images-gallery__modal-btn_right"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </>
                )}
              </DialogContent>
            </DialogPortal>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
