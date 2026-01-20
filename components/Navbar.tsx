import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', path: '/listings' },
    { name: 'Services', path: '/services' },
    { name: 'Market', path: '/market-stats' },
    { name: 'Evaluation', path: '/evaluation' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black-900/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50 relative group">
            <span className="font-serif font-bold text-2xl tracking-tight text-white transition-colors duration-300">
              {COMPANY_NAME}
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent-600 group-hover:text-accent-500 transition-colors">
              Roland Gjelaj
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-accent-500 ${
                  isActive(link.path) ? 'text-accent-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/newsletter" 
              className="ml-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-white text-black-900 hover:bg-accent-600 hover:text-white transition-all duration-300"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-500 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black-900 z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-white hover:text-accent-500"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-gray-300 hover:text-accent-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/newsletter"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-3 bg-accent-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black-900 transition-colors"
          >
            Newsletter
          </Link>
        </div>
      </div>
    </nav>
  );
};