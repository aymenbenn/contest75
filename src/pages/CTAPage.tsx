import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import {
  CalendarIcon,
  MapPinIcon,
  BookOpenIcon,
  ChevronRightIcon,
  RotateCcwIcon } from
'lucide-react';
interface CTAPageProps {
  onLearn: () => void;
  onReset: () => void;
  isStoreMode: boolean;
}
export function CTAPage({ onLearn, onReset, isStoreMode }: CTAPageProps) {
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header title="Next Steps" isStoreMode={isStoreMode} />

      <div className="max-w-md mx-auto w-full flex-1 flex flex-col py-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-8">
          
          <h2 className="text-3xl font-bold text-textPrimary mb-4">
            Take action for your hearing health
          </h2>
          <p className="text-lg text-textSecondary">
            Choose how you'd like to proceed based on your results.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.button
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.1
            }}
            whileTap={{
              scale: 0.98
            }}
            className="w-full bg-primary text-white rounded-2xl p-6 flex items-center text-left shadow-md hover:bg-primary-light transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
            
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">
                Book a Free Consultation
              </h3>
              <p className="text-white/80 text-sm">
                Schedule an in-depth evaluation with our specialists.
              </p>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-white/50" />
          </motion.button>

          <motion.button
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            whileTap={{
              scale: 0.98
            }}
            className="w-full bg-surface text-textPrimary rounded-2xl p-6 flex items-center text-left border border-border shadow-sm hover:border-primary/50 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
            
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-accent-dark" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">
                Find Your Nearest Store
              </h3>
              <p className="text-textSecondary text-sm">
                Locate an optician or hearing center near you.
              </p>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-textSecondary/50" />
          </motion.button>

          <motion.button
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.3
            }}
            whileTap={{
              scale: 0.98
            }}
            onClick={onLearn}
            className="w-full bg-surface text-textPrimary rounded-2xl p-6 flex items-center text-left border border-border shadow-sm hover:border-primary/50 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
            
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <BookOpenIcon className="w-6 h-6 text-teal-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Learn About Hearing</h3>
              <p className="text-textSecondary text-sm">
                Explore our educational hub and resources.
              </p>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-textSecondary/50" />
          </motion.button>
        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.6
          }}
          className="mt-12 text-center">
          
          <button
            onClick={onReset}
            className="inline-flex items-center text-textSecondary hover:text-primary font-medium p-4 touch-target">
            
            <RotateCcwIcon className="w-5 h-5 mr-2" />
            Start a New Screening
          </button>
        </motion.div>
      </div>
    </div>);

}