import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL, PERTH_SUBURBS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-premium-black text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-display font-bold text-gold tracking-tighter leading-none">
                BLACK SWAN
              </span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white">
                Wheelchair Taxis
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Perth's premier wheelchair taxi service. Providing safe, reliable, and premium accessible transport for NDIS participants, hospital transfers, and airport travel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gold hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-gold hover:text-white transition-colors"><Twitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Wheelchair Taxi Services</Link></li>
              <li><Link to="/ndis" className="hover:text-gold transition-colors">NDIS Transport Perth</Link></li>
              <li><Link to="/airport" className="hover:text-gold transition-colors">Airport Transfers</Link></li>
              <li><Link to="/hospital" className="hover:text-gold transition-colors">Hospital Transfers</Link></li>
              <li><Link to="/areas" className="hover:text-gold transition-colors">Areas We Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold w-5 h-5 flex-shrink-0" />
                <span>Serving all Perth Suburbs & WA Hospitals</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-5 h-5 flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* SEO Suburbs */}
          <div>
            <h4 className="text-lg font-bold text-gold uppercase tracking-widest mb-6">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {PERTH_SUBURBS.slice(0, 12).map(suburb => (
                <span key={suburb} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10">
                  {suburb}
                </span>
              ))}
              <Link to="/areas" className="text-[10px] uppercase tracking-wider text-gold underline">View All Suburbs</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Black Swan Wheelchair Taxis Perth. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
