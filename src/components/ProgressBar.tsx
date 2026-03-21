import React from 'react';
import { motion } from 'framer-motion';
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
}
export function ProgressBar({
  currentStep,
  totalSteps,
  label
}: ProgressBarProps) {
  // Ensure currentStep is between 1 and totalSteps
  const safeStep = Math.max(1, Math.min(currentStep, totalSteps));
  const progress = safeStep / totalSteps * 100;
  return (
    <div
      className="w-full py-4"
      role="progressbar"
      aria-valuenow={safeStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={label || `Step ${safeStep} of ${totalSteps}`}>
      
      <div className="flex justify-between items-center mb-2 px-1">
        <span className="text-sm font-medium text-textSecondary">
          {label || `Step ${safeStep} of ${totalSteps}`}
        </span>
      </div>

      <div className="relative h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary rounded-full"
          initial={{
            width: 0
          }}
          animate={{
            width: `${progress}%`
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut'
          }} />
        
      </div>

      {/* Optional: Dots representation for shorter flows */}
      {totalSteps <= 5 &&
      <div className="flex justify-between mt-3 px-1" aria-hidden="true">
          {Array.from({
          length: totalSteps
        }).map((_, i) =>
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${i < safeStep ? 'bg-primary' : 'bg-border'} ${i === safeStep - 1 ? 'ring-4 ring-primary/20' : ''}`} />

        )}
        </div>
      }
    </div>);

}