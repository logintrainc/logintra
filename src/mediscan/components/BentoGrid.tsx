import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanLine, ShieldCheck, Zap, ArrowUpRight, BrainCircuit, Activity, Smartphone, Check, AlertCircle, Search } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    if (isScanning || scanComplete) return;
    setIsScanning(true);
    // Simulate scan duration
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2500);
  };

  const resetScan = () => {
    setScanComplete(false);
    setIsScanning(false);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight text-brand-primary">
          VISUAL <br />
          <span className="text-transparent bg-clip-text bg-brand-gradient">CLARITY</span> FOR <br />
          YOUR MEDS.
        </h1>
      </motion.div>

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
                        {[1,2,3].map(i => (
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
                
                {/* Interactive Phone Mockup */}
                <div className="relative w-[300px] h-[600px] bg-brand-primary rounded-[3rem] border-8 border-brand-primary shadow-2xl rotate-[-2deg] md:translate-y-10 group-hover:rotate-0 transition-all duration-700 ease-out overflow-hidden transform-gpu">
                    {/* Screen Content */}
                    <div className="relative w-full h-full bg-gray-900 rounded-[2.3rem] overflow-hidden">
                        
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 z-30 flex justify-between px-6 pt-3 text-white text-[10px] font-medium">
                           <span>9:41</span>
                           <div className="flex gap-1">
                             <div className="w-4 h-3 bg-white rounded-sm"></div>
                           </div>
                        </div>

                        {/* Camera View (Simulated Image) */}
                        <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Medicine" className="absolute inset-0 w-full h-full object-cover" />
                        
                        {/* Overlay Elements */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                           
                           {/* Top UI */}
                           <div className="mt-8 flex justify-between items-start">
                              <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white" onClick={resetScan}>
                                <Smartphone size={18} />
                              </button>
                              <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                                AI Active
                              </div>
                           </div>

                           {/* Center Focus Area */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/30 rounded-3xl flex items-center justify-center">
                              {/* Corner Brackets */}
                              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-xl"></div>
                              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
                              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-xl"></div>
                              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-xl"></div>
                              
                              {/* Scanning Laser */}
                              {isScanning && (
                                <motion.div 
                                  className="absolute left-0 right-0 h-1 bg-brand-accent shadow-[0_0_15px_rgba(28,181,224,1)]"
                                  animate={{ top: ['10%', '90%', '10%'] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                              )}
                              
                              {!isScanning && !scanComplete && (
                                <div className="text-white/70 text-xs text-center">
                                  Tap button to scan
                                </div>
                              )}
                           </div>

                           {/* Bottom Action / Result */}
                           <div className="mb-8 w-full">
                             <AnimatePresence mode='wait'>
                               {!isScanning && !scanComplete && (
                                 <motion.button 
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   exit={{ y: 20, opacity: 0 }}
                                   onClick={handleScan}
                                   className="w-full bg-brand-accent text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-accent/30 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2"
                                 >
                                    <Search size={20} />
                                    Identify Medicine
                                 </motion.button>
                               )}

                               {isScanning && (
                                 <motion.div
                                   initial={{ y: 20, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   exit={{ y: 20, opacity: 0 }}
                                   className="w-full bg-white/90 backdrop-blur-xl p-4 rounded-2xl flex items-center gap-3 shadow-lg"
                                 >
                                   <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                                   <span className="text-brand-primary font-bold text-sm">Analyzing structure...</span>
                                 </motion.div>
                               )}

                               {scanComplete && (
                                 <motion.div 
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   className="w-full bg-white p-4 rounded-3xl shadow-2xl border border-brand-subtle"
                                 >
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <h3 className="font-bold text-lg text-brand-primary">Amoxicillin</h3>
                                        <p className="text-xs text-gray-400">Antibiotic • 500mg</p>
                                      </div>
                                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1">
                                        <Check size={10} /> Safe
                                      </div>
                                    </div>
                                    <div className="flex gap-2 mt-3">
                                      <button className="flex-1 bg-brand-primary text-white text-xs font-bold py-2 rounded-xl" onClick={resetScan}>Save</button>
                                      <button className="flex-1 bg-brand-bg text-brand-primary text-xs font-bold py-2 rounded-xl border border-brand-subtle">Details</button>
                                    </div>
                                 </motion.div>
                               )}
                             </AnimatePresence>
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
                    <h3 className="text-3xl font-display font-bold mb-4 text-brand-primary">Conflict<br/>Detector</h3>
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-4 h-[280px] bg-brand-primary rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl text-white"
        >
            <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold uppercase tracking-widest text-white/50">History</span>
                <Activity className="text-brand-accent" />
            </div>
            {/* Fake Chart */}
            <div className="flex items-end justify-between gap-3 h-32 px-1">
                {[40, 60, 30, 70, 50, 80, 45].map((h, i) => (
                    <div key={i} className="w-full bg-white/10 rounded-full relative overflow-hidden group-hover:bg-white/20 transition-colors h-full">
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                            className="absolute bottom-0 left-0 right-0 bg-brand-accent w-full rounded-full"
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
             <h3 className="text-4xl font-display font-bold text-brand-primary">Deep<br/>Learning</h3>
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