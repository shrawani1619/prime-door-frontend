import SEO from '../components/SEO';

const counties = [
  { name: 'Bergen County', note: 'Strong commercial + residential cross-sell' },
  { name: 'Hudson County', note: 'Jersey City, Secaucus, Kearny — last-mile logistics' },
  { name: 'Essex County', note: 'Newark industrial corridor — high facility density' },
  { name: 'Passaic County', note: 'Route 46 / Wayne / Totowa manufacturing base' },
  { name: 'Union County', note: 'Elizabeth, Linden — port-driven logistics' },
  { name: 'Middlesex County', note: 'Edison, Piscataway, Cranbury — largest NJ industrial market' },
];

export default function ServiceArea() {
  return (
    <>
      <SEO title="Service Area" description="Prime Door & Dock serves 6 core NJ counties: Bergen, Hudson, Essex, Passaic, Union, and Middlesex." />

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Service Area</h1>
        <p className="text-gray-600 mb-8">
          We focus on 6 core New Jersey counties. NY and PA expansion planned for Year 3–4.
        </p>

        <div className="space-y-4">
          {counties.map((c) => (
            <div key={c.name} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <span className="text-gold-500 font-bold text-lg">📍</span>
              <div>
                <h3 className="font-bold text-navy-900">{c.name}</h3>
                <p className="text-gray-600 text-sm">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
