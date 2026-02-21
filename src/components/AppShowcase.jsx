import React from 'react';
import { Pill, ScanLine, ShieldCheck, BookOpen, Sparkles, MessageSquareText } from 'lucide-react';

// --- Custom CSS for Marquee Animation ---
const CustomStyles = () => (
    <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stroke-text {
            -webkit-text-stroke: 2px #000;
        }
    `}</style>
);

const Marquee = () => {
    const words = ["Health", "AI-Scan", "Safety", "Medicine", "Wellness", "Instant"];
    return (
        <div className="relative w-full overflow-hidden py-12 bg-white -rotate-1 transform scale-105 border-y-2 border-black mb-16">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-12 mx-6">
                        {words.map((word, wIndex) => (
                            <span key={wIndex} className="text-6xl md:text-8xl font-serif font-black italic text-transparent stroke-text">
                                {word}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            <CustomStyles /> {/* Include styles here to ensure animation keyframes are present */}
        </div>
    );
};

const AppShowcase = () => {
    const apps = [
        {
            title: "MediScan AI",
            desc: "Visual Clarity for your Meds.",
            bg: "bg-gray-100", // Light Grey
            link: "/mediscan/"
        },
        {
            title: "QuranChat AI",
            desc: "Your Spiritual Companion Powered by AI.",
            bg: "bg-[#16433F]", // Deep Green / Theme Color
            link: "/quranchat/"
        },
        {
            title: "EV-Map",
            desc: "Navigate the electric future.",
            bg: "bg-white" // White
        }
    ];

    return (
        <section id="apps" className="py-24 bg-gray-50 overflow-hidden">
            <Marquee />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6">Our Suite.</h2>
                    <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">Apps designed to be as bold as you are.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {apps.map((app, index) => {
                        const CardContent = () => (
                            <>
                                <div className={`${app.bg} border-2 border-black rounded-[2.5rem] p-8 aspect-[4/5] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#5e17eb] hover:border-[#5e17eb] mb-6`}>
                                    {/* Decorative circle */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-xl group-hover:bg-[#5e17eb]/10 transition-colors"></div>

                                    {/* MediScan Specific Content */}
                                    {app.title === "MediScan AI" ? (
                                        <div className="h-full flex flex-col justify-between relative z-10">
                                            {/* Top: Icon and Badge */}
                                            <div className="flex justify-between items-start">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#000046] to-[#1CB5E0] rounded-2xl flex items-center justify-center border-2 border-black group-hover:border-[#5e17eb] transition-all group-hover:scale-110 duration-300">
                                                    <Pill size={32} className="text-white" />
                                                </div>
                                                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-black group-hover:bg-[#5e17eb] group-hover:border-[#5e17eb] transition-colors">
                                                    AI
                                                </div>
                                            </div>

                                            {/* Middle: Scan Visualization */}
                                            <div className="space-y-3">
                                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border-2 border-black group-hover:border-[#5e17eb] transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <ScanLine size={20} className="text-[#1CB5E0]" />
                                                        <div className="flex-1 space-y-2">
                                                            <div className="h-2 w-full bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-full"></div>
                                                            <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border-2 border-black group-hover:border-[#5e17eb] transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <ShieldCheck size={20} className="text-green-500" />
                                                        <span className="text-xs font-bold text-black">No Conflicts Detected</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom: Feature Pills */}
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#5e17eb] transition-colors">Instant ID</span>
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#5e17eb] transition-colors">99.8%</span>
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#5e17eb] transition-colors">Safe</span>
                                            </div>
                                        </div>
                                    ) : app.title === "QuranChat AI" ? (
                                        <div className="h-full flex flex-col justify-between relative z-10">
                                            {/* Top: Icon and Badge */}
                                            <div className="flex justify-between items-start">
                                                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-2xl flex items-center justify-center border-2 border-black group-hover:border-[#5e17eb] transition-all group-hover:scale-110 duration-300">
                                                    <BookOpen size={32} className="text-white" />
                                                </div>
                                                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-black group-hover:bg-[#10B981] group-hover:border-[#10B981] transition-colors">
                                                    NEW
                                                </div>
                                            </div>

                                            {/* Middle: Visuals */}
                                            <div className="space-y-3">
                                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border-2 border-black group-hover:border-[#10B981] transition-colors">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div className="flex items-center gap-3">
                                                            <MessageSquareText size={20} className="text-[#10B981]" />
                                                            <div className="font-bold text-black text-sm">AI Tafsir</div>
                                                        </div>
                                                        <div className="text-2xl font-bold text-[#047857]" style={{ fontFamily: 'traditional arabic, serif' }}>القرآن</div>
                                                    </div>
                                                </div>
                                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border-2 border-black group-hover:border-[#10B981] transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <Sparkles size={20} className="text-yellow-500" />
                                                        <span className="text-xs font-bold text-black">Spiritual Guidance</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom: Feature Pills */}
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#10B981] transition-colors">Chat</span>
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#10B981] transition-colors">Habits</span>
                                                <span className="px-3 py-1 bg-white border-2 border-black rounded-full text-xs font-bold group-hover:border-[#10B981] transition-colors">Audio</span>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Other Apps: Keep Original Design with SOON Badge */
                                        <div className="h-full flex flex-col justify-between relative z-10">
                                            {/* Badge */}
                                            <div className="flex justify-end">
                                                <div className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold border-2 border-black group-hover:bg-[#5e17eb] group-hover:border-[#5e17eb] transition-colors">
                                                    SOON
                                                </div>
                                            </div>

                                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-2 border-black group-hover:border-[#5e17eb] transition-colors">
                                                <div className="w-12 h-12 bg-black rounded-full mb-4 flex items-center justify-center group-hover:bg-[#5e17eb] transition-colors">
                                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-2 w-full bg-black/10 rounded-full group-hover:bg-[#5e17eb]/20"></div>
                                                    <div className="h-2 w-2/3 bg-black/10 rounded-full group-hover:bg-[#5e17eb]/20"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-black group-hover:text-[#5e17eb] transition-colors">{app.title}</h3>
                                    <p className="text-sm font-bold text-gray-500 mt-2">{app.desc}</p>
                                </div>
                            </>
                        );

                        return (
                            <div key={index} className="group cursor-pointer">
                                {app.link ? (
                                    <a href={app.link} className="block">
                                        <CardContent />
                                    </a>
                                ) : (
                                    <CardContent />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
