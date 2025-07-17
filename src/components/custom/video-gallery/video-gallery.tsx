"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModalGallery } from "@/lib/hooks/use-modal-gallery";
import { VideoGalleryItem } from "@/lib/types/general";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { VideoComponent } from "../video-component/video-component";
import "./video-gallery.css";

export function VideoGallery({
  videoGalleryItems,
}: {
  videoGalleryItems?: VideoGalleryItem[];
}) {
  const { selectedIndex, selectedItem, selectItem, handleNext, handlePrev } =
    useModalGallery(videoGalleryItems);

  if (!videoGalleryItems) return null;

  return (
    <div className="video-gallery-wrapper w-fixed">
      <div className="video-grid">
        {videoGalleryItems.map((videoGalleryItem, index) => (
          <Dialog
            key={videoGalleryItem.videoSrc}
            open={selectedIndex === index}
            onOpenChange={(open) => {
              if (!open) selectItem(null);
            }}
          >
            <DialogTrigger asChild>
              <div
                className="video-thumbnail cursor-pointer"
                key={index}
                onClick={() => selectItem(index)}
              >
                <Image
                  alt=""
                  loading="lazy"
                  width="360"
                  height="360"
                  decoding="async"
                  data-nimg="1"
                  className="video-frame"
                  src={videoGalleryItem.previewImg}
                />
                <Image
                  alt="play"
                  loading="lazy"
                  width="68"
                  height="49"
                  decoding="async"
                  className="playIcon"
                  src="/icons/play.svg"
                />
              </div>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay
                className="fixed inset-0 bg-black/80 z-50"
                onClick={() => selectItem(null)}
              />
              <DialogClose asChild className="video-gallery__close-btn">
                <Button variant="ghost" size="icon">
                  <X className="text-white" />
                </Button>
              </DialogClose>
              <DialogContent
                className="video-gallery__modal"
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
                      className="video-gallery__modal-btn"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <div className="relative pt-[56.26%] w-full h:0 overflow-hidden">
                      <VideoComponent
                        preload="auto"
                        controls
                        autoPlay
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={selectedItem.videoSrc}
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="video-gallery__modal-btn video-gallery__modal-btn_right"
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
