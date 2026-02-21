import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Mic2, Languages, MousePointerClick, PlayCircle, Layers } from 'lucide-react';

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-24 relative z-10 bg-quran-surface/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">📖 The Experience</h2>
                    <p className="text-quran-text/60 max-w-2xl mx-auto font-light text-lg">A modern reader and audio sanctuary built for deep reflection.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Reading Experience */}
                    <div className="relative">
                        <div className="glass-panel rounded-[32px] p-8 h-full border-t border-l border-white/10">
                            <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">Modern Reader</h3>

                            <div className="space-y-8">
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-quran-primary/20 transition-all border border-white/5">
                                        <MousePointerClick className="text-quran-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Scroll-to-Track</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Our innovative technology automatically marks verses as "read" as you scroll through them. No manual clicking required.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-quran-primary/20 transition-all border border-white/5">
                                        <BookMarked className="text-quran-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Uthmani Script</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Pristine Arabic calligraphy for a traditional feel, rendered perfectly on any device.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-quran-primary/20 transition-all border border-white/5">
                                        <Languages className="text-quran-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Interactive Detail</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Tap any verse to listen, share, bookmark, or ask the AI for a deeper reflection instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Audio Experience */}
                    <div className="relative">
                        <div className="glass-panel rounded-[32px] p-8 h-full border-t border-l border-white/10">
                            <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block pr-12">Audio Sanctuary</h3>

                            <div className="space-y-8">
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all border border-white/5">
                                        <Mic2 className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">World-Class Reciters</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Choose from a library of globally renowned reciters for your perfect listening experience.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all border border-white/5">
                                        <PlayCircle className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Crystal Clear Audio</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Optimized for mobile performance with flawless gapless playback.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-quran-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all border border-white/5">
                                        <Layers className="text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Verse-by-Verse Sync</h4>
                                        <p className="text-sm text-quran-text/70 leading-relaxed">Audio is perfectly synchronized with the text, keeping you focused and immersed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default ExperienceSection;
