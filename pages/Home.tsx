import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Home as HomeIcon, Award } from 'lucide-react';
import { AGENT_NAME, AGENCY_NAME, MOCK_LISTINGS } from '../constants';
import { ListingCard } from '../components/ListingCard';

export const Home: React.FC = () => {
  const featuredListings = MOCK_LISTINGS.filter(l => l.featured).slice(0, 3);

  return (
    <div className="animate-fade-in bg-black-900">
      {/* Modern Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with slight zoom effect */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2500&auto=format&fit=crop" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover brightness-[0.55] scale-105"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="animate-fade-up opacity-0 text-accent-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">
            Calgary • Alberta
          </span>
          <h1 className="animate-fade-up opacity-0 [animation-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[0.9] tracking-tight font-extrabold">
            Elevate Your <br/> <span className="text-gray-400 font-light">Living Experience</span>
          </h1>
          <p className="animate-fade-up opacity-0 [animation-delay:400ms] text-gray-300 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
            Curating exceptional properties for exceptional lives. Partner with {AGENT_NAME} for a seamless real estate journey.
          </p>
          <div className="animate-fade-up opacity-0 [animation-delay:600ms] flex flex-col sm:flex-row gap-5">
            <Link to="/listings" className="group bg-accent-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black-900 transition-all duration-300">
              View Collection
            </Link>
            <Link to="/contact" className="group border border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black-900 transition-all duration-300 backdrop-blur-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Asymmetrical Intro Section (White Background for Rhythm) */}
      <section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto bg-white text-black-900 relative">
        <div className="absolute inset-0 bg-white z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-5 relative">
             <div className="relative z-10 aspect-[3/4]">
                <img src="assets/images/headshot.jpg" alt={AGENT_NAME} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
             </div>
             {/* Decorative Element */}
             <div className="absolute -bottom-10 -left-10 w-full h-full border border-accent-600/30 -z-10 hidden lg:block"></div>
          </div>
          
          <div className="lg:col-span-7">
            <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black-900 mb-8 leading-tight font-bold">
              Real Estate Redefined <br/> <span className="text-gray-500 font-light">by Intelligence.</span>
            </h2>
            <div className="prose prose-lg text-gray-600 mb-10">
              <p className="mb-6">
                Roland Gjelaj (RGRealty) isn't just selling homes; he's crafting lifestyles. In the dynamic Calgary market, you need more than a realtor—you need a strategist.
              </p>
              <p>
                Backed by the global power of {AGENCY_NAME}, we leverage cutting-edge market data, tailored marketing strategies, and relentless negotiation to ensure your success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
               <div>
                 <h4 className="font-serif text-3xl text-black-900 mb-1 font-bold">500+</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-500">Families Housed</p>
               </div>
               <div>
                 <h4 className="font-serif text-3xl text-black-900 mb-1 font-bold">$150M+</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-500">Volume Sold</p>
               </div>
            </div>

            <Link to="/about" className="inline-flex items-center text-black-900 font-bold uppercase tracking-widest text-xs border-b border-black-900 pb-1 hover:text-accent-600 hover:border-accent-600 transition-colors">
              Read More About Roland <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Black Background) */}
      <section className="bg-black-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
             <div>
               <span className="text-accent-500 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Our Expertise</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold">Comprehensive Solutions</h2>
             </div>
             <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm mt-4 md:mt-0 flex items-center">
               View All Services <ArrowRight size={16} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: HomeIcon, title: "Buying & Selling", desc: "Navigating complex transactions with ease and precision." },
               { icon: TrendingUp, title: "Market Analysis", desc: "Data-driven insights to maximize your investment potential." },
               { icon: Award, title: "Luxury Estate", desc: "Discrete, white-glove service for high-value properties." }
             ].map((service, idx) => (
               <div key={idx} className="group p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300 hover:border-accent-600/30">
                 <service.icon size={32} strokeWidth={1} className="text-accent-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                 <h3 className="text-xl font-serif mb-3 font-bold">{service.title}</h3>
                 <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Collection (Dark Gray Background) */}
      <section className="py-24 bg-black-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Curated Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold">Latest Additions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="text-center mt-16">
             <Link to="/listings" className="inline-block border border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black-900 transition-all duration-300">
               View All Listings
             </Link>
          </div>
        </div>
      </section>
      
      {/* Banner CTA */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
             className="w-full h-full object-cover grayscale brightness-50" 
             alt="Calgary Skyline" 
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
           <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 font-bold">What is your home worth?</h2>
           <p className="text-gray-200 text-lg mb-10 font-light">
             Receive a complimentary, professional valuation of your property based on current market conditions.
           </p>
           <Link to="/evaluation" className="bg-accent-600 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black-900 transition-all duration-300 shadow-2xl">
             Request Valuation
           </Link>
        </div>
      </section>
    </div>
  );
};