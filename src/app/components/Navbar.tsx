import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Crown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Apartments', href: '/apartments' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-[#0F172A] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Crown className="w-7 h-7 text-[#D4AF37]" />
          <div className="leading-none">
            <span className="block text-white font-semibold tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem' }}>
              KINGS PALACE
            </span>
            <span className="block text-[#D4AF37] tracking-[0.25em] uppercase" style={{ fontSize: '0.6rem', fontFamily: 'Inter, sans-serif' }}>
              Estate
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-[#D4AF37]'
                  : 'text-white/80 hover:text-white'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apartments"
            className="px-5 py-2.5 bg-[#D4AF37] text-[#0F172A] text-sm font-semibold rounded transition-all duration-200 hover:bg-[#E5C848] hover:shadow-md"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View Apartments
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm py-2 border-b border-white/10 ${
                location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apartments"
            className="mt-2 px-5 py-3 bg-[#D4AF37] text-[#0F172A] text-sm font-semibold rounded text-center"
          >
            View Apartments
          </Link>
        </div>
      )}
    </header>
  );
}
