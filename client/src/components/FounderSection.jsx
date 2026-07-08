import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark } from 'lucide-react';
import founderImg from '../assets/mr as patel.png';

export default function FounderSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 bg-brand-light-gray/60 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Left Block: Image */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-start"
            variants={imageVariants}
          >
            <div className="relative group max-w-sm lg:max-w-full">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 border-2 border-brand-orange/30 rounded-sm translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 z-0"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-sm border border-gray-200 bg-white z-10 shadow-lg">
                <img 
                  src={founderImg} 
                  alt="Mr. Ankit Patel - Founder of AH Transport" 
                  className="w-full h-auto object-cover max-h-[480px] filter grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-left z-20">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Founder &amp; Proprietor</p>
                  <p className="text-lg font-bold font-heading">MR ANKIT PATEL</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8 text-left"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-brand-orange"></span>
                <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Leadership Profile</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading leading-tight">
                Meet Mr. Ankit Patel:<br />
                <span className="font-light text-brand-steel italic">Rooted in Grit, Engineered for Scale</span>
              </h2>
            </div>

            {/* Key Story highlights */}
            <div className="space-y-6 text-brand-charcoal text-base sm:text-lg leading-relaxed font-light">
              <p>
                Born on the west side of Ahmedabad in a small farming village, <strong className="font-semibold text-brand-navy">Mr. Ankit Patel</strong> inherited the values of tireless dedication, integrity, and down-to-earth honesty from his farmer family.
              </p>
              <p>
                Driven by a strong passion for machinery, structures, and technology, he went on to graduate with a <strong className="font-semibold text-brand-navy">Bachelor of Engineering in Mechanical Engineering (BE Mechanical)</strong>. This background provided him with a unique capability to understand fleet operations, transport physics, vehicle safety dynamics, and precise routing workflows.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                Today, he combines his technical engineering skillset and his agricultural values of persistence to lead AH Transport. Under his leadership, the company serves as a crucial logistics link for heavy manufacturing, warehouses, and factories across Gujarat and beyond.
              </p>
            </div>

            {/* Highlighted badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-gray-200/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">BE Mechanical</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Engineering expertise applied directly to fleet maintenance and logistics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-sm border border-gray-200/80 shadow-sm">
                <Landmark className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">Humble Origins</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Born in a west side farming family, bringing integrity to corporate values.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
