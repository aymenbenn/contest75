import React from 'react';
import { EarIcon, BookOpenIcon, MapPinIcon } from 'lucide-react';
interface BottomNavProps {
  activeTab: 'screen' | 'learn' | 'store';
  onTabChange: (tab: 'screen' | 'learn' | 'store') => void;
}
export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
  {
    id: 'screen',
    label: 'Screening',
    icon: EarIcon
  },
  {
    id: 'learn',
    label: 'Learn',
    icon: BookOpenIcon
  },
  {
    id: 'store',
    label: 'Stores',
    icon: MapPinIcon
  }] as
  const;
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border pb-safe z-40">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full touch-target focus-visible:ring-inset ${isActive ? 'text-primary' : 'text-textSecondary hover:text-primary'}`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}>
              
              <Icon
                className={`w-6 h-6 mb-1 ${isActive ? 'fill-primary/10' : ''}`} />
              
              <span
                className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>
                
                {tab.label}
              </span>
            </button>);

        })}
      </div>
    </nav>);

}