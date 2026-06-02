import { motion } from 'motion/react';
import { getCloudinaryImageUrl } from '../lib/cloudinary';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with animated scale */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-royal-black/60 z-10" />
        <img
          src={getCloudinaryImageUrl('IMG-20260602-WA0006_jcsbky')}
          alt="Royal Portrait Background"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-royal-gold-light uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          Founder & Group CEO
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight font-medium"
        >
          Dr. Edidiong D. Nkanta
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center mt-12"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-royal-gold-light/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
