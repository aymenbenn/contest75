import React from 'react';

export const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image from public folder */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/banner.png")', // <-- use your banner.png here
          backgroundPosition: 'center 20%',
        }}
      />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:w-2/3" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase mb-2">
            Making Trucks
          </h2>
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="text-6xl md:text-8xl font-black italic text-[#B91C1C] leading-none tracking-tighter"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Tough
            </span>
            <span className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase">
              Again
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2 md:gap-4 text-sm md:text-base font-bold text-gray-800 uppercase tracking-widest mb-10">
            <span>Sales</span>
            <span className="text-[#B91C1C]">•</span>
            <span>Parts</span>
            <span className="text-[#B91C1C]">•</span>
            <span>Accessories</span>
            <span className="text-[#B91C1C]">•</span>
            <span>Custom Builds</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#B91C1C] hover:bg-red-800 text-white font-bold uppercase tracking-wide px-8 py-4 transition-colors">
              View Trucks
            </button>
            <button className="bg-white hover:bg-gray-50 text-black border-2 border-gray-200 font-bold uppercase tracking-wide px-8 py-4 transition-colors">
              Shop Accessories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};