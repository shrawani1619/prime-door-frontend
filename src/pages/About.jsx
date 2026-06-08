import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Prime Door & Dock Solutions — 8+ years of experience in NJ commercial and residential door services." />

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">About Prime Door & Dock Solutions</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          For over 8 years, Prime Door & Dock Solutions has been the trusted partner for businesses
          and homeowners across New Jersey. From loading dock levelers in warehouse facilities to
          residential garage door repairs, we deliver professional, reliable service every time.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
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
            <div key={stat.label} className="bg-navy-900 text-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
