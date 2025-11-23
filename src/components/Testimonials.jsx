import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="reviews" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-16 italic">Don't take our word for it.</h2>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {[
                        { text: "Absolutely obsessed with the design. It's just different.", author: "Sarah J." },
                        { text: "Finally software that doesn't feel like a spreadsheet.", author: "Mark T." },
                        { text: "Purb apps are the only ones I keep on my home screen.", author: "Elena R." }
                    ].map((review, i) => (
                        <div key={i} className="group bg-gray-50 p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#470047] hover:border-[#470047] hover:-translate-y-1 transition-all">
                            <div className="flex gap-1 text-black mb-6 group-hover:text-[#470047] transition-colors">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-2xl font-serif font-bold text-black mb-6 leading-tight">"{review.text}"</p>
                            <div>
                                <div className="font-black text-black uppercase tracking-widest text-sm group-hover:text-[#470047] transition-colors">{review.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
