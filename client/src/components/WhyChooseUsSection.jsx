import React from 'react';
import { Calendar, Compass, RefreshCw, Layers, ShieldCheck, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Industrial Reliability',
      description: 'Built for B2B operations. We coordinate directly with factory dispatchers and warehouse managers to avoid scheduling delays.',
    },
    {
      icon: Compass,
      title: 'GPS Route Visibility',
      description: 'Our fleet is equipped with active GPS tracking systems, enabling dispatchers to estimate ETAs and report on transit status.',
    },
    {
      icon: RefreshCw,
      title: 'Scheduled Shipment Updates',
      description: 'No information gaps. We provide structured progress calls and WhatsApp notifications at major route milestones.',
    },
    {
      icon: Layers,
      title: 'B2B Cargo Fleet',
      description: 'Eicher Pro intermediate and heavy vehicles selected specifically for medium to long-haul commercial payload transport.',
    },
    {
      icon: Calendar,
      title: 'Route Continuity',
      description: 'Dependable regional routing across Gujarat and long-haul connections to Central, West, and North India hubs.',
    },
    {
      icon: PhoneCall,
      title: 'Direct Management Access',
      description: 'Direct contact with management (MR ANKIT PATEL) and primary dispatchers ensures fast resolution of transport issues.',
    },
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
            <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">The AH Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Operational Strength to Keep Your Business Moving
          </h2>
          <p className="text-brand-charcoal text-base font-light">
            Manufacturing plants, factory operations, and regional distribution networks trust AH Transport because of our structured approach to cargo safety, route management, and customer coordination.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="bg-brand-light-gray/50 border border-gray-200/80 p-6 rounded-sm hover:bg-white hover:shadow-lg hover:border-brand-orange/40 hover:-translate-y-1.5 transition-all duration-300 text-left space-y-4 group"
              >
                <div className="w-10 h-10 bg-brand-steel/10 text-brand-steel rounded-sm flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 text-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-brand-charcoal text-xs sm:text-sm leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
