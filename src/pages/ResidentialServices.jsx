import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';

const services = [
  'Garage door installation',
  'Spring and cable repair',
  'Opener installation & repair',
  'Panel replacement',
  'Routine maintenance & tune-ups',
];

export default function ResidentialServices() {
  return (
    <>
      <SEO title="Residential Services" description="Residential garage door installation and repair across New Jersey." />

      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Residential Garage Doors</h1>
          <p className="text-gray-600 mb-6">
            From new installations to emergency spring repairs, our residential team delivers
            fast, professional service for homeowners across our 6-county NJ service area.
          </p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-gold-500">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm defaultServiceType="Residential Garage Doors" />
      </section>
    </>
  );
}
