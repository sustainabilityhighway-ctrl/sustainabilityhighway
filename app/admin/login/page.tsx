"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, Leaf, Globe } from 'lucide-react';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert('Login failed: ' + (data.message || 'Invalid credentials'));
                setIsLoading(false);
            } else {
                localStorage.setItem('adminToken', data.access_token);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                router.push('/admin');
            }
        } catch (err) {
            alert('An unexpected error occurred. Is the backend running?');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#041612] relative overflow-hidden font-sans">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C5A059]/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2A9D8F]/20 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>

            <div className="w-full max-w-xl p-6 relative z-10 grid md:grid-cols-1 gap-0">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="p-10 md:p-14">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#C5A059] to-[#8E6E36] mb-8 shadow-2xl shadow-[#C5A059]/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Leaf className="w-10 h-10 text-[#041612]" />
                            </div>
                            <h1 className="text-4xl font-black text-white tracking-tighter mb-3 font-montserrat uppercase">
                                Admin <span className="text-[#C5A059]">Login</span>
                            </h1>
                            <p className="text-gray-400 text-sm font-medium tracking-wide">
                                SUSTAINABILITY HIGHWAY CONTENT MANAGEMENT
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] ml-1">
                                    Identity Access
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-[#C5A059] transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-5 border border-white/5 rounded-2xl bg-black/40 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059]/50 transition-all duration-300"
                                        placeholder="admin@sustainabilityhighway.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] ml-1">
                                    Secure Key
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-[#C5A059] transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-12 pr-4 py-5 border border-white/5 rounded-2xl bg-black/40 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059]/50 transition-all duration-300"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group overflow-hidden py-5 px-6 rounded-2xl bg-[#C5A059] text-[#041612] font-black uppercase tracking-widest text-sm shadow-2xl shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-[#041612]/30 border-t-[#041612] rounded-full animate-spin"></div>
                                            Authorizing...
                                        </>
                                    ) : (
                                        <>
                                            Access Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
                            <Link href="/" className="text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
                                <span className="group-hover:-translate-x-1 transition-transform">←</span> RETURN TO PUBLIC WEBSITE
                            </Link>

                            <div className="flex gap-4 opacity-50">
                                <Globe className="w-4 h-4 text-gray-400" />
                                <ShieldCheck className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} Sustainability Highway • Powered by Vision 2030
                </p>
            </div>
        </div>
    );
}
