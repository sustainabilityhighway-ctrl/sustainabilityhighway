"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight } from 'lucide-react';

import { supabase } from '../../../services/supabaseClient';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                alert('Login failed: ' + error.message);
                setIsLoading(false);
                return;
            }

            if (data.session) {
                localStorage.setItem('adminToken', data.session.access_token);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                router.push('/admin');
            }
        } catch (err) {
            alert('An unexpected error occurred. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-sans">
            <div className="w-full max-w-md p-8">
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-bold text-[#041612] uppercase tracking-wider">
                        Admin Login
                    </h1>
                    <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
                        Sustainability Highway Portal
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                            Email Address
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-4 w-4 text-gray-300" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 border border-gray-100 rounded-xl bg-gray-50 text-[#041612] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                                placeholder="name@domain.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-4 w-4 text-gray-300" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 border border-gray-100 rounded-xl bg-gray-50 text-[#041612] focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 px-6 rounded-xl bg-[#041612] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#0A2B23] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                        {isLoading ? 'Processing...' : 'Sign In'}
                        {!isLoading && <ArrowRight className="w-4 h-4" />}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push('/')}
                        className="text-[10px] font-bold text-gray-300 hover:text-gray-500 uppercase tracking-widest transition-all"
                    >
                        ← Back to Website
                    </button>
                </div>
            </div>
        </div>
    );
}
