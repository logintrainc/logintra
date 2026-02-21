import React from 'react';
import { Clock, Compass, HandCoins, Quote, Crown, ShieldCheck } from 'lucide-react';

const UtilitiesSection: React.FC = () => {
    return (
        <section id="utilities" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Utilities Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">🕌 Spiritual Utilities</h2>
                        <p className="text-quran-text/60 max-w-2xl mx-auto font-light text-lg">Essential tools to guide your daily life.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors border border-white/10 group text-center flex flex-col items-center">
                            <Clock className="text-quran-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                            <h4 className="text-lg font-bold text-white mb-2">Live Prayer Times</h4>
                            <p className="text-sm text-quran-text/60">Precision timing with a home-screen countdown.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors border border-white/10 group text-center flex flex-col items-center">
                            <Compass className="text-quran-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                            <h4 className="text-lg font-bold text-white mb-2">Qibla Finder</h4>
                            <p className="text-sm text-quran-text/60">Sleek compass with Haptic Alignment feedback.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors border border-white/10 group text-center flex flex-col items-center">
                            <HandCoins className="text-quran-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                            <h4 className="text-lg font-bold text-white mb-2">Sadaka Guide</h4>
                            <p className="text-sm text-quran-text/60">Learn the ethics and rewards of charity.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors border border-white/10 group text-center flex flex-col items-center">
                            <Quote className="text-quran-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                            <h4 className="text-lg font-bold text-white mb-2">Daily Ayah</h4>
                            <p className="text-sm text-quran-text/60">Instant inspiration delivered every single day.</p>
                        </div>
                    </div>
                </div>

                {/* Pro / Tech Excellence Section */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* QuranChat Pro */}
                    <div className="bg-gradient-to-br from-quran-gold/20 to-black/40 rounded-[40px] p-10 md:p-14 border border-quran-gold/30 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-quran-gold/20 rounded-full blur-[80px]"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Crown className="text-quran-gold" size={32} />
                                <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gold-gradient">QuranChat Pro</h3>
                            </div>
                            <p className="text-quran-text/80 mb-8 max-w-sm">Elevate your experience, support our mission, and unlock deeper features.</p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><div className="w-1.5 h-1.5 rounded-full bg-quran-gold"></div> Unlimited AI Chat queries.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><div className="w-1.5 h-1.5 rounded-full bg-quran-gold"></div> Exclusive long-form thematic journeys.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><div className="w-1.5 h-1.5 rounded-full bg-quran-gold"></div> Cloud Sync across all devices.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><div className="w-1.5 h-1.5 rounded-full bg-quran-gold"></div> Pure, Ad-Free uninterrupted experience.</li>
                            </ul>

                        </div>
                    </div>

                    {/* Tech Excellence */}
                    <div className="glass-panel rounded-[40px] p-10 md:p-14 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="text-blue-400" size={32} />
                                <h3 className="text-3xl font-display font-bold text-white">Technical Excellence</h3>
                            </div>
                            <p className="text-quran-text/80 mb-8 max-w-sm">Built with modern standards ensuring a seamless, fast, and secure experience.</p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><strong className="text-blue-400">Real-Time Synergy:</strong> Powered by Supabase.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><strong className="text-blue-400">Modern UI:</strong> Glassmorphism & Micro-interactions.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><strong className="text-blue-400">Cross-Platform:</strong> Seamless on iOS and Android.</li>
                                <li className="flex items-center gap-3 text-white/90 font-medium font-sm"><strong className="text-blue-400">Privacy First:</strong> Secure Auth and row-level security.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default UtilitiesSection;
