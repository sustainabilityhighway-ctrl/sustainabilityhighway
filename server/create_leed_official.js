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
                    
                    <div class="relative rounded-[5rem] overflow-hidden shadow-[0_0_120px_rgba(14,165,233,0.3)] border border-white/5 h-[800px] bg-[#020D0A]">
                        <img src="https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000&auto=format&fit=crop" alt="LEED Certification Saudi Arabia" class="w-full h-full object-cover opacity-80" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#041612] via-[#041612]/30 to-transparent flex flex-col justify-end p-24">
                            <div class="bg-black/40 backdrop-blur-[40px] p-20 rounded-[5rem] max-w-3xl border border-white/10 shadow-2xl">
                                <div class="flex items-center gap-6 mb-8">
                                    <span class="w-16 h-[3px] bg-[#0ea5e9]"></span>
                                    <p class="text-[#0ea5e9] font-black text-sm uppercase tracking-[0.6em]">World-Record Sustainability</p>
                                </div>
                                <h1 class="text-white text-7xl font-black leading-[1.1] tracking-tighter">LEED: The Global <br/><span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent">Rating System</span></h1>
                                <p class="text-gray-300 font-bold mt-8 text-2xl leading-relaxed opacity-80">A holistic framework for healthy, efficient, and cost-effective green buildings in the Kingdom.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Introduction Section -->
            <section class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div class="lg:col-span-8 space-y-12">
                    <div class="space-y-6">
                        <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none">Healthy & <br/><span class="text-[#0ea5e9]">Efficient</span></h2>
                        <div class="w-40 h-2.5 bg-gradient-to-r from-[#0ea5e9] to-transparent rounded-full"></div>
                    </div>
                    
                    <div class="space-y-10 text-2xl leading-relaxed text-gray-400 font-light font-heading">
                        <p>
                            LEED is the most widely recognized green building rating system in the world. Certification offers a technical framework for healthy, efficient, and cost-effective green buildings, providing profound environmental and social benefits.
                        </p>
                        <p>
                            It serves as a globally recognized symbol of sustainability leadership, supported by a committed community of organizations and individuals driving market transformation across Saudi Arabia's urban landscape.
                        </p>
                    </div>
                </div>
                
                <div class="lg:col-span-4 sticky top-40">
                    <div class="p-12 rounded-[4rem] bg-gradient-to-br from-[#0ea5e9]/20 to-[#0c4a6e]/40 backdrop-blur-2xl border border-[#0ea5e9]/30 shadow-2xl space-y-10">
                        <div class="flex items-center gap-3">
                            <div class="w-3 h-3 rounded-full bg-[#0ea5e9] animate-pulse"></div>
                            <h4 class="text-white font-black uppercase tracking-[0.3em] text-xs">Certification Levels</h4>
                        </div>
                        <div class="space-y-8">
                            <div class="group">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-white font-black text-xl italic group-hover:text-[#0ea5e9] transition-colors">Platinum</span>
                                    <span class="text-[#0ea5e9] font-black text-lg">80+ pts</span>
                                </div>
                                <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div class="h-full w-full bg-[#0ea5e9]"></div>
                                </div>
                                <p class="text-[9px] text-white/40 uppercase mt-2 font-black tracking-widest">Valuable & Elite</p>
                            </div>
                            <div class="group">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-white font-black text-xl italic group-hover:text-yellow-400 transition-colors">Gold</span>
                                    <span class="text-yellow-400 font-black text-lg">60+ pts</span>
                                </div>
                                <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div class="h-full w-[75%] bg-yellow-400"></div>
                                </div>
                                <p class="text-[9px] text-white/40 uppercase mt-2 font-black tracking-widest">Highly Sustainable</p>
                            </div>
                            <div class="group">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-white font-black text-xl italic group-hover:text-slate-400 transition-colors">Silver</span>
                                    <span class="text-slate-400 font-black text-lg">50+ pts</span>
                                </div>
                                <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div class="h-full w-[60%] bg-slate-400"></div>
                                </div>
                                <p class="text-[9px] text-white/40 uppercase mt-2 font-black tracking-widest">Flexible Framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Rating Systems Grid: Sky Blue Style -->
            <section class="space-y-24">
                <div class="text-center space-y-8">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">All Building <span class="text-[#0ea5e9]">Phases</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.5em] text-xs font-black">Tailored systems for every project type in KSA</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- BD+C -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">BD+C</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Building Design + Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For new construction or major renovations of various use types including core and shell.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Primary Engineering
                        </div>
                    </div>
                    <!-- ID+C -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">ID+C</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Interior Design + Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For complete commercial interior fit-out projects with no scope for the exterior shell or site.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Fit-Out Focused
                        </div>
                    </div>
                    <!-- O+M -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">O+M</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Operations + Maintenance</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For existing buildings that have been fully operational and occupied for at least one year.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Performance Audit
                        </div>
                    </div>
                    <!-- Neighborhoods -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">ND</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Neighborhood Development</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For new land development projects or redevelopments from conceptual planning to construction.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Urban Scale
                        </div>
                    </div>
                    <!-- Residential -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">RES</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Residential</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">Specialized design and construction for high-performance residential homes and townhouses.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Home Precision
                        </div>
                    </div>
                    <!-- Cities -->
                    <div class="p-12 rounded-[5rem] bg-gradient-to-br from-[#0c4a6e]/20 to-[#041612] border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/60 transition-all group">
                        <div class="w-20 h-20 bg-[#0ea5e9]/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <span class="text-[#0ea5e9] font-black text-2xl italic">CITY</span>
                        </div>
                        <h4 class="text-white font-black text-2xl mb-4">Cities</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-8">For entire cities to manage water consumption, energy use, waste, and human experience.</p>
                        <div class="flex items-center gap-3 text-[10px] font-black text-[#0ea5e9] uppercase tracking-[0.3em]">
                            <span class="h-px w-8 bg-[#0ea5e9]"></span> Vision 2030 Ready
                        </div>
                    </div>
                </div>
            </section>

            <!-- How LEED Works: Process Section -->
            <section class="space-y-16">
                <div class="p-20 rounded-[6rem] bg-gradient-to-br from-[#0ea5e9]/10 to-[#041612] border border-[#0ea5e9]/30 relative overflow-hidden">
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0ea5e9]/10 blur-[100px] rounded-full"></div>
                    <div class="relative z-10 space-y-20">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div class="space-y-12">
                                <h2 class="text-6xl font-black text-white tracking-tighter uppercase leading-none italic">The Certification <br/>Strategy</h2>
                                <div class="w-32 h-3 bg-[#0ea5e9] rounded-full"></div>
                                <div class="space-y-10 text-2xl font-light text-gray-400 leading-relaxed">
                                    <p>LEED is holistic. It addresses everything from energy and water use to materials selection, managing waste, and indoor environmental quality.</p>
                                    <p>To achieve certification, a project must first complete all **Prerequisites** and then earn points corresponding to a level: Certified, Silver, Gold, or Platinum.</p>
                                </div>
                            </div>
                            
                            <div class="space-y-6">
                                <div class="p-10 bg-black/40 backdrop-blur-xl rounded-[4rem] border border-white/5 space-y-6 hover:border-[#0ea5e9]/40 transition-all">
                                    <h5 class="text-white font-black text-xl mb-4 uppercase">The Process</h5>
                                    <div class="space-y-8">
                                        <div class="flex gap-6 items-center">
                                            <span class="p-4 bg-[#0ea5e9]/10 rounded-2xl text-[#0ea5e9] font-black text-sm">01</span>
                                            <p class="text-gray-400 text-sm font-bold">Register project in Arc or LEED Online.</p>
                                        </div>
                                        <div class="flex gap-6 items-center">
                                            <span class="p-4 bg-[#0ea5e9]/10 rounded-2xl text-[#0ea5e9] font-black text-sm">02</span>
                                            <p class="text-gray-400 text-sm font-bold">Build the LEED scorecard from the Credit Library.</p>
                                        </div>
                                        <div class="flex gap-6 items-center">
                                            <span class="p-4 bg-[#0ea5e9]/10 rounded-2xl text-[#0ea5e9] font-black text-sm">03</span>
                                            <p class="text-gray-400 text-sm font-bold">Document achievement and submit for GBCI review.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Resources & Library Section -->
            <section class="space-y-32">
                <div class="text-center space-y-8">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">Technical <span class="text-[#0ea5e9]">Anchors</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.5em] text-sm font-black italic">Essential tools for the sustainability professional</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="p-16 rounded-[5rem] bg-[#051C17] border border-white/5 space-y-8 hover:bg-[#0c4a6e]/20 transition-all group">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-2 h-12 bg-[#0ea5e9] rounded-full"></span>
                            <h4 class="text-white font-black text-4xl group-hover:text-[#0ea5e9] transition-colors italic">MPRs</h4>
                        </div>
                        <p class="text-gray-400 text-xl font-light leading-relaxed">Minimum Program Requirements define whether your building type is eligible to achieve a LEED rating.</p>
                        <button class="px-8 py-3 bg-[#0ea5e9]/10 rounded-full text-[#0ea5e9] text-[10px] font-black uppercase tracking-widest border border-[#0ea5e9]/20">Explore Library</button>
                    </div>
                    <div class="p-16 rounded-[5rem] bg-[#051C17] border border-white/5 space-y-8 hover:bg-[#0c4a6e]/20 transition-all group">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-2 h-12 bg-[#C5A059] rounded-full"></span>
                            <h4 class="text-white font-black text-4xl group-hover:text-[#C5A059] transition-colors italic">Reference Guides</h4>
                        </div>
                        <p class="text-gray-400 text-xl font-light leading-relaxed">Comprehensive instruction manuals providing in-depth explanations of each credit and prerequisite.</p>
                        <button class="px-8 py-3 bg-[#C5A059]/10 rounded-full text-[#C5A059] text-[10px] font-black uppercase tracking-widest border border-[#C5A059]/20">View v4.1 Guides</button>
                    </div>
                </div>
            </section>

            <!-- Final Immersive Call to Action -->
            <section class="py-40 relative">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0ea5e9]/5 rounded-[8rem] pointer-events-none"></div>
                <div class="max-w-4xl mx-auto text-center space-y-16 relative z-10">
                    <h2 class="text-8xl font-black text-white tracking-tighter uppercase leading-none">Architecting <span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent">Purity</span></h2>
                    <div class="w-40 h-2.5 bg-[#0ea5e9] mx-auto rounded-full"></div>
                    
                    <div class="space-y-10 text-2xl text-gray-400 leading-relaxed font-light">
                        <p>
                            LEED is powered by comprehensive education designed to equip you with the skills needed to design, build, and operate a future-proof Saudi Arabia.
                        </p>
                    </div>

                    <div class="pt-12">
                        <div class="inline-block p-16 bg-gradient-to-br from-[#0c4a6e] to-[#041612] border border-[#0ea5e9]/40 rounded-[5rem] shadow-[0_40px_80px_rgba(14,165,233,0.3)]">
                            <p class="text-white font-black text-4xl uppercase tracking-tighter">Sustainability Highway</p>
                            <p class="text-[#0ea5e9] text-[12px] font-black uppercase tracking-[0.6em] mt-3">Leading the Global Green Shift</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'The LEED Rating System: A Complete Technical Guide',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'LEED Rating System Guide 2024: Official Technical Roadmap',
        meta_description: 'Master the LEED rating system. Explore BD+C, ID+C, O+M, and Cities. A complete roadmap to certification levels and technical prerequisites for Saudi developers.',
        faq_data: JSON.stringify([
            { question: "What are the different LEED rating systems?", answer: "LEED offers specialized systems for all building phases: BD+C (New Construction), ID+C (Interiors), O+M (Existing Buildings), ND (Neighborhoods), Residential, and Cities." },
            { question: "How is LEED certification achieved?", answer: "Projects must complete all prerequisites and earn points across credit categories like energy, water, and indoor quality, followed by a GBCI verification process." },
            { question: "What are the four levels of LEED certification?", answer: "The four levels are Certified (40-49 pts), Silver (50-59 pts), Gold (60-79 pts), and Platinum (80+ pts)." },
            { question: "What are Minimum Program Requirements (MPRs)?", answer: "MPRs are eligibility criteria that determine if a building type is suitable for LEED evaluation." },
            { question: "Can a city be LEED certified?", answer: "Yes, LEED for Cities allows entire urban sections to measure and manage water, energy, waste, and human experience metrics." },
            { question: "Where can I find details on specific credits?", answer: "The LEED Credit Library is the central resource for understanding compliance paths and point distributions for every version of the standard." },
            { question: "What is the difference between BD+C and O+M?", answer: "BD+C is for the design and construction of new buildings or major renovations. O+M is for buildings that have been operational for at least one year." },
            { question: "Is LEED recognized in Saudi Arabia?", answer: "Yes, it is the most widely recognized international green building standard in the Kingdom and is frequently used alongside Mostadam." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The LEED Rating System: A Complete Technical Guide",
            "description": "Comprehensive guide to LEED rating systems including BD+C, ID+C, and O+M certification pathways.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000',
        excerpt: 'The non-negotiable anchor for international real estate trust. This ultra-professional guide dissects the technical requirements and economic amplifiers of LEED certification in Saudi Arabia.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article to Official Structural Standard (Sky Blue / Azure Theme)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Official Structural LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
