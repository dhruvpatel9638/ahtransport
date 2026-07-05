import React from 'react';
import { ShieldCheck, Scale, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustSection() {
  return (
    <motion.section 
      className="py-20 bg-brand-navy text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center space-x-2 bg-brand-steel/30 border border-brand-steel/50 px-3.5 py-1.5 rounded-sm">
          <Award className="w-4 h-4 text-brand-orange" />
          <span className="text-[10px] text-white font-bold uppercase tracking-widest">Our Operations Ethos</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto font-heading">
          "Transport Logistics is More Than Just Moving Cargo — It is a Commitment to Supply Chain Integrity"
        </h2>

        <div className="w-16 h-1 bg-brand-orange mx-auto"></div>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
          At AH Transport, we know that when your cargo is delayed, your production lines stall and warehouse overheads rise. Under the ownership of MR ANKIT PATEL, we build trust with dispatchers and managers through direct contact channels, transparent routing logs, and vehicle readiness. We focus on meeting our commitments so you can focus on running your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-left max-w-4xl mx-auto">
          <div className="bg-brand-navy border border-brand-steel/30 hover:border-brand-orange/60 hover:-translate-y-1.5 transition-all duration-300 p-6 rounded-sm space-y-3 group">
            <ShieldCheck className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-orange transition-colors duration-300">Full Operational Control</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We own and operate our Eicher fleet directly, avoiding third-party delays or coordination gaps.
            </p>
          </div>

          <div className="bg-brand-navy border border-brand-steel/30 hover:border-brand-orange/60 hover:-translate-y-1.5 transition-all duration-300 p-6 rounded-sm space-y-3 group">
            <Scale className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-orange transition-colors duration-300">Transparent Pricing</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              No hidden charges. Clear freight quotation matrices aligned with payload weight and transport distance.
            </p>
          </div>

          <div className="bg-brand-navy border border-brand-steel/30 hover:border-brand-orange/60 hover:-translate-y-1.5 transition-all duration-300 p-6 rounded-sm space-y-3 col-span-1 sm:col-span-2 lg:col-span-1 group">
            <Award className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-orange transition-colors duration-300">Kadi Community Roots</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Proudly based in Mehsana, supporting Gujarat’s manufacturing sector with dedicated logistics.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
