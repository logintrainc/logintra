import React, { useState, useEffect } from 'react';
import {
    ScanLine,
    Camera,
    ChevronRight,
    Clock,
    Pill,
    Shield,
    History,
    Search,
    CheckCircle2,
    Settings,
    X
} from 'lucide-react';

const MediScanApp = ({ appViewState, setAppViewState, handleAppClose }) => {
    // Handle Scan Simulation
    useEffect(() => {
        let timer;
        if (appViewState === 'scanning') {
            timer = setTimeout(() => {
                setAppViewState('result');
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [appViewState, setAppViewState]);

    // VIEW: HOME (The primary scan screen)
    const renderHomeView = () => (
        <div className="flex-1 flex flex-col px-6 animate-in fade-in zoom-in duration-300">
            <div className="flex-1 flex flex-col items-center justify-center -mt-10">
                {/* Scanning Visual */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-b from-[#0055FF] to-[#00C2FF] flex items-center justify-center shadow-lg shadow-blue-200 mb-8 relative group cursor-pointer hover:scale-105 transition-transform" onClick={() => setAppViewState('scanning')}>
                    <ScanLine size={64} className="text-white absolute opacity-90" />
                    <div className="absolute inset-2 border-2 border-dashed border-white/30 rounded-full animate-spin-slow"></div>
                </div>

                <h3 className="text-xl font-bold text-center text-[#0B1C33] mb-3">Instant Medicine Info</h3>
                <p className="text-center text-gray-500 text-sm leading-relaxed max-w-[260px]">
                    Scan any medicine label or packaging to instantly identify it and get detailed information.
                </p>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
                <button
                    onClick={() => setAppViewState('scanning')}
                    className="w-full bg-gradient-to-r from-[#001F52] to-[#0055FF] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
                >
                    <Camera size={22} />
                    Start Scanning
                </button>
            </div>
        </div>
    );

    // VIEW: SCANNING (Animation)
    const renderScanningView = () => (
        <div className="flex-1 bg-black/90 flex flex-col items-center justify-center relative animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
            <div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative z-10 flex flex-col justify-between p-4">
                {/* Scanning line animation - uses custom CSS keyframes */}
                <div className="w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] animate-scan-down"></div>
            </div>
            <p className="text-white font-medium mt-8 animate-pulse">Analyzing package...</p>
        </div>
    );

    // VIEW: RESULT
    const renderResultView = () => (
        <div className="flex-1 flex flex-col bg-white animate-in slide-in-from-bottom-10 duration-500">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative flex items-end p-6">
                <button onClick={() => setAppViewState('home')} className="absolute top-4 left-4 p-2 bg-white/20 rounded-full text-white backdrop-blur-md">
                    <ChevronRight className="rotate-180" size={20} />
                </button>
                <div className="text-white">
                    <div className="inline-block px-2 py-0.5 bg-green-400/20 text-green-100 text-[10px] font-bold uppercase tracking-wider rounded-md mb-2 border border-green-400/30">Match Found</div>
                    <h2 className="text-3xl font-bold">Tylenol</h2>
                    <p className="opacity-80 text-sm">Acetaminophen 500mg</p>
                </div>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                        <Clock size={20} className="mx-auto text-blue-600 mb-1" />
                        <div className="text-[10px] text-gray-400 uppercase">Frequency</div>
                        <div className="font-bold text-sm text-gray-800">4-6 Hrs</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                        <Pill size={20} className="mx-auto text-blue-600 mb-1" />
                        <div className="text-[10px] text-gray-400 uppercase">Dosage</div>
                        <div className="font-bold text-sm text-gray-800">2 Pills</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                        <Shield size={20} className="mx-auto text-blue-600 mb-1" />
                        <div className="text-[10px] text-gray-400 uppercase">Safety</div>
                        <div className="font-bold text-sm text-gray-800">High</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">Description</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Pain reliever and fever reducer. Used to treat minor aches and pains due to headache, muscular aches, backache, and common cold.
                    </p>
                </div>

                <button onClick={() => setAppViewState('home')} className="w-full py-4 bg-gray-100 font-bold text-gray-900 rounded-xl hover:bg-gray-200 transition-colors">
                    Done
                </button>
            </div>
        </div>
    );

    // VIEW: HISTORY
    const renderHistoryView = () => (
        <div className="flex-1 px-6 pt-2 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#0B1C33]">Recent Scans</h3>
                <Search size={20} className="text-gray-400" />
            </div>
            <div className="space-y-3">
                {[
                    { name: "Ibuprofen", date: "Today, 9:41 AM", type: "Pain Relief" },
                    { name: "Amoxicillin", date: "Yesterday", type: "Antibiotic" },
                    { name: "Loratadine", date: "Mon, Oct 24", type: "Allergy" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:scale-[1.02] transition-transform cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <Pill size={18} />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.type}</div>
                        </div>
                        <div className="text-[10px] font-bold text-gray-400">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    // VIEW: TRACK (PRO)
    const renderTrackView = () => (
        <div className="flex-1 px-6 pt-2 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-[#001F52] text-white p-6 rounded-3xl mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">Upgrade to Pro</h3>
                        <div className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold uppercase">Premium</div>
                    </div>
                    <p className="text-blue-100 text-sm mb-6">Unlock unlimited tracking, refill reminders, and family profiles.</p>
                    <button className="w-full py-3 bg-white text-[#001F52] font-bold rounded-xl text-sm">Start Free Trial</button>
                </div>
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Daily Tracker</h3>
            <div className="p-4 bg-white border-l-4 border-green-500 rounded-r-xl shadow-sm mb-3">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-bold text-gray-900 text-sm">Morning Meds</div>
                        <div className="text-xs text-gray-400">8:00 AM • Taken</div>
                    </div>
                    <CheckCircle2 size={20} className="text-green-500" />
                </div>
            </div>
        </div>
    );

    // VIEW: SETTINGS
    const renderSettingsView = () => (
        <div className="flex-1 px-6 pt-2 animate-in fade-in slide-in-from-right-4 duration-300 bg-gray-50">
            <h3 className="text-xl font-bold text-[#0B1C33] mb-6">Settings</h3>
            <div className="space-y-6">
                {[
                    { header: "Account", items: ["Profile", "Subscription"] },
                    { header: "Preferences", items: ["Notifications", "Data Privacy"] },
                ].map((section, i) => (
                    <div key={i}>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{section.header}</div>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            {section.items.map((item, idx) => (
                                <div key={idx} className={`p-4 flex justify-between items-center ${idx !== section.items.length - 1 ? 'border-b border-gray-50' : ''} cursor-pointer hover:bg-gray-50`}>
                                    <span className="text-sm font-medium text-gray-700">{item}</span>
                                    <ChevronRight size={16} className="text-gray-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContent = () => {
        switch (appViewState) {
            case 'scanning': return renderScanningView();
            case 'result': return renderResultView();
            case 'history': return renderHistoryView();
            case 'track': return renderTrackView();
            case 'settings': return renderSettingsView();
            default: return renderHomeView(); // Includes 'home'
        }
    };

    const renderHeader = () => {
        if (appViewState === 'scanning' || appViewState === 'result') return null;

        return (
            <div className="px-6 py-4 flex justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold text-[#0B1C33] tracking-tight">MediScan</h2>
                    <p className="text-xs text-gray-500 font-medium mt-1">AI-Powered Medicine Identifier</p>
                </div>
                <button onClick={handleAppClose} className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    <X size={20} />
                </button>
            </div>
        );
    };

    const renderFooter = () => (
        <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-2 relative z-20">
            {[
                { id: 'home', icon: Camera, label: 'Scan' },
                { id: 'history', icon: History, label: 'History' },
                { id: 'track', icon: Pill, label: 'Track', badge: 'PRO' },
                { id: 'settings', icon: Settings, label: 'Settings' }
            ].map((tab) => {
                // Determine active state for the footer tabs
                const isActive =
                    (tab.id === 'home' && (appViewState === 'home' || appViewState === 'scanning' || appViewState === 'result')) ||
                    appViewState === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setAppViewState(tab.id === 'home' ? 'home' : tab.id)}
                        className="flex flex-col items-center gap-1 p-2 w-16 relative group"
                    >
                        {tab.badge && (
                            <span className="absolute -top-1 right-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                {tab.badge}
                            </span>
                        )}
                        <tab.icon
                            size={22}
                            className={`transition-all duration-300 ${isActive ? 'text-[#0055FF] scale-110' : 'text-gray-400 group-hover:text-gray-600'}`}
                            strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-[#0055FF]' : 'text-gray-400'}`}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );


    return (
        <div className="h-full w-full bg-[#F0F4F8] rounded-[2rem] overflow-hidden relative flex flex-col font-sans">
            {/* Phone Status Bar (App Open) */}
            <div className="h-10 w-full flex justify-between items-center px-6 pt-3 shrink-0 z-20">
                <span className="text-xs font-bold text-black">9:41</span>
                <div className="flex gap-1.5 items-center">
                    <div className="w-4 h-3 bg-black rounded-sm opacity-20"></div>
                </div>
            </div>

            {renderHeader()}

            {/* --- APP CONTENT CONTAINER --- */}
            <div className="flex-1 relative flex flex-col overflow-hidden">
                {renderContent()}
            </div>

            {renderFooter()}

        </div>
    );
}

export default MediScanApp;
