import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Navigation, Truck, Bell, ArrowRight } from 'lucide-react';
import SplitType from 'split-type';

const Hero3DCanvas = React.lazy(() => import('./Hero3DCanvas'));

function MagneticButton({ children, onClick, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
}

function CountUp({ end, duration = 1200, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      }
    };
    animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function HeroSection({ onQuoteClick, onContactClick }) {
  const headingRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(window.innerWidth < 768 || isCoarse);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (headingRef.current) {
      const splitText = new SplitType(headingRef.current, { types: 'chars,words' });
      splitText.chars.forEach((char) => {
        char.style.opacity = '0';
        char.style.transform = 'translateY(15px)';
        char.style.display = 'inline-block';
        char.style.transition = 'none';
      });

      const timeout = setTimeout(() => {
        splitText.chars.forEach((char, index) => {
          setTimeout(() => {
            char.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
          }, index * 20);
        });
      }, 400);

      return () => {
        clearTimeout(timeout);
        splitText.revert();
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-brand-navy pt-28 flex flex-col justify-between overflow-hidden">
      {/* Background Graphic Grid/Route overlays */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F5D7E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated Route Line Accent */}
          <path d="M -100 500 Q 400 300 800 600 T 1800 200" fill="none" stroke="#F57C00" strokeWidth="3" strokeDasharray="10, 10" />
        </svg>
      </div>

      {/* 3D background canvas layer */}
      {!isMobile && (
        <React.Suspense fallback={null}>
          <Hero3DCanvas />
        </React.Suspense>
      )}

      {/* Hero Content Wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center justify-center z-10 py-16 md:py-24">
        <motion.div 
          className="space-y-6 text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-brand-steel/30 border border-brand-steel/50 px-3.5 py-1.5 rounded-sm"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Gujarat & National Route Strength</span>
          </motion.div>

          <motion.h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading max-w-4xl"
            variants={itemVariants}
          >
            Professional B2B Transport & Fleet Logistics
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed"
            variants={itemVariants}
          >
            AH Transport helps factories, warehouses, and manufacturing plants move commercial goods across Gujarat, North, West, and Central India. Built on reliability, operational coordination, and route strength.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            variants={itemVariants}
          >
            <MagneticButton
              onClick={onQuoteClick}
              className="bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-4 px-8 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center group shadow-lg cursor-pointer"
            >
              Request a Cargo Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              onClick={onContactClick}
              className="border-2 border-brand-steel hover:bg-brand-steel/20 text-white font-bold py-4 px-8 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              Contact Dispatch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Stats Strip */}
      <div className="bg-brand-navy border-t border-brand-steel/30 relative z-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-brand-steel/30">
             {/* Stat 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 pl-0 md:pl-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-2.5 bg-brand-steel/20 rounded-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  <CountUp end={100} suffix="% Reliable" />
                </p>
                <p className="text-gray-400 text-xs mt-1">B2B Cargo Protection</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 pl-0 md:pl-8 pt-4 md:pt-0 hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-2.5 bg-brand-steel/20 rounded-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <Navigation className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  <CountUp end={28} suffix="+ Major Hubs" />
                </p>
                <p className="text-gray-400 text-xs mt-1">Gujarat & Central/West/North India</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 pl-0 md:pl-8 pt-4 md:pt-0 hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-2.5 bg-brand-steel/20 rounded-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <Truck className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  <CountUp end={2} suffix=" Dedicated Models" />
                </p>
                <p className="text-gray-400 text-xs mt-1">Eicher Pro 3015 & Pro 3019</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 pl-0 md:pl-8 pt-4 md:pt-0 hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-2.5 bg-brand-steel/20 rounded-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <Bell className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  <CountUp end={24} suffix="/7 Dispatch" />
                </p>
                <p className="text-gray-400 text-xs mt-1">GPS-backed & Call support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
