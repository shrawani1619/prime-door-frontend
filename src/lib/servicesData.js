import { images } from './images';

export const servicesList = [
  {
    slug: 'window-services',
    title: 'Window Services',
    seoTitle: 'Window Services',
    seoDescription: 'Professional window repair, maintenance, and replacement services from Windco in Bali.',
    description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Expert window care for homes and businesses.',
    image: images.residential,
    defaultServiceType: 'Window Services',
    features: [
      'Window repair & restoration',
      'Glass replacement',
      'Frame maintenance',
      'Weather sealing',
      'Energy-efficiency upgrades',
      'Commercial window servicing',
    ],
    benefits: [
      { title: '10 Years Warranty', desc: 'Every product we install comes backed by a 10-year warranty for peace of mind.' },
      { title: 'Free Measurement', desc: 'Complimentary on-site measurement to ensure a perfect fit from day one.' },
      { title: 'Quick Installation', desc: 'Trained technicians complete work efficiently with minimal disruption.' },
      { title: 'Modern Design', desc: 'Contemporary styles that enhance beauty, security, and energy efficiency.' },
    ],
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Whether you need a single window repair or ongoing maintenance for your property, Windco delivers craftsmanship you can trust — on time, every time.',
    ],
  },
  {
    slug: 'window-installation',
    title: 'Window Installation',
    seoTitle: 'Window Installation',
    seoDescription: 'Expert window installation with free measurement and 10-year warranty from Windco.',
    description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Precision installation for residential and commercial properties.',
    image: images.commercial,
    defaultServiceType: 'Window Installation',
    features: [
      'New window installation',
      'Full-frame replacements',
      'Double & triple glazing',
      'Custom sizing',
      'uPVC, aluminum & wood options',
      'Post-install inspection',
    ],
    benefits: [
      { title: 'Precision Fit', desc: 'Free on-site measurement ensures every window is made to exact specifications.' },
      { title: 'Expert Installers', desc: 'Certified technicians with years of hands-on installation experience.' },
      { title: 'Energy Savings', desc: 'Modern windows that reduce heat transfer and lower utility costs.' },
      { title: 'Clean Finish', desc: 'Professional installation with thorough cleanup after every project.' },
    ],
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our installation process follows four clear steps from appointment to completion.',
      'From consultation through production, delivery, and final fitting — we bring the same dedication to every window installation project.',
    ],
  },
  {
    slug: 'door-services',
    title: 'Door Services',
    seoTitle: 'Door Services',
    seoDescription: 'Comprehensive door repair and maintenance services for homes and commercial spaces in Bali.',
    description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Reliable door services backed by experienced technicians.',
    image: images.overhead,
    defaultServiceType: 'Door Services',
    features: [
      'Door repair & adjustment',
      'Hardware replacement',
      'Hinge & lock servicing',
      'Sliding door maintenance',
      'Security door upgrades',
      'Commercial door support',
    ],
    benefits: [
      { title: 'Committed To Work', desc: 'From first consultation to final fitting, your satisfaction is our top priority.' },
      { title: '24/7 Support', desc: 'Responsive service when you need help with your doors.' },
      { title: 'Durable Materials', desc: 'Premium components built for lasting performance.' },
      { title: 'Free Consultation', desc: 'Expert advice to find the right solution for your space.' },
    ],
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Windco has been a trusted name in the window and door industry since 1996.',
      'Our door services cover everything from routine maintenance to full repairs — keeping your property secure, functional, and looking its best.',
    ],
  },
  {
    slug: 'door-installation',
    title: 'Door Installation',
    seoTitle: 'Door Installation',
    seoDescription: 'Custom door installation for residential and commercial projects. Free measurement and 10-year warranty.',
    description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Custom door solutions tailored to your exact specifications.',
    image: images.garage,
    defaultServiceType: 'Door Installation',
    features: [
      'Entry door installation',
      'Interior door fitting',
      'Sliding & folding doors',
      'Commercial door systems',
      'Custom design options',
      'Smart lock integration',
    ],
    benefits: [
      { title: 'Custom Projects', desc: 'Specialized in custom door solutions tailored to your exact specifications.' },
      { title: 'Modern Design', desc: 'Stylish options that complement your property\'s architecture.' },
      { title: '10 Years Warranty', desc: 'Long-term protection on every door we install.' },
      { title: 'Fast Turnaround', desc: 'Efficient scheduling from measurement to final installation.' },
    ],
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Have a unique vision in mind? We specialize in bringing your ideas to life.',
      'Whether it\'s a single entry door or a full commercial fit-out, our team delivers premium-quality installation with craftsmanship you can trust.',
    ],
  },
];

export function getServiceBySlug(slug) {
  return servicesList.find((s) => s.slug === slug);
}

export const serviceNav = servicesList.map((s) => ({
  to: `/services/${s.slug}`,
  label: s.title,
}));
