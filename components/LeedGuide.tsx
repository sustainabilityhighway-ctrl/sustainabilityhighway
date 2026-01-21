import React from 'react';
import { Leaf, Droplets, Zap, Box, Wind, MapPin, Heart, Globe, Award, Layers, Compass } from 'lucide-react';

const LeedGuide: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    Understanding <span className="text-[#4CAF50]">LEED</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed">
                    A comprehensive guide to the Leadership in Energy and Environmental Design rating system and its impact on the built environment.
                </p>
            </div>

            {/* What is LEED? */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0B2B24] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold font-heading text-[#C5A059]">What is LEED?</h2>
                            <p className="text-white/80 leading-relaxed text-lg">
                                LEED (Leadership in Energy and Environmental Design) is the world's most widely used green building rating system. It provides a framework for healthy, highly efficient, and cost-saving green buildings. LEED certification is a globally recognized symbol of sustainability achievement and leadership.
                            </p>
                            <p className="text-white/80 leading-relaxed text-lg">
                                It works for all buildings—from homes to corporate headquarters—at all phases of development. Projects pursuing LEED certification earn points for various green building strategies across several categories.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop"
                                alt="LEED Building"
                                className="rounded-xl shadow-lg w-full object-cover h-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* LEED Credit Categories (Replaces Services/Levels) */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">Core Impact Categories</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        LEED assesses buildings based on their performance in these key areas, ensuring a holistic approach to sustainability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Category 1 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <MapPin className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Location & Transportation</h3>
                        <p className="text-white/60 leading-relaxed">
                            Encourages building on previously developed land and near public transit to reduce vehicle emissions and prevent urban sprawl.
                        </p>
                    </div>

                    {/* Category 2 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <Leaf className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Sustainable Sites</h3>
                        <p className="text-white/60 leading-relaxed">
                            Focuses on minimizing the impact on ecosystems, reducing light pollution, and managing rainwater runoff.
                        </p>
                    </div>

                    {/* Category 3 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <Droplets className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Water Efficiency</h3>
                        <p className="text-white/60 leading-relaxed">
                            Promotes smarter use of water, inside and out, to reduce potable water consumption through efficient fixtures and landscaping.
                        </p>
                    </div>

                    {/* Category 4 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <Zap className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Energy & Atmosphere</h3>
                        <p className="text-white/60 leading-relaxed">
                            The largest category. Rewards energy-efficient design, renewable energy generation, and elimination of ozone-depleting chemicals.
                        </p>
                    </div>

                    {/* Category 5 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <Box className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Materials & Resources</h3>
                        <p className="text-white/60 leading-relaxed">
                            Encourages using sustainable building materials, reducing waste, and considering the full life-cycle impact of materials.
                        </p>
                    </div>

                    {/* Category 6 */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-[#4CAF50] transition-colors group">
                        <div className="bg-[#4CAF50]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20">
                            <Wind className="text-[#4CAF50] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Indoor Quality</h3>
                        <p className="text-white/60 leading-relaxed">
                            Prioritizes clean indoor air, access to natural daylight, and views to improve occupant health and productivity.
                        </p>
                    </div>
                </div>
            </section>

            {/* NEW: LEED Certification Levels */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Certification Levels</h2>
                    <div className="h-1 w-24 bg-[#4CAF50] mx-auto rounded-full mb-6"></div>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Projects earn points across the categories above. The total score determines the level of LEED certification achieved.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { level: "Certified", points: "40-49", color: "bg-[#4CAF50]", border: "border-[#4CAF50]" },
                        { level: "Silver", points: "50-59", color: "bg-gray-400", border: "border-gray-400" },
                        { level: "Gold", points: "60-79", color: "bg-[#FFD700]", border: "border-[#FFD700]" },
                        { level: "Platinum", points: "80+", color: "bg-[#E5E4E2]", border: "border-[#E5E4E2]" }
                    ].map((item, index) => (
                        <div key={index} className={`bg-[#0B2B24] border-t-8 ${item.border} rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-xl`}>
                            <Award className={`w-12 h-12 mx-auto mb-4 ${item.level === 'Silver' ? 'text-gray-400' : item.level === 'Gold' ? 'text-[#FFD700]' : item.level === 'Platinum' ? 'text-[#E5E4E2]' : 'text-[#4CAF50]'}`} />
                            <h3 className="text-2xl font-black mb-2 uppercase">{item.level}</h3>
                            <p className="text-white/50 font-mono text-lg">{item.points} Points</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEW: Iconic LEED Projects in KSA */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Green Landmarks of Saudi Arabia</h2>
                    <div className="h-1 w-24 bg-[#C5A059] mx-auto rounded-full mb-6"></div>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Saudi Arabia is home to some of the world's most advanced sustainable buildings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-[#0B2B24] rounded-2xl overflow-hidden border border-white/5 group">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://www.kaust.edu.sa/images/default-source/news-2022/kaust-campus-aerial.jpg?sfvrsn=5c1b6b5d_2"
                                alt="KAUST"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-[#E5E4E2] text-black text-xs font-bold px-3 py-1 rounded-full">PLATINUM</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-2">KAUST</h3>
                            <p className="text-white/60 text-sm mb-4">Thuwal, KSA</p>
                            <p className="text-white/80 text-sm leading-relaxed">
                                King Abdullah University of Science and Technology was the Kingdom's first LEED Platinum campus, setting a global benchmark for sustainable research facilities.
                            </p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-[#0B2B24] rounded-2xl overflow-hidden border border-white/5 group">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1546955121-d0ba64964e6e?w=800&auto=format&fit=crop"
                                alt="KAFD"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-[#E5E4E2] text-black text-xs font-bold px-3 py-1 rounded-full">PLATINUM</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-2">KAFD</h3>
                            <p className="text-white/60 text-sm mb-4">Riyadh, KSA</p>
                            <p className="text-white/80 text-sm leading-relaxed">
                                King Abdullah Financial District is the world's largest LEED Platinum certified neighborhood project, integrating smart systems across 1.6 million sqm.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-[#0B2B24] rounded-2xl overflow-hidden border border-white/5 group">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src="https://www.kapsarc.org/wp-content/uploads/2018/10/KAPSARC-Hero-1-1.jpg"
                                alt="KAPSARC"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-[#E5E4E2] text-black text-xs font-bold px-3 py-1 rounded-full">PLATINUM</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-2">KAPSARC</h3>
                            <p className="text-white/60 text-sm mb-4">Riyadh, KSA</p>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Designed by Zaha Hadid, the King Abdullah Petroleum Studies and Research Center is a futuristic modular structure maximizing solar and wind energy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Certification Process Steps */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#041612] border border-white/10 rounded-3xl p-10 md:p-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading mb-4">How to Get Certified</h2>
                        <p className="text-white/60">A simplified roadmap for project teams.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>

                        {[
                            { step: "1", title: "Register", desc: "Register the project with GBCI." },
                            { step: "2", title: "Select Credits", desc: "Identify target points and goals." },
                            { step: "3", title: "Submit", desc: "Submit documentation for review." },
                            { step: "4", title: "Certify", desc: "Receive final rating and plaque." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center bg-[#041612] px-4 w-full md:w-1/4">
                                <div className="w-16 h-16 rounded-full bg-[#4CAF50] text-[#041612] flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_20px_rgba(76,175,80,0.5)]">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Why It Matters (Benefits) */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="bg-[#C5A059]/10 rounded-3xl p-10 md:p-16 border border-[#C5A059]/20">
                    <h2 className="text-3xl font-bold text-center mb-12 font-heading text-[#C5A059]">Why LEED Matters in Vision 2030</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <Globe className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
                            <h3 className="text-xl font-bold mb-3 text-white">Global Competitiveness</h3>
                            <p className="text-white/60">
                                Attracting international business and investment by meeting global sustainability standards.
                            </p>
                        </div>
                        <div className="text-center">
                            <Heart className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
                            <h3 className="text-xl font-bold mb-3 text-white">Human Health</h3>
                            <p className="text-white/60">
                                Creating healthier environments that improve the well-being and productivity of Saudi citizens.
                            </p>
                        </div>
                        <div className="text-center">
                            <Leaf className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
                            <h3 className="text-xl font-bold mb-3 text-white">Environmental Protection</h3>
                            <p className="text-white/60">
                                Reducing carbon emissions and conserving water resources in line with the Saudi Green Initiative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeedGuide;
