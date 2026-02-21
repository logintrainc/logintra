import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-quran-surface/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-4">
                    <div className="relative">
                        <a
                            href="/"
                            className="group inline-block"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <div className="flex items-center px-2 md:px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm hover:scale-105 hover:border-[#10B981]/50 transition-all h-8 overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981] group-hover:-translate-x-0.5 transition-transform flex-shrink-0"><path d="m15 18-6-6 6-6" /></svg>
                                <span className="font-semibold text-xs md:text-sm text-gray-700 flex items-center relative">
                                    Logintra<span className="text-[#10B981] text-2xl md:text-3xl absolute -top-1 -right-2" style={{ lineHeight: '0.58' }}>.</span>
                                </span>
                            </div>
                        </a>

                        {/* Figma-style Tooltip */}
                        {showTooltip && (
                            <div className="absolute left-[2rem] top-[calc(100%+8px)] px-3 py-1.5 bg-white border-2 border-[#10B981] text-gray-800 text-xs font-medium rounded-lg shadow-lg whitespace-nowrap z-[100] pointer-events-none">
                                Back to Logintra.
                            </div>
                        )}
                    </div>

                    <a href="#" className="flex items-center gap-2 group ml-2">
                        <img src="/src/assets/quranchat/adaptive-icon.png" alt="QuranChat Icon" className="w-10 h-10 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all object-cover" />
                        <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white group-hover:text-quran-primary transition-colors hidden sm:block">
                            QuranChat<span className="text-quran-primary">.</span>
                        </span>
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-quran-text/80 hover:text-white transition-colors">Features</a>
                    <a href="#experience" className="text-sm font-medium text-quran-text/80 hover:text-white transition-colors">Experience</a>
                    <a href="#utilities" className="text-sm font-medium text-quran-text/80 hover:text-white transition-colors">Utilities</a>
                </div>

                <button className="hidden md:flex items-center gap-2 bg-white text-quran-bg px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform active:scale-95">
                    Download App
                    <ArrowRight size={16} />
                </button>
            </div>
        </motion.nav>
    );
};

export default Navigation;
