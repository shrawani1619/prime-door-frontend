import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import QuoteForm from '../QuoteForm';
import { serviceNav } from '../../lib/serviceNav';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function ServicePageLayout({
  seoTitle,
  seoDescription,
  title,
  description,
  features = [],
  benefits = [],
  defaultServiceType,
  image,
  children,
  showEmergencyCall = false,
}) {
  const { pathname } = useLocation();

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">{title}</span>
        </div>
      </div>

      {/* Split hero — text left, image right (not full-width dark banner) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-500 mb-4">
              Service
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-5">
              {title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {showEmergencyCall ? (
                <a href={`tel:${PHONE}`} className="btn-primary !text-base">
                  Call (551) 426-3018
                </a>
              ) : (
                <Link to="/contact" className="btn-primary !text-base">
                  Request a Quote
                </Link>
              )}
              <Link to="/services" className="btn-outline !text-base">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
          {image && (
            <motion.img
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/30 to-transparent lg:from-navy-900/20" />
        </div>
      </section>

      {/* 3-column body: sidebar | content | form */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Service sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm lg:sticky lg:top-28">
                <div className="bg-navy-900 px-5 py-4">
                  <p className="text-white font-semibold text-sm">Our Services</p>
                </div>
                <nav className="p-2">
                  {serviceNav.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gold-500/15 text-navy-900 border-l-4 border-gold-500'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900 border-l-4 border-transparent'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                <div className={`m-3 mt-0 p-4 rounded-lg text-center ${showEmergencyCall ? 'bg-red-900/90' : 'bg-navy-900'}`}>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    {showEmergencyCall ? '24/7 Emergency' : 'Need Help Now?'}
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-gold-400 font-bold text-lg hover:text-gold-500 transition-colors"
                  >
                    (551) 426-3018
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm"
              >
                <div className="prose-service text-gray-700 leading-relaxed space-y-4">
                  {children}
                </div>

                {features.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <h2 className="text-lg font-bold text-navy-900 mb-5 flex items-center gap-3">
                      <span className="w-8 h-0.5 bg-gold-500" />
                      What We Offer
                    </h2>
                    <ol className="space-y-0">
                      {features.map((item, i) => (
                        <li
                          key={item}
                          className="flex gap-4 py-3 border-b border-gray-50 last:border-0"
                        >
                          <span className="shrink-0 w-8 h-8 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center text-xs font-bold">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-gray-700 pt-1">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Quote form sidebar */}
            <div className="lg:col-span-4 order-3 lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <QuoteForm defaultServiceType={defaultServiceType} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip — full-width dark band */}
      {benefits.length > 0 && (
        <section className="bg-navy-900 py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-white font-bold text-2xl mb-10">
              Why Choose This Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-white/10 rounded-xl p-5 hover:border-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-sm mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services row */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 text-center">
            Explore Other Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceNav
              .filter((item) => item.to !== pathname)
              .map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-5 py-2.5 rounded-full border-2 border-gray-200 text-navy-900 text-sm font-semibold hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
