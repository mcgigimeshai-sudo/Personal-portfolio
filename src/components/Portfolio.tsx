import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getCloudinaryImageUrl } from '../lib/cloudinary';

const portfolioData = [
  {
    id: 1,
    title: 'FlyBooking Arena Ventures',
    category: 'travel',
    cloudinaryId: 'IMG_20260602_074901_843_vtqa0k',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Zentech Software Hub Ltd',
    category: 'technology',
    cloudinaryId: 'IMG-20260602-WA0016_javfuq',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'GSC Logistics Services',
    category: 'logistics',
    cloudinaryId: 'IMG-20260602-WA0012_nlqrwn',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Naija Online Stores',
    category: 'e-commerce',
    cloudinaryId: 'IMG-20260602-WA0013_ffp1rg',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Equipremark Resources',
    category: 'technology',
    cloudinaryId: 'IMG-20260602-WA0017_yxumdl',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  }
];

const categories = ['all', 'technology', 'logistics', 'travel', 'e-commerce'];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredData = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  const getMediaUrl = (item: any) => {
    return item.cloudinaryId ? getCloudinaryImageUrl(item.cloudinaryId) : item.image;
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-royal-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-royal-gold uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Business Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-royal-black mb-10">
            Company Portfolio
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`uppercase tracking-widest text-xs font-semibold py-2 transition-colors duration-300 border-b-2 ${
                  filter === cat
                    ? 'border-royal-gold text-royal-black'
                    : 'border-transparent text-royal-gray hover:text-royal-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-start"
        >
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="gold-frame-overlay" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" />
                <img
                  src={getMediaUrl(item)}
                  alt={item.title}
                  className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-royal-gold-light uppercase tracking-widest text-xs font-semibold block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
