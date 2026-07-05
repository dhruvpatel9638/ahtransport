import React, { useState } from 'react';
import { Shield, Truck, Compass, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FleetSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const fleet = [
    {
      name: 'Eicher Pro 3015',
      tagline: 'Optimal for Regional & Intermediate long-haul distribution',
      payload: '10.5 Tons Capacity',
      deckLength: '19 to 24 feet cargo body options',
      engine: 'E494 4-Cylinder CRS Engine',
      optimalFreight: 'FMCG, industrial spares, packaging raw materials, auto parts, e-commerce loads.',
      features: [
        'Advanced fuel efficiency system',
        'Cruise control for stable highway speeds',
        'Reinforced chassis frame configuration',
      ],
      badge: 'Medium-Duty Cargo'
    },
    {
      name: 'Eicher Pro 3019',
      tagline: 'Engineered for Heavy Commercial & National long-haul routes',
      payload: '12.5 Tons Payload Capacity',
      deckLength: '20 to 32 feet cargo deck spacing',
      engine: 'E494 CRS with Volvo Group Technology',
      optimalFreight: 'Heavy machinery parts, industrial metal coils, bulk warehouse stock, agricultural raw freight.',
      features: [
        'M-Booster+ technology for load optimization',
        'Robust drive axles for mountainous terrain',
        'Extended deck spacing for volume cargo',
      ],
      badge: 'Heavy-Duty Cargo'
    }
  ];

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -60) {
      // Swiped left
      setActiveIdx((prev) => Math.min(prev + 1, fleet.length - 1));
    } else if (info.offset.x > 60) {
      // Swiped right
      setActiveIdx((prev) => Math.max(prev - 1, 0));
    }
  };

  const activeTruck = fleet[activeIdx];

  return (
    <motion.section 
      id="fleet" 
      className="py-20 bg-brand-navy text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Visual background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="0" y1="40%" x2="100%" y2="80%" stroke="#F57C00" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[2px] bg-brand-orange"></span>
            <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Operational Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
            Commercial Vehicles Selected for Reliable Transit
          </h2>
          <p className="text-gray-300 text-base font-light">
            AH Transport maintains modern commercial cargo trucks to guarantee reliable road performance. Select a model or swipe to check specifications.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center space-x-4 mb-12">
          {fleet.map((truck, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeIdx === idx 
                  ? 'text-white bg-brand-orange border-brand-orange shadow-lg shadow-brand-orange/20' 
                  : 'text-brand-steel hover:text-white bg-transparent border-brand-steel/30'
              }`}
            >
              {truck.name}
            </button>
          ))}
        </div>

        {/* Interactive Sliding Deck */}
        <div className="max-w-2xl mx-auto relative touch-pan-y">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-brand-navy border border-brand-steel/30 hover:border-brand-orange/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl relative group cursor-grab active:cursor-grabbing"
            >
              {/* Corner Design Tag */}
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] uppercase font-bold py-1 px-4 tracking-wider group-hover:bg-white group-hover:text-brand-orange transition-colors duration-300">
                {activeTruck.badge}
              </div>

              {/* Truck Specs Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Truck className="w-8 h-8 text-brand-orange group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold font-heading group-hover:text-brand-orange transition-colors duration-300">{activeTruck.name}</h3>
                </div>
                <p className="text-brand-steel text-sm font-semibold mb-6 group-hover:text-white transition-colors duration-300 text-left">{activeTruck.tagline}</p>

                {/* Specs Listing */}
                <div className="grid grid-cols-2 gap-4 border-y border-brand-steel/20 py-6 my-6 text-left">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">PAYLOAD RATING</span>
                    <span className="text-sm font-bold text-white mt-1 block">{activeTruck.payload}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">DECK DIMENSION</span>
                    <span className="text-sm font-bold text-white mt-1 block">{activeTruck.deckLength}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] text-gray-400 font-bold uppercase block">PROPULSION</span>
                    <span className="text-sm font-bold text-white mt-1 block">{activeTruck.engine}</span>
                  </div>
                </div>

                {/* Optimal Load */}
                <div className="text-left mb-6">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">OPTIMAL FREIGHT MATCH</span>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">{activeTruck.optimalFreight}</p>
                </div>

                {/* Bullet Features */}
                <div className="space-y-2 text-left">
                  {activeTruck.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-xs text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Graphics Panel */}
              <div className="bg-brand-steel/10 border-t border-brand-steel/30 px-8 py-5 flex items-center justify-between text-left text-xs text-gray-400">
                <span className="flex items-center">
                  <Shield className="w-4 h-4 text-brand-orange mr-1.5" /> Checked & Certified
                </span>
                <span className="flex items-center">
                  <Compass className="w-4 h-4 text-brand-orange mr-1.5" /> GPS Tracker Equipped
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Swipe indicator dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {fleet.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'bg-brand-orange w-4' : 'bg-brand-steel/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
