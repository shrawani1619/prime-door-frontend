import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';
const PHONE_DISPLAY = '(551) 426-3018';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <div className="bg-gold-500 text-navy-900 text-center py-2 px-4 font-semibold text-sm sm:text-base">
        <a href={`tel:${PHONE}`} className="hover:underline">
          Emergency Service: {PHONE_DISPLAY}
        </a>
      </div>

      <div className="bg-white border-b border-gray-200 text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo to="/" imgClassName="h-16 w-auto max-w-[220px] object-contain" />

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium hover:text-gold-500 transition-colors ${
                      isActive ? 'text-gold-500' : 'text-navy-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/portal/login"
                className="bg-navy-900 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-navy-700 transition-colors"
              >
                Customer Portal
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden p-2 text-navy-900"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{open ? '✕' : '☰'}</span>
            </button>
          </div>

          {open && (
            <nav className="lg:hidden pb-4 flex flex-col gap-2 border-t border-gray-100 pt-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="py-2 px-2 rounded hover:bg-gray-100 text-navy-900"
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/portal/login"
                onClick={() => setOpen(false)}
                className="py-2 px-2 text-gold-500 font-semibold"
              >
                Customer Portal
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
