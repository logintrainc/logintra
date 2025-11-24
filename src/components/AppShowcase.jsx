import React from 'react';

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
            title: "FocusFlow",
            desc: "Get stuff done. Look good doing it.",
            bg: "bg-gray-100" // Light Grey
        },
        {
            title: "ZenNote",
            desc: "Write it down. Forget about it.",
            bg: "bg-gray-200" // Mid Grey
        },
        {
            title: "PulseHealth",
            desc: "Health is wealth. Track it.",
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
                    {apps.map((app, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`${app.bg} border-2 border-black rounded-[2.5rem] p-8 aspect-[4/5] relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#5e17eb] hover:border-[#5e17eb] mb-6`}>
                                {/* Decorative circle */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-xl group-hover:bg-[#5e17eb]/10 transition-colors"></div>

                                <div className="h-full flex flex-col justify-end relative z-10">
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
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-black text-black group-hover:text-[#5e17eb] transition-colors">{app.title}</h3>
                                <p className="text-sm font-bold text-gray-500 mt-2">{app.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
