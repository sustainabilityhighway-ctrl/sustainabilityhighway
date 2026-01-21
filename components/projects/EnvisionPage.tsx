import React from 'react';
import { Network, Zap, Anchor, Shield, Users, BarChart } from 'lucide-react';

const EnvisionPage: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    <span className="text-[#4CAF50]">Envision</span> Infrastructure
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    A holistic framework for sustainable infrastructure, ensuring civil projects deliver environmental, social, and economic value for the long term.
                </p>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0F221D] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 w-full order-2 md:order-1">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop"
                                    alt="Envision Infrastructure"
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#041612] to-transparent opacity-60"></div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 order-1 md:order-2">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-[#4CAF50] mb-4">Sustainable Infrastructure</h2>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    Envision is not just about buildings; it's about the systems that connect them. Roads, bridges, pipelines, and energy grids. We use Envision to guide projects towards true sustainability, assessing impacts on community quality of life and resource allocation.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <h4 className="text-[#4CAF50] font-bold text-lg mb-1">60+</h4>
                                    <p className="text-sm text-white/60">Sustainability Criteria</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <h4 className="text-[#4CAF50] font-bold text-lg mb-1">5</h4>
                                    <p className="text-sm text-white/60">Key Categories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">The Envision Framework</h2>
                    <div className="h-1 w-24 bg-[#4CAF50] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, title: "Quality of Life", desc: "Assessing the project's impact on communities, from health to mobility." },
                        { icon: Shield, title: "Leadership", desc: "Demonstrating commitment to sustainability through collaboration and planning." },
                        { icon: Anchor, title: "Resource Allocation", desc: "Using materials, energy, and water efficiently and responsibly." },
                        { icon: Network, title: "Natural World", desc: "Minimizing negative impacts on ecosystems and biodiversity." },
                        { icon: Zap, title: "Climate & Resilience", desc: "Ensuring infrastructure can withstand future environmental risks." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#4CAF50]/50 transition-all duration-300 group">
                            <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50] transition-colors">
                                <feature.icon className="text-[#4CAF50] w-7 h-7 group-hover:text-[#041612] transition-colors" />
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

export default EnvisionPage;
