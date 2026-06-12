import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { apartments } from '../data/apartments';
import { ApartmentCard } from '../components/ApartmentCard';

const types = ['All', 'Studio', '2 Bedroom', '3 Bedroom', '4 Bedroom'];

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₦500,000', min: 0, max: 499999 },
  { label: '₦500,000 – ₦800,000', min: 500000, max: 800000 },
  { label: '₦800,000 – ₦1,200,000', min: 800000, max: 1200000 },
  { label: 'Above ₦1,200,000', min: 1200001, max: Infinity },
];

export function Apartments() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0);

  const filtered = apartments.filter((apt) => {
    const typeMatch = selectedType === 'All' || apt.type === selectedType;
    const range = priceRanges[selectedPriceIdx];
    const priceMatch = apt.price >= range.min && apt.price <= range.max;
    return typeMatch && priceMatch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#0F172A] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Our Properties</p>
          <h1 className="text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700 }}>
            Available Apartments
          </h1>
          <p className="text-white/60 max-w-xl">
            Browse our full selection of premium apartments. Each unit is finished to the highest standards and ready for occupancy.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-white border-b border-[rgba(15,23,42,0.1)] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-[#6B7280] text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-[#F1EFE8] text-[#0F172A] hover:bg-[#0F172A]/10'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="ml-auto">
            <select
              value={selectedPriceIdx}
              onChange={(e) => setSelectedPriceIdx(Number(e.target.value))}
              className="px-3 py-1.5 text-sm border border-[rgba(15,23,42,0.2)] rounded text-[#0F172A] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {priceRanges.map((r, i) => (
                <option key={r.label} value={i}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-lg">No apartments match your filters.</p>
            <button
              onClick={() => { setSelectedType('All'); setSelectedPriceIdx(0); }}
              className="mt-4 text-[#D4AF37] text-sm underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-[#6B7280] text-sm mb-6">{filtered.length} apartment{filtered.length !== 1 ? 's' : ''} found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((apt) => (
                <ApartmentCard key={apt.id} apartment={apt} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
