import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The only language I practice is that which adds value to life.",
    author: "Dr. Edidiong D. Nkanta",
    title: "Personal Philosophy"
  },
  {
    id: 2,
    quote: "Respected for combining discipline, faith, and family without compromise, setting a powerful example for the next generation of entrepreneurs.",
    author: "100 Young Progressive Business Leaders",
    title: "African Recognition"
  },
  {
    id: 3,
    quote: "His focus is to meet Christ through business — by creating employment and ensuring his team is empowered, respected, and fairly compensated.",
    author: "Core Values",
    title: "Organizational Culture"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-royal-light-gray relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Decorative large quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Quote className="w-[400px] h-[400px] text-royal-black" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-2xl md:text-4xl font-serif text-royal-black font-medium leading-normal mb-10 max-w-3xl">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <span className="uppercase tracking-widest text-royal-gold font-semibold text-sm mb-1">
                {testimonials[currentIndex].author}
              </span>
              <span className="text-royal-gray text-xs font-light tracking-wide">
                {testimonials[currentIndex].title}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6 mt-16">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full border border-royal-light-gray/0 hover:border-royal-gold flex items-center justify-center text-royal-gray hover:text-royal-gold transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-6 h-1.5 bg-royal-gold' 
                    : 'w-1.5 h-1.5 bg-royal-gray/30 hover:bg-royal-gray/60'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-10 h-10 rounded-full border border-royal-light-gray/0 hover:border-royal-gold flex items-center justify-center text-royal-gray hover:text-royal-gold transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
