import React from 'react';
import { Zap, Star, Smartphone } from 'lucide-react';

const InfoCards = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Card 1: Bold Stats - Hover #470047 */}
                    <div className="group bg-white rounded-[2rem] p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] hover:border-[#470047] transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif font-bold text-black mb-2 italic group-hover:text-[#470047] transition-colors">Global.</h3>
                            <p className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">Worldwide Vibes</p>
                            <div className="text-7xl font-black text-black mb-2 group-hover:text-[#470047] transition-colors">2.5M</div>
                            <p className="font-bold text-black">Happy Shoppers</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 rounded-full border-2 border-black group-hover:bg-[#470047]/5 group-hover:border-[#470047] transition-colors"></div>
                    </div>

                    {/* Card 2: Ecosystem - Hover #470047 */}
                    <div className="group bg-gray-50 rounded-[2rem] p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-gray-100 hover:border-[#470047] transition-all duration-300 relative">
                        <h3 className="text-3xl font-serif font-bold text-black mb-2 italic group-hover:text-[#470047] transition-colors">Connect.</h3>
                        <p className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">The Ecosystem</p>

                        <div className="flex justify-center gap-4 py-8">
                            <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg transform -rotate-12 group-hover:border-[#470047] transition-colors"><Zap className="text-black group-hover:text-[#470047]" /></div>
                            <div className="w-16 h-16 bg-black border-2 border-black rounded-full flex items-center justify-center shadow-lg z-10 scale-110 group-hover:bg-[#470047] group-hover:border-[#470047] transition-colors"><Star className="text-white fill-white" /></div>
                            <div className="w-16 h-16 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:border-[#470047] transition-colors"><Smartphone className="text-black group-hover:text-[#470047]" /></div>
                        </div>
                    </div>

                    {/* Card 3: Benefits - Hover #470047 */}
                    <div className="group bg-black text-white rounded-[2rem] p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(100,100,100,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-[#470047] hover:border-[#470047] transition-all duration-300">
                        <h3 className="text-3xl font-serif font-bold mb-2 italic text-white">Why us?</h3>
                        <p className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest group-hover:text-white/60">The perks</p>

                        <ul className="space-y-4">
                            {["Privacy First", "Lightning Fast", "Award Winning"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-bold">
                                    <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white/80"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InfoCards;
