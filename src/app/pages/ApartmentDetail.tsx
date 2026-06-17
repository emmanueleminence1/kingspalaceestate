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
import emailjs from '@emailjs/browser';

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

  // ✅ EMAILJS SUBMIT (REPLACED NETLIFY)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log("FORM SUBMITTED");
  
    try {
      // EmailJS code here
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
    }
  };{
      await emailjs.send(
        'service_b4e3bs6',
        'temlate_uz9c56e',
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          apartment: apartment.title
        },
        'a5cGkr69Z420JytZ8'
      );

      setSubmitted(true);

      setForm({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Message failed to send. Try again.');
    }
  };

  const nextImg = () =>
    setActiveImg((i) => (i + 1) % apartment.gallery.length);

  const prevImg = () =>
    setActiveImg((i) => (i - 1 + apartment.gallery.length) % apartment.gallery.length);

  return (
    <div className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="bg-[#0F172A] pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/apartments"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Apartments
          </Link>

          <h1 className="text-white text-3xl font-bold">
            {apartment.title}
          </h1>

          <p className="text-white/60 flex items-center gap-2 mt-2">
            <MapPin className="w-4 h-4" />
            Victoria Island, Lagos
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={apartment.gallery[activeImg]}
              className="w-full h-full object-cover"
            />

            <button onClick={prevImg} className="absolute left-3 top-1/2 bg-black/50 text-white p-2 rounded-full">
              <ChevronLeft />
            </button>

            <button onClick={nextImg} className="absolute right-3 top-1/2 bg-black/50 text-white p-2 rounded-full">
              <ChevronRight />
            </button>
          </div>

          <p className="text-gray-600">{apartment.description}</p>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0F172A] rounded-2xl p-6">

          <h2 className="text-white text-lg font-semibold mb-4">
            Request Inspection
          </h2>

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="text-green-400 w-10 h-10 mx-auto mb-2" />
              <p className="text-white">Request Sent Successfully</p>
            </div>
          ) : (

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded bg-white/10 text-white"
              />

              <textarea
                placeholder={`I'm interested in ${apartment.title}`}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full p-3 rounded bg-white/10 text-white"
                rows={4}
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
          <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <p className="text-white/60 text-xs">Call us</p>
              <a href="tel:+2348001234567" className="text-white text-sm">
                +234 800 123 4567
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}