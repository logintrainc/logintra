import React, { useState } from 'react';
import { Pill, Menu } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Tracker', href: '#tracker' },
  { label: 'Reviews', href: '#reviews' },
];

const Navigation: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
      <div className="glass-panel rounded-full px-2 py-2 flex items-center justify-between min-w-[320px] md:min-w-[500px] shadow-xl shadow-brand-primary/5">

        <div className="flex items-center gap-2 pl-4">
          <div className="relative">
            <a
              href="/"
              className="group inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="flex items-center px-3 py-1.5 rounded-full bg-white border border-brand-subtle shadow-sm hover:scale-105 hover:border-[#5e17eb]/30 transition-all h-8 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary group-hover:-translate-x-0.5 transition-transform flex-shrink-0"><path d="m15 18-6-6 6-6" /></svg>
                <span className="font-semibold text-sm text-gray-700 flex items-center relative">
                  Purb<span className="text-[#5e17eb] text-3xl absolute -top-1 -right-2" style={{ lineHeight: '0.58' }}>.</span>
                </span>
              </div>
            </a>

            {/* Figma-style Tooltip */}
            {showTooltip && (
              <div className="absolute left-[2rem] top-[calc(100%+8px)] px-3 py-1.5 bg-white border-2 border-[#5e17eb] text-gray-800 text-xs font-medium rounded-lg shadow-lg whitespace-nowrap z-[100] pointer-events-none">
                Back to Purb.
              </div>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-md ml-2">
            <Pill size={16} fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-brand-primary">MediScan</span>
        </div>

        <div className="hidden md:flex items-center gap-8 px-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-primary/60 hover:text-brand-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">
          Get App
        </button>
      </div>
    </nav>
  );
};

export default Navigation;