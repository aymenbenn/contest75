import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnswerOption } from '../data/questions';
import { Volume2Icon, PlayIcon } from 'lucide-react';
interface AudioTestCardProps {
  question: string;
  options: AnswerOption[];
  onSelect: (id: string) => void;
}
export function AudioTestCard({
  question,
  options,
  onSelect
}: AudioTestCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  // Simulate audio playing
  const handlePlay = () => {
    setIsPlaying(true);
    setHasPlayed(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border mb-8 text-center">
        <div className="mb-6 h-24 flex items-center justify-center">
          {isPlaying ?
          <div className="flex items-center space-x-1 h-12">
              {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((bar, i) =>
            <motion.div
              key={i}
              className="w-2 bg-primary rounded-full"
              animate={{
                height: ['20%', '100%', '20%']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut'
              }} />

            )}
            </div> :

          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Volume2Icon className="w-8 h-8" />
            </div>
          }
        </div>

        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className={`
            inline-flex items-center justify-center px-6 py-3 rounded-full font-bold touch-target transition-colors
            ${isPlaying ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-light'}
          `}
          aria-label="Play test sound">
          
          {isPlaying ?
          'Playing...' :

          <>
              <PlayIcon className="w-5 h-5 mr-2 fill-current" />
              {hasPlayed ? 'Play Again' : 'Play Sound'}
            </>
          }
        </button>

        <p className="text-sm text-textSecondary mt-4">
          Make sure your device volume is turned up.
        </p>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: hasPlayed ? 1 : 0.5
        }}
        className="pointer-events-auto">
        
        <h2 className="text-2xl font-bold text-textPrimary mb-6 text-center">
          {question}
        </h2>

        <div className="flex flex-col space-y-4">
          {options.map((option, index) =>
          <button
            key={option.id}
            disabled={!hasPlayed}
            onClick={() => onSelect(option.id)}
            className={`
                w-full text-center p-4 rounded-xl border-2 transition-all duration-200 touch-target text-lg font-medium
                ${hasPlayed ? 'border-border bg-surface text-textPrimary hover:border-primary hover:bg-primary/5 active:scale-95' : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'}
              `}>
            
              {option.label}
            </button>
          )}
        </div>
      </motion.div>
    </div>);

}