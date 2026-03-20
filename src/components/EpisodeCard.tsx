import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
interface EpisodeCardProps {
  number: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  listenLink?: string;
}
export function EpisodeCard({
  number,
  title,
  date,
  duration,
  description,
  listenLink = '#'
}: EpisodeCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -4,
        boxShadow: '0 10px 30px -10px rgba(74, 191, 191, 0.2)'
      }}
      className="w-full max-w-3xl mx-auto bg-brand-cream p-1 border border-brand-teal transition-all duration-300">
      
      <div className="border border-brand-teal p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-r border-b border-brand-teal" />
        <div className="absolute top-0 right-0 w-2 h-2 border-l border-b border-brand-teal" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-r border-t border-brand-teal" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t border-brand-teal" />

        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center border border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(45,45,45,1)]">
            <span className="font-playfair font-bold text-xl text-brand-charcoal">
              #{number}
            </span>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 justify-center sm:justify-start">
            <span className="text-xs uppercase tracking-widest text-brand-teal font-bold">
              {date}
            </span>
            <span className="hidden sm:inline text-brand-teal">•</span>
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">
              {duration}
            </span>
          </div>

          <h3 className="text-2xl font-playfair font-bold mb-3 text-brand-charcoal leading-tight">
            {title}
          </h3>

          <p className="text-brand-charcoal/80 mb-6 leading-relaxed max-w-2xl">
            {description}
          </p>

          <a
            href={listenLink}
            className="inline-flex items-center justify-center px-6 py-2 bg-hot-pink text-white font-sans text-sm uppercase tracking-widest font-bold border border-transparent hover:bg-brand-cream hover:text-hot-pink hover:border-hot-pink transition-colors duration-300">
            
            <Play className="w-4 h-4 mr-2" />
            Listen Now
          </a>
        </div>
      </div>
    </motion.article>);

}