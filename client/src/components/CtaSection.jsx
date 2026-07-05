import React from 'react';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection({ onQuoteClick, onContactClick }) {
  return (
    <motion.section 
      className="py-16 bg-white border-y border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden text-left flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-steel/10 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="space-y-4 max-w-3xl z-10">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block">Direct Dispatch Coordination</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Need Reliable Transport for Your Commercial Payload?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              Contact AH Transport today. We will coordinate directly with your GIDC facility or warehouse dispatchers to arrange pickup schedules, vehicle payload allocations, and transit routes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto z-10">
            <button
              onClick={onQuoteClick}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-center group shadow-lg cursor-pointer"
            >
              Request Cargo Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+91895366447"
              className="border border-brand-steel bg-brand-navy hover:bg-brand-steel/30 text-white font-bold py-4 px-8 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              Call Dispatch
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
