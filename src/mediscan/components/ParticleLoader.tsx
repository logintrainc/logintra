import React, { useEffect, useRef } from 'react';
import { Pill } from 'lucide-react';

interface ParticleLoaderProps {
  onComplete: () => void;
}

const ParticleLoader: React.FC<ParticleLoaderProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const particleCount = 450;
    // New Brand Colors
    const color1 = '#000046'; // Navy
    const color2 = '#1CB5E0'; // Cyan

    let ratio = window.innerHeight < 400 ? 0.6 : 1;
    
    interface Particle {
      color: string;
      radius: number;
      x: number;
      y: number;
      ring: number;
      move: number;
      random: number;
    }

    const state = {
      particles: [] as Particle[],
      r: 120, // Base radius
      counter: 0,
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.setTransform(ratio, 0, 0, -ratio, canvas.width / 2, canvas.height / 2);
    };
    setupCanvas();

    const createParticle = () => {
      state.particles.push({
        color: Math.random() > 0.5 ? color1 : color2,
        radius: Math.random() * 4,
        x: Math.cos(Math.random() * 7 + Math.PI) * state.r,
        y: Math.sin(Math.random() * 7 + Math.PI) * state.r,
        ring: Math.random() * state.r * 3,
        move: (Math.random() * 4 + 1) / 200, 
        random: Math.random() * 7,
      });
    };

    for (let i = 0; i < particleCount; i++) createParticle();

    const moveParticle = (p: Particle) => {
      p.ring = Math.max(p.ring - 1, state.r);
      p.random += p.move;
      p.x = Math.cos(p.random + Math.PI) * p.ring;
      p.y = Math.sin(p.random + Math.PI) * p.ring;
    };

    const resetParticle = (p: Particle) => {
      p.ring = Math.random() * state.r * 3;
      p.radius = Math.random() * 4;
    };

    const disappear = (p: Particle) => {
      if (p.radius < 0.5) resetParticle(p);
      p.radius *= 0.994;
    };

    const draw = (p: Particle) => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(ratio, 0, 0, -ratio, canvas.width / 2, canvas.height / 2);

        if (state.counter < state.particles.length) state.counter++;
        
        for (let i = 0; i < state.counter; i++) {
            disappear(state.particles[i]);
            moveParticle(state.particles[i]);
            draw(state.particles[i]);
        }
        
        animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    const handleResize = () => {
      ratio = window.innerHeight < 400 ? 0.6 : 1;
      setupCanvas();
    };
    
    window.addEventListener('resize', handleResize);

    const timeout = setTimeout(() => {
        onComplete();
    }, 3500);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-bg overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full pointer-events-none" 
      />
      
      {/* Central Brand Element */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white/50 backdrop-blur-md rounded-3xl border border-brand-accent/20 flex items-center justify-center shadow-[0_0_60px_rgba(28,181,224,0.3)] animate-float">
           <Pill className="w-12 h-12 text-brand-primary -rotate-45" />
        </div>
        <h2 className="mt-6 text-xl font-display font-bold tracking-[0.2em] text-brand-primary/80">MEDISCAN</h2>
      </div>
    </div>
  );
};

export default ParticleLoader;