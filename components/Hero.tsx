import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Particle: React.FC<{ delay: number }> = ({ delay }) => {
  const xPos = useMemo(() => Math.random() * 100, []);
  const xDrift = useMemo(() => xPos + (Math.random() * 10 - 5), [xPos]);
  const duration = useMemo(() => 4 + Math.random() * 4, []);
  const size = useMemo(() => 1 + Math.random() * 3, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0, x: `${xPos}%` }}
      animate={{
        y: ["0vh", "100vh"],
        opacity: [0, 0.6, 0],
        x: [`${xPos}%`, `${xDrift}%`],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      className="absolute bg-brand-accent rounded-full blur-[1px] pointer-events-none"
      style={{ width: size, height: size }}
    />
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Dynamic Background Spotlight */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,71,255,0.4)_0%,transparent_70%)] blur-[100px]"
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120%] h-[120%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,194,255,0.12)_180deg,transparent_360deg)] opacity-30"
        />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Falling Particles Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <Particle key={i} delay={i * 0.25} />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 px-6 py-2 rounded-full border border-brand-blue/30 bg-brand-dark/40 backdrop-blur-md text-brand-accent font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3 shadow-[0_0_15px_rgba(0,194,255,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          Official Page
        </motion.div>

        {/* Logo with Glow + Shine */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 110, delay: 0.15 }}
          className="relative mb-14 group"
        >
          {/* Internal Glow Spotlight */}
          <motion.div
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-blue/30 blur-[70px] rounded-full scale-110"
          />

          {/* Floating logo (ONLY ONE LOGO) */}
          <motion.img
            src="/assets/i88-logo.png"
            alt="i88 Official Logo"
            animate={{ y: [0, -14, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 md:w-[520px] h-auto drop-shadow-[0_0_55px_rgba(0,71,255,0.65)] z-20 transition-transform group-hover:scale-[1.03] duration-700"
          />

          {/* Shine sweep */}
          <motion.div
            animate={{ left: ["-120%", "220%"] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
            className="absolute top-0 left-[-120%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/18 to-transparent skew-x-12 z-30 pointer-events-none"
          />
        </motion.div>

        {/* Typography */}
        <div className="space-y-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.85 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white"
          >
            Play Smart, Win Smart
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.85 }}
            className="text-3xl md:text-5xl font-bold text-white/90"
          >
            玩的精，赢得精
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="pt-2"
          >
            <span className="text-sm font-black text-brand-blue tracking-[0.4em] uppercase animate-pulse">
              Official links are at the bottom
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-brand-accent text-2xl"
            aria-hidden="true"
          >
            ↓
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-brand-dark to-transparent z-30" />
    </section>
  );
};

export default Hero;
