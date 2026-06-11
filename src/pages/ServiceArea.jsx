import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { images } from '../lib/images';
import { PHONE, PHONE_DISPLAY } from '../lib/contactInfo';

const counties = [
  {
    id: 'bergen',
    name: 'Bergen County',
    short: 'Bergen',
    note: 'Strong commercial + residential cross-sell',
    cities: ['Hackensack', 'Paramus', 'Fort Lee', 'Teaneck'],
    focus: 'Commercial & Residential',
    image: images.commercial,
  },
  {
    id: 'hudson',
    name: 'Hudson County',
    short: 'Hudson',
    note: 'Jersey City, Secaucus, Kearny — last-mile logistics',
    cities: ['Jersey City', 'Secaucus', 'Kearny', 'Hoboken'],
    focus: 'Commercial & Logistics',
    image: images.loadingDock,
  },
  {
    id: 'essex',
    name: 'Essex County',
    short: 'Essex',
    note: 'Newark industrial corridor — high facility density',
    cities: ['Newark', 'East Orange', 'Irvington', 'Bloomfield'],
    focus: 'Industrial & Commercial',
    image: images.industrial,
  },
  {
    id: 'passaic',
    name: 'Passaic County',
    short: 'Passaic',
    note: 'Route 46 / Wayne / Totowa manufacturing base',
    cities: ['Paterson', 'Wayne', 'Totowa', 'Clifton'],
    focus: 'Manufacturing & Warehouses',
    image: images.factory,
  },
  {
    id: 'union',
    name: 'Union County',
    short: 'Union',
    note: 'Elizabeth, Linden — port-driven logistics',
    cities: ['Elizabeth', 'Linden', 'Rahway', 'Union Township'],
    focus: 'Port Logistics & Docks',
    image: images.warehouse,
  },
  {
    id: 'middlesex',
    name: 'Middlesex County',
    short: 'Middlesex',
    note: 'Edison, Piscataway, Cranbury — largest NJ industrial market',
    cities: ['Edison', 'Piscataway', 'Cranbury', 'New Brunswick'],
    focus: 'Large-Scale Industrial',
    image: images.overhead,
  },
];

export default function ServiceArea() {
  const [selected, setSelected] = useState(counties[0]);

  return (
    <>
      <SEO title="Service Area" description="Prime Door & Dock serves 6 core NJ counties: Bergen, Hudson, Essex, Passaic, Union, and Middlesex." />

      {/* Accent header — gold left bar, unique to this page */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="border-l-4 border-gold-500 pl-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-2 block">
                Coverage Zone
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
                Where We Serve
              </h1>
              <p className="text-gray-600 mt-3 max-w-xl leading-relaxed">
                We focus on 6 core New Jersey counties with fast response for commercial,
                industrial, and residential door & dock services. NY and PA expansion planned for Year 3–4.
              </p>
            </div>
            <div className="flex gap-8 lg:gap-12 shrink-0">
              {[
                { value: '6', label: 'Counties' },
                { value: '24/7', label: 'Emergency' },
                { value: '10+', label: 'Years' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-navy-900">{s.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Master-detail: county list + detail panel */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* County selector */}
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                Select a County
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {counties.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c)}
                    className={`text-left px-4 py-4 rounded-xl border transition-all duration-300 ${
                      selected.id === c.id
                        ? 'bg-navy-900 text-white border-navy-900 shadow-lg'
                        : 'bg-white text-navy-900 border-gray-200 hover:border-gold-500 hover:shadow-sm'
                    }`}
                  >
                    <p className="font-bold text-sm">{c.short} County</p>
                    <p className={`text-xs mt-0.5 truncate ${
                      selected.id === c.id ? 'text-white/60' : 'text-gray-400'
                    }`}>
                      {c.focus}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-8">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                      {selected.focus}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">{selected.name}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">{selected.note}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                        Key Cities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.cities.map((city) => (
                          <span
                            key={city}
                            className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-navy-900"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                        Services Available
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex gap-2"><span className="text-gold-500">✓</span> Commercial overhead doors</li>
                        <li className="flex gap-2"><span className="text-gold-500">✓</span> Loading dock equipment</li>
                        <li className="flex gap-2"><span className="text-gold-500">✓</span> Emergency repair 24/7</li>
                        <li className="flex gap-2"><span className="text-gold-500">✓</span> Residential garage doors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                    <Link to="/contact" className="btn-primary !px-6 !py-2.5 !text-sm text-center">
                      Request Service in {selected.short}
                    </Link>
                    <a href={`tel:${PHONE}`} className="btn-outline !px-6 !py-2.5 !text-sm text-center">
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage overview grid */}
      <section className="bg-navy-900 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-white font-bold text-2xl mb-2">Full Coverage Map</h2>
          <p className="text-center text-white/50 text-sm mb-10">
            All 6 counties — one trusted partner for doors & docks
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {counties.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSelected(c);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group p-4 rounded-xl border border-white/10 hover:border-gold-500/50 hover:bg-white/5 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-sm mb-2 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                  {i + 1}
                </div>
                <p className="text-white font-semibold text-sm">{c.short}</p>
                <p className="text-white/40 text-xs mt-1">County</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Outside our service area?</h2>
            <p className="text-gray-500 text-sm mt-1">Contact us — we&apos;re expanding to NY & PA in Year 3–4.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">Contact Us</Link>
            <Link to="/services" className="btn-outline !px-6 !py-2.5 !text-sm">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
