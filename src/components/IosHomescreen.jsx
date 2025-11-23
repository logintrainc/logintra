import React from 'react';
import {
    Heart,
    Cloud,
    BarChart3,
    Layers,
    Pill,
    MessageSquare,
    Briefcase,
    Compass,
    Phone,
    Globe,
    Settings
} from 'lucide-react';

const IosHomescreen = ({ setMainPhoneState }) => {

    // Icon data structure
    const icons = [
        { name: 'Photos', bg: 'bg-red-500', icon: <Heart size={18} fill="white" color="white" /> },
        { name: 'Weather', bg: 'bg-blue-400', icon: <Cloud size={18} fill="white" color="white" /> },
        { name: 'Stocks', bg: 'bg-green-500', icon: <BarChart3 size={18} fill="white" color="white" /> },
        { name: 'Notes', bg: 'bg-yellow-500', icon: <Layers size={18} fill="white" color="white" /> },
        { name: 'MediScan', bg: 'bg-blue-600', icon: <Pill size={18} fill="white" color="white" />, isMain: true },
        { name: 'Mail', bg: 'bg-blue-500', icon: <MessageSquare size={18} fill="white" color="white" /> },
        { name: 'Work', bg: 'bg-gray-600', icon: <Briefcase size={18} fill="white" color="white" /> },
        { name: 'Maps', bg: 'bg-green-700', icon: <Compass size={18} fill="white" color="white" /> },
    ];

    const dockIcons = [
        { name: 'Phone', bg: 'bg-green-500/0', icon: <Phone size={20} fill="white" color="white" /> },
        { name: 'Web', bg: 'bg-blue-500/0', icon: <Globe size={20} fill="white" color="white" /> },
        { name: 'Settings', bg: 'bg-gray-500/0', icon: <Settings size={20} fill="white" color="white" /> },
    ];

    return (
        <div className="h-full w-full bg-[url('https://placehold.co/400x800/222244/AAAAAA/png?text=Dark+iOS+Wallpaper')] bg-cover rounded-[2rem] relative flex flex-col p-4 pt-10 font-sans">

            {/* Status Bar */}
            <div className="absolute top-4 left-0 w-full px-6 flex justify-between text-white text-xs font-bold z-10">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-white rounded-[2px] relative"><div className="w-3 h-1 bg-white absolute top-0.5 left-0.5"></div></div>
                </div>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-4 gap-y-6 pt-6 flex-1 content-start">
                {icons.map((app, index) => (
                    <div key={index} className="flex flex-col items-center text-center relative">
                        {app.isMain && (
                            <div className="absolute -top-10 z-20 bg-yellow-400 text-black px-2 py-1 rounded-full text-[10px] font-black pointer-events-none transform rotate-3">
                                TAP HERE!
                            </div>
                        )}
                        <button
                            onClick={app.isMain ? () => setMainPhoneState('appOpen') : () => { }}
                            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-1 transition-all ${app.bg} ${app.isMain ? 'cursor-pointer border-2 border-white animate-pulse-border' : 'cursor-default'}`}
                        >
                            {app.icon}
                        </button>
                        <span className="text-white text-[10px] font-medium whitespace-nowrap">
                            {app.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Dock */}
            <div className="w-full h-20 bg-white/20 backdrop-blur-md rounded-3xl p-2 flex justify-around items-center">
                {dockIcons.map((app, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${app.bg} cursor-default`}>
                            {app.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Home Bar */}
            <div className="w-24 h-1 bg-white/70 rounded-full mx-auto mt-4"></div>
        </div>
    );
};

export default IosHomescreen;
