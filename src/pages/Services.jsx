import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { images } from '../lib/images';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

const services = [
  {
    title: 'Commercial Doors',
    tag: 'Commercial',
    desc: 'Overhead doors, rolling steel, fire-rated doors, and storefront systems for warehouses and commercial facilities.',
    to: '/services/commercial',
    image: images.overhead,
    highlights: ['Sectional & rolling steel doors', 'Fire-rated installations', 'Storefront systems'],
  },
  {
    title: 'Loading Dock Services',
    tag: 'Dock Equipment',
    desc: 'Complete loading dock solutions — levelers, seals, shelters, restraints, and bumpers for fast-paced warehouse environments.',
    to: '/services/loading-dock',
    image: images.loadingDock,
    highlights: ['Hydraulic dock levelers', 'Dock seals & shelters', 'Vehicle restraints'],
  },
  {
    title: 'Residential Garage',
    tag: 'Residential',
    desc: 'Garage door installation, spring and cable repair, opener service, and routine maintenance for NJ homeowners.',
    to: '/services/residential',
    image: images.garage,
    highlights: ['New door installation', 'Spring & cable repair', 'Smart opener upgrades'],
  },
  {
    title: 'Emergency Repair',
    tag: '24/7 Response',
    desc: 'Priority emergency response when warehouses go down, doors get stuck, or docks fail — available around the clock.',
    to: '/services/emergency',
    image: images.industrial,
    highlights: ['24/7 emergency hotline', 'Warehouse & dock failures', 'Same-day dispatch'],
  },
  {
    title: 'Maintenance Programs',
    tag: 'Preventive Care',
    desc: 'Scheduled preventive service agreements to reduce downtime, extend equipment life, and avoid costly emergency repairs.',
    to: '/services/maintenance',
    image: images.factory,
    highlights: ['Scheduled inspections', 'Priority member response', 'Portal service records'],
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'Assess your needs' },
  { step: '02', title: 'Design', desc: 'Custom solution plan' },
  { step: '03', title: 'Install', desc: 'Expert execution' },
  { step: '04', title: 'Support', desc: 'Ongoing maintenance' },
];

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Commercial dock, overhead door, emergency repair, maintenance, and residential garage door services in NJ." />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Services</span>
        </div>
      </div>

      {/* Intro band */}
      <section className="bg-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              What We Do
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Full-service door and dock solutions for commercial facilities and residential
              properties across 6 New Jersey counties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contact" className="btn-primary text-center">Get a Free Quote</Link>
            <a href={`tel:${PHONE}`} className="btn-secondary text-center">Call 24/7</a>
          </div>
        </div>
      </section>

      {/* Zigzag service rows */}
      <section className="bg-white">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`border-b border-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className="lg:[direction:ltr] relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {s.tag}
                  </span>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="lg:[direction:ltr]"
                >
                  <span className="text-gold-500 text-sm font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2 mb-4">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-gray-700 text-sm">
                        <span className="text-gold-500 font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-navy-700 transition-colors"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Inline process strip */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-navy-900 font-bold text-2xl mb-10">How We Work</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-navy-900 text-sm">{p.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency band */}
      <section className="bg-navy-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Emergency Service</span>
            </div>
            <p className="text-white text-lg font-semibold">Warehouse down? Door stuck? We respond fast.</p>
          </div>
          <a href={`tel:${PHONE}`} className="btn-primary shrink-0">
            Call (551) 426-3018
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Ready to get started?</h2>
            <p className="text-gray-500 text-sm mt-1">Serving 6 counties across New Jersey.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">Request a Quote</Link>
            <Link to="/service-area" className="btn-outline !px-6 !py-2.5 !text-sm">Service Area</Link>
          </div>
        </div>
      </section>
    </>
  );
}
