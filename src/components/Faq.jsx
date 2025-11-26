import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ number, question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-8 flex items-start text-left group"
            >
                <span className={`text-sm font-bold mr-6 mt-1 transition-colors ${isOpen ? 'text-[#5e17eb]' : 'text-gray-300'}`}>
                    {number}
                </span>
                <div className="flex-1">
                    <h3 className={`text-2xl font-serif font-bold transition-colors ${isOpen ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {question}
                    </h3>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="pt-4 text-gray-600 font-medium leading-relaxed">
                                    {answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How accurate is the scanning?",
            answer: "Our AI models are trained on millions of pharmaceutical images, achieving a 99.8% accuracy rate in identifying pills, bottles, and packaging under various lighting conditions."
        },
        {
            question: "Is my health data private?",
            answer: "Absolutely. We process all scans locally on your device whenever possible. Any cloud sync is end-to-end encrypted, meaning only you hold the keys to your health history."
        },
        {
            question: "Can I track multiple users?",
            answer: "Yes! Purb allows you to create separate profiles for family members, making it easy to manage medications for children, elderly parents, or even pets, all from one account."
        }
    ];

    return (
        <div className="h-full flex flex-col justify-center">
            <div className="mb-8">
                <h2 className="text-sm font-bold text-[#5e17eb] uppercase tracking-widest mb-2">Common Questions</h2>
                <h3 className="text-4xl font-serif font-bold text-black">Everything you need to know.</h3>
            </div>

            <div>
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        number={`0${index + 1}`}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
