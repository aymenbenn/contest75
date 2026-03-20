import React from 'react'
import {
  TruckIcon,
  HardHatIcon,
  WrenchIcon,
  ShieldCheckIcon,
} from 'lucide-react'
export const TrustBar = () => {
  const features = [
    {
      icon: TruckIcon,
      text: 'Australia Wide Delivery',
    },
    {
      icon: HardHatIcon,
      text: 'American Truck Experts',
    },
    {
      icon: WrenchIcon,
      text: 'Custom Builds',
    },
    {
      icon: ShieldCheckIcon,
      text: 'Authorised GMSV Reseller',
      prefix: 'GMSV>',
    },
  ]
  return (
    <section className="w-full bg-[#f8f8f8] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gray-300">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 px-4 group cursor-pointer"
              >
                {feature.prefix ? (
                  <span className="text-[#B91C1C] font-black italic tracking-tighter text-xl group-hover:scale-110 transition-transform">
                    {feature.prefix}
                  </span>
                ) : (
                  <Icon
                    className="w-8 h-8 text-[#B91C1C] group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                )}
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
