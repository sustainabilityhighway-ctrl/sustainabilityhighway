import React from 'react';
import { Leaf, Award, Shield, Sun, Droplets, MapPin, Heart, Globe, Cloud, CheckCircle } from 'lucide-react';

const MostadamPage: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    <span className="text-[#C5A059]">Mostadam</span> Integration
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    Aligned with Vision 2030, Mostadam is Saudi Arabia's premier sustainability rating system, ensuring buildings are resilient, culturally responsive, and resource-efficient.
                </p>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0B2B24] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-white mb-4">Why Mostadam?</h2>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    Developed by the Ministry of Housing, Mostadam goes beyond standard energy metrics. It incorporates <span className="text-[#C5A059] font-semibold">local climatic interaction</span>, <span className="text-[#C5A059] font-semibold">cultural identity</span>, and <span className="text-[#C5A059] font-semibold">economic impact</span>. It is the gold standard for residential and commercial developments within the Kingdom.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Tailored for Desert Climates",
                                    "Supports Vision 2030 Goals",
                                    "Enhances Occupant Health & Comfort",
                                    "Optimizes Water Conservation"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-[#C5A059] w-6 h-6 flex-shrink-0" />
                                        <span className="text-white/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop"
                                    alt="Mostadam Sustainable Building"
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#041612] to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Pillars */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Mostadam Categories</h2>
                    <div className="h-1 w-24 bg-[#C5A059] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Droplets, title: "Water Conservation", desc: "Prioritizing smart irrigation and high-efficiency fixtures to combat water scarcity." },
                        { icon: Sun, title: "Energy Performance", desc: "Optimizing envelopes and systems to reduce cooling loads in high-temperature environments." },
                        { icon: Heart, title: "Health & Comfort", desc: "Ensuring high indoor air quality and thermal comfort for occupants." },
                        { icon: MapPin, title: "Site & Transport", desc: "Connecting communities through sustainable planning and mobility solutions." },
                        { icon: Award, title: "Education & Innovation", desc: "Promoting awareness and novel solutions in green building." },
                        { icon: Shield, title: "Policies & Maintenance", desc: "Ensuring long-term sustainability through operational excellence." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
                            <div className="bg-[#C5A059]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors">
                                <feature.icon className="text-[#C5A059] w-7 h-7 group-hover:text-[#041612] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MostadamPage;
