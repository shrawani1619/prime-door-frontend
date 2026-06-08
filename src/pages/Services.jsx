import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const categories = [
  {
    title: 'Commercial Services',
    desc: 'Dock levelers, overhead doors, rolling steel, fire-rated doors, storefront systems.',
    to: '/services/commercial',
  },
  {
    title: 'Residential Services',
    desc: 'Garage door installation, spring/cable repair, opener service.',
    to: '/services/residential',
  },
  {
    title: 'Emergency Repair',
    desc: 'Priority 24/7 response for warehouses and commercial facilities.',
    to: '/services/emergency',
  },
  {
    title: 'Maintenance Programs',
    desc: 'Scheduled preventive service agreements — our highest-value recurring offering.',
    to: '/services/maintenance',
  },
];

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Commercial dock, overhead door, emergency repair, maintenance, and residential garage door services in NJ." />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Full-service door and dock solutions for commercial facilities and residential properties
          across 6 New Jersey counties.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.to}
              className="block p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-gold-500 transition-all"
            >
              <h2 className="text-xl font-bold text-navy-900 mb-2">{cat.title}</h2>
              <p className="text-gray-600">{cat.desc}</p>
              <span className="inline-block mt-4 text-gold-500 font-semibold text-sm">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
