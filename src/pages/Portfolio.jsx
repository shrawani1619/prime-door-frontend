import SEO from '../components/SEO';

const projects = [
  { title: 'Warehouse Dock Leveler Install', location: 'Edison, NJ', type: 'Commercial' },
  { title: 'Rolling Steel Door Replacement', location: 'Newark, NJ', type: 'Commercial' },
  { title: 'Residential Garage Door Upgrade', location: 'Wayne, NJ', type: 'Residential' },
  { title: 'Fire-Rated Door Installation', location: 'Jersey City, NJ', type: 'Commercial' },
];

export default function Portfolio() {
  return (
    <>
      <SEO title="Portfolio" description="Completed commercial and residential door and dock projects across New Jersey." />

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Portfolio & Gallery</h1>
        <p className="text-gray-600 mb-10">A selection of completed projects across our NJ service area.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-navy-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-navy-700 flex items-center justify-center text-white/30 text-sm">
                Project Photo
              </div>
              <div className="p-5 text-white">
                <span className="text-xs text-gold-400 font-semibold">{p.type}</span>
                <h3 className="font-bold mt-1">{p.title}</h3>
                <p className="text-white/60 text-sm mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
