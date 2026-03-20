import React from 'react';
import { Headphones, PlayCircle, Youtube, Music } from 'lucide-react';
export function StreamingLinks() {
  const platforms = [
  {
    name: 'Apple Podcasts',
    icon: Headphones,
    color: 'hover:text-brand-purple',
    href: '#'
  },
  {
    name: 'Spotify',
    icon: PlayCircle,
    color: 'hover:text-brand-teal',
    href: '#'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    color: 'hover:text-hot-pink',
    href: '#'
  },
  {
    name: 'Amazon Music',
    icon: Music,
    color: 'hover:text-brand-orange',
    href: '#'
  }];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
      {platforms.map((platform) => {
        const Icon = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.href}
            className={`flex flex-col items-center group transition-colors duration-300 ${platform.color}`}
            aria-label={`Listen on ${platform.name}`}>
            
            <div className="w-12 h-12 rounded-full border border-brand-teal flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 bg-brand-cream">
              <Icon className="w-5 h-5 text-brand-charcoal group-hover:text-current transition-colors duration-300" />
            </div>
            <span className="text-xs uppercase tracking-widest font-medium text-brand-charcoal">
              {platform.name}
            </span>
          </a>);

      })}
    </div>);

}