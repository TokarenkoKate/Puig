import MultiStepQuizModal from "@/components/custom/multi-step-quiz/multi-step-quiz";
import { MultiStepQuizStep } from "@/lib/types/components";
import { BrandName } from "@/lib/types/general";
import clsx from "clsx";

export function BrandQuizSection({
  title,
  steps,
  brandName,
}: {
  title: string;
  steps: MultiStepQuizStep[];
  brandName: BrandName;
}) {
  const backgroundImage = `
    url("/assets/images/brands/${brandName}/footer/1bg.png"),
    url("/assets/images/brands/${brandName}/footer/2bg.png"),
    url("/assets/images/brands/${brandName}/footer/3bg.png"),
    url("/assets/images/brands/${brandName}/footer/4bg.png")`;

  return (
    <div
      className={clsx("test-wrapper w-fixed bg-animated carolina", {
        [brandName]: brandName,
      })}
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="test-content">
        <p>Проверь себя</p>
        <h1 className="test-title">{`Тест ${title}`}</h1>
        <MultiStepQuizModal steps={steps} />
      </div>
    </div>
  );
}
