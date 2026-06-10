import SEO from '../components/SEO';
import EmergencyCTA from '../components/EmergencyCTA';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Prime Door & Dock Solutions — commercial dock, overhead door, and residential garage door services across 6 NJ counties."
      />

      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <EmergencyCTA />
    </>
  );
}
