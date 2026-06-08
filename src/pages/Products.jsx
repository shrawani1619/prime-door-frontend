import SEO from '../components/SEO';

const products = [
  { name: 'Commercial Overhead Doors', category: 'Commercial' },
  { name: 'Rolling Steel Doors', category: 'Commercial' },
  { name: 'Dock Levelers', category: 'Dock Equipment' },
  { name: 'Dock Seals & Shelters', category: 'Dock Equipment' },
  { name: 'Residential Garage Doors', category: 'Residential' },
  { name: 'Garage Door Openers', category: 'Residential' },
  { name: 'Lock Systems & Hardware', category: 'Parts' },
];

export default function Products() {
  return (
    <>
      <SEO title="Products" description="Commercial and residential door products, dock equipment, and parts." />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Products Showcase</h1>
        <p className="text-gray-600 mb-10">Quality door products and commercial equipment for every application.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <span className="text-xs font-semibold text-gold-500 uppercase tracking-wide">{p.category}</span>
              <h3 className="font-bold text-navy-900 mt-2">{p.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
