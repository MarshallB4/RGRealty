import React, { useState } from 'react';
import { MOCK_MARKET_DATA } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { generateMarketAnalysis } from '../services/geminiService';
import { Sparkles, RefreshCw, TrendingUp, Activity } from 'lucide-react';
import { LoadingState } from '../types';

export const MarketStats: React.FC = () => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerateAnalysis = async () => {
    setStatus(LoadingState.LOADING);
    const result = await generateMarketAnalysis(MOCK_MARKET_DATA);
    setAnalysis(result);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="bg-black-900 min-h-screen pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
           <div>
             <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-4">Analytics</span>
             <h1 className="text-4xl font-serif font-bold text-white">Market Intelligence</h1>
             <p className="text-gray-400 mt-4 font-light max-w-xl">
               Real-time data for the Calgary housing market. We track trends so you can time your move perfectly.
             </p>
           </div>
           <div className="mt-6 md:mt-0 flex gap-4">
              <div className="bg-black-800 px-6 py-4 border border-white/10">
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Avg Price</span>
                <span className="text-xl font-serif text-white">$575,000</span>
                <span className="text-green-500 text-xs ml-2">↑ 2.4%</span>
              </div>
              <div className="bg-black-800 px-6 py-4 border border-white/10">
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Active Listings</span>
                <span className="text-xl font-serif text-white">2,300</span>
                <span className="text-red-400 text-xs ml-2">↓ 1.2%</span>
              </div>
           </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Price Trend */}
          <div className="bg-black-800 p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-serif text-white">Price Trajectory</h3>
               <TrendingUp size={20} className="text-accent-600" />
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={MOCK_MARKET_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                  <XAxis dataKey="month" stroke="#737373" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis stroke="#737373" tickFormatter={(value) => `$${value/1000}k`} tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '0px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Avg Price']}
                  />
                  <Line type="monotone" dataKey="avgPrice" stroke="#ea580c" strokeWidth={2} dot={{ r: 4, fill: '#171717', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#ea580c' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inventory Trend */}
          <div className="bg-black-800 p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-serif text-white">Inventory Levels</h3>
               <Activity size={20} className="text-gray-400" />
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_MARKET_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                  <XAxis dataKey="month" stroke="#737373" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis stroke="#737373" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{fill: '#262626', opacity: 0.4}}
                    contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '0px', color: '#fff' }}
                  />
                  <Bar dataKey="inventory" fill="#404040" radius={[0, 0, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-black-800 to-black-900 border border-accent-600/30">
          <div className="absolute top-0 right-0 p-32 bg-accent-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
               <div className="flex items-center gap-4">
                 <div className="bg-accent-600/20 p-3 rounded-full">
                    <Sparkles className="text-accent-500" size={24} />
                 </div>
                 <div>
                   <h3 className="text-2xl font-serif text-white">AI Market Consultant</h3>
                   <p className="text-gray-400 text-sm">Powered by Google Gemini</p>
                 </div>
               </div>
               
               <button 
                onClick={handleGenerateAnalysis}
                disabled={status === LoadingState.LOADING}
                className="group px-8 py-3 bg-white text-black-900 text-sm font-bold uppercase tracking-widest hover:bg-accent-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <RefreshCw className="animate-spin mr-2" size={16} /> Processing...
                  </>
                ) : (
                  'Generate Report'
                )}
              </button>
            </div>
            
            <div className="bg-black-900/50 p-8 border-l-2 border-accent-600 min-h-[100px]">
              {status === LoadingState.IDLE && (
                <p className="text-gray-500 italic">Initiate the AI analysis to receive a comprehensive summary of the trends displayed above.</p>
              )}
              
              {status === LoadingState.LOADING && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  <div className="h-2 bg-white/10 rounded w-4/6"></div>
                </div>
              )}

              {status === LoadingState.SUCCESS && analysis && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-200 leading-relaxed font-light">
                    {analysis}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};