import ServicePageLayout from '../components/sections/ServicePageLayout';
import { images } from '../lib/images';

export default function EmergencyRepair() {
  return (
    <ServicePageLayout
      seoTitle="Emergency Repair"
      seoDescription="24/7 emergency dock and door repair for NJ warehouses and commercial facilities."
      title="Emergency Repair Service"
      description="Priority 24/7 emergency response for warehouses and commercial facilities when every minute of downtime counts."
      defaultServiceType="Emergency Repair"
      image={images.industrial}
      showEmergencyCall
      features={[
        '24/7 emergency hotline',
        'Stuck or broken overhead doors',
        'Dock leveler failures',
        'Rolling steel door malfunctions',
        'Fire door emergency repairs',
        'Opener and motor failures',
        'Security door lockouts',
      ]}
      benefits={[
        { title: 'Fast Response', desc: 'Priority dispatch across all 6 NJ counties.' },
        { title: 'Fully Equipped', desc: 'Service trucks stocked with common parts for on-site fixes.' },
        { title: 'Commercial Focus', desc: 'Specialists in warehouse and industrial door systems.' },
        { title: 'Minimize Losses', desc: 'Get your facility back online as quickly as possible.' },
      ]}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        Warehouse down? Loading dock stuck? Door won&apos;t open? We provide priority emergency
        response for commercial facilities across Bergen, Hudson, Essex, Passaic, Union, and Middlesex counties.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Our emergency technicians are on call 24 hours a day, 7 days a week. Call our hotline
        for immediate assistance, or submit the form and we&apos;ll contact you right away.
      </p>
    </ServicePageLayout>
  );
}
