import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';

const services = [
  'Dock levelers, seals & shelters',
  'Vehicle restraints & bumpers',
  'Edge-of-dock levelers',
  'Sectional overhead doors',
  'Rolling steel & high-speed doors',
  'Fire-rated commercial doors',
  'Storefront door systems',
];

export default function CommercialServices() {
  return (
    <>
      <SEO title="Commercial Services" description="Commercial dock and overhead door services for NJ warehouses and facilities." />

      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Commercial Services</h1>
          <p className="text-gray-600 mb-6">
            Keep your warehouse and facility running with expert dock and overhead door service.
            We serve industrial corridors across Bergen, Hudson, Essex, Passaic, Union, and Middlesex counties.
          </p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="flex gap-2 text-gray-700">
                <span className="text-gold-500">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm defaultServiceType="Commercial Overhead Doors" />
      </section>
    </>
  );
}
