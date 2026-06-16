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

  // ✅ FIXED NETLIFY SUBMISSION (important)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData as any).toString(),
    });

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
      {/* HEADER */}
      <div className="bg-[#0F172A] pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/apartments"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apartments
          </Link>

          <div className="flex justify-between items-end">
            <div>
              <span className="bg-[#D4AF37] text-[#0F172A] text-xs px-3 py-1 rounded">
                {apartment.type}
              </span>

              <h1 className="text-white text-3xl font-bold mt-2">
                {apartment.title}
              </h1>

              <p className="text-white/60 text-sm flex items-center gap-1 mt-2">
                <MapPin className="w-4 h-4" />
                Victoria Island, Lagos · {apartment.floor}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[#D4AF37] text-2xl font-bold">
                {formatPrice(apartment.price)}
              </p>

              <span className="text-xs text-white/70">
                {apartment.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">

          {/* IMAGE */}
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={apartment.gallery[activeImg]}
              className="w-full h-full object-cover"
            />

            <button onClick={prevImg} className="absolute left-3 top-1/2">
              <ChevronLeft />
            </button>

            <button onClick={nextImg} className="absolute right-3 top-1/2">
              <ChevronRight />
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Bed, label: 'Beds', value: apartment.bedrooms },
              { icon: Bath, label: 'Baths', value: apartment.bathrooms },
              {
                icon: Maximize,
                label: 'Size',
                value: `${apartment.sqft} sqft`
              }
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-4 bg-gray-100 rounded text-center">
                <Icon className="mx-auto mb-2 text-[#D4AF37]" />
                <p className="font-bold">{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600">{apartment.description}</p>

        </div>

        {/* RIGHT - FORM */}
        <div className="bg-[#0F172A] rounded-xl p-6">

          <h3 className="text-white text-lg mb-4">
            Request Inspection
          </h3>

          {submitted ? (
            <div className="text-center text-white py-10">
              <CheckCircle className="mx-auto mb-3 text-[#D4AF37]" />
              Request sent successfully!
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
              {/* REQUIRED FOR NETLIFY */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <textarea
                name="message"
                placeholder={`I'm interested in ${apartment.title}`}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
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

          {/* CONTACT */}
          <div className="mt-6 border-t border-white/10 pt-4 flex gap-3 text-white">
            <Phone className="text-[#D4AF37]" />
            <div>
              <p className="text-xs text-white/60">Call us</p>
              <a href="tel:+2348001234567">
                +234 800 123 4567
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}