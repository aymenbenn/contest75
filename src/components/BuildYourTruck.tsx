import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const BuildYourTruck = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Title & Subtext */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-1">
              Build Your Truck
            </h2>
            <p className="text-gray-500 text-sm">
              Choose your platform and start customising.
            </p>
          </div>

          {/* Center: Platform Selectors */}
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none bg-[#222] hover:bg-black text-white font-bold uppercase tracking-wide px-8 py-4 transition-colors">
              RAM 2500
            </button>
            <button className="flex-1 lg:flex-none bg-[#f5f5f5] hover:bg-gray-200 text-black font-bold uppercase tracking-wide px-8 py-4 transition-colors">
              CHEV SILVERADO
            </button>
            <button className="flex-1 lg:flex-none bg-[#222] hover:bg-black text-white font-bold uppercase tracking-wide px-8 py-4 transition-colors">
              FORD F250
            </button>
          </div>

          {/* Right: CTA */}
          <button className="w-full lg:w-auto bg-[#B91C1C] hover:bg-red-800 text-white font-bold uppercase tracking-wide px-8 py-4 flex items-center justify-center gap-3 transition-colors group">
            Start Build
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>);

};