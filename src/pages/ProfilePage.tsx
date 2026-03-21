import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { profileQuestions } from '../data/questions';
interface ProfilePageProps {
  onNext: (answers: Record<string, string | string[]>) => void;
  onBack: () => void;
  isStoreMode: boolean;
}
export function ProfilePage({ onNext, onBack, isStoreMode }: ProfilePageProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const currentQuestion = profileQuestions[step];
  const isMulti = currentQuestion.type === 'multi';
  const currentAnswer = answers[currentQuestion.id] || (isMulti ? [] : '');
  const handleSelect = (optionId: string) => {
    if (isMulti) {
      const currentSelection = currentAnswer as string[] || [];
      // Handle "None of these" exclusive selection
      const isNoneOption =
      currentQuestion.options.find((o) => o.id === optionId)?.label ===
      'None of these';
      let newSelection: string[];
      if (isNoneOption) {
        newSelection = currentSelection.includes(optionId) ? [] : [optionId];
      } else {
        // Remove "None of these" if another option is selected
        const noneOptionId = currentQuestion.options.find(
          (o) => o.label === 'None of these'
        )?.id;
        const filteredSelection = currentSelection.filter(
          (id) => id !== noneOptionId
        );
        if (filteredSelection.includes(optionId)) {
          newSelection = filteredSelection.filter((id) => id !== optionId);
        } else {
          newSelection = [...filteredSelection, optionId];
        }
      }
      setAnswers({
        ...answers,
        [currentQuestion.id]: newSelection
      });
    } else {
      setAnswers({
        ...answers,
        [currentQuestion.id]: optionId
      });
      // Auto-advance for single select after a short delay
      setTimeout(() => handleNextStep(), 400);
    }
  };
  const handleNextStep = () => {
    if (step < profileQuestions.length - 1) {
      setStep(step + 1);
    } else {
      onNext(answers);
    }
  };
  const handleBackStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };
  const canProceed = isMulti ?
  (currentAnswer as string[]).length > 0 :
  currentAnswer !== '';
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header
        title="Your Profile"
        onBack={handleBackStep}
        isStoreMode={isStoreMode} />
      

      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        <ProgressBar
          currentStep={step + 1}
          totalSteps={profileQuestions.length}
          label="Profile Setup" />
        

        <div className="flex-1 mt-8">
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
            
            <QuestionCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedIds={
              isMulti ?
              currentAnswer as string[] :
              [currentAnswer as string]
              }
              onSelect={handleSelect}
              isMulti={isMulti} />
            
          </motion.div>
        </div>

        {isMulti &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mt-8">
          
            <button
            onClick={handleNextStep}
            disabled={!canProceed}
            className={`
                w-full text-lg font-bold rounded-xl touch-target flex items-center justify-center transition-colors
                ${canProceed ? 'bg-primary text-white shadow-md hover:bg-primary-light' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              `}>
            
              Continue
            </button>
          </motion.div>
        }
      </div>
    </div>);

}