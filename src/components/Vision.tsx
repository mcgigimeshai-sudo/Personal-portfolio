import { motion } from 'motion/react';
import { getCloudinaryImageUrl } from '../lib/cloudinary';

const visionItems = [
  {
    title: "Philosophy of Value",
    description: "The only language I practice is that which adds value to life. Through business, we create a ripple effect of empowerment and lasting impact.",
    cloudinaryId: "IMG-20260602-WA0003_fmcmvb",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop",
  },
  {
    title: "Empowering People",
    description: "Meeting Christ through commerce by generating genuine employment, ensuring our team is respected, and nurturing a culture of prompt, fair compensation.",
    cloudinaryId: "IMG-20260602-WA0008_tzjhar",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Faith & Family",
    description: "A foundation built on discipline and unwavering values. A beautiful journey shared with family, blending professional excellence with a deeply rooted moral compass.",
    cloudinaryId: "IMG-20260602-WA0011_s4fqde",
    image: "https://images.unsplash.com/photo-1476994269894-6b99331006eb?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Vision() {
  const getMediaUrl = (item: any) => {
    return item.cloudinaryId ? getCloudinaryImageUrl(item.cloudinaryId) : item.image;
  };

  return (
    <section id="vision" className="py-24 md:py-32 bg-royal-ivory px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-40">
        {visionItems.map((item, index) => {
          // First picture is on the right (index 0)
          const imageOnRight = index % 2 === 0;

          const titleWords = item.title.split(" ");
          const descWords = item.description.split(" ");

          return (
            <div 
              key={index} 
              className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } }
                  }}
                  className="flex flex-col"
                >
                  {/* Title Word-by-Word Horizontal Reveal */}
                  <div className="mb-6">
                    {titleWords.map((word, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: imageOnRight ? -20 : 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="inline-block mr-[0.25em] text-3xl md:text-5xl font-serif text-royal-black font-medium"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>

                  {/* Description Word-by-Word Horizontal Reveal */}
                  <div>
                    {descWords.map((word, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: imageOnRight ? -15 : 15 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        className="inline-block mr-[0.25em] mb-[0.2em] text-xl md:text-2xl text-royal-gray font-light leading-relaxed"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Image Content with Wipe Reveal */}
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ 
                    clipPath: imageOnRight ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)', 
                    filter: 'grayscale(50%)'
                  }}
                  whileInView={{ 
                    clipPath: 'inset(0 0 0 0)',
                    filter: 'grayscale(0%)'
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="gold-frame-overlay z-20" />
                  <img 
                    src={getMediaUrl(item)} 
                    alt={item.title} 
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105" 
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
