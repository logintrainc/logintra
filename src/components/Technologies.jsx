import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';
import { Code, Cpu, Globe, Database, Shield, Zap, Smartphone, Cloud } from 'lucide-react';

const Icon = ({
    mouseX,
    mouseY,
    iconData,
    index,
}) => {
    const ref = React.useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    React.useEffect(() => {
        const handleMouseMove = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
                    Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
                );

                if (distance < 150) {
                    const angle = Math.atan2(
                        mouseY.current - (rect.top + rect.height / 2),
                        mouseX.current - (rect.left + rect.width / 2)
                    );
                    const force = (1 - distance / 150) * 50;
                    x.set(-Math.cos(angle) * force);
                    y.set(-Math.sin(angle) * force);
                } else {
                    x.set(0);
                    y.set(0);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y, mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            key={iconData.id}
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={cn('absolute', iconData.className)}
        >
            <motion.div
                className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-3 rounded-2xl shadow-lg bg-white border border-gray-100"
                animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 6, 0, -6, 0],
                    rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
            >
                <iconData.icon className="w-6 h-6 md:w-8 md:h-8 text-[#5e17eb]" />
            </motion.div>
        </motion.div>
    );
};

const Technologies = () => {
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    const icons = [
        { id: 1, icon: Code, className: "top-10 left-10" },
        { id: 2, icon: Cpu, className: "top-20 right-20" },
        { id: 3, icon: Globe, className: "bottom-20 left-20" },
        { id: 4, icon: Database, className: "bottom-10 right-10" },
        { id: 5, icon: Shield, className: "top-1/2 left-1/4" },
        { id: 6, icon: Zap, className: "top-1/3 right-1/3" },
        { id: 7, icon: Smartphone, className: "bottom-1/3 right-1/4" },
        { id: 8, icon: Cloud, className: "top-1/4 left-1/3" },
    ];

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-[500px] bg-gray-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
            <div className="absolute inset-0 w-full h-full">
                {icons.map((iconData, index) => (
                    <Icon
                        key={iconData.id}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        iconData={iconData}
                        index={index}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-4 pointer-events-none">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                    Powered by <br /> <span className="text-[#5e17eb] italic">Intelligence.</span>
                </h2>
                <p className="text-gray-600 font-medium max-w-xs mx-auto">
                    Built with cutting-edge tech for speed, security, and scale.
                </p>
            </div>
        </div>
    );
};

export default Technologies;
