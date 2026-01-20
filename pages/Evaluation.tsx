import React, { useState } from 'react';

export const Evaluation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-900 px-4">
        <div className="bg-black-800 p-8 border border-white/10 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-accent-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-accent-500">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
          <p className="text-gray-400 mb-6">Roland will analyze your property details and contact you shortly with your comprehensive home evaluation.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-accent-600 font-medium hover:text-white transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black-900 min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Valuation</span>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Free Home Evaluation</h1>
          <p className="text-gray-400 text-lg font-light">
            Discover what your home is worth in today's market. Fill out the form below for a no-obligation comparative market analysis.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-black-800 p-10 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
              <input type="text" required id="firstName" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" />
            </div>
            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
              <input type="text" required id="lastName" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
            <input type="email" required id="email" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" />
          </div>

          <div>
            <label htmlFor="address" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Property Address</label>
            <input type="text" required id="address" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors" placeholder="e.g. 123 Main St, Calgary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="beds" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Bedrooms</label>
              <select id="beds" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
            <div>
              <label htmlFor="baths" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Bathrooms</label>
              <select id="baths" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Property Type</label>
              <select id="type" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors">
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeframe" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">When are you planning to sell?</label>
            <select id="timeframe" className="block w-full bg-black-900 border border-white/10 text-white focus:border-accent-600 focus:ring-0 py-3 px-4 transition-colors">
              <option>Immediately</option>
              <option>1-3 Months</option>
              <option>3-6 Months</option>
              <option>6-12 Months</option>
              <option>Just Curious</option>
            </select>
          </div>

          <button type="submit" className="w-full flex justify-center py-4 px-4 text-sm font-bold uppercase tracking-widest text-white bg-accent-600 hover:bg-white hover:text-black-900 transition-all duration-300">
            Get My Free Evaluation
          </button>
        </form>
      </div>
    </div>
  );
};