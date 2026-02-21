import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import ExperienceSection from './components/ExperienceSection';
import UtilitiesSection from './components/UtilitiesSection';

const App: React.FC = () => {
    return (
        <div className="bg-quran-bg min-h-screen text-quran-text relative">
            <Navigation />

            <main>
                <HeroSection />
                <FeaturesGrid />
                <ExperienceSection />
                <UtilitiesSection />

                {/* Footer */}
                <footer className="py-16 border-t border-quran-subtle mt-20 bg-quran-surface/50 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-display font-bold text-white tracking-wider">QuranChat<span className="text-quran-primary">.</span></h2>
                            <p className="text-quran-text/60 text-sm mt-2">Your Spiritual Companion Powered by AI.</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-quran-text/60 hover:text-quran-primary transition-colors font-medium">Privacy</a>
                            <a href="#" className="text-quran-text/60 hover:text-quran-primary transition-colors font-medium">Terms</a>
                            <a href="#" className="text-quran-text/60 hover:text-quran-primary transition-colors font-medium">Support</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default App;
