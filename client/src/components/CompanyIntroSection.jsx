import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, CheckCircle2 } from 'lucide-react';

export default function CompanyIntroSection() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-brand-orange"></span>
              <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Company Overview</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
              Dedicated Commercial Goods Movement Since Inception
            </h2>

            <p className="text-brand-charcoal text-base sm:text-lg leading-relaxed font-light">
              AH Transport, spearheaded by <strong className="font-bold text-brand-navy">MR ANKIT PATEL</strong>, operates directly from the industrial zone of Kadi, Mehsana, Gujarat. We specialize in regional and national transport operations engineered specifically for manufacturing units, regional warehouses, and large industrial factories.
            </p>

            <p className="text-brand-charcoal text-sm leading-relaxed">
              We understand that industrial supply chains depend heavily on timely transport. Our operations prioritize route planning efficiency, vehicle roadworthiness, clear communication channels, and GPS-enabled cargo tracking support to ensure warehouse dispatchers and procurement officers maintain full operational continuity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-brand-light-gray p-4 rounded-sm border border-gray-200">
                <User className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">PROPRIETOR</p>
                  <p className="text-sm font-bold text-brand-navy">MR ANKIT PATEL</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-brand-light-gray p-4 rounded-sm border border-gray-200">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">OPERATIONAL BASE</p>
                  <p className="text-sm font-bold text-brand-navy">Kadi, Mehsana, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {[
                'Tailored logistics support for regional industrial corridors',
                'Express routes connecting Gujarat to major West, Central, and North India hubs',
                'Transparent operator coordination and regular milestone reporting',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-charcoal font-medium">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Graphic representation of our hub */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="relative p-6 bg-brand-light-gray border border-gray-200 rounded-sm">
              <div className="absolute top-0 left-0 bg-brand-navy text-white text-[10px] uppercase font-bold py-1 px-3.5 tracking-wider">
                Strategic Node
              </div>

              {/* Graphic Layout */}
              <div className="space-y-6 pt-6 text-left">
                <div className="border-l-2 border-brand-orange pl-4">
                  <h4 className="text-sm font-bold text-brand-navy uppercase">Kadi Hub (Gujarat)</h4>
                  <p className="text-xs text-gray-500 mt-1">Directly servicing Mehsana's heavy manufacturing, chemical, and agro-industries.</p>
                </div>

                <div className="border-l-2 border-brand-steel pl-4">
                  <h4 className="text-sm font-bold text-brand-navy uppercase">Regional Connectivity</h4>
                  <p className="text-xs text-gray-500 mt-1">Express routes linking GIDC (Gujarat Industrial Development Corporation) estates directly to commercial logistics terminals.</p>
                </div>

                {/* Micro map graphic */}
                <div className="h-44 bg-white border border-gray-200 rounded-sm p-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="10%" y1="20%" x2="50%" y2="80%" stroke="#1F2937" strokeWidth="2" strokeDasharray="5 5" />
                      <line x1="50%" y1="80%" x2="90%" y2="40%" stroke="#1F2937" strokeWidth="2" strokeDasharray="5 5" />
                      <circle cx="10%" cy="20%" r="4" fill="#0F2B46" />
                      <circle cx="50%" cy="80%" r="6" fill="#F57C00" />
                      <circle cx="90%" cy="40%" r="4" fill="#2F5D7E" />
                    </svg>
                  </div>

                  <div className="flex justify-between items-start z-10">
                    <span className="text-[10px] bg-brand-navy/10 text-brand-navy px-1.5 py-0.5 font-bold rounded">GUJARAT ROUTE GRID</span>
                    <span className="text-[10px] text-green-600 font-semibold">99.8% ETA SUCCESS</span>
                  </div>

                  <div className="space-y-1.5 z-10">
                    <div className="flex justify-between text-[11px]">
                      <span className="font-semibold text-gray-600">Origin dispatch</span>
                      <span className="font-bold text-brand-navy">Mehsana / Kadi GIDC</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="font-semibold text-gray-600">Destinations</span>
                      <span className="font-bold text-brand-navy">West / Central / North India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
