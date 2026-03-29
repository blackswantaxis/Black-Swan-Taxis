import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'NDIS Transport', path: '/ndis' },
  { name: 'Airport Transfers', path: '/airport' },
  { name: 'Hospital Transfers', path: '/hospital' },
  { name: 'Areas', path: '/areas' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-premium-black text-white border-b border-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-gold tracking-tighter leading-none">
                BLACK SWAN
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white">
                Wheelchair Taxis
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-gold ${
                  location.pathname === link.path ? 'text-gold border-b-2 border-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="btn-gold py-2 px-4 text-sm">
              <Phone className="w-4 h-4" />
              {CONTACT_PHONE}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-gold p-2">
              <Phone className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-premium-black border-t border-gold/20 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-4 text-lg font-bold uppercase tracking-widest border-b border-white/5 flex justify-between items-center ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-gold" />
              </Link>
            ))}
            <div className="pt-6">
              <Link to="/book" className="btn-gold w-full text-center py-4 text-xl">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
