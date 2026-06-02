import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { getCloudinaryImageUrl } from '../lib/cloudinary';

// To use your images from Cloudinary, replace the 'src' Unsplash placeholder 
// with 'cloudinaryId: "YOUR_PUBLIC_ID"'.
const mediaData = [
  { id: 1, type: 'image', cloudinaryId: 'IMG-20260602-WA0005_r5aunn', src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop' },
  { id: 2, type: 'image', cloudinaryId: 'IMG-20260602-WA0009_h51hm1', src: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, type: 'image', cloudinaryId: 'IMG-20260602-WA0007_britda', src: 'https://images.unsplash.com/photo-1559868725-b4bc2f87ee10?q=80&w=2072&auto=format&fit=crop' },
  { id: 4, type: 'image', cloudinaryId: 'IMG-20260602-WA0010_bvsdpe', src: 'https://images.unsplash.com/photo-1507676184212-d0330a15673c?q=80&w=2069&auto=format&fit=crop' },
];

export default function Media() {
  const [selectedMedia, setSelectedMedia] = useState<{ id: number, type: string, src?: string, cloudinaryId?: string } | null>(null);

  const getMediaUrl = (item: any) => {
    return item.cloudinaryId ? getCloudinaryImageUrl(item.cloudinaryId) : item.src;
  };

  return (
    <section id="media" className="py-24 md:py-32 bg-royal-black px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-royal-gold-light uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Moments in Time
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
          {mediaData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="gold-frame-overlay" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={getMediaUrl(item)}
                alt="Gallery"
                className="w-full h-auto block transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              src={getMediaUrl(selectedMedia)}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
