import { MoveLeft, MoveRight } from "lucide-react";
import { HistorySlider } from "@/components/custom/history-slider/history-slider";
import { Button } from "@/components/ui/button";
import { mainPageHistorySliderItems } from "@/data/main-page-data";

export function HistorySection() {
  return (
    <section className="history w-fixed horizontal">
      <h2 className="history__title heading-3">История PUIG ―</h2>
      <div className="history__button-group">
        <Button className="history__button" variant="ghost">
          <MoveLeft width={15} height={15} />
        </Button>
        <Button className="history__button" variant="ghost">
          <MoveRight width={15} height={15} />
        </Button>
      </div>
      <HistorySlider sliderItems={mainPageHistorySliderItems} />
    </section>
  );
}
