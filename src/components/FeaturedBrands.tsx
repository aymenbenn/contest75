import React from 'react';
export const FeaturedBrands = () => {
  return (
    <section className="w-full bg-white py-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header with Lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gray-200 flex-1 max-w-[200px]"></div>
          <h3 className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em] px-6">
            Featured Brands
          </h3>
          <div className="h-px bg-gray-200 flex-1 max-w-[200px]"></div>
        </div>

        {/* Brands Grid - Using styled text to approximate logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* FOX */}
          <div className="text-4xl font-black italic tracking-tighter text-black">
            FOX
          </div>

          {/* BILSTEIN */}
          <div className="text-3xl font-black text-black tracking-widest">
            BILSTEIN
          </div>

          {/* ROUGH COUNTRY */}
          <div className="text-2xl font-black italic text-black tracking-tight">
            ROUGH COUNTRY
          </div>

          {/* FUEL OFF-ROAD */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black text-black tracking-tighter flex items-center gap-1">
              <span className="text-4xl">F</span>UEL
            </div>
            <div className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
              Off-Road
            </div>
          </div>

          {/* BAJA DESIGNS */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-black flex items-center justify-center rotate-45">
              <div className="w-2 h-2 bg-black -rotate-45"></div>
            </div>
            <div className="text-xl font-bold text-black tracking-widest">
              BAJA DESIGNS
            </div>
          </div>

          {/* AMP RESEARCH */}
          <div className="text-2xl font-black text-black tracking-tighter border-y-2 border-black py-1">
            AMP<span className="font-normal">RESEARCH</span>
          </div>
        </div>
      </div>
    </section>);

};