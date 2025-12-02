import React, { useState } from 'react';
import ParticleLoader from './components/ParticleLoader';
import Navigation from './components/Navigation';
import BentoGrid from './components/BentoGrid';
import DosageTracker from './components/DosageTracker';
import Testimonials from './components/Testimonials';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <ParticleLoader onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="bg-brand-bg min-h-screen text-brand-primary relative">
          <Navigation />
          
          <main>
             <BentoGrid />
             <DosageTracker />
             <Testimonials />

             {/* Simple footer area */}
             <footer className="py-20 border-t border-brand-subtle mt-0 bg-white">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-2xl font-display font-bold text-brand-primary">MediScan AI</h2>
                        <p className="text-brand-primary/50 text-sm mt-2">© 2024 All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-brand-primary/60 hover:text-brand-accent transition-colors font-medium">Privacy</a>
                        <a href="#" className="text-brand-primary/60 hover:text-brand-accent transition-colors font-medium">Terms</a>
                        <a href="#" className="text-brand-primary/60 hover:text-brand-accent transition-colors font-medium">Support</a>
                    </div>
                </div>
             </footer>
          </main>
        </div>
      )}
    </>
  );
};

export default App;