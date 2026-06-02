import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music } from 'lucide-react';

const milestones = [

  {
    year: '1981',
    title: 'Early Life & Foundations',
    description: 'Born in Otoro, Akwa Ibom State. Began education at Ikot Etuk Government Primary School and Midtown Secondary Commercial School.',
  },
  {
    year: '2000s',
    title: 'Academic & Professional Growth',
    description: 'Earned a degree in Accountancy from the University of Nigeria, Nsukka, followed by highly impactful senior roles in organizations across Lagos.',
  },
  {
    year: '2013',
    title: 'Entrepreneurial Debut',
    description: 'Founded Equipremark Resources, a specialized firm delivering seamless business software implementations and expert tax consultancy services.',
  },
  {
    year: '2022',
    title: 'Risk Management Leadership',
    description: 'Appointed as the State Coordinator of the Chartered Institute of Loan and Risk Management of Nigeria for Akwa Ibom State.',
  },
  {
    year: '2024',
    title: 'Logistics Expansion & DHL Partnership',
    description: 'Secured a DHL Authorized Service Partner license, expanding GSC Logistics with service outlets across Lagos and Ogun State to give SMEs faster access to international shipping.',
  },
  {
    year: 'Present',
    title: 'Group CEO & Family Man',
    description: 'Leading FlyBooking Arena, Zentech Software, and more. A devoted family man alongside his wife, Elizabeth Okojie, and their two daughters.',
  },
];

export default function Biography() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleViewportEnter = () => {
    if (audioRef.current && !hasStarted) {
      audioRef.current.volume = 0.15; // Set volume very subtly
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(e => console.log('Audio autoplay blocked:', e))
        .finally(() => setHasStarted(true));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.15;
        audioRef.current.play().catch(e => console.log(e));
        setIsPlaying(true);
        setHasStarted(true);
      }
    }
  };

  return (
    <motion.section 
      id="biography" 
      className="py-24 md:py-32 bg-royal-ivory px-6"
      onViewportEnter={handleViewportEnter}
      viewport={{ margin: "-200px" }}
    >
      <audio 
        ref={audioRef} 
        src="https://res.cloudinary.com/dojayb3ro/video/upload/v1780382267/let_s_try_this_again_064805225_knq3ee.mp3" 
        loop
      />

      <AnimatePresence>
        {hasStarted && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-royal-black text-royal-gold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all outline-none"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-royal-gold uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-royal-black">
            A Life of Purpose
          </h2>
        </motion.div>

        <div className="relative border-l border-royal-light-gray/60 md:border-l-0 md:border-t mt-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative md:w-1/2 mb-16 md:mb-24 last:mb-0 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:pr-16 md:text-right'
              }`}
            >
              <div 
                className={`absolute top-0 w-3 h-3 rounded-full bg-royal-gold -left-[6.5px] md:-top-[6.5px] ${
                  index % 2 === 0 ? 'md:-left-[6.5px]' : 'md:left-auto md:-right-[6.5px]'
                }`}
              />
              
              <span className="block text-xl font-serif font-semibold text-royal-gold mb-2">
                {milestone.year}
              </span>
              <h3 className="text-2xl font-serif text-royal-black mb-4">
                {milestone.title}
              </h3>
              <p className="text-royal-gray leading-relaxed font-light">
                {milestone.description}
              </p>
            </motion.div>
          ))}
          {/* Vertical line for desktop middle */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-royal-light-gray/60 -translate-x-1/2" />
        </div>
      </div>
    </motion.section>
  );
}
