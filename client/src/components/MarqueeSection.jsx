import React from 'react';

export default function MarqueeSection() {
  const marqueeItems = [
    'Regional Logistics Corridors',
    'GIDC Industrial Networks',
    'National Route Transport',
    'Eicher Pro Cargo Fleet',
    'Kadi Mehsana Hub Strength',
    'Active Dispatch Updates',
    'Proprietor MR ANKIT PATEL',
    'Gujarat & North/West/Central India Coverage',
  ];

  // Repeat items to ensure smooth infinite loop coverage
  const itemsList = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-brand-orange py-4 overflow-hidden border-y border-brand-orange/20 select-none pointer-events-none relative z-10 flex">
      <div className="animate-marquee whitespace-nowrap flex space-x-12 pr-12">
        {itemsList.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 text-white font-heading font-extrabold text-sm uppercase tracking-widest">
            <span>{item}</span>
            <span className="text-brand-navy text-lg font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
