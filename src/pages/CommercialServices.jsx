import ServicePageLayout from '../components/sections/ServicePageLayout';
import { images } from '../lib/images';

export default function CommercialServices() {
  return (
    <ServicePageLayout
      seoTitle="Commercial Services"
      seoDescription="Commercial dock and overhead door services for NJ warehouses and facilities."
      title="Commercial Door & Dock Services"
      description="Expert commercial overhead doors, rolling steel, fire-rated systems, and storefront solutions for warehouses and facilities."
      defaultServiceType="Commercial Overhead Doors"
      image={images.overhead}
      features={[
        'Sectional overhead doors',
        'Rolling steel & high-speed doors',
        'Fire-rated commercial doors',
        'Storefront door systems',
        'Dock levelers, seals & shelters',
        'Vehicle restraints & bumpers',
        'Edge-of-dock levelers',
      ]}
      benefits={[
        { title: 'Minimize Downtime', desc: 'Fast installs and repairs to keep your facility operational.' },
        { title: 'Industrial Expertise', desc: 'Technicians experienced with warehouse and logistics environments.' },
        { title: 'Code Compliant', desc: 'Fire-rated and safety-compliant installations.' },
        { title: '6-County Coverage', desc: 'Serving Bergen, Hudson, Essex, Passaic, Union & Middlesex.' },
      ]}
    >
      <p className="text-gray-700 leading-relaxed text-lg">
        Keep your warehouse and facility running with expert dock and overhead door service.
        We serve industrial corridors across Bergen, Hudson, Essex, Passaic, Union, and Middlesex counties.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Whether you need a new rolling steel door, fire-rated installation, or complete loading dock
        equipment upgrade, our commercial team delivers professional results on schedule and on budget.
      </p>
    </ServicePageLayout>
  );
}
