import React from 'react';
import { MapPin, ArrowRight, GitCommit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoverageSection() {
  const regions = [
    {
      name: 'Gujarat Region (Intra-State)',
      hubs: 'Kadi, Mehsana, Ahmedabad, Vadodara, Surat, Rajkot, GIDC zones.',
      detail: 'Daily regional shuttle routes, factory inventory movement, and port connectivity support.'
    },
    {
      name: 'West India Corridor',
      hubs: 'Mumbai, Pune, Nagpur, Indore, Nashik.',
      detail: 'Connecting Gujarat industrial clusters directly to Western cargo terminals and warehousing zones.'
    },
    {
      name: 'Central India Routes',
      hubs: 'Indore, Bhopal, Gwalior, Jabalpur.',
      detail: 'Established highway transits connecting manufacturing goods directly into central market distribution nodes.'
    },
    {
      name: 'North India Express Link',
      hubs: 'Jaipur, Gurgaon, Delhi NCR, Ludhiana.',
      detail: 'High-speed long-haul movements supporting finished goods delivery to Northern commercial retail hubs.'
    }
  ];

  return (
    <motion.section 
      id="coverage" 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Map Graphic Representation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-brand-light-gray border border-gray-200 rounded-sm p-6 space-y-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-steel/5 rounded-full -mr-8 -mt-8"></div>
              
              <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wider text-left flex items-center">
                <GitCommit className="w-5 h-5 text-brand-orange mr-2" /> Route Hub Grid
              </h3>

              {/* Graphic Visual representation of India Routes */}
              <div className="relative h-64 bg-white border border-gray-200 rounded-sm p-4 flex flex-col justify-between">
                {/* Node Network Visual */}
                <div className="absolute inset-0 p-4 opacity-30 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Routes */}
                    <line x1="40" y1="100" x2="80" y2="40" stroke="#0F2B46" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="40" y1="100" x2="160" y2="90" stroke="#0F2B46" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="40" y1="100" x2="100" y2="150" stroke="#0F2B46" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="40" y1="100" x2="90" y2="105" stroke="#F57C00" strokeWidth="3" />
                    
                    {/* Hub Points */}
                    <circle cx="40" cy="100" r="8" fill="#F57C00" /> {/* Kadi Base */}
                    <circle cx="80" cy="40" r="5" fill="#0F2B46" />  {/* North */}
                    <circle cx="160" cy="90" r="5" fill="#0F2B46" /> {/* East/Central */}
                    <circle cx="100" cy="150" r="5" fill="#2F5D7E" /> {/* South/West */}
                    <circle cx="90" cy="105" r="4" fill="#2F5D7E" />
                    
                    {/* Node Text labels */}
                    <text x="25" y="118" fill="#1F2937" fontSize="8" fontWeight="bold">KADI (BASE)</text>
                    <text x="75" y="30" fill="#1F2937" fontSize="8">NORTH INDIA</text>
                    <text x="120" y="80" fill="#1F2937" fontSize="8">CENTRAL INDIA</text>
                    <text x="90" y="165" fill="#1F2937" fontSize="8">WEST INDIA</text>
                  </svg>
                </div>

                <div className="z-10 text-left">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">PRIMARY HUB LOCATION</p>
                  <p className="text-base font-bold text-brand-navy">Kadi, Mehsana, Gujarat, India</p>
                </div>

                <div className="z-10 text-left border-t border-gray-100 pt-4">
                  <span className="text-[9px] bg-brand-orange/15 text-brand-orange py-0.5 px-2 font-bold rounded">
                    GPS TRACKED CORRIDORS
                  </span>
                  <p className="text-xs text-gray-600 mt-1">Direct vehicle tracking and driver logs updated throughout transit routes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Content */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-brand-orange"></span>
              <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Service Coverage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
              Connecting Industrial Zones to Regional & National Routes
            </h2>

            <p className="text-brand-charcoal text-base font-light">
              From our main operations hub in <strong className="font-bold text-brand-navy">Kadi, Gujarat</strong>, we manage regular freight routes that supply raw materials and distribute manufactured products across major interstate industrial corridors.
            </p>

            <div className="space-y-6 pt-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-brand-steel/15 p-1 rounded-sm text-brand-steel">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy uppercase">{region.name}</h4>
                    <p className="text-xs text-brand-steel font-bold mt-0.5">HUBS: {region.hubs}</p>
                    <p className="text-xs sm:text-sm text-brand-charcoal mt-1 leading-relaxed font-light">{region.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
