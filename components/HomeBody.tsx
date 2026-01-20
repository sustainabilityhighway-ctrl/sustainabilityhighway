import React from 'react';
import { BookOpen, Leaf, Zap, Droplets, CheckCircle, Shield } from 'lucide-react';

const HomeBody: React.FC = () => {
    return (
        <div className="bg-[#041612] text-white">

            {/* SECTION 1: LEED KSA Info (Information Scraped/Adapted) */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-8 animate-in slide-in-from-left duration-1000">
                        <div className="flex items-center gap-4">
                            <span className="h-1 w-20 bg-[#C5A059]"></span>
                            <h2 className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">Our Mission</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
                            Pioneering Sustainable <br />
                            <span className="text-white/50">Standards in KSA</span>
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            We provide comprehensive consultancy and guidance for LEED certification, helping projects across Saudi Arabia achieve their sustainability goals. Our expertise ensures that your construction not only meets international standards but also contributes to the Kingdom's Vision 2030 for a greener future.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed">
                            From energy modeling to material selection, we support you at every stage of the lifecycle, reducing environmental impact while optimizing operational efficiency.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#4CAF50] w-6 h-6" />
                                <span className="font-semibold">LEED Certification</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#4CAF50] w-6 h-6" />
                                <span className="font-semibold">Mostadam Rating</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#4CAF50] w-6 h-6" />
                                <span className="font-semibold">Energy Audits</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-[#4CAF50] w-6 h-6" />
                                <span className="font-semibold">Green Materials</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute inset-0 bg-[#C5A059] rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60"
                            alt="Sustainable Office Building"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Green Construction & Vision 2030 (Based on Search) */}
            <section className="py-24 bg-[#08201A] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#4CAF50] font-bold uppercase tracking-widest text-sm mb-4">Vision 2030</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading">The Future of Green Construction</h3>
                        <p className="text-white/60 text-lg">
                            Saudi Arabia's Vision 2030 places sustainability at its core, driving significant transformations in the construction sector through advanced green building practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Renewable Energy */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-colors group">
                            <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Zap className="text-[#4CAF50] w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 font-heading">Renewable Energy</h4>
                            <p className="text-white/60 leading-relaxed">
                                Emphasizing the reduction of carbon emissions through rooftop solar panels and wind turbines, aiming for a significant shift towards clean energy integration in all new developments.
                            </p>
                        </div>

                        {/* Card 2: Water Conservation */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-colors group">
                            <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Droplets className="text-[#4CAF50] w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 font-heading">Water Stewardship</h4>
                            <p className="text-white/60 leading-relaxed">
                                Implementing advanced water recycling systems, rainwater harvesting, and efficient irrigation to address water scarcity, a critical pillar of Mostadam standards.
                            </p>
                        </div>

                        {/* Card 3: Sustainable Materials */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-colors group">
                            <div className="bg-[#4CAF50]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Leaf className="text-[#4CAF50] w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 font-heading">Eco-Friendly Materials</h4>
                            <p className="text-white/60 leading-relaxed">
                                Shifting towards recycled steel, low-emission paints, and waste segregation to minimize landfill contributions and promote a circular economy in construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Visual Feature (Green Construction) */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Content */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#4CAF50] rounded-2xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop&q=60"
                            alt="Green Construction Site"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="h-1 w-20 bg-[#4CAF50]"></span>
                            <h2 className="text-[#4CAF50] font-bold uppercase tracking-widest text-sm">Implementation</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
                            Green Building <br />
                            <span className="text-white/50">In Action</span>
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Mega-projects like NEOM and The Red Sea are setting new global standards. By integrating smart building technologies, automated climate control, and AI-driven energy management, Saudi Arabia is proving that luxury and sustainability can coexist.
                        </p>
                        <div className="p-6 bg-[#C5A059]/10 border-l-4 border-[#C5A059] rounded-r-lg">
                            <p className="text-[#C5A059] italic font-serif text-lg">
                                "The Saudi Green Initiative aims for net-zero emissions by 2060, making every construction project a vital step towards this national goal."
                            </p>
                        </div>
                        <a href="/insights" className="inline-flex items-center gap-2 text-[#4CAF50] font-bold uppercase tracking-widest hover:text-white transition-colors mt-4">
                            Read Guidelines <BookOpen className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomeBody;
