"use client";

import { SliderItem } from "@/lib/types/components";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./history-slider-arrow-buttons";
import "./history-slider.css";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  dragFree: true,
  align: "start",
};

type HistorySliderItemsProps = {
  sliderItems: SliderItem[];
  options?: EmblaOptionsType;
};

export const HistorySlider = ({
  sliderItems,
  options = OPTIONS,
}: HistorySliderItemsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
    }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      autoScroll.reset();
      callback();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (!autoScroll) return;

    const onDragEnd = () => {
      if (!autoScroll.isPlaying()) {
        autoScroll.play();
      }
    };
    emblaApi.on("pointerUp", onDragEnd);

    return () => {
      emblaApi.off("pointerUp", onDragEnd);
    };
  }, [emblaApi]);

  return (
    <div className="history-slider">
      <div className="history-slider__button-group">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>
      <div className="history-slider__viewport" ref={emblaRef}>
        <div className="history-slider__container">
          {sliderItems.map((sliderItem) => (
            <div className="history-slider__item" key={sliderItem.content}>
              <div className="history-slider__circle-wrapper">
                <svg
                  className="history-slider__circle-svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.5"
                  ></circle>
                </svg>
                <div className="history-slider__year-container">
                  <p className="history-slider__year text-lg">
                    {sliderItem.year}
                  </p>
                </div>
              </div>
              <p className="history-slider__content text-xs">
                {sliderItem.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
