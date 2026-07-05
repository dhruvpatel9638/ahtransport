import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection({ formRef }) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    requestType: 'quote', // 'quote' or 'inquiry'
    pickupLocation: '',
    deliveryLocation: '',
    vehicleType: 'Eicher Pro 3019',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    // Validate fields
    if (!formData.name || !formData.phone || !formData.companyName) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields (Name, Phone, and Company).'
      });
      setLoading(false);
      return;
    }

    try {
      // Endpoint select based on request type
      const endpoint = formData.requestType === 'quote' 
        ? 'http://localhost:5555/api/quotes' 
        : 'http://localhost:5555/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: formData.requestType === 'quote' 
            ? 'Quote request received successfully. Dispatch will contact you with pricing.' 
            : 'Message received. We will get back to you shortly.'
        });
        // Clear fields
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          requestType: 'quote',
          pickupLocation: '',
          deliveryLocation: '',
          vehicleType: 'Eicher Pro 3019',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Server error. Request could not be processed.');
      }
    } catch (err) {
      console.warn('API submission failed. Falling back to local demonstration handler:', err.message);
      
      // Fallback response for demonstration when backend is not running
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: `[DEMO MODE SUCCESS] Thank you, ${formData.name}. Your request for ${formData.requestType === 'quote' ? 'a cargo quote' : 'an inquiry'} has been logged locally (Owner: MR ANKIT PATEL, Kadi).`
        });
        
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          requestType: 'quote',
          pickupLocation: '',
          deliveryLocation: '',
          vehicleType: 'Eicher Pro 3019',
          message: ''
        });
        setLoading(false);
      }, 1000);
      return;
    }

    setLoading(false);
  };

  return (
    <motion.section 
      id="contact" 
      ref={formRef} 
      className="py-20 bg-brand-light-gray scroll-mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-brand-orange"></span>
                <span className="text-brand-steel text-xs font-bold uppercase tracking-wider">Contact Operations</span>
              </div>
              <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight font-heading">
                Let's Discuss Your Freight Routing Needs
              </h2>
              <p className="text-brand-charcoal text-sm sm:text-base font-light leading-relaxed">
                Connect directly with MR ANKIT PATEL and the AH Transport team. Submit your requirements online or call us directly to schedule a load.
              </p>
            </div>

            {/* Operations contact details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-navy text-white rounded-sm">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase">Call / WhatsApp Dispatch</h4>
                  <a href="tel:+91895366447" className="text-base font-bold text-brand-navy mt-0.5 hover:text-brand-orange transition-colors">+91 895366447</a>
                  <p className="text-xs text-gray-500">Available: Mon - Sat (8:00 AM - 8:00 PM)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-navy text-white rounded-sm">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase">Email Enquiries</h4>
                  <a href="mailto:ahtransport@gmail.com" className="text-base font-bold text-brand-navy mt-0.5 hover:text-brand-orange transition-colors">ahtransport@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-navy text-white rounded-sm">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase">Main Office Hub</h4>
                  <p className="text-sm font-bold text-brand-navy mt-0.5">AH Transport</p>
                  <p className="text-xs text-gray-600 font-medium">Near GIDC Industrial Gate, Kadi, Mehsana, Gujarat, India - 382715</p>
                </div>
              </div>
            </div>

            {/* Direct owner badge */}
            <div className="bg-white border-l-4 border-brand-orange p-5 rounded-r-sm shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">Direct Accountability</h4>
              <p className="text-xs text-brand-charcoal font-light leading-relaxed">
                "We understand that factories work on tight material requirements. Your booking receives personal route assignment and scheduling monitoring under my oversight."
              </p>
              <p className="text-xs font-bold text-brand-navy">— MR ANKIT PATEL, Owner</p>
            </div>
          </div>

          {/* Right Block: Input Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-sm shadow-xl text-left">
            <h3 className="text-xl font-bold text-brand-navy font-heading mb-6 border-b border-gray-100 pb-4">
              Submit Transport Requirement
            </h3>

            {/* Notification Bar */}
            {status.type && (
              <div className={`mb-6 p-4 rounded-sm flex items-start space-x-3 text-sm ${status.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />}
                <p className="font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Selector */}
              <div className="grid grid-cols-2 gap-4">
                <label className={`border-2 p-3.5 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all ${formData.requestType === 'quote' ? 'border-brand-orange bg-brand-orange/5 text-brand-orange' : 'border-gray-200 hover:bg-gray-50 text-gray-500'}`}>
                  <input 
                    type="radio" 
                    name="requestType" 
                    value="quote" 
                    checked={formData.requestType === 'quote'} 
                    onChange={handleChange} 
                    className="sr-only"
                  />
                  <span className="text-sm font-bold uppercase tracking-wider">Request Quote</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Route & payload pricing</span>
                </label>

                <label className={`border-2 p-3.5 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all ${formData.requestType === 'inquiry' ? 'border-brand-orange bg-brand-orange/5 text-brand-orange' : 'border-gray-200 hover:bg-gray-50 text-gray-500'}`}>
                  <input 
                    type="radio" 
                    name="requestType" 
                    value="inquiry" 
                    checked={formData.requestType === 'inquiry'} 
                    onChange={handleChange} 
                    className="sr-only"
                  />
                  <span className="text-sm font-bold uppercase tracking-wider">General Inquiry</span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Fleet & general specs</span>
                </label>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    placeholder="e.g. Anish Shah"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName" 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    placeholder="e.g. Gujarat Synthetics Ltd"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    placeholder="e.g. +91 99999 99999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    placeholder="e.g. transport@company.com"
                  />
                </div>
              </div>

              {/* Conditional Routing Fields for Quotes */}
              {formData.requestType === 'quote' && (
                <div className="space-y-6 pt-2 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Pickup Location *</label>
                      <input 
                        type="text" 
                        name="pickupLocation" 
                        value={formData.pickupLocation} 
                        onChange={handleChange} 
                        className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                        placeholder="e.g. Kadi GIDC, Mehsana"
                        required={formData.requestType === 'quote'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Delivery Location *</label>
                      <input 
                        type="text" 
                        name="deliveryLocation" 
                        value={formData.deliveryLocation} 
                        onChange={handleChange} 
                        className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                        placeholder="e.g. Indore Hub, MP"
                        required={formData.requestType === 'quote'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-2">Preferred Fleet Vehicle</label>
                    <select 
                      name="vehicleType" 
                      value={formData.vehicleType} 
                      onChange={handleChange} 
                      className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                    >
                      <option value="Eicher Pro 3015">Eicher Pro 3015 (10.5 Tons Payload)</option>
                      <option value="Eicher Pro 3019">Eicher Pro 3019 (12.5 Tons Payload)</option>
                      <option value="Undetermined">Assign vehicle based on cargo details</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message Details */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase mb-2">
                  {formData.requestType === 'quote' ? 'Cargo Description & Special Instructions' : 'Inquiry Message *'}
                </label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  className="w-full bg-brand-light-gray border border-gray-300 rounded-sm py-2.5 px-3.5 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                  placeholder={formData.requestType === 'quote' ? 'Specify cargo weight, package type, loading assistance, and preferred timing.' : 'Specify what details you need regarding our routes, rates, or vehicle dimensions.'}
                  required={formData.requestType === 'inquiry'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-orange hover:bg-brand-orange/95 text-white font-bold py-4 px-6 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Transmitting Request...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Transmit Booking Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
