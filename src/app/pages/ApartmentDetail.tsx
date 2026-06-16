import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Phone
} from 'lucide-react';
import { apartments, formatPrice } from '../data/apartments';

export function ApartmentDetail() {
  const { id } = useParams();
  const apartment = apartments.find((a) => a.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!apartment) return <Navigate to="/apartments" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextImg = () =>
    setActiveImg((i) => (i + 1) % apartment.gallery.length);

  const prevImg = () =>
    setActiveImg(
      (i) => (i - 1 + apartment.gallery.length) % apartment.gallery.length
    );

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0F172A] pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/apartments"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apartments
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="inline-block bg-[#D4AF37] text-[#0F172A] text-xs font-bold px-3 py-1 rounded mb-3">
                {apartment.type}
              </span>

              <h1
                className="text-white"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                  fontWeight: 700
                }}
              >
                {apartment.title}
              </h1>

              <p className="text-white/60 text-sm flex items-center gap-1.5 mt-2">
                <MapPin className="w-3.5 h-3.5" />
                Victoria Island, Lagos · {apartment.floor}
              </p>
            </div>

            <div className="text-right">
              <p
                className="text-[#D4AF37]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 700
                }}
              >
                {formatPrice(apartment.price)}
              </p>

              <span
                className={`text-xs px-3 py-1 rounded font-semibold ${
                  apartment.status === 'available'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/20 text-white'
                }`}
              >
                {apartment.status === 'available'
                  ? 'Available Now'
                  : 'Currently Occupied'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div>
              <div className="relative rounded-xl overflow-hidden h-72 sm:h-96 bg-[#F1EFE8]">
                <img
                  src={apartment.gallery[activeImg]}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {apartment.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={nextImg}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Bed, label: 'Bedrooms', value: apartment.bedrooms },
                { icon: Bath, label: 'Bathrooms', value: apartment.bathrooms },
                {
                  icon: Maximize,
                  label: 'Square Feet',
                  value: `${apartment.sqft.toLocaleString()} sqft`
                }
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#F8F6EE] p-4 rounded-xl text-center"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                  <p className="font-bold">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600">{apartment.description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {apartment.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="sticky top-28">
              <div className="bg-[#0F172A] rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Request Inspection
                </h3>

                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                    <p className="text-white">Request Sent!</p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact"
                    />

                    {[
                      {
                        name: 'name',
                        label: 'Full Name',
                        type: 'text',
                        placeholder: 'John Adeyemi'
                      },
                      {
                        name: 'phone',
                        label: 'Phone Number',
                        type: 'tel',
                        placeholder: '+234 800 000 0000'
                      },
                      {
                        name: 'email',
                        label: 'Email',
                        type: 'email',
                        placeholder: 'john@example.com'
                      }
                    ].map((field) => (
                      <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        value={
                          form[field.name as keyof typeof form]
                        }
                        onChange={(e) =>
                          setForm({
                            ...form,
                            [field.name]: e.target.value
                          })
                        }
                        className="w-full p-3 rounded bg-white/10 text-white"
                      />
                    ))}

                    <textarea
                      name="message"
                      placeholder={`I'm interested in ${apartment.title}`}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value
                        })
                      }
                      className="w-full p-3 rounded bg-white/10 text-white"
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#D4AF37] text-black py-3 rounded font-bold"
                    >
                      Request Inspection
                    </button>
                  </form>
                )}

                {/* PHONE BLOCK */}
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-white/60 text-xs">
                      Or call us directly
                    </p>
                    <a
                      href="tel:+2348001234567"
                      className="text-white text-sm"
                    >
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

