import React from 'react';
import { motion } from 'framer-motion';
import { AnswerOption } from '../data/questions';
import { CheckIcon } from 'lucide-react';
interface QuestionCardProps {
  question: string;
  options: AnswerOption[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  isMulti?: boolean;
}
export function QuestionCard({
  question,
  options,
  selectedIds,
  onSelect,
  isMulti = false
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-8 text-center">
        {question}
      </h2>

      <div className="flex flex-col space-y-4">
        {options.map((option, index) => {
          const isSelected = selectedIds.includes(option.id);
          return (
            <motion.button
              key={option.id}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.1
              }}
              whileTap={{
                scale: 0.98
              }}
              onClick={() => onSelect(option.id)}
              className={`
                relative w-full text-left p-4 rounded-xl border-2 transition-all duration-200 touch-target flex items-center justify-between
                ${isSelected ? 'border-primary bg-primary text-white shadow-md' : 'border-border bg-surface text-textPrimary hover:border-primary/50 shadow-sm'}
              `}
              aria-pressed={isSelected}
              role={isMulti ? 'checkbox' : 'radio'}>
              
              <span className="text-lg font-medium pr-8">{option.label}</span>

              <div
                className={`
                flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${isSelected ? 'border-white bg-white' : 'border-textSecondary/30'}
                ${isMulti ? 'rounded-md' : 'rounded-full'}
              `}>
                
                {isSelected &&
                <CheckIcon className="w-4 h-4 text-primary" strokeWidth={3} />
                }
              </div>
            </motion.button>);

        })}
      </div>

      {isMulti &&
      <p className="text-center text-sm text-textSecondary mt-6">
          Select all that apply
        </p>
      }
    </div>);

}