import React from 'react';
import { Play } from 'lucide-react';
import Button from './ui/Button';
import AppleIcon from './ui/AppleIcon';



const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-5xl font-penmanship font-bold tracking-tight text-white">Logintra<span className="text-[#5e17eb]">.</span></span>
                        </div>
                        <p className="text-gray-400 max-w-xs mb-8 font-bold">
                            Smoooth software for a jagged world.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="secondary" className="bg-white text-black hover:bg-[#5e17eb] hover:text-white border-white">
                                <AppleIcon size={20} className="mr-2" /> App Store
                            </Button>
                            <Button variant="secondary" className="bg-transparent text-white border-white hover:bg-[#5e17eb] hover:text-white hover:border-[#5e17eb]">
                                <Play size={20} className="mr-2" /> Google Play
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-400">
                            <li><a href="#" className="hover:text-[#5e17eb] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#5e17eb] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#5e17eb] transition-colors">Press Kit</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-400">
                            <li><a href="/privacy-policy.html" className="hover:text-[#5e17eb] transition-colors">Privacy</a></li>
                            <li><a href="/terms-of-service.html" className="hover:text-[#5e17eb] transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500 font-bold">
                    <p>&copy; 2024 Logintra Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#5e17eb] transition-colors">Twitter</a>
                        <a href="#" className="hover:text-[#5e17eb] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
