import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { MailIcon, CheckCircleIcon } from 'lucide-react';
interface EmailCapturePageProps {
  onSubmit: (email: string, name: string) => void;
  onSkip: () => void;
  isStoreMode: boolean;
}
export function EmailCapturePage({
  onSubmit,
  onSkip,
  isStoreMode
}: EmailCapturePageProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSubmit(email, name);
      }, 1500);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header
        title="Save Your Results"
        onBack={onSkip}
        isStoreMode={isStoreMode} />
      

      <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center py-6">
        {isSuccess ?
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          className="flex flex-col items-center text-center p-8 bg-surface rounded-2xl border border-border shadow-sm">
          
            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-textPrimary mb-2">Sent!</h2>
            <p className="text-textSecondary">
              Your results are on their way to your inbox.
            </p>
          </motion.div> :

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}>
          
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MailIcon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-textPrimary mb-4">
                Keep your results handy
              </h2>
              <p className="text-lg text-textSecondary">
                We'll send a detailed copy of your screening results straight to
                your inbox.
              </p>
            </div>

            <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-surface p-6 rounded-2xl border border-border shadow-sm">
            
              <div>
                <label
                htmlFor="name"
                className="block text-sm font-bold text-textPrimary mb-2">
                
                  First Name (Optional)
                </label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
                placeholder="e.g. Jane" />
              
              </div>

              <div>
                <label
                htmlFor="email"
                className="block text-sm font-bold text-textPrimary mb-2">
                
                  Email Address
                </label>
                <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
                placeholder="you@example.com" />
              
              </div>

              <label className="flex items-start space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-1">
                  <input
                  type="checkbox"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="sr-only" />
                
                  <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${optIn ? 'bg-primary border-primary' : 'border-textSecondary group-hover:border-primary'}`}>
                  
                    {optIn &&
                  <CheckCircleIcon
                    className="w-4 h-4 text-white"
                    strokeWidth={3} />

                  }
                  </div>
                </div>
                <span className="text-sm text-textSecondary leading-tight">
                  I'd like to receive occasional tips on hearing health and
                  exclusive offers.
                </span>
              </label>

              <button
              type="submit"
              disabled={!email || isSubmitting}
              className={`
                  w-full text-lg font-bold rounded-xl touch-target flex items-center justify-center transition-colors
                  ${!email || isSubmitting ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-primary text-white shadow-md hover:bg-primary-light'}
                `}>
              
                {isSubmitting ? 'Sending...' : 'Send My Results'}
              </button>

              <p className="text-xs text-center text-textSecondary mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-8 text-center">
              <button
              type="button"
              onClick={onSkip}
              className="text-textSecondary hover:text-primary font-medium p-4 touch-target">
              
                Skip for now
              </button>
            </div>
          </motion.div>
        }
      </div>
    </div>);

}