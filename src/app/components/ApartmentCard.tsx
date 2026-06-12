import { Link } from 'react-router';
import { Bed, Bath, ArrowRight } from 'lucide-react';
import { Apartment, formatPrice } from '../data/apartments';

interface ApartmentCardProps {
  apartment: Apartment;
}

export function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[rgba(15,23,42,0.08)] shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden h-56 bg-[#F1EFE8]">
        <img
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded text-xs font-semibold tracking-wide ${
            apartment.status === 'available'
              ? 'bg-emerald-500 text-white'
              : 'bg-[#0F172A]/80 text-white'
          }`}>
            {apartment.status === 'available' ? 'Available' : 'Occupied'}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded text-xs font-bold">
          {apartment.type}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-[#0F172A] font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}>
          {apartment.title}
        </h3>
        <p className="text-[#D4AF37] font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem' }}>
          {formatPrice(apartment.price)}
        </p>

        <div className="flex items-center gap-5 text-[#6B7280] text-sm mb-5">
          <span className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#0F172A]" />
            {apartment.bedrooms} {apartment.bedrooms === 1 ? 'Bed' : 'Beds'}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#0F172A]" />
            {apartment.bathrooms} {apartment.bathrooms === 1 ? 'Bath' : 'Baths'}
          </span>
          <span className="text-xs">{apartment.sqft.toLocaleString()} sqft</span>
        </div>

        <Link
          to={`/apartments/${apartment.id}`}
          className="flex items-center justify-between w-full px-4 py-3 border-2 border-[#0F172A] text-[#0F172A] rounded text-sm font-semibold hover:bg-[#0F172A] hover:text-white transition-all duration-200 group/btn"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
