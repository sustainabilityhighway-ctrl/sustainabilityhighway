import React from 'react';
import { BookOpen, Leaf, Zap, Droplets, CheckCircle, Shield, TrendingUp, Users, Globe, MessageSquare, Compass, Hammer, Award, Star, Heart, Map, Activity, Building, PieChart, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';

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

            {/* SECTION: The Benefits (Why) */}
            <section className="py-24 bg-[#061A16] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">Why Choose Sustainability?</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white font-heading">
                            Benefits Beyond <span className="gold-text">Compliance</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
                            <div className="bg-[#C5A059]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                                <TrendingUp className="text-[#C5A059] w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading">Maximize ROI</h4>
                            <p className="text-white/60 leading-relaxed">
                                Green buildings command higher rental rates and sale prices, while reducing operating costs by up to 30% through energy and water efficiency.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
                            <div className="bg-[#C5A059]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                                <Users className="text-[#C5A059] w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading">Health & Productivity</h4>
                            <p className="text-white/60 leading-relaxed">
                                Improve occupant well-being with better air quality and natural light, leading to a 15% increase in productivity and reduced absenteeism.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
                            <div className="bg-[#C5A059]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                                <Globe className="text-[#C5A059] w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading">Global Impact</h4>
                            <p className="text-white/60 leading-relaxed">
                                Contribute to a sustainable future by significantly reducing carbon emissions and minimizing environmental footprint, aligning with Vision 2030.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Expertise / Services */}
            <section className="py-24 bg-[#08201A] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#4CAF50] font-bold uppercase tracking-widest text-sm">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white font-heading">
                            Comprehensive <span className="text-[#4CAF50]">Solutions</span>
                        </h2>
                        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                            We offer a full spectrum of sustainability consultancy services tailored to the unique needs of the Saudi market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#4CAF50]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Award className="text-[#4CAF50] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">LEED Certification</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Full-cycle consultancy for all LEED rating systems (BD+C, ID+C, O+M), ensuring your project meets global sustainability standards.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#C5A059]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                                <Star className="text-[#C5A059] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">Mostadam Rating</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Specialized guidance for Saudi Arabia's local green building rating system, aligning perfectly with regional requirements.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#4CAF50]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Heart className="text-[#4CAF50] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">WELL Building</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Focusing on the health and well-being of building occupants, creating spaces that enhance productivity and comfort.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#4CAF50]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <Map className="text-[#4CAF50] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">Envision Framework</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Sustainable infrastructure framework for roads, airports, and public spaces, ensuring resilient community development.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#C5A059]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-colors">
                                <Zap className="text-[#C5A059] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">Energy Modeling</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Advanced simulation to predict Energy Use Intensity (EUI) and optimize MEP designs for maximum efficiency and cost savings.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-[#041612] p-8 rounded-xl border border-white/5 hover:border-[#4CAF50]/50 transition-all duration-300 group hover:-translate-y-2">
                            <div className="bg-[#4CAF50]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                                <CheckCircle className="text-[#4CAF50] w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3 font-heading text-white">Commissioning (Cx)</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Technical verification to ensure all building systems are installed and perform according to the owner's project requirements.
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

            {/* SECTION: Stats / Impact */}
            <section className="py-20 bg-[#061A16] border-y border-white/5 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-[#4CAF50] font-bold uppercase tracking-widest text-sm">Saudi Green Initiative</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white font-heading">
                            Saudi’s <span className="gold-text">Global Impact</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div className="space-y-2 group">
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Globe className="w-10 h-10 text-[#4CAF50]" />
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white">50%</h3>
                            <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Renewables by 2030</p>
                        </div>
                        <div className="space-y-2 group">
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Leaf className="w-10 h-10 text-[#4CAF50]" />
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white">10 Bn</h3>
                            <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Trees Planted</p>
                        </div>
                        <div className="space-y-2 group">
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="w-10 h-10 text-[#C5A059]" />
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white">278</h3>
                            <p className="text-white/50 uppercase tracking-widest text-xs font-bold">mtpa Carbon Reduced</p>
                        </div>
                        <div className="space-y-2 group">
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="w-10 h-10 text-[#C5A059]" />
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white">30%</h3>
                            <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Protected Areas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Our Process (How) */}
            <section className="py-24 bg-[#041612] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 items-end justify-between mb-16">
                        <div>
                            <span className="text-[#4CAF50] font-bold uppercase tracking-widest text-sm">Our Workflow</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-4 font-heading">
                                The Path to <span className="text-[#4CAF50]">Certification</span>
                            </h2>
                        </div>
                        <p className="text-white/60 max-w-md pb-2">
                            A streamlined, step-by-step approach to ensuring your project achieves its sustainability goals efficiently and effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="absolute top-8 left-8 right-0 h-0.5 bg-white/10 hidden md:block"></div>
                            <div className="relative z-10 bg-[#041612] pr-4 inline-block">
                                <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-all shadow-[0_0_15px_rgba(76,175,80,0.1)]">
                                    <MessageSquare className="text-[#4CAF50] w-7 h-7" />
                                </div>
                            </div>
                            <span className="block text-5xl font-bold text-white/5 absolute top-0 right-4 select-none">01</span>
                            <h4 className="text-xl font-bold mb-2 font-heading">Consultation</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Our team performs a deep-dive feasibility study and gap analysis to identify the most strategic and cost-effective certification path (LEED, Mostadam, or WELL) for your goals.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="absolute top-8 left-8 right-0 h-0.5 bg-white/10 hidden md:block"></div>
                            <div className="relative z-10 bg-[#041612] pr-4 inline-block">
                                <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-all shadow-[0_0_15px_rgba(76,175,80,0.1)]">
                                    <Compass className="text-[#4CAF50] w-7 h-7" />
                                </div>
                            </div>
                            <span className="block text-5xl font-bold text-white/5 absolute top-0 right-4 select-none">02</span>
                            <h4 className="text-xl font-bold mb-2 font-heading">Strategy</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We craft a detailed sustainability roadmap, utilizing advanced energy modeling and credit targeting to maximize your score while minimizing costs.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="absolute top-8 left-8 right-0 h-0.5 bg-white/10 hidden md:block"></div>
                            <div className="relative z-10 bg-[#041612] pr-4 inline-block">
                                <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-all shadow-[0_0_15px_rgba(76,175,80,0.1)]">
                                    <Hammer className="text-[#4CAF50] w-7 h-7" />
                                </div>
                            </div>
                            <span className="block text-5xl font-bold text-white/5 absolute top-0 right-4 select-none">03</span>
                            <h4 className="text-xl font-bold mb-2 font-heading">Implementation</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We provide hands-on construction supervision, waste management planning, and air quality audits to ensure strict on-site compliance with all standards.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="relative z-10 bg-[#041612] pr-4 inline-block">
                                <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/20 transition-all shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                                    <Award className="text-[#C5A059] w-7 h-7" />
                                </div>
                            </div>
                            <span className="block text-5xl font-bold text-white/5 absolute top-0 right-4 select-none">04</span>
                            <h4 className="text-xl font-bold mb-2 font-heading">Certification</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We manage the entire submission process, handle reviewer clarifications, and secure your final certification with a 100% success rate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: Insights / News */}
            <section className="py-24 bg-[#05100E] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">Latest Updates</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white font-heading">
                                Sustainability <span className="gold-text">Insights</span>
                            </h2>
                        </div>
                        <Link to="/insights" className="hidden md:flex items-center gap-2 text-white/70 hover:text-[#C5A059] transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blog 1 */}
                        <div className="group cursor-pointer">
                            <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60" alt="Building" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <span className="text-[#4CAF50] text-xs font-bold uppercase tracking-widest">Thought Leadership</span>
                            <h4 className="text-xl font-bold mt-2 mb-3 group-hover:text-[#C5A059] transition-colors line-clamp-2">Navigating the Future of Green Building in Saudi Arabia</h4>
                            <p className="text-white/60 text-sm line-clamp-3">
                                As Vision 2030 accelerates, the demand for sustainable infrastructure is skyrocketing. Learn how new regulations are shaping the market.
                            </p>
                            <Link to="/insights" className="inline-flex items-center gap-2 text-[#4CAF50] text-sm font-bold mt-4 hover:underline">Read Article</Link>
                        </div>

                        {/* Blog 2 */}
                        <div className="group cursor-pointer">
                            <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&auto=format&fit=crop&q=60" alt="Nature" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">Technical Guide</span>
                            <h4 className="text-xl font-bold mt-2 mb-3 group-hover:text-[#C5A059] transition-colors line-clamp-2">Mostadam vs. LEED: Which Rating System is Right for You?</h4>
                            <p className="text-white/60 text-sm line-clamp-3">
                                A comprehensive comparison of credit categories, costs, and local applicability to help you make an informed decision.
                            </p>
                            <Link to="/insights" className="inline-flex items-center gap-2 text-[#4CAF50] text-sm font-bold mt-4 hover:underline">Read Article</Link>
                        </div>

                        {/* Blog 3 */}
                        <div className="group cursor-pointer">
                            <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&auto=format&fit=crop&q=60" alt="Office" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <span className="text-[#4CAF50] text-xs font-bold uppercase tracking-widest">Case Study</span>
                            <h4 className="text-xl font-bold mt-2 mb-3 group-hover:text-[#C5A059] transition-colors line-clamp-2">Cost-Benefit Analysis of Sustainable Retrofitting</h4>
                            <p className="text-white/60 text-sm line-clamp-3">
                                Real-world data showing how energy efficiency upgrades can deliver ROI in under 3 years for existing commercial buildings.
                            </p>
                            <Link to="/insights" className="inline-flex items-center gap-2 text-[#4CAF50] text-sm font-bold mt-4 hover:underline">Read Article</Link>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />

            {/* SECTION: Video Feature (SGI) */}
            <section className="py-24 bg-[#030e0b] relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
                    <span className="text-[#C5A059] font-bold uppercase tracking-widest text-sm">Vision 2030</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white font-heading">
                        Leading the <span className="text-[#4CAF50]">Green Era</span>
                    </h2>
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                        Discover how the Saudi Green Initiative is reshaping our environment and economy for a sustainable future.
                        <br /><br />
                        Through the <span className="text-[#4CAF50] font-bold">Circular Carbon Economy (CCE)</span> approach, Saudi Arabia is pioneering new technologies to reduce emissions, increase renewable energy generation, and protect our natural ecosystems.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image 1: Renewable Energy */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=60" alt="Solar Energy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest bg-black/80 px-2 py-1 rounded">Energy</span>
                            </div>
                        </div>

                        {/* Image 2: Greening the Desert */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=60" alt="Nature" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-[#4CAF50] text-xs font-bold uppercase tracking-widest bg-black/80 px-2 py-1 rounded">Nature</span>
                            </div>
                        </div>

                        {/* Image 3: Future Cities */}
                        <div className="relative h-64 rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60" alt="Green City" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-widest bg-black/80 px-2 py-1 rounded">Future</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomeBody;
