import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  { num: '01', title: 'Consultation', desc: 'We assess your facility needs, discuss requirements, and provide expert recommendations.' },
  { num: '02', title: 'Design', desc: 'Custom solutions are engineered to match your specifications, budget, and timeline.' },
  { num: '03', title: 'Manufacturing', desc: 'Premium materials are sourced and doors are built to exact industry standards.' },
  { num: '04', title: 'Installation', desc: 'Certified technicians install and test every system for flawless operation.' },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="How We Work"
          title="Our Process"
          description="A streamlined four-step approach from initial consultation to final installation."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
