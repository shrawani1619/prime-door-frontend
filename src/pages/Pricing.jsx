import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { images } from '../lib/images';

const pricingPlans = [
  { name: 'Personal Plan', price: 80 },
  { name: 'Residential Plan', price: 140, featured: true },
  { name: 'Commercial Plan', price: 280 },
];

const planFeatures = [
  'Free Measurement',
  'Modern Design',
  'Free Consultation',
  '10 Years Warranty',
  '24/7 Support',
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Windco window and door pricing plans for homes and businesses in Bali."
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">Pricing</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={images.residential}
          alt="Pricing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/85" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Pricing Plans
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Choose The Best Pricing Plans
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent starting prices for personal, residential, and commercial window packages
              across Bali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured
                    ? 'bg-navy-900 text-white border-navy-900 shadow-lg scale-[1.02]'
                    : 'bg-white border-gray-100 shadow-sm'
                }`}
              >
                <p className={`text-4xl font-bold mb-1 ${plan.featured ? 'text-gold-400' : 'text-gold-500'}`}>
                  ${plan.price}
                </p>
                <h2 className={`text-xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-navy-900'}`}>
                  {plan.name}
                </h2>
                <ul className="space-y-3 mb-8">
                  {planFeatures.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-2 text-sm ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}
                    >
                      <span className={plan.featured ? 'text-gold-400' : 'text-gold-500'}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                      : 'bg-navy-900 text-white hover:bg-navy-700'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            Prices are starting rates per window unit.{' '}
            <Link to="/contact" className="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
              Contact us
            </Link>{' '}
            for a detailed project quote, or visit our{' '}
            <Link to="/faq" className="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
              FAQ page
            </Link>{' '}
            for common questions.
          </p>
        </div>
      </section>
    </>
  );
}
