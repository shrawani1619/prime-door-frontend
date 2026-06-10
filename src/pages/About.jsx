import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/ui/PageHero';
import FeatureGrid from '../components/sections/FeatureGrid';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Prime Door & Dock Solutions — 8+ years of experience in NJ commercial and residential door services." />

      <PageHero
        title="About Prime Door & Dock Solutions"
        description="Your trusted partner for commercial dock, overhead door, and residential garage door services across New Jersey."
      />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            For over 8 years, Prime Door & Dock Solutions has been the trusted partner for businesses
            and homeowners across New Jersey. From loading dock levelers in warehouse facilities to
            residential garage door repairs, we deliver professional, reliable service every time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Our team specializes in commercial overhead doors, dock equipment, emergency repairs,
            preventive maintenance programs, and residential garage door services — all backed by
            experienced technicians and a commitment to fast response times.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Years in Business', value: '8+' },
              { label: 'NJ Counties Served', value: '6' },
              { label: 'Service Categories', value: '5+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy-900 text-white p-6 rounded-2xl text-center shadow-lg">
                <p className="text-3xl font-bold text-gold-400">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/service-area" className="btn-outline">
              View Service Area
            </Link>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <FeatureGrid />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
