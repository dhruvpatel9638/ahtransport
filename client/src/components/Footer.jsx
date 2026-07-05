import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/AH logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/30 text-gray-300">
      {/* Upper Footer: Branding & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="h-14 md:h-16 w-48 md:w-56 overflow-hidden relative block">
              <img
                src={logoImg}
                alt="AH Transport Logo"
                className="absolute w-[100%] max-w-none h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              AH Transport is a dedicated B2B logistics operator based in Kadi, Mehsana, Gujarat. We provide reliable regional and national freight transport, supporting factories, manufacturing units, and warehouse facilities with high payload cargo services.
            </p>
            <div className="flex items-center space-x-3 text-xs bg-brand-steel/10 border border-brand-steel/20 p-3.5 rounded-sm">
              <Shield className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <span>Owner: <strong className="font-bold text-white">MR ANKIT PATEL</strong></span>
            </div>
          </div>

          {/* Nav Links (2 Columns) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs text-white font-bold uppercase tracking-wider border-b border-brand-steel/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['#home', '#about', '#services', '#fleet', '#coverage', '#contact'].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    className="hover:text-brand-orange transition-colors uppercase tracking-wider font-semibold text-[11px]"
                  >
                    {href.replace('#', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (3 Columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs text-white font-bold uppercase tracking-wider border-b border-brand-steel/20 pb-2">
              Our Fleet Operations
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Regional GIDC Shuttle routes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Inter-state highway logistics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Eicher Pro 3015 Medium cargo routing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>Eicher Pro 3019 Heavy payload hauling</span>
              </li>
            </ul>
          </div>

          {/* Contact details (3 Columns) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs text-white font-bold uppercase tracking-wider border-b border-brand-steel/20 pb-2">
              Operations Center
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Near GIDC Gate, Kadi, Mehsana, Gujarat, India - 382715</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+91895366447" className="font-bold text-white hover:text-brand-orange transition-colors">+91 895366447</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="mailto:ahtransport@gmail.com" className="text-gray-400 hover:text-brand-orange transition-colors">ahtransport@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright */}
      <div className="bg-brand-navy border-t border-brand-steel/20 py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} AH Transport. All Rights Reserved. Operational Base: Kadi, Gujarat, India.</p>
          <div className="flex space-x-4">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-brand-orange">About Operations</a>
            <span>|</span>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-brand-orange font-bold text-white">Direct Booking</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
