import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { AudioTestCard } from '../components/AudioTestCard';
import { testQuestions } from '../data/questions';
interface HearingTestPageProps {
  onComplete: (score: number, answers: Record<string, string>) => void;
  onReset: () => void;
  isStoreMode: boolean;
}
export function HearingTestPage({
  onComplete,
  onReset,
  isStoreMode
}: HearingTestPageProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const currentQuestion = testQuestions[step];
  const handleSelect = (optionId: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: optionId
    };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (step < testQuestions.length - 1) {
        setStep(step + 1);
      } else {
        calculateAndComplete(newAnswers);
      }
    }, 400);
  };
  const calculateAndComplete = (finalAnswers: Record<string, string>) => {
    let totalScore = 0;
    testQuestions.forEach((q) => {
      const selectedOptionId = finalAnswers[q.id];
      const option = q.options.find((o) => o.id === selectedOptionId);
      if (option && option.score !== undefined) {
        totalScore += option.score;
      }
    });
    // Cap at 100 and round
    const finalScore = Math.min(100, Math.round(totalScore));
    onComplete(finalScore, finalAnswers);
  };
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header
        title="Hearing Screening"
        onReset={onReset}
        showReset={true}
        isStoreMode={isStoreMode} />
      

      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        <ProgressBar
          currentStep={step + 1}
          totalSteps={testQuestions.length}
          label={`Question ${step + 1} of ${testQuestions.length}`} />
        

        <div className="flex-1 mt-6">
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            transition={{
              duration: 0.3
            }}>
            
            {currentQuestion.type === 'audio' ?
            <AudioTestCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              onSelect={handleSelect} /> :


            <QuestionCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedIds={[answers[currentQuestion.id] || '']}
              onSelect={handleSelect} />

            }
          </motion.div>
        </div>
      </div>
    </div>);

}