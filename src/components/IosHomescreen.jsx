import React, { useState, useEffect } from 'react';
import { Pill, Phone, Globe, Settings } from 'lucide-react';

const CountdownWidget = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set release date to 14 days from now for demo purposes
        const releaseDate = new Date();
        releaseDate.setDate(releaseDate.getDate() + 14);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = releaseDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-white/20 backdrop-blur-md rounded-3xl p-4 text-white mb-8 border border-white/10 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Release In</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">BETA</span>
            </div>
            <div className="flex justify-between text-center">
                {[
                    { val: timeLeft.days, label: 'DAYS' },
                    { val: timeLeft.hours, label: 'HRS' },
                    { val: timeLeft.minutes, label: 'MIN' },
                    { val: timeLeft.seconds, label: 'SEC' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-2xl font-black font-mono leading-none">{String(item.val).padStart(2, '0')}</span>
                        <span className="text-[8px] font-bold opacity-60 mt-1">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

import phoneBackground from '../assets/phonebackground.jpg';

const IosHomescreen = ({ setMainPhoneState }) => {
    const mediScanApp = { name: 'MediScan', bg: 'bg-blue-600', icon: <Pill size={24} fill="white" color="white" />, isMain: true };

    const dockIcons = [
        { name: 'Phone', bg: 'bg-green-500/0', icon: <Phone size={24} fill="white" color="white" /> },
        { name: 'Web', bg: 'bg-blue-500/0', icon: <Globe size={24} fill="white" color="white" /> },
        { name: 'Settings', bg: 'bg-gray-500/0', icon: <Settings size={24} fill="white" color="white" /> },
    ];

    return (
        <div
            className="h-full w-full bg-cover bg-center rounded-[2rem] relative flex flex-col p-6 pt-12 font-sans"
            style={{ backgroundImage: `url(${phoneBackground})` }}
        >

            {/* Status Bar */}
            <div className="absolute top-4 left-0 w-full px-6 flex justify-between text-white text-xs font-bold z-10">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-white rounded-[2px] relative"><div className="w-3 h-1 bg-white absolute top-0.5 left-0.5"></div></div>
                </div>
            </div>

            {/* Widgets & App Area */}
            <div className="flex-1 flex flex-col items-center pt-4">
                <CountdownWidget />

                {/* Centered MediScan App */}
                <div className="flex flex-col items-center text-center relative mt-8">
                    <div className="absolute -top-12 mt-[35px] z-20 bg-yellow-400 text-black px-3 py-1.5 rounded-full text-[10px] font-black pointer-events-none transform rotate-3 shadow-lg animate-bounce">
                        TAP HERE!
                    </div>
                    <button
                        onClick={() => setMainPhoneState('appOpen')}
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-2 transition-all ${mediScanApp.bg} cursor-pointer border-2 border-white animate-pulse-border shadow-2xl hover:scale-105 active:scale-95`}
                    >
                        {mediScanApp.icon}
                    </button>
                    <span className="text-white text-xs font-medium whitespace-nowrap drop-shadow-md">
                        {mediScanApp.name}
                    </span>
                </div>
            </div>

            {/* Dock */}
            <div className="w-full h-24 bg-white/20 backdrop-blur-xl rounded-[2rem] p-4 flex justify-around items-center mb-2 border border-white/10">
                {dockIcons.map((app, index) => (
                    <div key={index} className="flex flex-col items-center text-center opacity-80 hover:opacity-100 transition-opacity">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${app.bg} cursor-default`}>
                            {app.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Home Bar */}
            <div className="w-32 h-1.5 bg-white/70 rounded-full mx-auto mb-2"></div>
        </div>
    );
};

export default IosHomescreen;
