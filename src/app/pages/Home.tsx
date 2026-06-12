import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Droplets, Car, Zap, Trees, Camera, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { apartments } from '../data/apartments';
import { ApartmentCard } from '../components/ApartmentCard';

const amenities = [
  { icon: Shield, label: '24/7 Security', desc: 'Round-the-clock professional security personnel' },
  { icon: Droplets, label: 'Constant Water', desc: 'Reliable borehole and overhead tank supply' },
  { icon: Car, label: 'Parking Space', desc: 'Dedicated parking for residents and guests' },
  { icon: Zap, label: 'Reliable Electricity', desc: 'Backup generator for uninterrupted power' },
  { icon: Trees, label: 'Clean Environment', desc: 'Landscaped gardens and regular maintenance' },
  { icon: Camera, label: 'CCTV Surveillance', desc: 'Full estate coverage with 24/7 monitoring' },
];

const whyUs = [
  { title: 'Secure Community', desc: 'Gated estate with 24/7 manned security and CCTV surveillance for total peace of mind.' },
  { title: 'Affordable Living', desc: 'Premium quality at competitive prices. Get the best value for your rental budget.' },
  { title: 'Quality Apartments', desc: 'Every unit is finished to the highest standards with modern fixtures and fittings.' },
  { title: 'Great Location', desc: 'Strategically located with easy access to business districts, schools, and amenities.' },
];

export function Home() {
  const featured = apartments.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0F172A]">
          <img
            src="https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?w=1600&h=900&fit=crop&auto=format"
            alt="KINGS PALACE Estate exterior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/40 to-[#0F172A]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs font-semibold mb-6">
              Premium Estate Living
            </p>
            <h1
              className="text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', fontWeight: 700 }}
            >
              Find Your Next Home at
              <br />
              <span className="text-[#D4AF37]">KINGS PALACE</span> Estate
            </h1>
            <p className="text-white/70 mb-10 max-w-xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Comfortable and affordable apartments in a secure and modern environment. Experience luxury living at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apartments"
                className="px-8 py-4 bg-[#D4AF37] text-[#0F172A] font-bold rounded hover:bg-[#E5C848] transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                View Apartments
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { value: '50+', label: 'Units Available' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '5★', label: 'Estate Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[#D4AF37] font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem' }}>
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-[#D4AF37] rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Our Properties</p>
          <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>
            Featured Apartments
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Discover our carefully curated selection of premium apartments designed for modern, comfortable living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/apartments"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F172A] text-white font-semibold rounded hover:bg-[#1e2d47] transition-all duration-200"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View All Apartments
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-[#F8F6EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Estate Facilities</p>
            <h2 className="text-[#0F172A] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>
              World-Class Amenities
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Everything you need for a comfortable, convenient lifestyle is available right here within the estate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-white p-7 rounded-xl border border-[rgba(15,23,42,0.06)] hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0F172A] transition-colors duration-300" />
                </div>
                <h3 className="text-[#0F172A] font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.label}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-4">Why Kings Palace</p>
              <h2 className="text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.25 }}>
                The Finest Address in the City
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                KINGS PALACE Estate is more than just a place to live — it's a community built on security, comfort, and quality. We take pride in creating an environment where residents truly feel at home.
              </p>

              <div className="space-y-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1543414347-1c348021f279?w=600&h=800&fit=crop&auto=format"
                  alt="Estate building"
                  className="rounded-xl object-cover w-full h-64 lg:h-80"
                />
                <div className="flex flex-col gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=400&fit=crop&auto=format"
                    alt="Apartment interior"
                    className="rounded-xl object-cover w-full h-[calc(50%-8px)]"
                  />
                  <div className="rounded-xl bg-[#D4AF37] p-5 flex flex-col items-center justify-center">
                    <Star className="w-6 h-6 text-[#0F172A] mb-2" />
                    <p className="text-[#0F172A] font-bold text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>5.0</p>
                    <p className="text-[#0F172A]/70 text-xs text-center">Average resident rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-4">Ready to Move In?</p>
          <h2 className="text-[#0F172A] mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>
            Schedule an Inspection Today
          </h2>
          <p className="text-[#6B7280] mb-8 leading-relaxed max-w-xl mx-auto">
            Come see your future home in person. Our friendly estate managers are ready to walk you through our available units at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#D4AF37] text-[#0F172A] font-bold rounded hover:bg-[#E5C848] transition-all duration-200 shadow-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Book an Inspection
            </Link>
            <a
              href="tel:+2348001234567"
              className="px-8 py-4 border-2 border-[#0F172A] text-[#0F172A] font-semibold rounded hover:bg-[#0F172A] hover:text-white transition-all duration-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
