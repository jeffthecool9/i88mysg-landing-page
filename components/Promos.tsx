
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const promoData = [
  {
    title: "New user: Grab your welcome rewards 🎁",
    desc: "Start your journey with exclusive official perks.",
    accent: "from-blue-600 to-blue-400"
  },
  {
    title: "First-time join: Quick start, easy steps",
    desc: "Experience the fastest flow in the region.",
    accent: "from-indigo-600 to-blue-500"
  },
  {
    title: "Limited-time: Extra perks during match nights",
    desc: "Boost your experience when the stadium lights are on.",
    accent: "from-cyan-600 to-blue-600"
  },
  {
    title: "Tip: Check official buttons before you register",
    desc: "Stay safe, stay official. Trust our bottom links.",
    accent: "from-brand-blue to-brand-accent"
  }
];

const Promos: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-3xl font-black mb-12 text-gradient text-center md:text-left"
        >
          Active Events & Rewards
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promoData.map((promo, idx) => (
            <Tilt
              key={idx}
              perspective={800}
              scale={1.05}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="h-full glass-card rounded-2xl p-6 relative group overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${promo.accent} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-1 bg-gradient-to-r ${promo.accent} mb-4 rounded-full`} />
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {promo.desc}
                  </p>
                </div>

                <div className="mt-8 relative z-10">
                   <div className="text-[10px] uppercase font-black tracking-widest text-brand-blue opacity-50">Event Available</div>
                </div>
                
                {/* Border Shimmer */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-brand-blue/30 rounded-2xl transition-all duration-500" />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promos;
