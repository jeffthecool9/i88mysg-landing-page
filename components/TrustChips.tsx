
import React from 'react';
import { motion } from 'framer-motion';

const chips = [
  "Founded 2016",
  "500k+ users MY & SG",
  "Official pages only",
  "Smooth deposit & withdrawal",
  "Fast support response",
  "Sports-first vibe",
  "Simple to register",
  "Clean & easy UI",
  "Safe reminder: don’t share OTP"
];

const TrustChips: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-black mb-12 text-gradient"
        >
          Why Thousands Trust Us
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {chips.map((chip, idx) => (
            <motion.div
              key={chip}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(0, 71, 255, 0.2)",
                boxShadow: "0 0 20px rgba(0, 71, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10,
                delay: idx * 0.05 
              }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur cursor-default text-sm md:text-base font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              {chip}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustChips;
