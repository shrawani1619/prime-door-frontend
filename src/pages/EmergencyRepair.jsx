import SEO from '../components/SEO';
import EmergencyCTA from '../components/EmergencyCTA';

const PHONE = import.meta.env.VITE_PHONE || '+15514263018';

export default function EmergencyRepair() {
  return (
    <>
      <SEO title="Emergency Repair" description="24/7 emergency dock and door repair for NJ warehouses and commercial facilities." />

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Emergency Repair Service</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Warehouse down? Loading dock stuck? We provide priority emergency response
          for commercial facilities across all 6 NJ counties.
        </p>
        <a
          href={`tel:${PHONE}`}
          className="inline-block bg-gold-500 text-navy-900 px-10 py-4 rounded font-bold text-xl hover:bg-gold-400 transition-colors"
        >
          Call Now: (551) 426-3018
        </a>
      </section>

      <EmergencyCTA />
    </>
  );
}
