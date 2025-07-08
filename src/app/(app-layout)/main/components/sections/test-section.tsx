import MultiStepQuizModal from "@/components/custom/multi-step-quiz/multi-step-quiz";
import { mainPageMultiStepQuiz } from "@/data/main-page-data";

export function TestSection() {
  return (
    <footer className="footer">
      <section className="footer__wrapper pt-2">
        <div className="w-fixed footer__content">
          <div className="row">
            <h2 className="footer__title heading-1">Тест PUIG</h2>
            <MultiStepQuizModal steps={mainPageMultiStepQuiz} />
          </div>
        </div>
      </section>
    </footer>
  );
}
