import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'biography', label: 'Biography' },
  { id: 'vision', label: 'Vision' },
  { id: 'legacy', label: 'Legacy' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'media', label: 'Media' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      let current = 'home';
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? 'bg-royal-ivory/95 backdrop-blur-md py-4 border-royal-light-gray shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            onClick={() => scrollTo('home')}
            className="text-2xl font-serif tracking-widest font-semibold uppercase text-royal-black"
          >
            Dr. E. D. Nkanta
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'text-royal-gold'
                    : 'text-royal-gray hover:text-royal-black'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-royal-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-royal-ivory flex flex-col items-center justify-center space-y-8"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-2xl font-serif tracking-widest transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'text-royal-gold'
                    : 'text-royal-gray hover:text-royal-black'
                }`}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
