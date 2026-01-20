import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-accent-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-black-800 p-10 border border-white/10 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-white/5 rounded-full flex items-center justify-center text-accent-600 mb-6">
            <Mail size={32} strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 text-3xl font-serif font-bold text-white">
            Market Insights Weekly
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed">
            Join 2,000+ Calgary residents getting exclusive listings, market stats, and home tips delivered to their inbox.
          </p>
        </div>
        
        {!subscribed ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-4 border border-white/20 placeholder-gray-500 text-white bg-black-900 focus:outline-none focus:border-accent-600 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 text-sm font-bold uppercase tracking-widest text-white bg-accent-600 hover:bg-white hover:text-black-900 transition-all duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center animate-fade-in py-8">
             <h3 className="text-xl font-bold text-accent-600 mb-2">You're Subscribed!</h3>
             <p className="text-gray-400">Keep an eye on your inbox for our next edition.</p>
          </div>
        )}
      </div>
    </div>
  );
};