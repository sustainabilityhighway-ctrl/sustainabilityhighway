"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, Leaf, Globe, Sparkles, CheckCircle2 } from 'lucide-react';



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
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] relative overflow-hidden font-sans">
            {/* Ambient Nature Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[180px]"></div>
            </div>

            <div className="w-full max-w-lg p-6 relative z-10">
                <div className="text-center mb-10 transition-all duration-700 animate-in fade-in slide-in-from-top-4">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white border border-[#C5A059]/30 mb-8 shadow-[0_20px_50px_rgba(197,160,89,0.1)] group hover:border-[#C5A059] transition-all duration-500">
                        <Leaf className="w-10 h-10 text-[#C5A059] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h1 className="text-4xl font-black text-[#041612] tracking-tight mb-2 uppercase font-montserrat tracking-[0.2em]">
                        Sustainability <span className="text-[#C5A059]">Highway</span>
                    </h1>
                    <p className="text-gray-500 text-sm font-bold tracking-[0.1em] uppercase opacity-70">
                        Data-Driven Sustainability Knowledge Platform
                    </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(4,22,18,0.1)] overflow-hidden animate-in zoom-in-95 duration-700">
                    <div className="p-10 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.25em] ml-1 flex justify-between items-center">
                                    <span>Identity Access</span>
                                    <span className="flex items-center gap-1 text-[8px] text-green-600/60 lowercase italic tracking-normal">
                                        <CheckCircle2 className="w-2 h-2" /> secure connection enabled
                                    </span>
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-[#C5A059] transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-14 pr-6 py-5 border border-gray-100 rounded-2xl bg-gray-50 text-[#041612] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/40 focus:border-[#C5A059]/30 transition-all duration-300 font-medium text-sm"
                                        placeholder="sustainabilityhighway@gmail.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.25em] ml-1">
                                    Secure Key
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-[#C5A059] transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-14 pr-6 py-5 border border-gray-100 rounded-2xl bg-gray-50 text-[#041612] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059]/40 focus:border-[#C5A059]/30 transition-all duration-300 font-medium text-sm"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-[#C5A059]/5 rounded-lg border border-[#C5A059]/10 opacity-60 hover:opacity-100 transition-opacity cursor-help group" title="Two-Factor Authentication Ready">
                                        <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                                        <span className="text-[8px] font-black text-[#C5A059] uppercase tracking-[0.1em]">2FA Ready</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative group overflow-hidden py-5 px-6 rounded-2xl bg-[#C5A059] text-[#041612] font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-[#C5A059]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 disabled:opacity-50"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="relative flex items-center justify-center gap-3">
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-[#041612]/30 border-t-[#041612] rounded-full animate-spin"></div>
                                            Establishing Connection...
                                        </>
                                    ) : (
                                        <>
                                            Initiate Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-50/50 p-6 flex flex-col items-center gap-4 text-center">
                        <div className="flex items-center gap-4 opacity-40 group">
                            <Sparkles className="w-3 h-3 text-[#C5A059] transition-all group-hover:animate-spin" />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">SEO-Aware • Content Integrity Enabled</span>
                            <Sparkles className="w-3 h-3 text-[#C5A059] transition-all group-hover:animate-spin" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <Link href="/" className="text-[10px] font-black text-gray-400 hover:text-[#C5A059] transition-all uppercase tracking-[0.2em] flex items-center gap-3 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Public Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
