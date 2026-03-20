import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
export const CategoryCards = () => {
  const cards = [
  {
    title: 'Trucks For Sale',
    bgPosition: '0% 50%'
  },
  {
    title: 'Accessories',
    bgPosition: '33% 50%'
  },
  {
    title: 'Custom Builds',
    bgPosition: '66% 50%'
  },
  {
    title: 'GMSV',
    bgPosition: '100% 50%'
  }];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) =>
          <a
            key={index}
            href="#"
            className="relative h-[240px] group overflow-hidden block cursor-pointer">
            
              {/* Background Image - Using the hero image and shifting position to simulate different images */}
              <div
              className="absolute inset-0 w-full h-full bg-cover transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                'url("https://cdn.magicpatterns.com/uploads/1npUAUEkB8psTYAKAAeMRp/ChatGPT_Image_Mar_16,_2026,_02_49_45_PM.png")',
                backgroundPosition: card.bgPosition
              }} />
            

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between">
                <h3 className="text-white text-xl font-black uppercase tracking-wide">
                  {card.title}
                </h3>
                <ChevronRightIcon className="w-6 h-6 text-[#B91C1C] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

};