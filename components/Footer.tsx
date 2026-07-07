"use client";
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ICONS } from '../constants';
import Link from 'next/link';

const Footer: React.FC = () => {
    const pathname = usePathname();
    if (pathname && pathname.startsWith('/admin')) return null;

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
                        Your premier digital resource for green building standards and sustainability insights aligned with Vision 2030.
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
                        <li><Link href="/insights" className="hover:text-white transition-colors">Blog</Link></li>
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
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href="https://business.facebook.com/latest/home/?asset_id=669719086225233&nav_ref=manage_page_ap_plus_left_nav_mbs_button" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="https://x.com/Sustainabi66623" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="https://www.linkedin.com/company/107384114/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com/sustainabilityhighway/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E4405F]/10 hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="https://www.youtube.com/@Sustainabilityhighway" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-300">
                            <Youtube size={18} />
                        </a>
                        <a href="https://www.pinterest.com/sustainabilityhighway/_created/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#BD081C]/10 hover:bg-[#BD081C] text-[#BD081C] hover:text-white flex items-center justify-center transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.966 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 11.985 0" />
                            </svg>
                        </a>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                        <p className="flex items-center gap-2"><Mail size={14} className="text-[#C5A059]" /> contact@sustainabilityhighway.com</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
                    © 2026 Sustainability Highway. All Rights Reserved.
                </p>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
                    <Link href="/admin/login" className="hover:text-[#C5A059] transition-colors">Admin Access</Link>
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
