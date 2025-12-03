import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveLeft } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: Testimonial;
  position: 'front' | 'middle' | 'back';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ handleShuffle, testimonial, position }) => {
  const dragRef = useRef(0);
  const isFront = position === 'front';

  return (
    <motion.div
      style={{
        zIndex: position === 'front' ? '2' : position === 'middle' ? '1' : '0',
      }}
      animate={{
        rotate: position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg',
        x: position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%',
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-brand-subtle bg-white/90 backdrop-blur-md p-6 shadow-xl ${
        isFront ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <div className="w-32 h-32 rounded-full bg-brand-gradient mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-lg">
        {testimonial.author.charAt(0)}
      </div>
      <span className="text-center text-lg italic text-brand-primary leading-relaxed">
        "{testimonial.text}"
      </span>
      <div className="text-center">
        <span className="block text-base font-bold text-brand-primary">{testimonial.author}</span>
        <span className="block text-sm text-brand-accent mt-1">{testimonial.role}</span>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      text: "MediScan has been a game-changer for my patients. The instant medication identification helps prevent errors and keeps everyone safe.",
      author: "Dr. Sarah Chen",
      role: "General Practitioner"
    },
    {
      id: 2,
      text: "As a pharmacist, I recommend MediScan to all my customers. The conflict detection feature is incredibly accurate and has prevented dangerous interactions.",
      author: "Michael Rodriguez",
      role: "Clinical Pharmacist"
    },
    {
      id: 3,
      text: "Managing my elderly mother's medications was overwhelming until we found MediScan. The dosage tracker and reminders give us peace of mind.",
      author: "Jennifer Williams",
      role: "Family Caregiver"
    },
    {
      id: 4,
      text: "The AI recognition is phenomenal. I travel frequently and MediScan helps me keep track of all my medications in different languages and packages.",
      author: "David Park",
      role: "Chronic Care Patient"
    },
    {
      id: 5,
      text: "Our hospital staff uses MediScan daily. It's reduced medication administration errors by 40% and improved patient safety outcomes significantly.",
      author: "Nurse Amy Thompson",
      role: "Head Nurse, ICU"
    }
  ]);

  const handleShuffle = () => {
    setTestimonials((prev) => {
      const newArr = [...prev];
      newArr.unshift(newArr.pop()!);
      return newArr;
    });
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-primary mb-4">
          Trusted by Healthcare
          <span className="block text-transparent bg-clip-text bg-brand-gradient">Professionals</span>
        </h2>
        <p className="text-brand-primary/60 text-lg max-w-2xl mx-auto">
          Join thousands of doctors, pharmacists, and patients who rely on MediScan every day
        </p>
      </motion.div>

      <div className="relative h-[500px] w-[350px] ml-[5%] md:ml-[25%]">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            handleShuffle={handleShuffle}
            testimonial={testimonial}
            position={index === 0 ? 'front' : index === 1 ? 'middle' : 'back'}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-12">
        <MoveLeft className="text-brand-accent w-5 h-5" />
        <p className="text-brand-primary/50 text-sm">
          Swipe left to see more testimonials
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
