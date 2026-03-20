import React from 'react';
import { SearchIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center cursor-pointer">
          <div className="flex items-baseline mr-2">
            {/* Approximating the TT logo with stars/stripes motif using colors and styling */}
            <span className="text-blue-800 text-4xl font-black italic tracking-tighter relative">
              T{/* Decorative stars approximation */}
              <span className="absolute top-1 left-1 flex gap-[1px]">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
              </span>
            </span>
            <span className="text-[#B91C1C] text-4xl font-black italic tracking-tighter -ml-1">
              T
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter text-black uppercase">
            Tough Trucks<span className="text-lg align-top">*</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'Trucks For Sale', 'Accessories', 'Builds', 'GMSV'].map(
            (item) =>
            <a
              key={item}
              href="#"
              className="text-sm font-bold text-gray-900 uppercase tracking-wide hover:text-[#B91C1C] hover:underline underline-offset-8 decoration-2 transition-all">
              
                {item}
              </a>

          )}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button
            className="text-gray-900 hover:text-[#B91C1C] transition-colors"
            aria-label="Search">
            
            <SearchIcon className="w-6 h-6" />
          </button>
          <button
            className="text-gray-900 hover:text-[#B91C1C] transition-colors"
            aria-label="Account">
            
            <UserIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>);

};