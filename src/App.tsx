import React, { useState, useMemo } from 'react';
import { Search, MapPin } from 'lucide-react';
import { providers } from './data/mockProviders';
import SearchFilters from './components/SearchFilters';
import ProviderCard from './components/ProviderCard';

function App() {
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    minRating: 4,
    maxDistance: 10,
    selectedLoanTypes: [] as string[],
  });

  const filteredProviders = useMemo(() => {
    return providers.filter(provider => {
      const meetsRating = provider.rating >= filters.minRating;
      const meetsDistance = provider.distance <= filters.maxDistance;
      const meetsLoanTypes = filters.selectedLoanTypes.length === 0 || 
        provider.loanTypes.some(type => filters.selectedLoanTypes.includes(type));
      
      return meetsRating && meetsDistance && meetsLoanTypes;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Find Top-Rated Loan Providers Near You
          </h1>
          <p className="text-indigo-100 text-center mb-8">
            Compare personal loan offers from 4+ star rated providers in your area
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Enter your location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <SearchFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredProviders.length} Providers Found
              </h2>
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <option>Sort by Rating</option>
                <option>Sort by Distance</option>
                <option>Sort by Min APR</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;