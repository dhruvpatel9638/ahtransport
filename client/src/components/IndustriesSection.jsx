import React from 'react';
import { Factory, Warehouse, Blocks, Landmark, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndustriesSection() {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing Plants',
      description: 'Moving parts, components, and heavy engineering outputs directly from plant lines to distribution nodes.',
      needs: ['Heavy vehicle chassis support', 'Rigid scheduling parameters', 'Direct driver-plant communication']
    },
    {
      icon: Warehouse,
      name: 'Factories & Industrial Units',
      description: 'Moving raw materials, chemicals, packaging materials, and heavy parts between partner facilities.',
      needs: ['Strict pickup and delivery slots', 'Flexible freight options', 'GIDC corridor access routes']
    },
    {
      icon: Blocks,
      name: 'Regional Warehouses',
      description: 'Reliable stock transfer routes to keep inventory moving between centralized hubs and regional centers.',
      needs: ['Coordinated cargo loading', 'Consistently timed transit loops', 'Accurate cargo manifests']
    },
    {
      icon: Landmark,
      name: 'Commercial Distributors',
      description: 'Supporting finished goods logistics, bulk shipments, and supply chain distribution routes.',
      needs: ['Milestone GPS route updates', 'High payload Eicher Pro fleet support', 'Multi-destinations routing support']
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-brand-light-gray border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-8 h-[2px] bg-brand-orange"></span>
            <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Target Sectors</span>
            <span className="w-8 h-[2px] bg-brand-orange"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Commercial Sectors We Support
          </h2>
          <p className="text-brand-charcoal text-base font-light">
            AH Transport aligns directly with corporate logistics coordinators, plant dispatchers, and business owners who require structured freight services.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 p-6 rounded-sm flex flex-col justify-between hover:shadow-xl hover:border-brand-orange/40 hover:-translate-y-1.5 transition-all duration-300 text-left group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-brand-steel/15 text-brand-steel rounded-sm flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors duration-300">{ind.name}</h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed font-light">{ind.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">KEY REQUIREMENTS MET</span>
                  {ind.needs.map((need, nIdx) => (
                    <div key={nIdx} className="flex items-center text-xs text-brand-steel font-medium">
                      <Check className="w-3.5 h-3.5 text-brand-orange mr-1.5 flex-shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
