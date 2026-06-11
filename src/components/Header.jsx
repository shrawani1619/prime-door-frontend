import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const PHONE = import.meta.env.VITE_PHONE || '+62815876218';
const PHONE_DISPLAY = '(+62)81587 6218';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Projects' },
  {
    label: 'Pages',
    children: [
      { to: '/pricing', label: 'Pricing' },
      { to: '/faq', label: 'FAQ' },
    ],
  },
  { to: '/blog', label: 'Blog' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors duration-300 relative py-1 ${
    isActive ? 'text-gold-500' : 'text-navy-900 hover:text-gold-500'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white border-b border-gray-100 text-center py-2 px-4 font-semibold text-sm sm:text-base text-navy-900">
        <a href={`tel:${PHONE}`} className="hover:text-gold-500 transition-colors inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          Emergency Service: {PHONE_DISPLAY}
        </a>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo to="/" imgClassName="h-14 w-auto max-w-[200px] object-contain" />

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 py-1 uppercase tracking-wide ${
                        link.children.some((c) => location.pathname === c.to)
                          ? 'text-gold-500'
                          : 'text-navy-900 hover:text-gold-500'
                      }`}
                    >
                      {link.label}
                      <span className="text-xs">▾</span>
                    </button>

                    <AnimatePresence>
                      {dropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border border-gray-100 py-3 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `block px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                                  isActive
                                    ? 'text-gold-500 bg-gray-50'
                                    : 'text-navy-900 hover:bg-gray-50 hover:text-gold-500'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={link.to} to={link.to} className={linkClass}>
                    {link.label}
                  </NavLink>
                )
              )}

              <Link
                to="/portal/login"
                className="text-sm font-medium text-gray-500 hover:text-navy-900 transition-colors"
              >
                Portal
              </Link>

              <Link to="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">
                Get a Quote
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-navy-900 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{open ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-900/60 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.label} className="mb-2">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                          {link.label}
                        </p>
                        {link.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="block py-2.5 px-3 rounded-lg text-navy-900 hover:bg-gray-50 hover:text-gold-500 transition-colors"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    ) : (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="py-2.5 px-3 rounded-lg text-navy-900 hover:bg-gray-50 hover:text-gold-500 transition-colors font-medium"
                      >
                        {link.label}
                      </NavLink>
                    )
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <Link
                    to="/portal/login"
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-3 text-gray-500 font-medium"
                  >
                    Customer Portal
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center btn-primary"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
