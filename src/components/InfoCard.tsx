import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
interface InfoCardProps {
  title: string;
  preview: string;
  iconName: string;
  colorClass: string;
  onClick: () => void;
  index?: number;
}
export function InfoCard({
  title,
  preview,
  iconName,
  colorClass,
  onClick,
  index = 0
}: InfoCardProps) {
  // Dynamically get the icon component
  const Icon = (Icons as any)[iconName] || Icons.InfoIcon;
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.4
      }}
      whileTap={{
        scale: 0.98
      }}
      onClick={onClick}
      className="w-full bg-surface rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow text-left flex flex-col h-full focus-visible:ring-2 focus-visible:ring-primary">
      
      <div className={`h-2 w-full ${colorClass.split(' ')[0]}`} />
      <div className="p-5 flex-1 flex flex-col">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorClass}`}>
          
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-textPrimary mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-textSecondary flex-1 line-clamp-2">
          {preview}
        </p>
        <div className="mt-4 flex items-center text-primary text-sm font-bold">
          Read more
          <Icons.ChevronRightIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </motion.button>);

}