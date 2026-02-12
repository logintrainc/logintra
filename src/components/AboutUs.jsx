import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-bold mb-8 text-[#5e17eb]">
                            <Sparkles size={14} />
                            <span>OUR MISSION</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                            Software with <span className="italic text-[#5e17eb]">soul.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 font-medium">
                            <p>
                                We believe technology should feel human. It shouldn't just solve problems; it should spark joy.
                            </p>
                            <p>
                                At Logintra, we obsess over every pixel, every interaction, and every millisecond of latency. We're not just building apps; we're crafting digital experiences that feel alive.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-6">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-black">100k+</span>
                                <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Active Users</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-black">4.9</span>
                                <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">App Store Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gray-100 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                        <div className="relative bg-white border-2 border-black rounded-[2.5rem] p-8 md:p-12 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_#5e17eb] hover:border-[#5e17eb]">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>

                            <h3 className="text-3xl font-bold mb-4">The Logintra Standard</h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Pixel-perfect design",
                                    "Lightning fast performance",
                                    "Privacy by default",
                                    "Seamless animations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-[#5e17eb]/10 flex items-center justify-center text-[#5e17eb]">
                                            <ArrowRight size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-black text-white font-black rounded-xl hover:bg-[#5e17eb] transition-colors flex items-center justify-center gap-2 group/btn">
                                Join the Team
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
