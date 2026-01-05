
import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import TrustChips from './components/TrustChips';
import Promos from './components/Promos';
import FinalCTA from './components/FinalCTA';
import BackgroundEffects from './components/BackgroundEffects';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      
      <main className="relative z-10">
        <Hero />
        <OurStory />
        <TrustChips />
        <Promos />
        <FinalCTA />
      </main>

      <footer className="relative z-10 py-8 text-center text-white/40 text-sm border-t border-white/5">
        <p>© 2024 i88 Official. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
