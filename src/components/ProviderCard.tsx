import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';
import type { LoanProvider } from '../data/mockProviders';

interface ProviderCardProps {
  provider: LoanProvider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold">{provider.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{provider.distance} miles • {provider.address}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.loanTypes.map((type) => (
            <span
              key={type}
              className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm"
            >
              {type}
            </span>
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">
              ${provider.minAmount.toLocaleString()} - ${provider.maxAmount.toLocaleString()}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Starting from {provider.minAPR}% APR
          </div>
        </div>
        
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}