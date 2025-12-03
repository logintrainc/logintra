import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanLine, ShieldCheck, Zap, ArrowUpRight, BrainCircuit, Activity, Smartphone, Check, AlertCircle, Search, X } from 'lucide-react';
import DisplayCards from './DisplayCards';

const BentoGrid: React.FC = () => {

  const [barHeights, setBarHeights] = useState([40, 60, 30, 70, 50, 80, 45]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const historyCardRef = useRef<HTMLDivElement>(null);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');

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

  // Handle scan button click
  const handleScan = () => {
    setScanState('scanning');
    setTimeout(() => {
      setScanState('complete');
    }, 2000);
  };

  // Reset scan
  const resetScan = () => {
    setScanState('idle');
  };

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
          className="hidden md:flex justify-center mb-[12rem] ml-[15rem]"
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
          className="md:col-span-8 row-span-2 relative h-[61rem] md:h-[650px] rounded-[2.5rem] overflow-hidden group bg-white shadow-2xl shadow-brand-primary/5 border border-brand-subtle"
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

            {/* Phone Mockup with Interactive Content */}
            <div className="relative w-[260px] h-[520px] bg-gray-800 rounded-[2.5rem] p-2 border-4 border-gray-700 shadow-2xl rotate-[-2deg] md:translate-y-0 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out transform-gpu">
              <div className="h-full w-full rounded-[2rem] overflow-hidden bg-white flex flex-col relative">

                {/* Status Bar */}
                <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-medium text-brand-primary">
                  <span className="font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2.5 border border-brand-primary rounded-sm relative">
                      <div className="absolute inset-0.5 bg-brand-accent rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                  {scanState === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col items-center justify-center p-3 space-y-3 relative"
                    >
                      {/* Animated Icon with Pulse */}
                      <motion.div
                        className="w-20 h-20 rounded-2xl bg-brand-primary flex items-center justify-center shadow-xl relative"
                        animate={{
                          boxShadow: [
                            '0 10px 40px rgba(28, 181, 224, 0.3)',
                            '0 10px 60px rgba(28, 181, 224, 0.6)',
                            '0 10px 40px rgba(28, 181, 224, 0.3)',
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ScanLine className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Pulsing Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-brand-accent"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>

                      {/* Title */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-brand-primary mb-1">MediScan AI</h3>
                        <p className="text-xs text-brand-primary/60 font-medium">Point & Identify</p>
                      </div>

                      {/* Status Card */}
                      <motion.div
                        className="bg-white p-3 rounded-xl shadow-lg border border-brand-subtle/50 flex items-center gap-2 w-full max-w-[180px]"
                        whileHover={{ scale: 1.02, borderColor: '#1CB5E0' }}
                        transition={{ duration: 0.2 }}
                        animate={{
                          borderColor: ['#E2E8F0', '#1CB5E0', '#E2E8F0']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ShieldCheck className="w-4 h-4 text-green-500" />
                        </motion.div>
                        <div className="flex-1">
                          <span className="text-[10px] font-bold text-brand-primary block">Ready to Scan</span>
                          <span className="text-[9px] text-brand-accent font-medium">Tap below to start</span>
                        </div>
                      </motion.div>

                      {/* Floating Particles */}
                      <motion.div
                        className="absolute top-16 left-6 w-1.5 h-1.5 rounded-full bg-brand-accent"
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute bottom-24 right-6 w-2 h-2 rounded-full bg-brand-primary"
                        animate={{
                          y: [0, 15, 0],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                  )}

                  {scanState === 'scanning' && (
                    <motion.div
                      key="scanning"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="flex-1 flex flex-col items-center justify-center p-3 space-y-3 relative"
                    >
                      {/* Camera View Simulation */}
                      <div className="relative w-full h-48 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl border-2 border-dashed border-brand-accent/50 overflow-hidden">
                        {/* Scanning Line Animation */}
                        <motion.div
                          className="absolute left-0 right-0 h-0.5 bg-brand-accent shadow-lg shadow-brand-accent/50"
                          animate={{
                            top: ['0%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        {/* Corner Brackets */}
                        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-brand-accent"></div>
                        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-brand-accent"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-brand-accent"></div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-brand-accent"></div>

                        {/* Medicine Bottle Silhouette */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-16 h-24 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-lg"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </div>
                      </div>

                      {/* Scanning Status */}
                      <div className="w-full space-y-3">
                        <div className="text-center">
                          <motion.h3
                            className="text-lg font-bold text-brand-primary mb-1"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            Scanning Medicine...
                          </motion.h3>
                          <p className="text-[10px] text-brand-primary/60 font-medium">Analyzing package information</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-brand-bg rounded-full overflow-hidden h-2">
                          <motion.div
                            className="h-full bg-gradient-to-r from-brand-primary to-brand-accent"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut"
                            }}
                          />
                        </div>

                        {/* Scanning Steps */}
                        <div className="space-y-2">
                          <motion.div
                            className="flex items-center gap-2 text-[10px]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Check className="w-3 h-3 text-brand-accent" />
                            <span className="text-brand-primary/70">Capturing image...</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-2 text-[10px]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <Check className="w-3 h-3 text-brand-accent" />
                            <span className="text-brand-primary/70">Analyzing text...</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-2 text-[10px]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Activity className="w-3 h-3 text-brand-accent" />
                            </motion.div>
                            <span className="text-brand-primary/70">Identifying medicine...</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {scanState === 'complete' && (
                    <motion.div
                      key="complete"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1 flex flex-col p-3 space-y-2 overflow-y-auto"
                    >
                      {/* Success Header */}
                      <motion.div
                        className="text-center py-2"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                      >
                        <motion.div
                          className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-500 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                        >
                          <Check className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-bold text-brand-primary">Scan Complete!</h3>
                        <p className="text-[10px] text-brand-primary/60 font-medium">Medicine identified successfully</p>
                      </motion.div>

                      {/* Medicine Details Card */}
                      <motion.div
                        className="bg-brand-primary p-3 rounded-xl text-white space-y-1"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-[10px] opacity-80">Medication Name</p>
                            <h4 className="text-lg font-bold">Amoxicillin</h4>
                          </div>
                          <div className="bg-white/20 px-2 py-1 rounded-lg text-[9px] font-bold">
                            500mg
                          </div>
                        </div>
                        <div className="text-[10px] opacity-90">
                          <p className="font-medium">Generic antibiotic</p>
                        </div>
                      </motion.div>

                      {/* Details Grid */}
                      <div className="space-y-1.5">
                        <motion.div
                          className="bg-white border border-brand-subtle rounded-lg p-2.5"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
                              <Activity className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-primary">Dosage</span>
                          </div>
                          <p className="text-[10px] text-brand-primary/70 ml-8">Take 1 capsule every 8 hours</p>
                        </motion.div>

                        <motion.div
                          className="bg-white border border-brand-subtle rounded-lg p-2.5"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center">
                              <ShieldCheck className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-primary">Safety</span>
                          </div>
                          <p className="text-[10px] text-green-600 ml-8 font-medium">No conflicts detected</p>
                        </motion.div>

                        <motion.div
                          className="bg-white border border-brand-subtle rounded-lg p-2.5"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center">
                              <AlertCircle className="w-3 h-3 text-amber-600" />
                            </div>
                            <span className="text-[10px] font-bold text-brand-primary">Notes</span>
                          </div>
                          <p className="text-[10px] text-brand-primary/70 ml-8">Take with food to avoid stomach upset</p>
                        </motion.div>
                      </div>

                      {/* Action Button */}
                      <motion.button
                        onClick={resetScan}
                        className="w-full bg-white border-2 border-brand-primary text-brand-primary font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <ScanLine className="w-4 h-4" />
                        Scan Another
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Action - Only show in idle state */}
                {scanState === 'idle' && (
                  <div className="px-4 pb-4">
                    <motion.button
                      onClick={handleScan}
                      className="w-full bg-brand-primary text-white font-bold py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm hover:bg-brand-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Scan Medicine</span>
                    </motion.button>
                  </div>
                )}
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
          className="md:col-span-4 h-[29rem] bg-brand-gradient rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden text-white group hover:scale-[1.02] transition-transform shadow-xl shadow-brand-accent/20"
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
          className="md:col-span-4 md:row-span-2 h-[29rem] md:h-auto bg-brand-surface rounded-[2.5rem] p-8 relative overflow-hidden group border border-brand-subtle shadow-xl hover:shadow-2xl transition-all"
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