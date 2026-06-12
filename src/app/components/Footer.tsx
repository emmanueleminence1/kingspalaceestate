import { Link } from 'react-router';
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <Crown className="w-7 h-7 text-[#D4AF37]" />
              <div className="leading-none">
                <span className="block text-white font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem' }}>KINGS PALACE</span>
                <span className="block text-[#D4AF37] tracking-[0.25em] uppercase" style={{ fontSize: '0.6rem' }}>Estate</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Premium living spaces in a secure, modern environment. Your comfort is our commitment.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Apartments', href: '/apartments' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-5">Apartment Types</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Studio Suite</li>
              <li>2 Bedroom Flat</li>
              <li>3 Bedroom Flat</li>
              <li>3 Bedroom Duplex</li>
              <li>4 Bedroom Penthouse</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>KINGS PALACE Estate, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+2348001234567" className="hover:text-[#D4AF37] transition-colors">+234 800 123 4567</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@kingspalaceestate.com" className="hover:text-[#D4AF37] transition-colors">info@kingspalaceestate.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2024 KINGS PALACE Estate. All rights reserved.</p>
          <p className="text-white/40 text-sm">Built with care for quality living</p>
        </div>
      </div>
    </footer>
  );
}
