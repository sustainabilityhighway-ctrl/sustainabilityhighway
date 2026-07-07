const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            
            <!-- Hero Section -->
            <section class="relative">
                <div class="absolute -top-24 -right-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div class="space-y-12 relative z-10">
                    <p class="text-4xl leading-relaxed text-white font-black border-l-[12px] border-[#C5A059] pl-12 uppercase tracking-tighter italic max-w-4xl">
                        The global benchmark for sustainable architecture, recalibrated for Saudi Arabia’s next era.
                    </p>
                    
                    <div class="relative rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5 h-[700px] bg-[#020D0A]">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="LEED Certification Saudi Arabia" class="w-full h-full object-cover opacity-70" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#041612] via-[#041612]/20 to-transparent flex flex-col justify-end p-20">
                            <div class="bg-[#051C17]/90 backdrop-blur-xl p-16 rounded-[4rem] max-w-2xl border border-white/10 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <span class="w-12 h-[2px] bg-[#C5A059]"></span>
                                    <p class="text-[#C5A059] font-black text-sm uppercase tracking-[0.5em]">Global Standards</p>
                                </div>
                                <h1 class="text-white text-6xl font-black leading-tight tracking-tighter">LEED Certification: <br/><span class="text-[#C5A059]">The Saudi Guide</span></h1>
                                <p class="text-gray-400 font-bold mt-6 text-xl leading-relaxed">Mastering the world's most recognized green building standard within the Kingdom's regulatory landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Table of Contents / Executive Summary -->
            <section class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div class="lg:col-span-8 space-y-10">
                    <div class="space-y-4">
                        <h2 class="text-6xl font-black text-white tracking-tighter uppercase leading-none">The Gold Standard</h2>
                        <div class="w-24 h-2 bg-[#C5A059] rounded-full"></div>
                    </div>
                    
                    <div class="space-y-8 text-xl leading-relaxed text-gray-300 font-light">
                        <p>
                            While local frameworks like Mostadam are critical for policy compliance, **LEED (Leadership in Energy and Environmental Design)** remains the "Global Passport" for sustainable real estate. In Saudi Arabia, achieving LEED certification isn't just about environmental stewardship; it's a strategic move to attract international capital, secure premium tenants, and align with the hyper-modern mandates of <strong>Saudi Vision 2030</strong>.
                        </p>
                        <p>
                            From the skyscrapers of Riyadh's King Abdullah Financial District (KAFD) to the sustainable resorts of the Red Sea, LEED provides a universal metric for performance. However, applying LEED v4.1 in the extreme desert climates of the Arabian Peninsula requires a sophisticated technical approach. 
                        </p>
                        <p>
                            In this definitive guide, we explore the technical anatomy of LEED certification in Saudi Arabia. We will break down the scoring system, analyze the regional adaptations for energy and water, and provide a roadmap for developers aiming for the coveted **Platinum** status.
                        </p>
                    </div>
                </div>
                
                <div class="lg:col-span-4 sticky top-32">
                    <div class="p-10 rounded-[3rem] bg-[#051C17] border border-[#C5A059]/20 space-y-8">
                        <h4 class="text-[#C5A059] font-black uppercase tracking-widest text-sm">Framework Tiers</h4>
                        <div class="space-y-6">
                            <div class="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                                <span class="text-white font-black">Platinum</span>
                                <span class="text-[#C5A059] font-black">80+ Pts</span>
                            </div>
                            <div class="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                                <span class="text-white font-black">Gold</span>
                                <span class="text-yellow-500 font-black">60+ Pts</span>
                            </div>
                            <div class="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                                <span class="text-white font-black">Silver</span>
                                <span class="text-slate-400 font-black">50+ Pts</span>
                            </div>
                            <div class="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                                <span class="text-white font-black">Certified</span>
                                <span class="text-emerald-500 font-black">40+ Pts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technical Pillar 1: Thermal Performance -->
            <section class="space-y-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="relative order-2 lg:order-1">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" alt="Energy Efficiency Tech" class="rounded-[4rem] shadow-2xl border border-white/10" />
                        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[80px] -z-10"></div>
                    </div>
                    <div class="space-y-8 order-1 lg:order-2">
                        <h3 class="text-5xl font-black text-white tracking-tighter uppercase leading-tight">Energy & Atmosphere <br/><span class="text-[#C5A059]">The Cooling Challenge</span></h3>
                        <p class="text-xl text-gray-400 font-light leading-relaxed">
                            In Saudi Arabia, cooling accounts for over 70% of a building's energy consumption. LEED v4.1 pushes developers to think beyond standard HVAC systems, rewarding "Passive First" architectural strategies.
                        </p>
                        <div class="space-y-6">
                            <div class="flex gap-6 items-start">
                                <div class="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                                    <span class="text-[#C5A059] font-black">E</span>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-2">High-Performance Envelopes</h5>
                                    <p class="text-gray-500 text-sm italic">Utilizing triple-glazing and thermal breaks to prevent Riyadh's 48°C heat from infiltrating internal spaces.</p>
                                </div>
                            </div>
                            <div class="flex gap-6 items-start">
                                <div class="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                                    <span class="text-[#C5A059] font-black">S</span>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-2">District Cooling Sync</h5>
                                    <p class="text-gray-500 text-sm italic">Integrating with centralized cooling grids for up to 40% higher efficiency than standalone chillers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- The Technical Categories Grid -->
            <section class="space-y-20">
                <div class="text-center space-y-6">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase">The LEED Scorecard</h2>
                    <p class="text-gray-500 uppercase tracking-widest text-sm font-black">Strategic point allocation for the Saudi market</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- Category 1 -->
                    <div class="p-12 rounded-[3.5rem] bg-[#051C17] border border-white/5 group hover:border-[#C5A059]/40 transition-all">
                        <div class="w-16 h-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center mb-8">
                            <span class="text-[#C5A059] font-black text-2xl">W</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 group-hover:text-[#C5A059] transition-colors">Water Efficiency</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">Critical in the GCC. Rewarding drought-tolerant native plants and greywater recycling systems that minimize potable water dependency.</p>
                        <ul class="space-y-3 text-[10px] font-black text-[#C5A059] uppercase tracking-widest">
                            <li>• Zero Irrigation</li>
                            <li>• Cooling Tower Water</li>
                            <li>• Metering Systems</li>
                        </ul>
                    </div>
                    <!-- Category 2 -->
                    <div class="p-12 rounded-[3.5rem] bg-[#051C17] border border-white/5 group hover:border-[#C5A059]/40 transition-all">
                        <div class="w-16 h-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center mb-8">
                            <span class="text-[#C5A059] font-black text-2xl">M</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 group-hover:text-[#C5A059] transition-colors">Materials & Resources</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">Encouraging the use of locally harvested materials and sustainable concrete mixes with lower embodied carbon.</p>
                        <ul class="space-y-3 text-[10px] font-black text-[#C5A059] uppercase tracking-widest">
                            <li>• Embodied Carbon</li>
                            <li>• Waste Diversion</li>
                            <li>• Lifecycle Assessment</li>
                        </ul>
                    </div>
                    <!-- Category 3 -->
                    <div class="p-12 rounded-[3.5rem] bg-[#051C17] border border-white/5 group hover:border-[#C5A059]/40 transition-all">
                        <div class="w-16 h-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center mb-8">
                            <span class="text-[#C5A059] font-black text-2xl">I</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 group-hover:text-[#C5A059] transition-colors">Indoor Quality</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">Focusing on occupant productivity through high-quality daylighting, acoustic comfort, and superior air filtration.</p>
                        <ul class="space-y-3 text-[10px] font-black text-[#C5A059] uppercase tracking-widest">
                            <li>• Low-VOC Finishes</li>
                            <li>• Thermal Comfort</li>
                            <li>• Air Monitoring</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Interactive Section: Why LEED? -->
            <section class="bg-[#051C17] rounded-[5rem] overflow-hidden border border-white/5 relative">
                <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#C5A059 1px, transparent 1px); background-size: 30px 30px;"></div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                    <div class="p-20 space-y-10 relative z-10">
                        <h2 class="text-5xl font-black text-white tracking-tighter uppercase leading-tight">Economic <span class="text-[#C5A059]">Integrity</span></h2>
                        <div class="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                            <p>
                                LEED certification is no longer a "luxury add-on." In the Riyadh office market, LEED-certified buildings have shown a <strong>15% increase in property value</strong> and up to <strong>20% higher rental rates</strong> compared to non-certified peers.
                            </p>
                            <p>
                                For global corporations like Google, Amazon, and Lucid Motors entering the Saudi market, a LEED certificate is often a non-negotiable requirement for their headquarters. It serves as an immediate verification of a building's operational efficiency and corporate alignment.
                            </p>
                        </div>
                        <div class="pt-8 flex gap-8">
                            <div class="text-center">
                                <p class="text-4xl font-black text-white italic">25%</p>
                                <p class="text-[9px] font-black text-[#C5A059] uppercase tracking-widest mt-2">OpEx Savings</p>
                            </div>
                            <div class="h-16 w-[1px] bg-white/10"></div>
                            <div class="text-center">
                                <p class="text-4xl font-black text-white italic">12%</p>
                                <p class="text-[9px] font-black text-[#C5A059] uppercase tracking-widest mt-2">Higher Yields</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative min-h-[500px]">
                        <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000" alt="Urban Sustainability" class="w-full h-full object-cover grayscale" />
                        <div class="absolute inset-0 bg-gradient-to-l from-[#051C17] to-transparent"></div>
                    </div>
                </div>
            </section>

            <!-- LEED vs Mostadam (The Dual Certification Strategy) -->
            <section class="space-y-16">
                <div class="max-w-4xl space-y-6">
                    <h2 class="text-5xl font-black text-white tracking-tighter uppercase">The Dual Approach</h2>
                    <p class="text-gray-500 text-xl font-light">Why any leading Saudi developer should pursue both LEED and Mostadam simultaneously.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="p-12 rounded-[3rem] bg-gradient-to-br from-[#111] to-[#041612] border border-white/5 space-y-8">
                        <div class="flex items-center justify-between">
                            <h4 class="text-2xl font-black text-white uppercase italic">LEED</h4>
                            <span class="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em]">Global Recognition</span>
                        </div>
                        <p class="text-gray-400 font-medium">LEED acts as the investor-facing standard. It ensures that global ESG funds and multinational tenants recognize the asset's sustainability credentials immediately.</p>
                    </div>
                    <div class="p-12 rounded-[3rem] bg-[#051C17] border border-[#C5A059]/20 space-y-8">
                        <div class="flex items-center justify-between">
                            <h4 class="text-2xl font-black text-white uppercase italic text-[#C5A059]">Mostadam</h4>
                            <span class="text-gray-500 text-[9px] font-black uppercase tracking-[0.4em]">Local Compliance</span>
                        </div>
                        <p class="text-gray-400 font-medium">Mostadam ensures baseline regulatory alignment with MOMRAH and the Saudi Building Code, focusing on culturally specific and local resource mandates.</p>
                    </div>
                </div>
            </section>

            <!-- Professional Conclusion -->
            <section class="py-32 relative text-center">
                <div class="max-w-4xl mx-auto space-y-12 relative z-10">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase leading-none">The Future is <br/>Certified</h2>
                    <div class="w-40 h-2 bg-[#C5A059] mx-auto rounded-full"></div>
                    
                    <div class="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
                        <p>
                            LEED certification in Saudi Arabia is a testament to the Kingdom's commitment to excellence and innovation. As we build the cities of tomorrow—Riyadh, Jeddah, and the mega-projects of the Red Sea—LEED provides the framework to ensure these monuments are as efficient as they are iconic.
                        </p>
                        <p>
                            By embracing international standards while respecting local constraints, Saudi developers are not just building real estate; they are architecting a sustainable legacy for future generations.
                        </p>
                    </div>

                    <div class="pt-12">
                        <div class="inline-block p-12 bg-[#051C17] border border-[#C5A059]/30 rounded-[4rem] shadow-2xl">
                            <p class="text-[#C5A059] font-black text-3xl uppercase tracking-tighter">Sustainability Highway</p>
                            <p class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Archiving Global Excellence in KSA</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED Certification in Saudi Arabia: The Ultimate Technical Guide',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'LEED Certification Saudi Arabia 2024: Professional Technical Guide',
        meta_description: 'A comprehensive technical guide to LEED certification in Saudi Arabia. Learn about LEED v4.1 adaptations for Riyadh, Jeddah, and Neom, including energy and water efficiency.',
        faq_data: JSON.stringify([
            { question: "Is LEED or Mostadam better for Saudi projects?", answer: "Neither is 'better' - they serve different purposes. Mostadam ensures local regulatory compliance, while LEED provides global recognition for international investors and tenants." },
            { question: "How much does LEED certification cost in KSA?", answer: "Costs vary by project size, but typically range from $10,000 to $50,000 for registration and certification fees, plus consultancy costs for energy modeling and documentation." },
            { question: "What LEED level is required for Saudi government projects?", answer: "While specific requirements vary, most Tier-1 projects like those in NEOM and the Red Sea target LEED Platinum or Gold as a baseline." },
            { question: "Can existing buildings in Riyadh get LEED certified?", answer: "Yes, via the LEED for Operations and Maintenance (O+M) pathway, which focuses on actual performance data like energy bills and water consumption." },
            { question: "What is the biggest challenge for LEED in Saudi Arabia?", answer: "Energy efficiency (cooling) and water scarcity are the primary technical hurdles. Adapting ASHRAE standards to the 50°C summer heat requires advanced facade engineering." },
            { question: "How many LEED buildings are there in Saudi Arabia?", answer: "The Kingdom is one of the fastest-growing markets for LEED in the Middle East, with KAFD in Riyadh housing one of the world's highest concentrations of LEED Platinum buildings." },
            { question: "Does LEED reward water recycling?", answer: "Absolutely. LEED v4.1 heavily rewards the reuse of non-potable water for irrigation and toilet flushing, which is essential in the GCC region." },
            { question: "What is the ROI on a LEED-certified building in KSA?", answer: "Developers typically see a ROI within 3-7 years through utility savings and increased rental premiums of up to 15%." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED Certification in Saudi Arabia: The Ultimate Technical Guide",
            "description": "Professional technical guide exploring the implementation of LEED standards in Saudi Arabia's building sector.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
        excerpt: 'A masterclass in global sustainability standards adapted for the GCC. Explore the technical requirements, economic benefits, and step-by-step roadmap to LEED certification in the Kingdom.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article to Professional Standard (1500+ words)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Professional LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
