import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, BookOpen, Heart, Download, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../assets/quranchat/1.png';
import img2 from '../../assets/quranchat/2.png';
import img3 from '../../assets/quranchat/3.png';
import img4 from '../../assets/quranchat/4.png';
import img5 from '../../assets/quranchat/5.png';
import img6 from '../../assets/quranchat/6.png';
import img7 from '../../assets/quranchat/7.png';

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-quran-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-quran-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 mix-blend-overlay -z-10" style={{ backgroundSize: '300px' }}></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-quran-primary/30 bg-quran-primary/10 mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quran-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-quran-primary"></span>
                        </span>
                        <span className="text-xs font-semibold text-quran-primary tracking-wider uppercase">Your Spiritual Companion</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight text-white mb-6">
                        Connect with the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-quran-primary via-quran-accent to-quran-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                            Divine.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-quran-text/80 mb-10 leading-relaxed font-light">
                        QuranChat is a modern, premium mobile application designed to help Muslims build a meaningful, daily connection with the Holy Quran through advanced AI technology, guided journeys, and habit-building features.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white text-quran-bg px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1">
                            <Download size={24} />
                            Get the App
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-quran-surface/50 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-quran-surface transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold text-white">4.9</span>
                            <span className="text-xs text-quran-text/60 uppercase tracking-wider">App Store</span>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold text-white">10k+</span>
                            <span className="text-xs text-quran-text/60 uppercase tracking-wider">Daily Reflectors</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual / Phone Mockup replacement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <div className="relative w-[340px] mx-auto z-10 perspective-1000">
                        {/* A glow behind the phone */}
                        <div className="absolute inset-0 bg-quran-primary blur-[100px] opacity-30"></div>

                        <div className="relative z-10 w-full rounded-[45px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-4 border-[#1E293B]/80 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out flex items-center justify-center p-2 bg-[#0F172A] overflow-hidden group">
                            {/* Inner Screen */}
                            <div className="relative w-full aspect-[9/19.5] rounded-[35px] overflow-hidden bg-quran-surface">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={IMAGES[currentImageIndex]}
                                        alt={`QuranChat App Screenshot ${currentImageIndex + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Navigation controls (visible on hover) */}
                            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20 hover:bg-black/70">
                                <ChevronLeft size={16} />
                            </button>
                            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20 hover:bg-black/70">
                                <ChevronRight size={16} />
                            </button>

                            {/* Slide indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                                {IMAGES.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/40'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-1/4 p-4 glass-panel rounded-2xl border border-white/10 z-20 shadow-xl backdrop-blur-md"
                        >
                            <Heart className="text-rose-400" size={28} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-10 bottom-1/3 p-4 glass-panel rounded-2xl border border-white/10 z-20 shadow-xl backdrop-blur-md"
                        >
                            <BookOpen className="text-blue-400" size={28} />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
