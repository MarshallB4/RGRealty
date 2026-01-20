import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { AGENT_NAME, COMPANY_NAME, AGENCY_NAME, LOCATION } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black-900 text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif font-bold mb-6 text-white">{COMPANY_NAME}</h2>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Elevating the standard of real estate in Calgary. We provide a bespoke experience tailored to the unique needs of every client.
            </p>
            <div className="text-xs font-bold text-accent-600 uppercase tracking-[0.2em]">
              {AGENCY_NAME}
            </div>
          </div>

          <div className="md:col-span-1"></div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/listings" className="text-gray-400 hover:text-accent-600 transition-colors text-sm">Properties</Link></li>
              <li><Link to="/market-stats" className="text-gray-400 hover:text-accent-600 transition-colors text-sm">Market Intelligence</Link></li>
              <li><Link to="/evaluation" className="text-gray-400 hover:text-accent-600 transition-colors text-sm">Home Valuation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent-600 transition-colors text-sm">Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="text-accent-600 mr-4 mt-0.5 shrink-0" size={18} />
                <span className="text-gray-400 font-light text-sm leading-relaxed">{LOCATION}</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent-600 mr-4 shrink-0" size={18} />
                <span className="text-gray-400 font-light text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent-600 mr-4 shrink-0" size={18} />
                <span className="text-gray-400 font-light text-sm">roland@rgrealty.ca</span>
              </li>
            </ul>
            
             <div className="flex space-x-6 mt-10">
               <a href="#" className="text-gray-500 hover:text-white transition"><Facebook size={20} /></a>
               <a href="#" className="text-gray-500 hover:text-white transition"><Instagram size={20} /></a>
               <a href="#" className="text-gray-500 hover:text-white transition"><Linkedin size={20} /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};