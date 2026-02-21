import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Map, Flame, Target, MessageCircleHeart, Sparkles, TrendingUp } from 'lucide-react';

const FeaturesGrid: React.FC = () => {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">🌟 Hero Features</h2>
                    <p className="text-quran-text/60 max-w-2xl mx-auto font-light text-lg">Experience a transformative spiritual journey tailored to your needs, built with cutting-edge AI.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Feature 1: QuranChat AI (Takes 2 columns on tablet/desktop) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-panel rounded-[32px] p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-quran-primary/10 rounded-full blur-[80px] group-hover:bg-quran-primary/20 transition-all"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-quran-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-quran-primary/30">
                                    <Bot className="text-quran-primary" size={28} />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-3">Your Spiritual Dialogue</h3>
                                <p className="text-quran-text/80 mb-6 max-w-md">Engage with the Quran like never before. Our custom-trained AI assistant helps you explore and reflect with three specialized modes.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                <div className="bg-quran-bg/50 border border-white/5 p-4 rounded-2xl backdrop-blur-sm group-hover:border-quran-primary/30 transition-colors">
                                    <Sparkles className="text-yellow-400 mb-2" size={20} />
                                    <h4 className="font-bold text-white text-sm mb-1">Verse Explorer</h4>
                                    <p className="text-xs text-quran-text/60">Deep dive into context & tafsir.</p>
                                </div>
                                <div className="bg-quran-bg/50 border border-white/5 p-4 rounded-2xl backdrop-blur-sm group-hover:border-quran-primary/30 transition-colors">
                                    <MessageCircleHeart className="text-rose-400 mb-2" size={20} />
                                    <h4 className="font-bold text-white text-sm mb-1">Spiritual Reflection</h4>
                                    <p className="text-xs text-quran-text/60">Emotional support & wisdom.</p>
                                </div>
                                <div className="bg-quran-bg/50 border border-white/5 p-4 rounded-2xl backdrop-blur-sm group-hover:border-quran-primary/30 transition-colors">
                                    <Map className="text-blue-400 mb-2" size={20} />
                                    <h4 className="font-bold text-white text-sm mb-1">Source Finder</h4>
                                    <p className="text-xs text-quran-text/60">Find exact verses for any topic.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Smart Habit Building */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel rounded-[32px] p-8 relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
                                <Flame className="text-orange-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-3">The Streak System</h3>
                            <p className="text-quran-text/80 text-sm mb-6">Stay motivated with our beautiful, gamified habit-tracking ecosystem.</p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-quran-text/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                    Interactive Streaks with Haptics
                                </li>
                                <li className="flex items-center gap-3 text-sm text-quran-text/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                    Real-time Progress Rings
                                </li>
                                <li className="flex items-center gap-3 text-sm text-quran-text/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                    Smart Streak Protection
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 3: Guided Thematic Journeys */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel rounded-[32px] p-8 relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="absolute top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                                <TrendingUp className="text-purple-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-3">Guided Journeys</h3>
                            <p className="text-quran-text/80 text-sm">Follow structured 7-14 day paths tailored for your emotional growth. Journey themes include Finding Peace, Cultivating Patience, and Healing & Hope.</p>
                        </div>
                    </motion.div>

                    {/* Feature 4: Intention-Based Onboarding */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 glass-panel rounded-[32px] p-8 relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 justify-between bg-gradient-to-br from-quran-surface/50 to-quran-primary/5 border-quran-primary/20"
                    >
                        <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                                    <Target className="text-blue-400" size={20} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white">Intention-Based Onboarding</h3>
                            </div>
                            <p className="text-quran-text/80 text-sm mb-6 max-w-sm">A personalized start to your journey. Set your purpose and let the app adapt its voice and recommendations.</p>
                        </div>

                        <div className="w-full md:w-auto grid grid-cols-2 gap-3 relative z-10">
                            <div className="bg-quran-bg/70 px-4 py-3 rounded-xl border border-white/5 text-center text-sm font-semibold text-white/90">Find Peace</div>
                            <div className="bg-quran-bg/70 px-4 py-3 rounded-xl border border-white/5 text-center text-sm font-semibold text-white/90">Build Consistency</div>
                            <div className="bg-quran-bg/70 px-4 py-3 rounded-xl border border-white/5 text-center text-sm font-semibold text-white/90">Seek Guidance</div>
                            <div className="bg-quran-bg/70 px-4 py-3 rounded-xl border border-white/5 text-center text-sm font-semibold text-white/90">Strengthen Faith</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
