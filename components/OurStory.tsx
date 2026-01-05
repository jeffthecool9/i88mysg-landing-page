
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const SilhouetteIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
      <svg className="absolute top-10 left-10 w-24 h-24 rotate-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
      <svg className="absolute bottom-20 right-20 w-32 h-32 -rotate-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    </div>
  );
};

const OurStory: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Tilt
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.02}
          className="glass-card rounded-3xl p-12 relative overflow-hidden group"
        >
          <SilhouetteIcons />
          
          <div className="relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-accent font-black text-2xl mb-6 uppercase tracking-tighter"
            >
              Our Legacy
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl leading-relaxed font-light text-white/90"
            >
              Founded in 2016, i88 is built for players in Malaysia & Singapore who want a smooth and steady experience. 
              We focus on clean sports vibes, fast flow, and official pages only — so you know where to click and what to trust. 
              Join in, play smart, and catch the big match moments.
            </motion.p>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Tilt>
      </div>
    </section>
  );
};

export default OurStory;
