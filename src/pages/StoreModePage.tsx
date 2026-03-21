import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { QRCodeDisplay } from '../components/QRCodeDisplay';
import { BuildingIcon, PlayIcon, RotateCcwIcon, LockIcon } from 'lucide-react';
interface StoreModePageProps {
  onStartAssisted: () => void;
  onExitStoreMode: () => void;
}
export function StoreModePage({
  onStartAssisted,
  onExitStoreMode
}: StoreModePageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  // Mock session URL for QR code
  const sessionUrl = 'https://hearing-screening.app/session/12345';
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPin('');
    }
  };
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background pt-16 px-4 flex flex-col items-center justify-center">
        <Header title="Staff Access" onBack={onExitStoreMode} />
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          className="w-full max-w-sm bg-surface p-8 rounded-2xl border border-border shadow-md">
          
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <LockIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Enter Staff PIN
          </h2>
          <form onSubmit={handlePinSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={`w-full text-center text-3xl tracking-widest p-4 rounded-xl border-2 outline-none transition-colors mb-4 ${error ? 'border-danger focus:border-danger' : 'border-border focus:border-primary'}`}
              placeholder="••••"
              maxLength={4}
              autoFocus />
            
            {error &&
            <p className="text-danger text-sm text-center mb-4">
                Incorrect PIN. Try 1234.
              </p>
            }
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl touch-target">
              
              Unlock
            </button>
          </form>
        </motion.div>
      </div>);

  }
  return (
    <div className="min-h-screen bg-background pt-16 pb-24 px-4 flex flex-col">
      <Header title="Store Dashboard" isStoreMode={true} />

      <div className="max-w-4xl mx-auto w-full py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Actions */}
        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center mb-6">
              <BuildingIcon className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-xl font-bold text-textPrimary">
                Assisted Screening
              </h2>
            </div>
            <p className="text-textSecondary mb-6">
              Walk a customer through the screening process on this device.
            </p>
            <button
              onClick={onStartAssisted}
              className="w-full bg-primary text-white text-lg font-bold rounded-xl py-4 flex items-center justify-center shadow-md hover:bg-primary-light transition-colors">
              
              <PlayIcon className="w-5 h-5 mr-2 fill-current" />
              Start New Session
            </button>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-textPrimary mb-4">
              Session Management
            </h2>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4">
              <span className="text-textSecondary font-medium">
                Screenings Today
              </span>
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            <button
              onClick={onExitStoreMode}
              className="w-full bg-white text-danger border-2 border-danger/20 text-lg font-bold rounded-xl py-4 flex items-center justify-center hover:bg-danger/5 transition-colors">
              
              <RotateCcwIcon className="w-5 h-5 mr-2" />
              Exit Store Mode
            </button>
          </div>
        </div>

        {/* Right Column: QR Code */}
        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-textPrimary mb-2 text-center">
            Self-Service
          </h2>
          <p className="text-textSecondary mb-8 text-center">
            Customers can scan this code to take the screening on their own
            phone.
          </p>
          <QRCodeDisplay url={sessionUrl} />
        </div>
      </div>
    </div>);

}