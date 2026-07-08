import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyIntroSection from './components/CompanyIntroSection';
import FounderSection from './components/FounderSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FleetSection from './components/FleetSection';
import CoverageSection from './components/CoverageSection';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import TrustSection from './components/TrustSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MarqueeSection from './components/MarqueeSection';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from './assets/AH logo - Copy.png';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

// Premium mouse follower custom cursor component similar to high-end design themes
function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    addEventListeners();

    // Attach listeners to clickables for scale up hover triggers
    const handleLinkHover = () => {
      const links = document.querySelectorAll("a, button, input, select, textarea, [role='button']");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    handleLinkHover();

    // Observe changes to attach dynamically loaded links/buttons
    const observer = new MutationObserver(handleLinkHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-orange pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block ${
        hidden ? "opacity-0" : "opacity-100 animate-pulse"
      } ${clicked ? "scale-75 bg-brand-orange/20" : ""} ${linkHovered ? "scale-150 bg-brand-orange/10 border-brand-orange" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transitionProperty: "transform, opacity, background-color, border-color",
      }}
    />
  );
}

// Custom animated running-truck B2B preloader
function Preloader({ progress }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-brand-navy z-[9999] flex flex-col items-center justify-center select-none"
    >
      <div className="space-y-6 flex flex-col items-center">
        {/* Logo Element Above Truck */}
        <img 
          src={logoImg}
          alt="AH Transport Logo"
          className="h-20 md:h-24 w-auto object-contain mb-6 animate-pulse"
        />

        {/* Loading Indicator with Running Truck on top of the progress line */}
        <div className="text-center space-y-4">
          {/* Wrapper container for truck + progress line */}
          <div className="w-64 relative flex flex-col items-center">
            {/* Truck container sliding across with progress value */}
            <div 
              className="absolute bottom-1.5 transition-all duration-100 ease-out"
              style={{ left: `calc(${progress}% - (${progress / 100} * 56px))` }}
            >
              {/* Detailed SVG Truck shape */}
              <svg 
                className="w-14 h-9 animate-truck-bounce" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Chassis link */}
                <rect x="3" y="14" width="17" height="2" fill="#2F5D7E" />
                {/* Cargo Container */}
                <rect x="2" y="4" width="12" height="10" rx="0.5" fill="#2F5D7E" />
                <line x1="5" y1="4" x2="5" y2="14" stroke="#0F2B46" strokeWidth="0.5" />
                <line x1="8" y1="4" x2="8" y2="14" stroke="#0F2B46" strokeWidth="0.5" />
                <line x1="11" y1="4" x2="11" y2="14" stroke="#0F2B46" strokeWidth="0.5" />
                {/* Cabin */}
                <path d="M14 7H18L21 10.5V14H14V7Z" fill="#F57C00" />
                <path d="M15 8H17.5L19.5 10.5H15V8Z" fill="#0F2B46" />
                {/* Wheels */}
                <circle cx="5.5" cy="15.5" r="2" fill="#0F2B46" stroke="#F57C00" strokeWidth="1" />
                <circle cx="11.5" cy="15.5" r="2" fill="#0F2B46" stroke="#F57C00" strokeWidth="1" />
                <circle cx="18" cy="15.5" r="2" fill="#0F2B46" stroke="#F57C00" strokeWidth="1" />
                {/* Inner Wheel spokes */}
                <circle cx="5.5" cy="15.5" r="0.75" fill="#FFFFFF" />
                <circle cx="11.5" cy="15.5" r="0.75" fill="#FFFFFF" />
                <circle cx="18" cy="15.5" r="0.75" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Progress loading bar / line */}
            <div className="w-full h-1.5 bg-brand-steel/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-orange transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-white font-heading font-extrabold text-xs uppercase tracking-widest">
              Coordinating Routes
            </h3>
            {/* Progress percentage counter */}
            <div className="text-brand-orange font-heading font-black text-2xl">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const formRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    // Increment progress counter for visual count-up loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const handlePageLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2200);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  const scrollToQuoteForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white text-brand-charcoal select-none antialiased">
        <AnimatePresence>
          {!isLoaded && <Preloader progress={progress} />}
        </AnimatePresence>
        <CustomCursor />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Navbar */}
          <Navbar onQuoteClick={scrollToQuoteForm} />

          {/* 2. Hero Section */}
          <HeroSection 
            onQuoteClick={scrollToQuoteForm} 
            onContactClick={scrollToQuoteForm} 
          />

          {/* Infinite loop scrolling marquee */}
          <MarqueeSection />

          {/* 3. Company Overview */}
          <CompanyIntroSection />

          {/* Founder Profile Section */}
          <FounderSection />

          {/* 4. Services Section */}
          <ServicesSection onQuoteClick={scrollToQuoteForm} />

          {/* 5. Why Choose Us */}
          <WhyChooseUsSection />

          {/* 6. Fleet Section */}
          <FleetSection />

          {/* 7. Coverage Section */}
          <CoverageSection />

          {/* 8. Industries We Serve */}
          <IndustriesSection />

          {/* 9. Process Section */}
          <ProcessSection />

          {/* 10. Trust / Commitment Section */}
          <TrustSection />

          {/* 11. CTA Banner */}
          <CtaSection 
            onQuoteClick={scrollToQuoteForm} 
            onContactClick={scrollToQuoteForm} 
          />

          {/* 12. Contact & Quote Request Form */}
          <ContactSection formRef={formRef} />

          {/* 13. Footer */}
          <Footer />
        </motion.div>
      </div>
    </ReactLenis>
  );
}
