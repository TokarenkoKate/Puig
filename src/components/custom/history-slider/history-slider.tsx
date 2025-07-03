import clsx from "clsx";
import "./history-slider.css";

export type SliderItem = {
  year: number;
  content: string;
};

type HistorySliderItemsProps = {
  sliderItems: SliderItem[];
  className?: string;
  itemClassName?: string;
};

export function HistorySlider({
  sliderItems,
  className,
  itemClassName,
}: HistorySliderItemsProps) {
  return (
    <div className={className}>
      <div className="scroller horizontal" data-animated="true">
        <div className="scroller__inner">
          {sliderItems.map((sliderItem) => (
            <div
              className={clsx(itemClassName, "marquee")}
              key={sliderItem.content}
            >
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
                  <p className="year">{sliderItem.year}</p>
                </div>
              </div>
              <p className="content">{sliderItem.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
