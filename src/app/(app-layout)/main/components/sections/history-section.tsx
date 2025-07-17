import { HistorySlider } from "@/components/custom/history-slider/history-slider";
import { mainPageHistorySliderItems } from "@/data/main-page-data";

export function HistorySection() {
  return (
    <section className="history w-fixed horizontal">
      <h2 className="history__title heading-3">История PUIG ―</h2>
      <HistorySlider sliderItems={mainPageHistorySliderItems} />
    </section>
  );
}
