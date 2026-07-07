import React from 'react';
import { Map, Globe, Warehouse, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function HoverSwapArrow() {
  return (
    <div className="relative w-4 h-4 overflow-hidden ml-1.5 flex items-center justify-center">
      <motion.div
        className="absolute"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { x: 20, opacity: 0 }
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <ArrowRight className="w-4 h-4 text-brand-orange" />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ x: -20, opacity: 0 }}
        variants={{
          initial: { x: -20, opacity: 0 },
          hover: { x: 0, opacity: 1 }
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <ArrowRight className="w-4 h-4 text-brand-navy" />
      </motion.div>
    </div>
  );
}

export default function ServicesSection({ onQuoteClick }) {
  const services = [
    {
      icon: Map,
      title: 'Regional Business Transport',
      description: 'Intra-state freight solutions covering Gujarat GIDC industrial networks. Optimized for high-frequency factory-to-warehouse loops and regional distributor deliveries.',
      features: ['Mehsana & Ahmedabad corridors', 'Same-day routing capability', 'Dedicated regional fleet scheduling'],
    },
    {
      icon: Globe,
      title: 'National Business Transport',
      description: 'Long-haul freight routing connecting Gujarat to active commercial centers in North, West, and Central India. Built to support manufacturing output pipelines.',
      features: ['Routes to MP, Rajasthan, Maharashtra', 'Reliable long-distance transit times', 'Experienced national route drivers'],
    },
    {
      icon: Warehouse,
      title: 'Factory & Warehouse Movement',
      description: 'Dedicated cargo transfers, bulk raw materials transport, and warehouse stock replenishment. Engineered for high-volume inventory movements.',
      features: ['Palletized cargo and industrial loads', 'Coordinated loading operations support', 'Flexible freight dispatch hours'],
    },
    {
      icon: Navigation,
      title: 'GPS-Tracked Cargo Updates',
      description: 'Transparent tracking updates and direct operator communication. We provide structured milestone reports to ensure warehouse coordinators stay fully informed.',
      features: ['GPS tracking status verification', 'Regular WhatsApp & phone updates', 'Dedicated emergency dispatch support'],
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="services" 
      className="py-20 bg-brand-light-gray border-y border-gray-200"
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
            <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Our Capabilities</span>
            <span className="w-8 h-[2px] bg-brand-orange"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Commercial Transport & Logistics Services
          </h2>
          <p className="text-brand-charcoal text-sm sm:text-base font-light">
            Engineered to handle B2B industrial transport requirements with strict timing standards, heavy vehicle capacity, and reliable route management.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm hover:shadow-lg hover:border-brand-orange/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div className="space-y-6">
                  {/* Icon container */}
                  <div className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center rounded-sm group-hover:bg-brand-orange transition-colors duration-300">
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy font-heading group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-brand-charcoal text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-brand-steel flex items-center font-semibold">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6">
                  <motion.button 
                    whileHover="hover"
                    initial="initial"
                    onClick={onQuoteClick}
                    className="text-brand-orange font-bold text-xs uppercase tracking-wider flex items-center hover:text-brand-navy transition-colors cursor-pointer"
                  >
                    Request Service
                    <HoverSwapArrow />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
