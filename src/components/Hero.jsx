import React, { useState } from 'react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';
import MediScanApp from './MediScanApp';
import IosHomescreen from './IosHomescreen';

// --- Custom CSS for iOS App Opening Animation ---
const CustomStyles = () => (
    <style>{`
        /* Keyframes for the App Opening Animation */
        @keyframes appOpenZoom {
            from {
                opacity: 0;
                transform: scale(0.2) translateY(500px); /* Start small, near the icon's position */
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        .app-open-transition {
            animation: appOpenZoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Keyframes for the pulsating glow on the icon */
        @keyframes pulseBorder {
            0%, 100% { border-color: rgba(255, 255, 255, 0.5); }
            50% { border-color: rgba(255, 255, 255, 1); }
        }
        .animate-pulse-border {
            animation: pulseBorder 1.5s infinite;
        }

        /* Keyframes for scanning line animation */
        @keyframes scanDown {
            0% { transform: translateY(0%); }
            100% { transform: translateY(400%); }
        }
        .animate-scan-down {
            animation: scanDown 1.5s linear infinite alternate;
        }


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

const Hero = () => {
    // Top-level state: 'homescreen' or 'appOpen'
    const [mainPhoneState, setMainPhoneState] = useState('homescreen');

    // Nested state for when MediScan is open
    const [appViewState, setAppViewState] = useState('home');

    const handleAppClose = () => {
        setMainPhoneState('homescreen');
        setAppViewState('home');
    };

    const content = {
        homescreen: {
            headline: <>Welcome to <br /> your <span className="italic font-black text-[#470047]">home.</span></>,
            subtext: "The Purb AI ecosystem starts here. Tap the MediScan icon to experience instant health identification.",
            tag: "iOS Experience Mockup"
        },
        appOpen: {
            // Dynamic content based on appViewState
            home: {
                headline: <>Identify <br /> meds in <span className="italic font-black text-[#0055FF]">seconds.</span></>,
                subtext: "Scan any medicine label or packaging. Get instant AI-powered details on usage, dosage, and safety.",
                tag: "MediScan AI 2.0"
            },
            scanning: {
                headline: <>Analyzing <br /> your <span className="italic font-black text-[#0055FF]">scan...</span></>,
                subtext: "Our advanced vision models are identifying the package. Hang tight.",
                tag: "AI Processing"
            },
            result: {
                headline: <>Know <br /> what you <span className="italic font-black text-[#0055FF]">take.</span></>,
                subtext: "Complete drug interactions, side effects, and safe dosage instructions at your fingertips.",
                tag: "Match Found"
            },
            history: {
                headline: <>Your <br /> health, <span className="italic font-black text-[#0055FF]">logged.</span></>,
                subtext: "Keep a secure history of every medication you've scanned or taken. Privacy first.",
                tag: "Secure History"
            },
            track: {
                headline: <>Never <br /> miss a <span className="italic font-black text-[#0055FF]">dose.</span></>,
                subtext: "Smart reminders and inventory tracking for the power user. Upgrade to Pro.",
                tag: "MediScan Pro"
            },
            settings: {
                headline: <>Your <br /> app, <span className="italic font-black text-[#0055FF]">your way.</span></>,
                subtext: "Customize notifications, manage data privacy, and configure your AI preferences.",
                tag: "Preferences"
            }
        }
    };

    const currentContent = mainPhoneState === 'homescreen'
        ? content.homescreen
        : content.appOpen[appViewState] || content.appOpen.home; // Fallback to app home

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-100">
            <CustomStyles />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="text-center lg:text-left space-y-8">
                    <FadeIn delay={100}>
                        {/* Quirky Tag */}
                        <div key={mainPhoneState + appViewState + 'tag'} className="inline-block px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full mb-6 rotate-2 animate-in fade-in zoom-in duration-300">
                            {currentContent.tag}
                        </div>

                        {/* Editorial Serif Headline */}
                        <h1 key={mainPhoneState + appViewState + 'head'} className="text-6xl md:text-8xl font-serif font-medium text-black leading-[0.9] tracking-tight min-h-[160px] animate-in slide-in-from-bottom-4 fade-in duration-500">
                            {currentContent.headline}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <p key={mainPhoneState + appViewState + 'sub'} className="text-xl md:text-2xl text-gray-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mt-6 min-h-[96px] animate-in slide-in-from-bottom-2 fade-in duration-500">
                            {currentContent.subtext}
                        </p>
                    </FadeIn>

                    <FadeIn delay={500}>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                            <Button variant="primary" className="w-full sm:w-auto text-lg">
                                Download MediScan
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Hero Visual - PHONE MOCKUP */}
                <FadeIn delay={600}>
                    <div className="relative mx-auto lg:ml-auto w-full max-w-sm aspect-[9/19] bg-white rounded-[3rem] p-3 transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-gray-900 shadow-2xl">

                        {/* PHONE SCREEN CONTAINER */}
                        <div className={`h-full w-full rounded-[2rem] overflow-hidden relative flex flex-col font-sans transition-all duration-300`}>

                            {mainPhoneState === 'homescreen' ? (
                                <IosHomescreen setMainPhoneState={setMainPhoneState} />
                            ) : (
                                <div className="app-open-transition h-full w-full">
                                    <MediScanApp
                                        appViewState={appViewState}
                                        setAppViewState={setAppViewState}
                                        handleAppClose={handleAppClose}
                                    />
                                </div>
                            )}

                            {/* Home Indicator Bar (Always visible on iPhone style) */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/50 rounded-full z-30"></div>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
