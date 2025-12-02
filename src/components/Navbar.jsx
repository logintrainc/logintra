import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import AppleIcon from './ui/AppleIcon';



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <span className="text-3xl font-penmanship font-bold tracking-tight text-black">Purb<span className="text-[#5e17eb]">.</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#apps" className="text-base font-bold text-black hover:text-[#5e17eb] transition-colors">Our Apps</a>
                    <a href="#about" className="text-base font-bold text-black hover:text-[#5e17eb] transition-colors">About</a>
                    <a href="#reviews" className="text-base font-bold text-black hover:text-[#5e17eb] transition-colors">Reviews</a>
                    <Button variant="primary" className="px-6 py-2 text-xs uppercase font-black flex items-center gap-2">
                        <AppleIcon size={16} /> Get the App
                    </Button>
                </div>

                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="text-black w-8 h-8" /> : <Menu className="text-black w-8 h-8" />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-black p-8 md:hidden flex flex-col gap-6 shadow-xl">
                    <a href="#apps" className="text-2xl font-serif font-bold text-black">Our Apps</a>
                    <a href="#about" className="text-2xl font-serif font-bold text-black">About</a>
                    <a href="#reviews" className="text-2xl font-serif font-bold text-black">Reviews</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
