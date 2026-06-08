import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import EmergencyCTA from '../components/EmergencyCTA';
import QuoteForm from '../components/QuoteForm';

const services = [
  { title: 'Loading Dock Services', desc: 'Levelers, seals, restraints, bumpers', to: '/services/commercial' },
  { title: 'Commercial Doors', desc: 'Overhead, roll-up, fire-rated, storefront', to: '/services/commercial' },
  { title: 'Emergency Repair', desc: '24/7 priority response for warehouses', to: '/services/emergency' },
  { title: 'Maintenance Programs', desc: 'Scheduled service agreements', to: '/services/maintenance' },
  { title: 'Residential Garage', desc: 'Installation, repair, openers', to: '/services/residential' },
];

const counties = ['Bergen', 'Hudson', 'Essex', 'Passaic', 'Union', 'Middlesex'];

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Prime Door & Dock Solutions — commercial dock, overhead door, and residential garage door services across 6 NJ counties."
      />

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold-400 font-semibold mb-3 tracking-wide uppercase text-sm">8+ Years Experience</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            New Jersey&apos;s Trusted Door & Dock Experts
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Commercial loading docks, overhead doors, emergency repair, and residential garage doors —
            serving 6 core NJ counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/emergency"
              className="bg-gold-500 text-navy-900 px-8 py-3 rounded font-bold text-lg hover:bg-gold-400 transition-colors"
            >
              Emergency Service
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span> 8+ years serving NJ businesses and homeowners</li>
              <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span> Commercial & residential expertise under one roof</li>
              <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span> Emergency response for warehouses and facilities</li>
              <li className="flex gap-2"><span className="text-gold-500 font-bold">✓</span> Preventive maintenance programs for recurring reliability</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {counties.map((c) => (
                <span key={c} className="bg-navy-900 text-white text-xs px-3 py-1 rounded-full">{c} County</span>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
