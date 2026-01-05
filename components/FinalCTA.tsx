
import React from 'react';
import { motion } from 'framer-motion';

const MalaysiaFlag = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="20" fill="#cc0000"/>
    <rect width="40" height="1.43" y="1.43" fill="#fff"/>
    <rect width="40" height="1.43" y="4.29" fill="#fff"/>
    <rect width="40" height="1.43" y="7.14" fill="#fff"/>
    <rect width="40" height="1.43" y="10" fill="#fff"/>
    <rect width="40" height="1.43" y="12.86" fill="#fff"/>
    <rect width="40" height="1.43" y="15.71" fill="#fff"/>
    <rect width="40" height="1.43" y="18.57" fill="#fff"/>
    <rect width="20" height="11.43" fill="#000066"/>
    <circle cx="10" cy="5.71" r="3.5" fill="#ffcc00"/>
    <circle cx="11.5" cy="5.71" r="3.5" fill="#000066"/>
    <path d="M11 5.71 L15 3 L14 5.71 L15 8.42 Z" fill="#ffcc00"/>
  </svg>
);

const SingaporeFlag = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="12" fill="#EE2536"/>
    <rect width="40" height="12" y="12" fill="#FFFFFF"/>
    <circle cx="9" cy="6" r="4.5" fill="#FFFFFF"/>
    <circle cx="11" cy="6" r="4.5" fill="#EE2536"/>
    <g fill="#FFFFFF">
      <path d="M9 3 L9.5 4.5 L11 4.5 L9.8 5.4 L10.2 6.9 L9 6 L7.8 6.9 L8.2 5.4 L7 4.5 L8.5 4.5 Z" />
    </g>
  </svg>
);

const FinalCTA: React.FC = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-brand-blue/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          {/* Animated Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.15)_0%,transparent_50%)] animate-pulse" />

          <h2 className="text-4xl md:text-5xl font-black mb-12 relative z-10 text-gradient">
            Official i88 Pages
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            {/* Malaysia Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLink('https://www.facebook.com/profile.php?id=61584225863316')}
              className="group relative flex items-center gap-4 bg-white text-brand-dark px-10 py-6 rounded-3xl font-black text-xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
              <MalaysiaFlag />
              <span className="group-hover:text-white transition-colors duration-300">Malaysia</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle,white_0%,transparent_70%)] transition-opacity" />
            </motion.button>

            {/* Singapore Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLink('https://www.facebook.com/profile.php?id=61584669658907')}
              className="group relative flex items-center gap-4 bg-white text-brand-dark px-10 py-6 rounded-3xl font-black text-xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
              <SingaporeFlag />
              <span className="group-hover:text-white transition-colors duration-300">Singapore</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle,white_0%,transparent_70%)] transition-opacity" />
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 space-y-2 relative z-10"
          >
            <p className="text-brand-accent font-bold tracking-widest uppercase text-xs">
              Official links only. Don’t share OTP/password.
            </p>
            <div className="w-24 h-0.5 bg-brand-blue mx-auto rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
