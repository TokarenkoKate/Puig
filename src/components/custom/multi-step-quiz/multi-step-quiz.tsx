"use client";

import * as React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MultiStepQuizStep } from "@/lib/types/components";
import "./multi-step-quiz.css";

export default function MultiStepQuizModal({
  steps,
}: {
  steps: MultiStepQuizStep[];
}) {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const [showResult, setShowResult] = React.useState(false);

  const currentQuestion = steps[step];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    if (step + 1 < steps.length) {
      setStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        restartQuiz();
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="text-base">
          пройти тест
        </Button>
      </DialogTrigger>
      <DialogContent className="quiz">
        {showResult ? (
          <div className="quiz__result">
            <p>Спасибо за прохождение теста!</p>
            <p>
              Правильных ответов: <strong>{score}</strong> из{" "}
              <strong>{steps.length}</strong>
            </p>

            <div className="quiz__buttons">
              <Button onClick={restartQuiz} variant="secondary">
                Пройти снова
              </Button>
              <Button onClick={closeModal}>Закрыть</Button>
            </div>
          </div>
        ) : (
          <div className="quiz__step">
            <div>
              <p className="text-sm">
                Вопрос {step + 1} из {steps.length}
              </p>
              <h2 className="heading-4">{currentQuestion.question}</h2>
            </div>
            <div className="quiz__options">
              {currentQuestion.answers.map((answer) => (
                <Button
                  key={answer}
                  variant="outline"
                  className="quiz__option"
                  onClick={() => handleAnswer(answer)}
                >
                  {answer}
                </Button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
