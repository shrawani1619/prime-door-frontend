import ServicePageLayout from '../components/sections/ServicePageLayout';
import { images } from '../lib/images';

export default function LoadingDockServices() {
  return (
    <ServicePageLayout
      seoTitle="Loading Dock Services"
      seoDescription="Loading dock levelers, seals, shelters, restraints, and bumpers for NJ warehouses."
      title="Loading Dock Services"
      description="Complete loading dock solutions — levelers, seals, shelters, restraints, and bumpers for fast-paced warehouse environments."
      defaultServiceType="Loading Dock Services"
      image={images.loadingDock}
      features={[
        'Hydraulic & mechanical dock levelers',
        'Dock seals and shelters',
        'Vehicle restraints and wheel chocks',
        'Dock bumpers and edge guards',
        'Edge-of-dock levelers',
        'Dock plate repairs and replacements',
        'Safety barrier systems',
      ]}
      benefits={[
        { title: 'Safer Operations', desc: 'Properly maintained docks reduce accidents and product damage.' },
        { title: 'Energy Efficiency', desc: 'Seals and shelters reduce heating/cooling loss at dock openings.' },
        { title: 'Faster Turnarounds', desc: 'Reliable levelers keep trucks loading and unloading on schedule.' },
        { title: 'Full-Service Support', desc: 'Installation, repair, and preventive maintenance available.' },
      ]}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        Your loading dock is the heartbeat of your warehouse. We install, repair, and maintain
        dock levelers, seals, shelters, restraints, and bumpers for facilities across New Jersey.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        From hydraulic leveler replacements to complete dock outfitting for new construction,
        Prime Door & Dock Solutions keeps your loading operations safe, efficient, and compliant.
      </p>
    </ServicePageLayout>
  );
}
