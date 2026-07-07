import React from 'react';
import { Globe, TrendingUp, Zap, Radio, TreeDeciduous, Recycle } from 'lucide-react';

const Vision2050Page: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    Vision <span className="text-emerald-400">2050</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    Transforming the future. Aligned with global Net Zero goals and Saudi Arabia's long-term sustainability implementation.
                </p>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0A201A] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px]"></div>

                    <div className="flex flex-col gap-12 text-center relative z-10">
                        <h2 className="text-4xl font-bold font-heading text-white">The Road to Net Zero</h2>
                        <p className="text-white/80 leading-relaxed text-lg max-w-3xl mx-auto">
                            The journey doesn't stop at 2030. Vision 2050 represents the long-term commitment to a circular economy, complete decarbonization, and the restoration of natural ecosystems. It is about creating a legacy that thrives for generations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-colors">
                                <h3 className="text-3xl font-black text-emerald-400 mb-2">0%</h3>
                                <p className="text-white/70 font-medium">Carbon Emissions</p>
                                <p className="text-white/40 text-sm mt-3">Targeting complete neutrality across all sectors.</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-colors">
                                <h3 className="text-3xl font-black text-emerald-400 mb-2">100%</h3>
                                <p className="text-white/70 font-medium">Renewable Energy</p>
                                <p className="text-white/40 text-sm mt-3">Solar and hydrogen powering the nation.</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-colors">
                                <h3 className="text-3xl font-black text-emerald-400 mb-2">Circular</h3>
                                <p className="text-white/70 font-medium">Economy Model</p>
                                <p className="text-white/40 text-sm mt-3">Designing waste out of the system entirely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Strategic Pillars</h2>
                    <div className="h-1 w-24 bg-emerald-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-all">
                        <div className="bg-emerald-400/10 p-4 rounded-xl group-hover:bg-emerald-400 group-hover:text-[#041612] transition-colors text-emerald-400">
                            <TreeDeciduous size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Ecosystem Restoration</h3>
                            <p className="text-white/60">
                                Reversing desertification through massive afforestation projects like the Saudi Green Initiative, creating microclimates and habitats.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-all">
                        <div className="bg-emerald-400/10 p-4 rounded-xl group-hover:bg-emerald-400 group-hover:text-[#041612] transition-colors text-emerald-400">
                            <Recycle size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Circular Innovation</h3>
                            <p className="text-white/60">
                                Moving beyond recycling to regenerative design, where products are designed for reuse and biological materials are returned to the earth.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-all">
                        <div className="bg-emerald-400/10 p-4 rounded-xl group-hover:bg-emerald-400 group-hover:text-[#041612] transition-colors text-emerald-400">
                            <Zap size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Energy Transition</h3>
                            <p className="text-white/60">
                                Scaling hydrogen production and export, positioning the Kingdom as a global leader in clean energy carriers.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-all">
                        <div className="bg-emerald-400/10 p-4 rounded-xl group-hover:bg-emerald-400 group-hover:text-[#041612] transition-colors text-emerald-400">
                            <TrendingUp size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Sustainable Economy</h3>
                            <p className="text-white/60">
                                Decoupling economic growth from resource consumption, ensuring prosperity through knowledge-based and green industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Video Section */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-white mb-4">NEOM & The Line</h2>
                            <p className="text-white/80 leading-relaxed text-lg">
                                At the heart of Vision 2050 lies NEOM, a living laboratory for entrepreneurship and innovation. 'The Line', a cognitive city stretching 170km, redefines urban living with zero cars, zero streets, and zero carbon emissions.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#0A201A] p-6 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-emerald-400 mb-1">95%</h3>
                                <p className="text-white/60 text-sm">Land Preserved for Nature</p>
                            </div>
                            <div className="bg-[#0A201A] p-6 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-emerald-400 mb-1">100%</h3>
                                <p className="text-white/60 text-sm">Clean Energy</p>
                            </div>
                            <div className="bg-[#0A201A] p-6 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-emerald-400 mb-1">20min</h3>
                                <p className="text-white/60 text-sm">End-to-End Transit</p>
                            </div>
                            <div className="bg-[#0A201A] p-6 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-emerald-400 mb-1">9M</h3>
                                <p className="text-white/60 text-sm">Projected Residents</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop"
                                    alt="Sustainable Future City"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="h-40 rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1518005052351-e3b7d67df647?q=80&w=800&auto=format&fit=crop"
                                    alt="Green Energy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="h-40 rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                                    alt="Wind Power"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                    alt="Modern Architecture"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision2050Page;
