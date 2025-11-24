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
    X,
    Globe,
    Download,
    Share2,
    Trash2,
    RefreshCw,
    Plus
} from 'lucide-react';

import medicinesImage from '../assets/medicines.jpg';

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
        <div className="flex-1 bg-black flex flex-col items-center justify-center relative animate-in fade-in duration-300 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${medicinesImage})` }}
            ></div>

            {/* Camera UI Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                {/* Top Bar */}
                <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent"></div>

                {/* Viewfinder Area */}
                <div className="relative w-64 h-64">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>

                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-scan-down opacity-80"></div>

                    {/* Center Focus Reticle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-4 h-4 border border-white rounded-full"></div>
                    </div>
                </div>

                {/* Bottom Bar & Text */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end pb-8">
                    <p className="text-white font-bold text-sm tracking-wide mb-2 animate-pulse">Align medicine within frame</p>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-0"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            </div>
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
        <div className="flex-1 px-6 pt-6 bg-[#F5F7FA] animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold text-[#0B1C33]">History</h2>
                    <div className="bg-[#1A1A1A] text-[#FFD700] text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="text-[#FFD700]">✦</span> PRO
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-700">
                        <Globe size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-red-500">
                        <X size={20} />
                    </button>
                </div>
            </div>
            <p className="text-gray-400 font-medium mb-6">12 scans</p>

            {/* Detailed Card */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
                {/* Card Header */}
                <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl shrink-0 overflow-hidden">
                        <img src="https://placehold.co/100x100/png?text=Mag4" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900 truncate pr-2">New Life Mag4 Day &...</h3>
                            <div className="flex gap-2 shrink-0">
                                <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                    <ChevronRight className="rotate-90" size={16} />
                                </button>
                                <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-lg leading-none">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-1 rounded-md">Dietary Supplement</span>
                            <button className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                                <X size={16} />
                            </button>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-2 font-medium">
                            <Clock size={12} />
                            <span>Nov 3</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 w-full mb-4"></div>

                {/* Details Content */}
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Generic Name</h4>
                        <p className="text-sm text-gray-700 font-medium">Magnesium (various forms) with Vitamin B6</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Active Ingredients</h4>
                        <ul className="text-sm text-gray-700 font-medium space-y-1 list-disc list-inside marker:text-gray-400">
                            <li>Magnesium Malate</li>
                            <li>Magnesium Citrate</li>
                            <li>Magnesium Taurate</li>
                            <li>Magnesium Bisglycinate</li>
                            <li>Vitamin B6</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Purpose</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Dietary supplement providing magnesium and Vitamin B6 support throughout the day and night.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Usage Instructions</h4>
                        <p className="text-sm text-gray-700">Take 1 tablet for day and 1 tablet for night.</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Recommended Dosage</h4>
                        <p className="text-sm text-gray-700">1 tablet for day, 1 tablet for night</p>
                    </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-[#001F52] to-[#00C2FF] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95 transition-transform">
                    <span className="text-lg leading-none">+</span> Add to Track
                </button>
            </div>
        </div>
    );

    // VIEW: TRACK (PRO)
    const renderTrackView = () => (
        <div className="flex-1 px-6 pt-6 bg-[#F5F7FA] animate-in fade-in slide-in-from-right-4 duration-300 relative overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-1">
                <h2 className="text-3xl font-bold text-[#0B1C33]">Track Medicines</h2>
                <div className="flex gap-2">
                    <button className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-teal-500">
                        <Download size={18} />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-teal-500">
                        <Share2 size={18} />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-[#0B1C33]">
                        <Globe size={18} />
                    </button>
                </div>
            </div>
            <p className="text-gray-400 font-medium mb-6">Daily medicine reminders</p>

            {/* Medicine Card */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                            <Pill size={24} className="-rotate-45" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Test Medicine</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-gray-400 font-medium">2</span>
                                <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-md">2x per day</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-red-400 hover:text-red-500">
                        <Trash2 size={20} />
                    </button>
                </div>

                {/* Sync Row */}
                <div className="flex items-center justify-between py-4 border-t border-b border-gray-50 mb-4">
                    <div className="flex items-center gap-2">
                        <RefreshCw size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600 font-medium">Sync with Health</span>
                        <span className="bg-gray-100 text-gray-400 text-[9px] font-bold px-1.5 py-0.5 rounded">SOON</span>
                    </div>
                    <div className="w-10 h-6 bg-gray-100 rounded-full relative cursor-pointer">
                        <div className="w-5 h-5 bg-white rounded-full shadow-sm absolute top-0.5 left-0.5"></div>
                    </div>
                </div>

                {/* Notification Times */}
                <h4 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">Notification Times</h4>
                <div className="space-y-3">
                    {/* Active Time */}
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                        <div className="flex items-center gap-2 text-teal-600 font-bold">
                            <Clock size={18} />
                            <span>11:20 AM</span>
                        </div>
                        <div className="w-6 h-6 bg-teal-500 rounded-md shadow-sm"></div>
                    </div>

                    {/* Inactive Time */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-500 font-bold">
                            <Clock size={18} />
                            <span>4:40 PM</span>
                        </div>
                        <div className="w-6 h-6 border-2 border-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="absolute bottom-6 right-6 w-14 h-14 bg-[#008B8B] text-white rounded-full shadow-lg shadow-teal-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                <Plus size={28} />
            </button>
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
        if (appViewState === 'scanning' || appViewState === 'result' || appViewState === 'history' || appViewState === 'track') return null;

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
