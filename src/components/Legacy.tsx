import { motion } from 'motion/react';
import { Award, Globe2, Briefcase, Heart } from 'lucide-react';

const legacyItems = [
  {
    icon: <Briefcase className="w-8 h-8 stroke-1" />,
    title: 'Corporate Portfolio',
    description: 'Driving growth across FlyBooking Arena, GSC Logistics, and Naija Online Stores as a versatile overarching business leader.',
  },
  {
    icon: <Heart className="w-8 h-8 stroke-1" />,
    title: 'Purposeful Business',
    description: 'Guided by the philosophy of adding value to life, creating stable employment, and meeting Christ through commerce.',
  },
  {
    icon: <Globe2 className="w-8 h-8 stroke-1" />,
    title: 'Digital Transformation',
    description: 'Through Zentech Software Hub, delivering premium Zoho, RetailMan, and QuickBooks software solutions to modern businesses.',
  },
  {
    icon: <Award className="w-8 h-8 stroke-1" />,
    title: 'Continental Recognition',
    description: 'Honored as one of the 100 Young Progressive Business Leaders in Africa for exceptional entrepreneurial impact and discipline.',
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 md:py-32 bg-royal-light-gray px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
        >
          <span className="text-royal-gold uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-royal-black mb-6">
            An Enduring Legacy
          </h2>
          <p className="text-royal-gray leading-relaxed font-light">
            Building impactful companies while remaining dedicated to faith, discipline, and adding transformative value to people's lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {legacyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-royal-gold mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-royal-black mb-4">
                {item.title}
              </h3>
              <p className="text-royal-gray font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
