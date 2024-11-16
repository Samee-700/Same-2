import React from 'react';
import { Sliders, MapPin, Star } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    minRating: number;
    maxDistance: number;
    selectedLoanTypes: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    minRating: number;
    maxDistance: number;
    selectedLoanTypes: string[];
  }>>;
}

const loanTypes = ['Personal', 'Business', 'Auto', 'Home Improvement', 'Education', 'Debt Consolidation'];

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Sliders className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <label className="text-sm font-medium text-gray-700">Minimum Rating</label>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={filters.minRating}
            onChange={(e) => setFilters(prev => ({ ...prev, minRating: parseFloat(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="text-sm text-gray-600 mt-1">{filters.minRating}+ stars</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <label className="text-sm font-medium text-gray-700">Maximum Distance</label>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={filters.maxDistance}
            onChange={(e) => setFilters(prev => ({ ...prev, maxDistance: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="text-sm text-gray-600 mt-1">Within {filters.maxDistance} miles</div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Loan Types</label>
          <div className="flex flex-wrap gap-2">
            {loanTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilters(prev => ({
                  ...prev,
                  selectedLoanTypes: prev.selectedLoanTypes.includes(type)
                    ? prev.selectedLoanTypes.filter(t => t !== type)
                    : [...prev.selectedLoanTypes, type]
                }))}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.selectedLoanTypes.includes(type)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}