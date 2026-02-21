import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, BookOpen, Heart, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
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
                        <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#10B981] to-[#047857] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1">
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
                    <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-quran-surface/80 to-quran-bg rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8">

                        {/* Interactive UI Mockup Elements */}
                        <div className="w-full space-y-4 relative z-10 p-6 glass-panel rounded-3xl mb-8 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-full bg-quran-primary/20 flex items-center justify-center">
                                    <MessageSquareText className="text-quran-primary" size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white tracking-wide">QuranChat AI</div>
                                    <div className="text-xs text-quran-text/60">typing...</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-quran-surface border border-white/5 shadow-inner">
                                <p className="text-sm text-quran-text/90 italic">"Indeed, with hardship will be ease." (94:5) How can I help you find peace today?</p>
                            </div>
                        </div>

                        <div className="w-full flex gap-4 transform translate-x-4 rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="w-1/2 p-5 glass-panel rounded-3xl flex flex-col items-center text-center gap-3">
                                <Heart className="text-rose-400" size={32} />
                                <span className="text-sm font-bold">Find Peace</span>
                            </div>
                            <div className="w-1/2 p-5 glass-panel rounded-3xl flex flex-col items-center text-center gap-3">
                                <BookOpen className="text-blue-400" size={32} />
                                <span className="text-sm font-bold">Seek Guidance</span>
                            </div>
                        </div>

                        {/* Top decorative gradient glow */}
                        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-quran-primary/20 to-transparent"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
