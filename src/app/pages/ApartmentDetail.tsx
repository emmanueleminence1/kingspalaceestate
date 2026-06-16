import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { Bed, Bath, Maximize, MapPin, CheckCircle, ChevronLeft, ChevronRight, ArrowLeft, Phone } from 'lucide-react';
import { apartments, formatPrice } from '../data/apartments';

export function ApartmentDetail() {
  const { id } = useParams();
  const apartment = apartments.find((a) => a.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!apartment) return <Navigate to="/apartments" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextImg = () => setActiveImg((i) => (i + 1) % apartment.gallery.length);
  const prevImg = () => setActiveImg((i) => (i - 1 + apartment.gallery.length) % apartment.gallery.length);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0F172A] pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/apartments" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Apartments
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="inline-block bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-3 py-1 rounded mb-3">
                {apartment.type}
              </span>
              <h1 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700 }}>
                {apartment.title}
              </h1>
              <p className="text-white/60 text-sm flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5" />
                Victoria Island, Lagos · {apartment.floor}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#D4AF37]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
                {formatPrice(apartment.price)}
              </p>
              <span className={`text-xs px-3 py-1 rounded font-semibold ${apartment.status === 'available' ? 'bg-emerald-500 text-white' : 'bg-white/20 text-white'}`}>
                {apartment.status === 'available' ? 'Available Now' : 'Currently Occupied'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div>
              <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 bg-[#F1EFE8]">
                <img
                  src={apartment.gallery[activeImg]}
                  alt={`${apartment.title} view ${activeImg + 1}`}
                  className="w-full h-full object-cover"
                />
                {apartment.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {apartment.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeImg ? 'bg-[#D4AF37] w-5' : 'bg-white/60'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {apartment.gallery.length > 1 && (
                <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                  {apartment.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === activeImg ? 'border-[#D4AF37]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Bed, label: 'Bedrooms', value: apartment.bedrooms },
                { icon: Bath, label: 'Bathrooms', value: apartment.bathrooms },
                { icon: Maximize, label: 'Square Feet', value: `${apartment.sqft.toLocaleString()} sqft` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#F8F6EE] p-4 rounded-xl text-center">
                  <Icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-[#0F172A] font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>{value}</p>
                  <p className="text-[#6B7280] text-xs">{label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-[#0F172A] font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
                About This Apartment
              </h2>
              <p className="text-[#6B7280] leading-relaxed">{apartment.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-[#0F172A] font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {apartment.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-sm text-[#1F2937]">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div>
            <div className="sticky top-28">
              <div className="bg-[#0F172A] rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem' }}>
                  Request Inspection
                </h3>
                <p className="text-white/60 text-sm mb-6">Fill in your details and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                    <p className="text-white font-semibold mb-2">Request Sent!</p>
                    <p className="text-white/60 text-sm">We'll contact you shortly to schedule your inspection.</p>
                  </div>
                ) : (
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="space-y-4"
>

  {/* Netlify required hidden inputs */}
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />

  {[
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Adeyemi' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  ].map((field) => (
    <div key={field.name}>
      <label className="block text-white/70 text-xs uppercase tracking-wide mb-1.5">
        {field.label}
      </label>

      <input
        type={field.type}
        name={field.name}   // ✅ IMPORTANT FOR NETLIFY
        required
        placeholder={field.placeholder}
        value={form[field.name as keyof typeof form]}
        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
      />
    </div>
  ))}

  <button
    type="submit"
    className="w-full bg-[#D4AF37] text-black font-medium py-3 rounded hover:opacity-90 transition"
  >
    Send Message
  </button>

</form>
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Adeyemi' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-white/70 text-xs uppercase tracking-wide mb-1.5">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-white/70 text-xs uppercase tracking-wide mb-1.5">Message</label>
                      <textarea
                        rows={3}
                        placeholder={`I'm interested in ${apartment.title}...`}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D4AF37] text-[#0F172A] font-bold rounded hover:bg-[#E5C848] transition-all duration-200"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Request Inspection
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-white/60 text-xs">Or call us directly</p>
                    <a href="tel:+2348001234567" className="text-white text-sm font-medium hover:text-[#D4AF37] transition-colors">
                      +234 800 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
