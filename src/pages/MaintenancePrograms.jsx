import ServicePageLayout from '../components/sections/ServicePageLayout';
import { images } from '../lib/images';

export default function MaintenancePrograms() {
  return (
    <ServicePageLayout
      seoTitle="Maintenance Programs"
      seoDescription="Preventive maintenance programs for commercial dock and door systems in NJ."
      title="Preventive Maintenance Programs"
      description="Scheduled maintenance agreements to reduce downtime, extend equipment life, and avoid costly emergency repairs."
      defaultServiceType="Preventive Maintenance"
      image={images.factory}
      features={[
        'Scheduled inspections and tune-ups',
        'Priority response for program members',
        'Email and portal maintenance reminders',
        'Detailed service records in your customer portal',
        'Parts discounts for enrolled facilities',
        'Custom maintenance schedules',
        'Multi-door and multi-dock coverage',
      ]}
      benefits={[
        { title: 'Prevent Breakdowns', desc: 'Catch issues before they cause costly downtime.' },
        { title: 'Extend Equipment Life', desc: 'Regular service keeps doors and docks running longer.' },
        { title: 'Budget Predictability', desc: 'Fixed maintenance costs instead of surprise repairs.' },
        { title: 'Priority Service', desc: 'Program members get preferred scheduling and response.' },
      ]}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        Scheduled maintenance is the highest-value service we offer. Reduce downtime,
        extend equipment life, and avoid costly emergency repairs with a custom maintenance agreement.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Our preventive maintenance programs are tailored to your facility&apos;s door and dock inventory.
        We create a custom schedule, perform thorough inspections, and keep detailed records
        accessible through your customer portal.
      </p>
    </ServicePageLayout>
  );
}
