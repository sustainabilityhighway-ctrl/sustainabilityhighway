import React from 'react';
import { TreeDeciduous, Wind, CloudSun, Map, Sprout, Heart } from 'lucide-react';

const GreenRiyadhPage: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    <span className="text-[#4CAF50]">Green Riyadh</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    One of the world's most ambitious urban forestation projects, transforming the capital into a sustainable, green metropolis in line with Vision 2030.
                </p>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0B2B24] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-[#4CAF50] mb-4">A Greener Capital</h2>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    The Green Riyadh project aims to plant <span className="text-[#4CAF50] font-bold">7.5 million trees</span> across the city. This initiative will not only beautify the urban landscape but also significantly improve air quality, reduce ambient temperature, and encourage a healthy lifestyle for all residents.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "7.5 Million Trees to be Planted",
                                    "Increase Green Space per Capita from 1.7m² to 28m²",
                                    "Recycle 1 Million m³ of Water Daily for Irrigation",
                                    "Improve Air Quality & Reduce Temperatures"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Sprout className="text-[#4CAF50] w-6 h-6 flex-shrink-0" />
                                        <span className="text-white/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1596627689907-8e6ad7112319?w=800&auto=format&fit=crop"
                                    alt="Green Riyadh Park"
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#041612] to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Categories */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Project Impact</h2>
                    <div className="h-1 w-24 bg-[#4CAF50] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: TreeDeciduous, title: "Urban Afforestation", desc: "Planting trees in parks, gardens, schools, mosques, and along streets." },
                        { icon: Wind, title: "Air Quality", desc: "Reducing CO2 levels and filtering dust to create a cleaner environment." },
                        { icon: CloudSun, title: "Temperature Reduction", desc: "lowering ambient temperature by 2°C to 8°C through shading and transpiration." },
                        { icon: Map, title: "Connectivity", desc: "Creating a network of green pathways and cycling tracks across the city." },
                        { icon: Heart, title: "Quality of Life", desc: "Providing accessible green spaces for recreation and physical activity." },
                        { icon: Sprout, title: "Water Sustainability", desc: "Using recycled water networks for 100% of irrigation needs." }
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

export default GreenRiyadhPage;
