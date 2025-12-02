import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanLine, ShieldCheck, Zap, ArrowUpRight, BrainCircuit, Activity, Smartphone, Check, AlertCircle, Search, X } from 'lucide-react';
import DisplayCards from './DisplayCards';

const BentoGrid: React.FC = () => {

  const [barHeights, setBarHeights] = useState([40, 60, 30, 70, 50, 80, 45]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const historyCardRef = useRef<HTMLDivElement>(null);

  // Generate random heights for the bars
  const generateRandomHeights = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * (85 - 30 + 1)) + 30);
  };

  // Intersection Observer to detect when card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isHistoryVisible) {
          setIsHistoryVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (historyCardRef.current) {
      observer.observe(historyCardRef.current);
    }

    return () => {
      if (historyCardRef.current) {
        observer.unobserve(historyCardRef.current);
      }
    };
  }, [isHistoryVisible]);

  // Animate bar heights randomly when visible
  useEffect(() => {
    if (!isHistoryVisible) return;

    const interval = setInterval(() => {
      setBarHeights(generateRandomHeights());
    }, 2000);

    return () => clearInterval(interval);
  }, [isHistoryVisible]);

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

      {/* Header Text with Notification Cards */}
      <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight text-brand-primary">
            VISUAL <br />
            <span className="text-transparent bg-clip-text bg-brand-gradient">CLARITY</span> FOR <br />
            YOUR MEDS.
          </h1>
        </motion.div>

        {/* Notification Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex justify-center mb-[10rem] ml-[15rem]"
        >
          <DisplayCards />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4 md:gap-6">

        {/* Card 1: Main Feature (Interactive Phone) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-8 row-span-2 relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden group bg-white shadow-2xl shadow-brand-primary/5 border border-brand-subtle"
        >
          <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
            <div className="max-w-xs space-y-6 z-20">
              <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-subtle flex items-center justify-center shadow-sm">
                <ScanLine className="text-brand-accent w-7 h-7" />
              </div>
              <h2 className="text-4xl font-display font-bold text-brand-primary">Instant AI Recognition</h2>
              <p className="text-brand-primary/60 leading-relaxed font-medium">
                Point your camera at any package. Our neural engine identifies generic names, dosages, and interactions in
                <span className="text-brand-accent font-bold"> 0.2 seconds</span>.
              </p>

              <div className="flex gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 20}/100`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-brand-primary flex flex-col justify-center">
                  <span>Trusted by 50k+</span>
                  <span className="text-brand-accent text-xs">Healthcare Pros</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup with Static Content */}
            <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] p-4 border-8 border-gray-900 shadow-2xl rotate-[-2deg] md:translate-y-0 group-hover:rotate-0 transition-all duration-700 ease-out transform-gpu">
              <div className="h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-50 to-white flex flex-col">
                {/* Simple MediScan Preview */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#000046] to-[#1CB5E0] flex items-center justify-center shadow-xl">
                    <ScanLine className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">MediScan AI</h3>
                    <p className="text-sm text-gray-600">Point & Identify</p>
                  </div>
                  <div className="w-full max-w-[200px] space-y-3">
                    <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                      <div className="h-2 w-full bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-full"></div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-medium text-gray-700">Safe to use</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        </motion.div>

        {/* Card 2: Stats / Speed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-4 h-[300px] bg-brand-gradient rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden text-white group hover:scale-[1.02] transition-transform shadow-xl shadow-brand-accent/20"
        >
          <div className="flex justify-between items-start text-white/90">
            <Zap size={32} />
            <ArrowUpRight size={32} />
          </div>
          <div className="relative z-10">
            <h3 className="text-6xl font-bold tracking-tighter">99.8%</h3>
            <p className="font-medium text-lg mt-2 opacity-80">Accuracy Rate</p>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white/10 rounded-full"></div>
        </motion.div>

        {/* Card 3: Safety / Warnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-4 md:row-span-2 h-[300px] md:h-auto bg-brand-surface rounded-[2.5rem] p-8 relative overflow-hidden group border border-brand-subtle shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-red-500 w-8 h-8" />
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-brand-primary">Conflict<br />Detector</h3>
              <p className="text-brand-primary/60 text-sm mb-6 leading-relaxed">MediScan references your profile against new scans to instantly warn of dangerous interactions.</p>

              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-red-800 uppercase tracking-wider">Warning</span>
                    <span className="text-xs text-red-600 font-medium">Ibuprofen + Warfarin</span>
                  </div>
                </div>
                <div className="bg-brand-bg p-4 rounded-2xl border border-brand-subtle flex items-center gap-3 opacity-60">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-xs text-brand-primary font-medium">No conflict found</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Dosage History */}
        <motion.div
          ref={historyCardRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="md:col-span-4 h-[280px] bg-brand-primary rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl text-white"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-bold uppercase tracking-widest text-white/50">History</span>
            <Activity className="text-brand-accent" />
          </div>
          {/* Animated Chart */}
          <div className="flex items-end justify-between gap-3 h-32 px-1">
            {barHeights.map((h, i) => (
              <div key={i} className="w-full bg-white/10 rounded-full relative overflow-hidden group-hover:bg-white/20 transition-colors h-full">
                <motion.div
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: isHistoryVisible ? i * 0.1 : 0
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-brand-accent w-full rounded-full"
                  style={{ height: '0%' }}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between text-xs text-white/40 font-mono font-medium">
            <span>MON</span>
            <span>SUN</span>
          </div>
        </motion.div>

        {/* Card 5: AI Brain */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:col-span-4 h-[280px] bg-white rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group border border-brand-subtle shadow-xl hover:shadow-2xl transition-all"
        >
          <BrainCircuit size={48} className="mb-6 text-brand-primary" />
          <h3 className="text-4xl font-display font-bold text-brand-primary">Deep<br />Learning</h3>
          <p className="mt-3 text-sm font-medium text-brand-primary/50">Custom models trained on 50M+ pharmaceutical data points.</p>
          <div className="absolute top-6 right-6 p-2 bg-brand-bg rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={24} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;