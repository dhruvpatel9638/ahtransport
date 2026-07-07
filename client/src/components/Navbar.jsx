import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import logoImg from '../assets/AH logo.png';

export default function Navbar({ onQuoteClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy shadow-lg py-4 border-b border-brand-steel/20' : 'bg-brand-navy/90 md:bg-brand-navy/85 backdrop-blur-md py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="h-14 md:h-16 w-48 md:w-56 overflow-hidden relative block">
              <img
                src={logoImg}
                alt="AH Transport Logo"
                className="absolute w-[100%] max-w-none h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-medium text-sm uppercase tracking-wider relative group overflow-hidden h-5 block cursor-pointer"
              >
                <div className="transition-transform duration-300 transform group-hover:-translate-y-1/2">
                  <span className="block text-gray-300">{link.name}</span>
                  <span className="block text-brand-orange">{link.name}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+91895366447" className="flex items-center text-gray-300 hover:text-white text-sm font-semibold transition-colors">
              <Phone className="w-4 h-4 text-brand-orange mr-2" />
              <span>+91 895366447</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2.5 px-5 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center group cursor-pointer"
            >
              Get Quote
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-steel/30 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 bg-brand-navy/95 border-b border-brand-steel/30' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-300 hover:text-white hover:bg-brand-steel/40 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-brand-steel/20 px-3 flex flex-col space-y-4">
            <a href="tel:+91895366447" className="flex items-center text-gray-300 hover:text-white text-sm font-semibold">
              <Phone className="w-4 h-4 text-brand-orange mr-2" />
              +91 895366447
            </a>
            <button
              onClick={onQuoteClick}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-4 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-md text-center block cursor-pointer"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
