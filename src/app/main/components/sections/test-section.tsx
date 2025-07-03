import { multiStepQuiz } from "../../lib/placeholder-data";
import MultiStepQuizModal from "../multi-step-quiz/multi-step-quiz";

export function TestSection() {
  return (
    <footer className="footer">
      <section className="footer__wrapper pt-2">
        <div className="w-fixed footer__content">
          <div className="row">
            <h1 className="footer__title">Тест PUIG</h1>
            <MultiStepQuizModal steps={multiStepQuiz} />
          </div>
        </div>
      </section>
    </footer>
  );
}
