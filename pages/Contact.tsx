import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { AGENT_NAME, LOCATION } from '../constants';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black-900 min-h-screen">
       <div className="bg-black-900 py-32 text-center border-b border-white/10 relative">
        <div className="absolute inset-0 bg-white/[0.02]"></div>
        <div className="relative z-10">
          <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Connect</span>
          <h1 className="text-5xl font-serif font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-gray-400 mt-4 font-light">We'd love to hear from you. Let's start a conversation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
              Whether you're looking to buy, sell, or just have a question about the market, 
              {AGENT_NAME} is here to help. Reach out using the form or the contact details below.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="h-12 w-12 border border-white/10 flex items-center justify-center text-accent-600">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">(555) 123-4567</p>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-wide">Mon-Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0">
                   <div className="h-12 w-12 border border-white/10 flex items-center justify-center text-accent-600">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">roland@rgrealty.ca</p>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-wide">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0">
                   <div className="h-12 w-12 border border-white/10 flex items-center justify-center text-accent-600">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-white">Office</h3>
                  <p className="mt-1 text-gray-400">{LOCATION}</p>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-wide">eXp Realty Office</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-black-800 p-10 border border-white/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" id="name" required className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" id="email" required className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea id="message" rows={4} required className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-accent-600 hover:bg-white hover:text-black-900 transition-all duration-300">
                  <Send size={18} className="mr-2" /> Send Message
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                 <div className="w-16 h-16 bg-accent-600/20 rounded-full flex items-center justify-center mb-4">
                   <span className="text-3xl text-accent-500">✓</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                 <p className="text-gray-400">Thank you for contacting us. We will get back to you shortly.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-6 text-accent-600 font-medium hover:text-white transition-colors">Send another message</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};