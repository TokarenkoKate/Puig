import { HistorySlider } from "@/components/custom/history-slider/history-slider";
import { SliderItem } from "@/lib/types/components";

export function BrandHistorySection({
  sliderItems,
}: {
  sliderItems: SliderItem[];
}) {
  return (
    <section className="w-fixed">
      <HistorySlider sliderItems={sliderItems} />
    </section>
  );
}
