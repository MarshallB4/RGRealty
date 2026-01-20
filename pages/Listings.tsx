import React, { useState, useMemo } from 'react';
import { MOCK_LISTINGS } from '../constants';
import { ListingCard } from '../components/ListingCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export const Listings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [beds, setBeds] = useState<string>('all');
  const [baths, setBaths] = useState<string>('all');
  const [propertyType, setPropertyType] = useState<string>('all');

  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter(listing => {
      // Search Filter
      const matchesSearch = 
        listing.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.city.toLowerCase().includes(searchTerm.toLowerCase());

      // Price Filter
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = listing.price >= min && listing.price <= max;
        } else {
          matchesPrice = listing.price >= min;
        }
      }

      // Beds Filter
      let matchesBeds = true;
      if (beds !== 'all') {
        matchesBeds = listing.beds >= Number(beds);
      }

      // Baths Filter
      let matchesBaths = true;
      if (baths !== 'all') {
        matchesBaths = listing.baths >= Number(baths);
      }

      // Type Filter
      let matchesType = true;
      if (propertyType !== 'all') {
        matchesType = listing.type === propertyType;
      }

      return matchesSearch && matchesPrice && matchesBeds && matchesBaths && matchesType;
    });
  }, [searchTerm, priceRange, beds, baths, propertyType]);

  const FilterPill = ({ label, value, onChange, options }: any) => (
    <div className="flex flex-col">
       <span className="text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">{label}</span>
       <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-black-800 border border-white/10 px-4 py-2.5 pr-8 rounded-none text-sm font-medium text-white focus:outline-none focus:border-accent-600 transition-colors cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
      >
        {options.map((opt: any) => (
          <option key={opt.val} value={opt.val}>{opt.label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="bg-black-900 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-accent-600 font-bold tracking-[0.2em] uppercase text-xs block mb-2">Portfolio</span>
            <h1 className="text-4xl font-serif font-bold text-white">Exclusive Listings</h1>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 text-right">
             Showing {filteredListings.length} properties
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-black-800 p-6 shadow-sm border border-white/10 mb-12">
           <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border-b border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-accent-600 transition-colors"
                  placeholder="Search by address, city or neighborhood..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-4 items-end">
                <FilterPill 
                  label="Price"
                  value={priceRange}
                  onChange={setPriceRange}
                  options={[
                    {val: 'all', label: 'All Prices'},
                    {val: '0-400000', label: 'Under $400k'},
                    {val: '400000-600000', label: '$400k - $600k'},
                    {val: '600000-800000', label: '$600k - $800k'},
                    {val: '800000-1000000', label: '$800k - $1M'},
                    {val: '1000000-0', label: '$1M+'},
                  ]}
                />
                <FilterPill 
                  label="Type"
                  value={propertyType}
                  onChange={setPropertyType}
                  options={[
                    {val: 'all', label: 'All Types'},
                    {val: 'House', label: 'House'},
                    {val: 'Condo', label: 'Condo'},
                    {val: 'Townhouse', label: 'Townhouse'},
                  ]}
                />
                <FilterPill 
                  label="Beds"
                  value={beds}
                  onChange={setBeds}
                  options={[
                    {val: 'all', label: 'Any'},
                    {val: '1', label: '1+'},
                    {val: '2', label: '2+'},
                    {val: '3', label: '3+'},
                    {val: '4', label: '4+'},
                  ]}
                />
                
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange('all');
                    setBeds('all');
                    setBaths('all');
                    setPropertyType('all');
                  }}
                  className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-accent-600 transition-colors"
                >
                  Reset
                </button>
              </div>
           </div>
        </div>

        {/* Results */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-fade-in">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-black-800 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-2">No properties found</h3>
            <p className="text-gray-500">Please adjust your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};