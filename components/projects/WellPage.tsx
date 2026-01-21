import React from 'react';
import { Heart, Activity, Sun, Moon, Wind, Coffee, Music, Smile } from 'lucide-react';

const WellPage: React.FC = () => {
    return (
        <div className="bg-[#041612] min-h-screen text-white pt-24 pb-20">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-5xl md:text-6xl font-black mb-6 font-heading">
                    The <span className="text-blue-400">WELL</span> Standard
                </h1>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                    Putting people first. The WELL Building Standard focuses exclusively on the health and wellness of the people in buildings.
                </p>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#0E1528] rounded-3xl p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-blue-400 mb-4">Building for Wellness</h2>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    We spend 90% of our time indoors. WELL certification ensures that this time contributes to our health rather than detracting from it. From air quality to mental well-being, WELL revolutionizes the way we think about indoor spaces.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {["Air", "Water", "Nourishment", "Light", "Movement", "Thermal Comfort", "Sound", "Materials", "Mind", "Community"].map((concept) => (
                                    <span key={concept} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                                        {concept}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop" // Placeholder
                                    alt="WELL Certified Interior"
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#041612] to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Concepts Grid */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">10 Concepts of WELL</h2>
                    <div className="h-1 w-24 bg-blue-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[
                        { icon: Wind, title: "Air", color: "text-blue-400" },
                        { icon: Droplets, title: "Water", color: "text-blue-500" },
                        { icon: Coffee, title: "Nourishment", color: "text-green-400" },
                        { icon: Sun, title: "Light", color: "text-yellow-400" },
                        { icon: Activity, title: "Movement", color: "text-red-400" },
                        { icon: Sun, title: "Thermal", color: "text-orange-400" },
                        { icon: Music, title: "Sound", color: "text-purple-400" },
                        { icon: Activity, title: "Materials", color: "text-gray-400" },
                        { icon: Smile, title: "Mind", color: "text-pink-400" },
                        { icon: Heart, title: "Community", color: "text-teal-400" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                            <item.icon className={`w-8 h-8 mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform`} />
                            <h3 className="font-bold text-white/90">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
import { Droplets } from 'lucide-react'; // Added missing import

export default WellPage;
