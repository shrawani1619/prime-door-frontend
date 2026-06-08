import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';

export default function MaintenancePrograms() {
  return (
    <>
      <SEO title="Maintenance Programs" description="Preventive maintenance programs for commercial dock and door systems in NJ." />

      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Preventive Maintenance Programs</h1>
          <p className="text-gray-600 mb-4">
            Scheduled maintenance is the highest-value service we offer. Reduce downtime,
            extend equipment life, and avoid costly emergency repairs with a custom maintenance agreement.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><span className="text-gold-500">✓</span> Scheduled inspections and tune-ups</li>
            <li className="flex gap-2"><span className="text-gold-500">✓</span> Priority response for program members</li>
            <li className="flex gap-2"><span className="text-gold-500">✓</span> Email and portal maintenance reminders</li>
            <li className="flex gap-2"><span className="text-gold-500">✓</span> Detailed service records in your customer portal</li>
          </ul>
        </div>
        <QuoteForm defaultServiceType="Preventive Maintenance" />
      </section>
    </>
  );
}
