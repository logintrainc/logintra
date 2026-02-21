import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

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
                <a href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                        <Sparkles size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-quran-primary transition-colors">
                        QuranChat<span className="text-quran-primary">.</span>
                    </span>
                </a>

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
