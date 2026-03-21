import React from 'react';
import { ArrowLeftIcon, BuildingIcon, RotateCcwIcon } from 'lucide-react';
interface HeaderProps {
  title?: string;
  onBack?: () => void;
  onReset?: () => void;
  isStoreMode?: boolean;
  showReset?: boolean;
}
export function Header({
  title,
  onBack,
  onReset,
  isStoreMode,
  showReset
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface border-b border-border z-40 flex items-center justify-between px-4 shadow-sm">
      <div className="w-12 flex items-center justify-start">
        {onBack &&
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-textSecondary hover:text-primary rounded-full focus-visible:ring-2 focus-visible:ring-primary touch-target flex items-center justify-center"
          aria-label="Go back">
          
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        }
      </div>

      <h1 className="text-lg font-bold text-textPrimary text-center flex-1 truncate px-2">
        {title || 'Hearing Screening'}
      </h1>

      <div className="w-12 flex items-center justify-end">
        {isStoreMode &&
        <div
          className="bg-primary text-white text-xs font-bold px-2 py-1 rounded flex items-center"
          title="Store Mode Active">
          
            <BuildingIcon className="w-4 h-4" />
          </div>
        }
        {showReset && onReset && !isStoreMode &&
        <button
          onClick={onReset}
          className="p-2 -mr-2 text-textSecondary hover:text-primary rounded-full focus-visible:ring-2 focus-visible:ring-primary touch-target flex items-center justify-center"
          aria-label="Restart screening">
          
            <RotateCcwIcon className="w-5 h-5" />
          </button>
        }
      </div>
    </header>);

}