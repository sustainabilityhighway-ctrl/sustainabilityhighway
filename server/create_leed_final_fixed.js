const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            
            <!-- Hero Section: Immersive Glassmorphism -->
            <section class="relative">
                <div class="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div class="space-y-12 relative z-10">
                    <p class="text-4xl leading-relaxed text-white font-black border-l-[12px] border-[#0ea5e9] pl-12 uppercase tracking-tighter italic max-w-4xl">
                        Universal Excellence. Recalibrated for Saudi Arabia’s next era of development.
                    </p>
                    
                    <div class="relative rounded-[5rem] overflow-hidden shadow-[0_0_150px_rgba(14,165,233,0.4)] border border-white/5 h-[850px] bg-[#020D0A]">
                        <img src="https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000&auto=format&fit=crop" alt="LEED Certification Saudi Arabia" class="w-full h-full object-cover opacity-90" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#041612] via-[#041612]/30 to-transparent flex flex-col justify-end p-24">
                            <div class="bg-black/60 backdrop-blur-[60px] p-24 rounded-[5rem] max-w-3xl border border-white/10 shadow-2xl relative">
                                <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#0ea5e9]/20 blur-3xl rounded-full"></div>
                                <div class="flex items-center gap-6 mb-8">
                                    <span class="w-16 h-[3px] bg-[#0ea5e9]"></span>
                                    <p class="text-[#0ea5e9] font-black text-sm uppercase tracking-[0.7em]">World-Record Sustainability</p>
                                </div>
                                <h1 class="text-white text-8xl font-black leading-[1.1] tracking-tighter">LEED: The Global <br/><span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent">Rating System</span></h1>
                                <p class="text-gray-300 font-bold mt-8 text-2xl leading-relaxed opacity-90">A high-performance framework for healthy, efficient, and cost-effective green buildings in the Kingdom.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Certification Tiers: Visual "Flower" / Star Icons -->
            <section class="space-y-20">
                <div class="text-center space-y-6">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">The Honors <span class="text-[#0ea5e9]">System</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.5em] text-xs font-black">Points & Recognition Matrix</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <!-- Platinum -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-b from-[#0ea5e9]/20 to-[#041612] border border-[#0ea5e9]/30 text-center space-y-8 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-32 h-32 mx-auto">
                            <!-- Flower/Star Icon CSS Mockup -->
                            <div class="absolute inset-0 bg-[#0ea5e9]/20 rounded-full animate-ping"></div>
                            <div class="relative w-full h-full bg-[#0ea5e9] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                                <div class="w-16 h-16 bg-white/20 rounded-xl rotate-45 border border-white/30"></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-3xl uppercase italic tracking-tighter">Platinum</h4>
                            <p class="text-[#0ea5e9] font-black text-4xl">80+</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Total Points Earned</p>
                        </div>
                    </div>
                    <!-- Gold -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-b from-[#C5A059]/20 to-[#041612] border border-[#C5A059]/30 text-center space-y-8 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-32 h-32 mx-auto">
                            <div class="relative w-full h-full bg-[#C5A059] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.5)]">
                                <div class="w-16 h-16 bg-white/20 rounded-xl rotate-45 border border-white/30"></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-3xl uppercase italic tracking-tighter">Gold</h4>
                            <p class="text-[#C5A059] font-black text-4xl">60–79</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Total Points Earned</p>
                        </div>
                    </div>
                    <!-- Silver -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-b from-slate-400/20 to-[#041612] border border-slate-400/30 text-center space-y-8 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-32 h-32 mx-auto">
                            <div class="relative w-full h-full bg-slate-400 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(148,163,184,0.5)]">
                                <div class="w-16 h-16 bg-white/20 rounded-xl rotate-45 border border-white/30"></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-3xl uppercase italic tracking-tighter">Silver</h4>
                            <p class="text-slate-400 font-black text-4xl">50–59</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Total Points Earned</p>
                        </div>
                    </div>
                    <!-- Certified -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-b from-emerald-500/20 to-[#041612] border border-emerald-500/30 text-center space-y-8 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-32 h-32 mx-auto">
                            <div class="relative w-full h-full bg-emerald-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                                <div class="w-16 h-16 bg-white/20 rounded-xl rotate-45 border border-white/30"></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-3xl uppercase italic tracking-tighter">Certified</h4>
                            <p class="text-emerald-500 font-black text-4xl">40–49</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Total Points Earned</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Detailed Section: Solar & Renewable Energy (Riyadh Specific) -->
            <section class="space-y-24">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div class="lg:col-span-12 relative h-[700px] rounded-[6rem] overflow-hidden border border-[#0ea5e9]/30 group">
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2500" alt="Solar Energy Panels Riyadh" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 shadow-2xl" />
                        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center p-24">
                            <div class="max-w-2xl space-y-10 bg-black/40 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/10">
                                <h3 class="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] italic italic">Solar Integration: <br/><span class="text-[#0ea5e9]">Riyadh Mandate</span></h3>
                                <p class="text-2xl text-gray-300 font-light leading-relaxed">
                                    In the Kingdom’s sun-drenched landscape, Energy & Atmosphere credits are earned through high-efficiency PV arrays and smart grid synchronization. Converting 50°C heat into clean power is the hallmark of a LEED-certified asset.
                                </p>
                                <div class="flex gap-10">
                                    <div class="space-y-2">
                                        <p class="text-4xl font-black text-[#0ea5e9] italic">35%</p>
                                        <p class="text-[10px] font-black text-white/40 uppercase tracking-widest">Off-Grid Offset</p>
                                    </div>
                                    <div class="h-12 w-px bg-white/10"></div>
                                    <div class="space-y-2">
                                        <p class="text-4xl font-black text-[#C5A059] italic">120kWp</p>
                                        <p class="text-[10px] font-black text-white/40 uppercase tracking-widest">Avg Panel Yield</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Rating Systems: Structural Refinement -->
            <section class="space-y-24">
                <div class="text-center space-y-8">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">Technical <span class="text-[#0ea5e9]">Taxonomy</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.5em] text-xs font-black">Rating System Selection Guidance</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- BD+C -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/40 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#0ea5e9]/5 blur-3xl rounded-full"></div>
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl">BD+C</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 italic uppercase">Building Design + Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For new construction or major renovations of various use types. The technical foundation of KAFD projects.</p>
                        <ul class="text-[10px] font-black text-[#0ea5e9]/60 uppercase tracking-widest space-y-2">
                            <li>• Core & Shell</li>
                            <li>• Healthcare</li>
                            <li>• Data Centers</li>
                        </ul>
                    </div>
                    <!-- ID+C -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/40 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group relative overflow-hidden">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl">ID+C</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 italic uppercase">Interior Design + Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For commercial interior fit-out projects with no scope for the exterior shell (e.g., Office Towers).</p>
                        <ul class="text-[10px] font-black text-[#0ea5e9]/60 uppercase tracking-widest space-y-2">
                            <li>• Retail Spaces</li>
                            <li>• Commercial Interiors</li>
                            <li>• Hospitality</li>
                        </ul>
                    </div>
                    <!-- O+M -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/40 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group relative overflow-hidden">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl">O+M</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4 italic uppercase">Operations + Maintenance</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">Optimizing operational efficiency for existing buildings occupied for at least one year.</p>
                        <ul class="text-[10px] font-black text-[#0ea5e9]/60 uppercase tracking-widest space-y-2">
                            <li>• Energy Audits</li>
                            <li>• Water Efficiency</li>
                            <li>• Waste Stream Audit</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- How LEED Works: Structural Matrix -->
            <section class="space-y-16">
                <div class="p-20 rounded-[6rem] bg-gradient-to-br from-[#0ea5e9]/10 to-[#041612] border border-[#0ea5e9]/30 relative overflow-hidden">
                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div class="space-y-12">
                            <h2 class="text-6xl font-black text-white tracking-tighter uppercase leading-none italic">The Certification <br/><span class="text-[#0ea5e9]">Mechanics</span></h2>
                            <div class="w-32 h-3 bg-[#0ea5e9] rounded-full"></div>
                            <p class="text-2xl font-light text-gray-400 leading-relaxed font-heading">
                                LEED addresses everything from energy and water use to materials selection, managing waste, and indoor environmental quality. Projects go through a rigorous verification by GBCI to ensure data integrity.
                            </p>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="p-12 bg-black/40 backdrop-blur-xl rounded-[4rem] border border-white/5 space-y-10 group">
                                <h5 class="text-white font-black text-2xl mb-4 uppercase italic">Implementation Pipeline</h5>
                                <div class="space-y-10">
                                    <div class="flex gap-8 items-start">
                                        <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-[#0ea5e9]/20 font-black text-[#0ea5e9]">01</div>
                                        <p class="text-gray-300 text-lg font-bold">Register project in Arc or LEED Online based on version (v4.1/v5).</p>
                                    </div>
                                    <div class="flex gap-8 items-start">
                                        <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-[#0ea5e9]/20 font-black text-[#0ea5e9]">02</div>
                                        <p class="text-gray-300 text-lg font-bold">Choose credits from the LEED Credit Library that align with Saudi priorities.</p>
                                    </div>
                                    <div class="flex gap-8 items-start">
                                        <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center shrink-0 border border-[#0ea5e9]/20 font-black text-[#0ea5e9]">03</div>
                                        <p class="text-gray-300 text-lg font-bold">Submit comprehensive documentation for review by the Green Business Certification Inc. (GBCI).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technical Conclusion: Pro-Level Close -->
            <section class="py-40 relative text-center">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/10 to-transparent pointer-events-none"></div>
                <div class="max-w-5xl mx-auto space-y-16 relative z-10">
                    <div class="space-y-8">
                        <h2 class="text-8xl font-black text-white tracking-tighter uppercase leading-none italic">The Green <span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent">Mandate</span></h2>
                        <div class="w-48 h-2.5 bg-[#0ea5e9] mx-auto rounded-full"></div>
                    </div>
                    
                    <div class="space-y-12 text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
                        <p>
                            LEED is more than a plaque on the wall; it is the non-negotiable benchmark for international real estate trust. As the Kingdom leads the global energy transition, LEED provides the engineering rigor and verification necessary to build a truly sustainable legacy.
                        </p>
                        <p>
                            From the skyscrapers of Riyadh to the coastal resorts of the Red Sea, LEED certification ensures that our vision for a green future is measurable, verifiable, and permanent.
                        </p>
                    </div>

                    <div class="pt-24">
                        <div class="inline-block p-20 bg-gradient-to-br from-[#0c4a6e] to-[#041612] border border-[#0ea5e9]/40 rounded-[6rem] shadow-[0_60px_120px_rgba(14,165,233,0.4)] relative">
                             <div class="absolute -top-10 -left-10 w-24 h-24 bg-[#0ea5e9]/20 blur-2xl rounded-full"></div>
                             <p class="text-white font-black text-5xl uppercase tracking-tighter mb-4 italic">Sustainability Highway</p>
                             <p class="text-[#0ea5e9] text-[13px] font-black uppercase tracking-[0.8em]">Engineering the Future of KSA</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED Rating System: The Definitive Guide to Global Green Building in KSA',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'LEED Rating System Guide 2024 | Official USGBC Structure | KSA Perspective',
        meta_description: 'Complete technical breakdown of LEED rating systems (BD+C, ID+C, O+M). Learn about certification levels (Platinum, Gold, Silver), points requirements, and the GBCI verification process for Saudi projects.',
        faq_data: JSON.stringify([
            { question: "What are the LEED certification levels and points?", answer: "LEED has four levels: Platinum (80+ pts), Gold (60-79 pts), Silver (50-59 pts), and Certified (40-49 pts)." },
            { question: "How does LEED handle solar energy in Saudi Arabia?", answer: "It rewards innovative PV integration and smart heat rejection strategies to minimize energy loads in extreme desert temperatures." },
            { question: "What is the certification process by GBCI?", answer: "The process involves project registration, credit documentation, submission to GBCI for technical review, and final award of points and certification levels." },
            { question: "Which LEED system is best for office fit-outs in Riyadh Towers?", answer: "LEED ID+C (Interior Design and Construction) is the industry standard for commercial interior fit-out projects." },
            { question: "What are LEED MPRs?", answer: "Minimum Program Requirements (MPRs) are the baseline eligibility criteria that every project must meet to be considered for LEED certification." },
            { question: "Can existing buildings in Jeddah get LEED?", answer: "Yes, via the LEED O+M (Operations and Maintenance) rating system, which focuses on actual performance metrics of existing assets." },
            { question: "What is the difference between LEED v4.1 and v5?", answer: "LEED v5 is the latest version focusing on even deeper decarbonization and human health, while v4.1 is the most widely adopted current standard globally." },
            { question: "Does LEED support Saudi Vision 2030?", answer: "Absolutely. Its focus on efficiency, human experience, and net-zero targets directly aligns with the Kingdom's sustainability and economic diversification goals." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED Rating System: The Definitive Guide to Global Green Building in KSA",
            "description": "High-authority technical guide following the official USGBC structure for LEED certification in Saudi Arabia.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000',
        excerpt: 'Master the world’s most widely recognized green building rating system. This guide dissects BD+C, ID+C, and O+M frameworks with a specific focus on their implementation in the Kingdom’s giga-projects.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article to Official Corrected Standard (Flower Icons, Solar Fix, Conclusion)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Official Corrected LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
