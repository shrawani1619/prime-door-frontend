import { Link } from 'react-router-dom';
import Logo from './Logo';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo to="/" imgClassName="h-16 w-auto max-w-[220px] object-contain mb-4" />
          <p className="text-sm leading-relaxed">
            8+ years serving New Jersey with commercial dock, overhead door, and residential garage
            door services.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/emergency" className="hover:text-gold-400">Emergency Repair</Link></li>
            <li><Link to="/services/commercial" className="hover:text-gold-400">Commercial Services</Link></li>
            <li><Link to="/services/residential" className="hover:text-gold-400">Residential Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">
            <a href={`tel:${PHONE}`} className="text-gold-400 font-semibold hover:underline">
              (551) 426-3018
            </a>
          </p>
          <p className="text-sm mt-2">Serving Bergen, Hudson, Essex, Passaic, Union & Middlesex Counties</p>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/50">
        © {new Date().getFullYear()} Prime Door & Dock Solutions. All rights reserved.
      </div>
    </footer>
  );
}
