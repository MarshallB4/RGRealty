import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-black-900 min-h-screen">
      {/* Header */}
      <div className="bg-black-900 py-32 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-600/5 blur-[100px]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-lg font-light">
            Comprehensive real estate solutions tailored to your unique needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => {
            // Dynamically get icon component
            // @ts-ignore
            const IconComponent = Icons[service.icon.charAt(0).toUpperCase() + service.icon.slice(1).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })] || Icons.HelpCircle;
            
            return (
              <div key={index} className="flex flex-col sm:flex-row gap-8 p-10 border border-white/10 bg-black-800 hover:bg-black-700 hover:border-accent-600/30 transition-all duration-300 group">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300">
                     <IconComponent size={32} strokeWidth={1} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Additional CTA */}
      <div className="bg-white text-black-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Need something specific?</h2>
          <p className="text-gray-600 mb-10 text-lg font-light">
            We understand every client is different. Whether you're looking for commercial real estate, investment properties, or relocation assistance, we can help.
          </p>
          <a href="/contact" className="inline-block bg-black-900 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent-600 transition-colors">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </div>
  );
};