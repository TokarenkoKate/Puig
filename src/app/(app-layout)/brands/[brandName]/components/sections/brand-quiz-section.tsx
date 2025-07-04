import MultiStepQuizModal from "@/components/custom/multi-step-quiz/multi-step-quiz";
import { MultiStepQuizStep } from "@/lib/types/components";

export function BrandQuizSection({
  title,
  steps,
}: {
  title: string;
  steps: MultiStepQuizStep[];
}) {
  return (
    <div className="test-wrapper w-fixed bg-animated carolina">
      <div className="test-content">
        <p>Проверь себя</p>
        <h1 className="test-title">{`Тест ${title}`}</h1>
        <MultiStepQuizModal steps={steps} />
      </div>
    </div>
  );
}
