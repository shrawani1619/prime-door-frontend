import ServicePageLayout from '../components/sections/ServicePageLayout';
import { images } from '../lib/images';

export default function ResidentialServices() {
  return (
    <ServicePageLayout
      seoTitle="Residential Services"
      seoDescription="Residential garage door installation and repair across New Jersey."
      title="Residential Garage Doors"
      description="Professional garage door installation, repair, and opener service for homeowners across our 6-county NJ service area."
      defaultServiceType="Residential Garage Doors"
      image={images.garage}
      features={[
        'Garage door installation',
        'Spring and cable repair',
        'Opener installation & repair',
        'Panel replacement',
        'Routine maintenance & tune-ups',
        'Smart opener upgrades',
        'Weather seal replacement',
      ]}
      benefits={[
        { title: 'Same-Day Service', desc: 'Fast response for broken springs and stuck doors.' },
        { title: 'Quality Products', desc: 'Premium doors and openers from trusted manufacturers.' },
        { title: 'Licensed Technicians', desc: 'Experienced, courteous installers who respect your home.' },
        { title: 'Fair Pricing', desc: 'Upfront quotes with no hidden fees.' },
      ]}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        From new installations to emergency spring repairs, our residential team delivers
        fast, professional service for homeowners across our 6-county NJ service area.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Whether you&apos;re upgrading curb appeal with a new door, replacing worn springs,
        or installing a smart opener, we handle every residential garage door need with care
        and precision.
      </p>
    </ServicePageLayout>
  );
}
