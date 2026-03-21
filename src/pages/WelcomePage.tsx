import React from 'react';
import { motion } from 'framer-motion';
import { EarIcon, ArrowRightIcon } from 'lucide-react';
interface WelcomePageProps {
  onStart: () => void;
  onLearn: () => void;
  onStoreModeToggle: () => void;
}
export function WelcomePage({
  onStart,
  onLearn,
  onStoreModeToggle
}: WelcomePageProps) {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-background px-6 py-12 md:py-20"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        x: -20
      }}>
      
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full">
        {/* Hero Illustration Area */}
        <div className="flex-1 flex flex-col items-center justify-center py-8">
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              delay: 0.2,
              type: 'spring'
            }}
            className="relative w-40 h-40 mb-8 flex items-center justify-center">
            
            <div
              className="absolute inset-0 bg-accent/20 rounded-full animate-pulse"
              style={{
                animationDuration: '3s'
              }} />
            
            <div
              className="absolute inset-4 bg-accent/40 rounded-full animate-pulse"
              style={{
                animationDuration: '2s',
                animationDelay: '0.5s'
              }} />
            
            <div className="relative bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <EarIcon className="w-10 h-10" />
            </div>
          </motion.div>

          <motion.h1
            initial={{
              y: 20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: 0.4
            }}
            className="text-4xl md:text-5xl font-bold text-textPrimary text-center mb-4">
            
            How's Your Hearing?
          </motion.h1>

          <motion.p
            initial={{
              y: 20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: 0.5
            }}
            className="text-xl text-textSecondary text-center mb-8">
            
            Take a quick 3-minute screening — it's free, private, and takes just
            a few taps.
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.6
          }}
          className="flex flex-col space-y-4 w-full">
          
          <button
            onClick={onStart}
            className="w-full bg-primary text-white text-lg font-bold rounded-xl touch-target flex items-center justify-center shadow-md hover:bg-primary-light transition-colors">
            
            Start My Screening
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>

          <button
            onClick={onLearn}
            className="w-full bg-surface text-primary border-2 border-primary/20 text-lg font-bold rounded-xl touch-target flex items-center justify-center hover:bg-primary/5 transition-colors">
            
            Learn About Hearing Health
          </button>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1
          }}
          className="mt-12 text-center">
          
          <button
            onClick={onStoreModeToggle}
            className="text-sm text-textSecondary hover:text-primary underline underline-offset-4 p-2">
            
            Staff? Enter Store Mode
          </button>
        </motion.div>
      </div>
    </motion.div>);

}