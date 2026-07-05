import React from 'react';
import { PhoneCall, Truck, Map, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      icon: PhoneCall,
      number: '01',
      title: 'Requirement Alignment',
      description: 'Discuss cargo specifications, loading locations, timing, and destination requirements to select the right vehicle.'
    },
    {
      icon: Map,
      number: '02',
      title: 'Vehicle & Route Planning',
      description: 'We assign either an Eicher Pro 3015 or Pro 3019 and outline the transit routes to maximize fuel and time efficiency.'
    },
    {
      icon: Truck,
      number: '03',
      title: 'Active Freight Movement',
      description: 'Cargo is loaded securely, GPS tracking is verified, and transit begins, with status updates sent regularly.'
    },
    {
      icon: ShieldCheck,
      number: '04',
      title: 'Delivery & Sign-Off',
      description: 'Cargo arrives at the destination warehouse or manufacturing plant, is unloaded safely, and delivery receipts are logged.'
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-[2px] bg-brand-orange"></span>
            <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">How We Operate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Operational Process for Commercial Deliveries
          </h2>
          <p className="text-brand-charcoal text-base font-light">
            AH Transport coordinates each dispatch through a structured process to ensure reliable transit times and secure handling.
          </p>
        </div>

        {/* Timeline Process Cards */}
        <div className="relative">
          {/* Horizontal Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-brand-light-gray/60 border border-gray-200/80 p-6 rounded-sm flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-brand-orange/40 hover:-translate-y-1.5 transition-all duration-300 text-left relative group"
                >
                  <div className="space-y-4">
                    {/* Number and Icon Container */}
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 bg-brand-navy text-white rounded-sm flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                        <Icon className="w-5 h-5 text-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-3xl font-extrabold text-gray-300 font-heading group-hover:text-brand-orange transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy font-heading pt-2 group-hover:text-brand-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
