import { Link } from 'react-router-dom';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function EmergencyCTA() {
  return (
    <section className="bg-navy-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Need Emergency Service?</h2>
        <p className="text-white/80 mb-6">
          Warehouse down? Door stuck? We respond fast across all 6 NJ counties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-gold-500 text-navy-900 px-8 py-3 rounded font-bold text-lg hover:bg-gold-400 transition-colors"
          >
            Call Now: (551) 426-3018
          </a>
          <Link
            to="/services/emergency"
            className="border border-white/30 px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
