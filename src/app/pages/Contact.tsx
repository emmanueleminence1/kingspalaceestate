import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    primary: '+234 800 123 4567',
    secondary: '+234 800 765 4321',
    href: 'tel:+2348001234567',
  },
  {
    icon: Mail,
    label: 'Email',
    primary: 'info@kingspalaceestate.com',
    secondary: 'rentals@kingspalaceestate.com',
    href: 'mailto:info@kingspalaceestate.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    primary: 'KINGS PALACE Estate',
    secondary: 'Victoria Island, Lagos, Nigeria',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    primary: 'Monday – Saturday',
    secondary: '8:00 AM – 6:00 PM',
    href: '#',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0F172A] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Get In Touch</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700 }}>
            Contact Us
          </h1>
          <p className="text-white/60 max-w-xl">
            Have questions about our apartments or want to schedule an inspection? We're happy to help. Reach out through any of the channels below.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 bg-[#F8F6EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-white p-6 rounded-xl border border-[rgba(15,23,42,0.08)] hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-[#0F172A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0F172A] transition-colors duration-300" />
              </div>
              <p className="text-[#6B7280] text-xs uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-[#0F172A] font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.primary}
              </p>
              <p className="text-[#6B7280] text-sm">{item.secondary}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-3">Send a Message</p>
            <h2 className="text-[#0F172A] mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
              We'd Love to Hear From You
            </h2>

            {submitted ? (
              <div className="bg-[#F8F6EE] rounded-2xl p-12 text-center">
                <CheckCircle className="w-14 h-14 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-[#0F172A] font-semibold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Message Sent!
                </h3>
                <p className="text-[#6B7280]">Thank you for reaching out. We'll respond within 24 hours.</p>
                <button
                  onClick={() => { setForm({ name: '', email: '', phone: '', subject: '', message: '' }); setSubmitted(false); }}
                  className="mt-6 px-6 py-2.5 border-2 border-[#0F172A] text-[#0F172A] text-sm font-semibold rounded hover:bg-[#0F172A] hover:text-white transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Amara Obi' },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[#0F172A] text-sm font-medium mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        className="w-full border border-[rgba(15,23,42,0.2)] text-[#1F2937] placeholder-[#9CA3AF] rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="amara@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[rgba(15,23,42,0.2)] text-[#1F2937] placeholder-[#9CA3AF] rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full border border-[rgba(15,23,42,0.2)] text-[#1F2937] rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option>Apartment Inquiry</option>
                    <option>Schedule Inspection</option>
                    <option>Pricing Information</option>
                    <option>General Inquiry</option>
                    <option>Maintenance Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0F172A] text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what you're looking for or ask any questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[rgba(15,23,42,0.2)] text-[#1F2937] placeholder-[#9CA3AF] rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0F172A] text-white font-bold rounded hover:bg-[#1e2d47] transition-all duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map / Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-64 bg-[#F1EFE8] mb-6">
              <iframe
                title="KINGS PALACE Estate Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7292688025256!2d3.4073499!3d6.4306993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x6116203a1b2c3d4e!2sVictoria+Island%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-[#0F172A] p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Visit Our Office
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Our estate office is open Monday through Saturday. Come in for a tour or to discuss your rental needs with our friendly team.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-white/70">KINGS PALACE Estate, Victoria Island, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-white/70">Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </div>
              <a
                href="https://wa.me/2348001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: '#25D366', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
