import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { ResultsChart } from '../components/ResultsChart';
import { scoringConfig } from '../data/scoringConfig';
import { MailIcon, CalendarIcon } from 'lucide-react';
interface ResultsPageProps {
  score: number;
  onEmailResults: () => void;
  onBookAppointment: () => void;
  onReset: () => void;
  isStoreMode: boolean;
}
export function ResultsPage({
  score,
  onEmailResults,
  onBookAppointment,
  onReset,
  isStoreMode
}: ResultsPageProps) {
  // Determine zone
  let zoneConfig = scoringConfig.thresholds.red;
  if (score >= scoringConfig.thresholds.green.min) {
    zoneConfig = scoringConfig.thresholds.green;
  } else if (score >= scoringConfig.thresholds.amber.min) {
    zoneConfig = scoringConfig.thresholds.amber;
  }
  // Mock category scores based on overall score for visualization
  const categoryScores = [
  {
    name: 'Speech',
    score: Math.min(100, score + 5)
  },
  {
    name: 'Noise',
    score: Math.max(0, score - 10)
  },
  {
    name: 'Awareness',
    score: score
  }];

  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header
        title="Your Results"
        onReset={onReset}
        showReset={true}
        isStoreMode={isStoreMode} />
      

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
          className="text-center mb-8">
          
          <h2 className="text-3xl font-bold text-textPrimary mb-2">
            {zoneConfig.label}
          </h2>
          <p className="text-lg text-textSecondary">
            Based on your screening responses
          </p>
        </motion.div>

        <ResultsChart
          score={score}
          zoneColor={zoneConfig.color}
          categoryScores={categoryScores} />
        

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.8
          }}
          className="bg-surface rounded-xl p-6 border border-border mt-8 shadow-sm">
          
          <h3 className="font-bold text-textPrimary mb-2">What This Means</h3>
          <p className="text-textSecondary">{zoneConfig.description}</p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 1
          }}
          className="mt-10 space-y-4">
          
          <button
            onClick={onEmailResults}
            className="w-full bg-primary text-white text-lg font-bold rounded-xl touch-target flex items-center justify-center shadow-md hover:bg-primary-light transition-colors">
            
            <MailIcon className="w-5 h-5 mr-2" />
            Get Results by Email
          </button>

          <button
            onClick={onBookAppointment}
            className="w-full bg-surface text-primary border-2 border-primary text-lg font-bold rounded-xl touch-target flex items-center justify-center hover:bg-primary/5 transition-colors">
            
            <CalendarIcon className="w-5 h-5 mr-2" />
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </div>);

}