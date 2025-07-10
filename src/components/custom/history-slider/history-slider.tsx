import { SliderItem } from "@/lib/types/components";
import "./history-slider.css";

type HistorySliderItemsProps = {
  sliderItems: SliderItem[];
};

export function HistorySlider({ sliderItems }: HistorySliderItemsProps) {
  return (
    <div className="history__slider-wrapper">
      <div className="scroller horizontal" data-animated="true">
        <div className="scroller__inner">
          {sliderItems.map((sliderItem) => (
            <div className="history__slider-item" key={sliderItem.content}>
              <div className="circle-wrapper">
                <svg
                  className="circle-svg"
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
                <div className="year-container">
                  <p className="year text-lg">{sliderItem.year}</p>
                </div>
              </div>
              <p className="content text-xs">{sliderItem.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
