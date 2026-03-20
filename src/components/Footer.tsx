import React from 'react';
import { Instagram, Music2 } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-blush border-t border-brand-teal py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <img
          src="/gpt-image-1.5-high-fidelity_a_I\u2019m_getting_ready_to_(1).png"
          alt="Proof of Life Logo"
          className="h-12 w-auto object-contain mb-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        

        <div className="flex space-x-6 mb-8">
          <a
            href="#"
            className="text-brand-charcoal hover:text-hot-pink transition-colors"
            aria-label="Instagram">
            
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-brand-charcoal hover:text-brand-teal transition-colors"
            aria-label="TikTok">
            
            <Music2 className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm font-sans text-brand-charcoal/70 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Proof of Life Podcast.</p>
          <p className="mt-2">All rights reserved.</p>
        </div>
      </div>
    </footer>);

}