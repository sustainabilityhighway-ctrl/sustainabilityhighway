import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ICONS } from '../constants';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0e0e0e] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] via-[#C5A059] to-[#4CAF50]"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-[#4CAF50] rounded-lg text-black">
                            {ICONS.Leaf}
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase italic">
                            Sustainability <span className="text-[#C5A059]">Highway</span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering the Kingdom's construction industry with modern standards and AI-driven intelligence for a greener Vision 2030.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#4CAF50] font-bold">
                        <MapPin size={16} />
                        <span>Riyadh, Saudi Arabia</span>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Our Vision</Link></li>
                        <li><Link href="/projects/mostadam" className="hover:text-white transition-colors">Projects</Link></li>
                        <li><Link href="/leed-guide" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/insights" className="hover:text-white transition-colors">Latest Insights</Link></li>
                    </ul>
                </div>

                {/* Standards */}
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Standards</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/leed-guide" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#4CAF50] rounded-full"></span> LEED KSA</Link></li>
                        <li><Link href="/projects/mostadam" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#4CAF50] rounded-full"></span> Mostadam</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#4CAF50] rounded-full"></span> Green Riyadh</Link></li>
                        <li><Link href="/projects/well" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#4CAF50] rounded-full"></span> Wellness Standard</Link></li>
                    </ul>
                </div>

                {/* Socials & Contact */}
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Connect</h4>
                    <div className="flex gap-4 mb-8">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#E4405F]/10 hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" /> contact@sustainabilityhighway.com</p>
                        <p className="flex items-center gap-2"><Phone size={14} className="text-[#C5A059]" /> +966 11 000 0000</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
                    © 2026 Sustainability Highway. All Rights Reserved.
                </p>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
