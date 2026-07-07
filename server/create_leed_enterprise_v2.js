const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            
            <!-- FIXED HERO SECTION: Higher Clarity & Impact -->
            <section class="relative">
                <div class="absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#0ea5e9]/20 rounded-full blur-[180px] pointer-events-none"></div>
                <div class="space-y-12 relative z-10">
                    <div class="flex items-center gap-4 mb-2">
                        <span class="w-12 h-0.5 bg-[#0ea5e9]"></span>
                        <p class="text-[#0ea5e9] font-black text-xs uppercase tracking-[0.8em]">Elite Executive Intelligence</p>
                    </div>
                    <p class="text-5xl leading-tight text-white font-black border-l-[16px] border-[#0ea5e9] pl-16 uppercase tracking-tighter italic max-w-5xl">
                        Universal Excellence. Engineering the sustainable DNA of the Saudi Metropolis.
                    </p>
                    
                    <div class="relative rounded-[6rem] overflow-hidden shadow-[0_40px_150px_rgba(0,0,0,0.9)] border border-white/10 h-[850px] bg-[#020D0A]">
                        <!-- New High-Response Image -->
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="LEED Architecture KSA" class="w-full h-full object-cover opacity-100 block transition-opacity duration-1000" id="hero-image" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[#041612] via-transparent to-transparent"></div>
                        <div class="absolute bottom-16 left-16 right-16">
                            <div class="bg-black/60 backdrop-blur-[80px] p-24 rounded-[5rem] border border-white/20 shadow-2xl relative">
                                <h1 class="text-white text-8xl font-black leading-[1] tracking-tighter">LEED <br/><span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent italic">Global Masterclass</span></h1>
                                <div class="mt-8 flex gap-12 items-center">
                                    <p class="text-gray-300 font-bold text-2xl leading-relaxed opacity-90 max-w-xl">The non-negotiable framework for healthy, high-yield, and climate-resilient assets in the Kingdom.</p>
                                    <div class="h-20 w-px bg-white/10"></div>
                                    <div class="flex gap-8">
                                        <div class="text-center">
                                            <p class="text-[#0ea5e9] font-black text-4xl">180+</p>
                                            <p class="text-[9px] uppercase tracking-[0.3em] text-white/40">KSA Certified Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CERTIFICATION RECOGNITION TIERS (FLOWER ICONS) -->
            <section class="space-y-24">
                <div class="text-center space-y-6">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">The Honors <span class="text-[#0ea5e9]">System</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.5em] text-xs font-black">Points & Recognition Matrix</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <!-- Platinum -->
                    <div class="p-14 rounded-[5rem] bg-gradient-to-b from-[#0ea5e9]/20 to-[#041612] border border-[#0ea5e9]/30 text-center space-y-10 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-40 h-40 mx-auto">
                            <div class="absolute inset-0 bg-[#0ea5e9]/30 rounded-full animate-pulse blur-xl"></div>
                            <div class="relative w-full h-full bg-[#0ea5e9] rounded-3xl rotate-45 flex items-center justify-center border-4 border-white/20">
                                <div class="w-16 h-16 bg-white/40 rounded-full -rotate-45 flex items-center justify-center">
                                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center rotate-45"></div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-4xl uppercase italic tracking-tighter">Platinum</h4>
                            <p class="text-[#0ea5e9] font-black text-5xl">80+</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.4em]">Elite Level Points</p>
                        </div>
                    </div>
                    <!-- Gold -->
                    <div class="p-14 rounded-[5rem] bg-gradient-to-b from-[#C5A059]/20 to-[#041612] border border-[#C5A059]/30 text-center space-y-10 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-40 h-40 mx-auto">
                            <div class="relative w-full h-full bg-[#C5A059] rounded-3xl rotate-45 flex items-center justify-center border-4 border-white/20">
                                <div class="w-16 h-16 bg-white/40 rounded-full -rotate-45 flex items-center justify-center">
                                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center rotate-45"></div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-4xl uppercase italic tracking-tighter">Gold</h4>
                            <p class="text-[#C5A059] font-black text-5xl">60–79</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.4em]">High Performance</p>
                        </div>
                    </div>
                    <!-- Silver -->
                    <div class="p-14 rounded-[5rem] bg-gradient-to-b from-slate-400/20 to-[#041612] border border-slate-400/30 text-center space-y-10 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-40 h-40 mx-auto">
                            <div class="relative w-full h-full bg-slate-400 rounded-3xl rotate-45 flex items-center justify-center border-4 border-white/20">
                                <div class="w-16 h-16 bg-white/40 rounded-full -rotate-45 flex items-center justify-center">
                                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center rotate-45"></div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-4xl uppercase italic tracking-tighter">Silver</h4>
                            <p class="text-slate-400 font-black text-5xl">50–59</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.4em]">Optimized Legacy</p>
                        </div>
                    </div>
                    <!-- Certified -->
                    <div class="p-14 rounded-[5rem] bg-gradient-to-b from-emerald-500/20 to-[#041612] border border-emerald-500/30 text-center space-y-10 group hover:scale-105 transition-all duration-500 shadow-2xl">
                        <div class="relative w-40 h-40 mx-auto">
                            <div class="relative w-full h-full bg-emerald-500 rounded-3xl rotate-45 flex items-center justify-center border-4 border-white/20">
                                <div class="w-16 h-16 bg-white/40 rounded-full -rotate-45 flex items-center justify-center">
                                    <div class="w-8 h-8 bg-white rounded flex items-center justify-center rotate-45"></div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h4 class="text-white font-black text-4xl uppercase italic tracking-tighter">Certified</h4>
                            <p class="text-emerald-500 font-black text-5xl">40–49</p>
                            <p class="text-white/40 text-[10px] uppercase font-black tracking-[0.4em]">Baseline Excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- PROFESSIONAL CERTIFICATION STRATEGY: Systemic View -->
            <section class="space-y-24">
                <div class="relative p-24 rounded-[6rem] bg-gradient-to-br from-[#0c4a6e]/40 to-[#041612] border border-[#0ea5e9]/30 overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
                        <div class="space-y-12">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-[#0ea5e9] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                                    <span class="text-white font-black">Σ</span>
                                </div>
                                <h2 class="text-6xl font-black text-white tracking-tighter uppercase leading-none">The Strategic <br/><span class="text-[#0ea5e9]">Architecture</span></h2>
                            </div>
                            <div class="space-y-10 text-2xl font-light text-gray-400 leading-relaxed italic">
                                <p>
                                    LEED operates as a <strong>Holistic Ecosystem</strong>. It does not merely measure energy; it dissects the symbiotic relationship between water conservation, material integrity, and the human metabolic experience within indoor environments.
                                </p>
                                <p>
                                    Success requires a <strong>Prerequisite-First Methodology</strong>. Every project must satisfy a core set of mandatory criteria before points even begin to accumulate. This ensures that a LEED building is fundamentally sound before it is environmentally superior.
                                </p>
                            </div>
                        </div>

                        <div class="bg-black/40 backdrop-blur-[40px] p-20 rounded-[5rem] border border-white/10 space-y-12">
                            <h5 class="text-white font-black text-2xl uppercase tracking-[0.3em] border-b border-white/10 pb-6">The Execution Pipeline</h5>
                            <div class="space-y-12">
                                <div class="group flex gap-8">
                                    <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] border border-[#0ea5e9]/40 flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] transition-all duration-500">
                                        <span class="text-[#0ea5e9] font-black group-hover:text-white">01</span>
                                    </div>
                                    <div class="space-y-2">
                                        <h6 class="text-white font-black text-xl italic uppercase">System Selection</h6>
                                        <p class="text-gray-500 text-sm leading-relaxed">Defining the precise LEED version (v4.1/v5) that aligns with your asset's category (BD+C, ID+C, or O+M).</p>
                                    </div>
                                </div>
                                <div class="group flex gap-8">
                                    <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] border border-[#0ea5e9]/40 flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] transition-all duration-500">
                                        <span class="text-[#0ea5e9] font-black group-hover:text-white">02</span>
                                    </div>
                                    <div class="space-y-2">
                                        <h6 class="text-white font-black text-xl italic uppercase">Credit Allocation</h6>
                                        <p class="text-gray-500 text-sm leading-relaxed">Mapping your project's KPIs against the LEED Credit Library. Strategic point selection to optimize ROI.</p>
                                    </div>
                                </div>
                                <div class="group flex gap-8">
                                    <div class="w-16 h-16 bg-[#0ea5e9]/10 rounded-[2rem] border border-[#0ea5e9]/40 flex items-center justify-center shrink-0 group-hover:bg-[#0ea5e9] transition-all duration-500">
                                        <span class="text-[#0ea5e9] font-black group-hover:text-white">03</span>
                                    </div>
                                    <div class="space-y-2">
                                        <h6 class="text-white font-black text-xl italic uppercase">GBCI Verification</h6>
                                        <p class="text-gray-500 text-sm leading-relaxed">Submitting granular technical documentation to the GBCI for a third-party audit of project performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TECHNICAL ANCHORS: Detailed Dashboard Style -->
            <section class="space-y-24">
                <div class="text-center space-y-8">
                    <h2 class="text-7xl font-black text-white tracking-tighter uppercase leading-none italic">Power <span class="text-[#C5A059]">Utilities</span></h2>
                    <p class="text-gray-500 uppercase tracking-[0.6em] text-[10px] font-black italic">Essential Knowledge Vault for Professionals</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="p-20 rounded-[6rem] bg-[#051C17] border border-white/5 space-y-12 relative overflow-hidden group hover:bg-[#0c4a6e]/20 transition-all duration-700">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#0ea5e9]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="space-y-6 relative">
                            <div class="flex items-center gap-6">
                                <div class="w-1 h-20 bg-[#0ea5e9] rounded-full"></div>
                                <h4 class="text-white font-black text-5xl uppercase tracking-tighter italic">MPRs</h4>
                            </div>
                            <p class="text-gray-400 text-2xl font-light leading-relaxed">
                                Minimum Program Requirements (MPRs) act as the <strong>Gatekeeper</strong>. They verify building eligibility, ensuring only assets capable of true transformation enter the LEED lifecycle.
                            </p>
                            <div class="flex gap-4">
                                <span class="px-6 py-2 bg-white/5 rounded-full text-[9px] font-black text-[#0ea5e9] uppercase tracking-widest border border-white/10">Eligibility Check</span>
                                <span class="px-6 py-2 bg-white/5 rounded-full text-[9px] font-black text-white/40 uppercase tracking-widest border border-white/10">Policy Bound</span>
                            </div>
                        </div>
                        <button class="w-full py-6 bg-[#0ea5e9]/10 rounded-[2.5rem] text-[#0ea5e9] font-black uppercase tracking-[0.4em] text-xs border border-[#0ea5e9]/30 hover:bg-[#0ea5e9] hover:text-white transition-all">Explore MPR Library</button>
                    </div>

                    <div class="p-20 rounded-[6rem] bg-[#051C17] border border-white/5 space-y-12 relative overflow-hidden group hover:bg-[#C5A059]/10 transition-all duration-700">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A059]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="space-y-6 relative">
                            <div class="flex items-center gap-6">
                                <div class="w-1 h-20 bg-[#C5A059] rounded-full"></div>
                                <h4 class="text-white font-black text-5xl uppercase tracking-tighter italic">Reference Guides</h4>
                            </div>
                            <p class="text-gray-400 text-2xl font-light leading-relaxed">
                                Think of these as the <strong>Instruction Manuals</strong> for high-performance cities. Granular blueprints for every credit, prerequisite, and technical deviation.
                            </p>
                            <div class="flex gap-4">
                                <span class="px-6 py-2 bg-white/5 rounded-full text-[9px] font-black text-[#C5A059] uppercase tracking-widest border border-white/10">v4.1 Technical</span>
                                <span class="px-6 py-2 bg-white/5 rounded-full text-[9px] font-black text-white/40 uppercase tracking-widest border border-white/10">v5 Beta Ready</span>
                            </div>
                        </div>
                        <button class="w-full py-6 bg-[#C5A059]/10 rounded-[2.5rem] text-[#C5A059] font-black uppercase tracking-[0.4em] text-xs border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-white transition-all">View Instruction Manuals</button>
                    </div>
                </div>
            </section>

            <!-- FINAL MISSION CONCLUSION: Extra Volume & Professionalism -->
            <section class="py-48 relative text-center">
                <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[#0ea5e9]/5 rounded-[15rem] blur-[200px] -z-10"></div>
                <div class="max-w-5xl mx-auto space-y-24 relative z-10">
                    <div class="space-y-10">
                        <h2 class="text-9xl font-black text-white tracking-tighter uppercase leading-none italic">The Green <span class="bg-gradient-to-r from-[#0ea5e9] to-[#C5A059] bg-clip-text text-transparent">Sovereignty</span></h2>
                        <div class="w-64 h-3 bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent mx-auto rounded-full"></div>
                    </div>
                    
                    <div class="space-y-16 text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic opacity-80">
                        <p>
                            We are not just building structures; we are architecting a sustainable sovereign future. LEED provides the technical discipline required to ensure that our giga-projects are globally recognized assets, not just local achievements.
                        </p>
                        <p>
                            By mastering the LEED framework, you are positioning your project at the forefront of the global energy transition—aligning the heritage of the Kingdom with the technological peak of human engineering.
                        </p>
                    </div>

                    <div class="pt-32">
                        <div class="inline-block p-24 bg-gradient-to-br from-[#0c4a6e] to-[#041612] border border-[#0ea5e9]/50 rounded-[7rem] shadow-[0_80px_160px_rgba(14,165,233,0.5)] relative group overflow-hidden">
                             <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                             <p class="text-white font-black text-6xl uppercase tracking-tighter mb-4 italic">Sustainability Highway</p>
                             <p class="text-[#0ea5e9] text-[15px] font-black uppercase tracking-[1em] mt-6">Defining Excellence. Archiving The Future.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED Technical Mastery: Architecting Global Sovereignty in Saudi Arabia',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'LEED Certification Saudi Arabia | Technical Masterclass | USGBC Framework',
        meta_description: 'Master the LEED rating system within KSA’s regulatory landscape. A deep technical audit of BD+C, ID+C, and O+M frameworks, certification levels, and GBCI verification workflows.',
        faq_data: JSON.stringify([
            { question: "What is the primary objective of the LEED Certification Strategy?", answer: "LEED represents a systemic shift from measuring single performance metrics to dissecting the holistic ecosystem of a building, including metabolic impact, material circularity, and human wellness." },
            { question: "How are LEED point levels calculated?", answer: "Points are earned across several categories: Platinum (80+), Gold (60-79), Silver (50-59), and Certified (40-49). Every point must be backed by GBCI-verified technical data." },
            { question: "What constitutes a 'Technical Anchor' in LEED?", answer: "Technical Anchors include Minimum Program Requirements (MPRs) for eligibility and Reference Guides which serve as the definitive instruction manuals for credit compliance." },
            { question: "Can LEED be applied to Vision 2030 smart cities?", answer: "Yes, via LEED for Cities, which measures holistic urban performance including transit metrics, waste stream intelligence, and human experience sensors." },
            { question: "Why is GBCI verification considered a 'Third-Party Audit'?", answer: "GBCI independently reviews all project documentation to ensure it meets USGBC standards, providing a layer of international trust and integrity to the certification." },
            { question: "What is the ROI on Platinum certification in KSA?", answer: "Beyond a 30% reduction in utility overhead, Platinum assets command the highest leasing velocity and significant valuation premiums in the global capital markets." },
            { question: "How does LEED v5 differ from previous versions?", answer: "LEED v5 introduces a heavier emphasis on rapid decarbonization, social equity, and ecosystem health to meet 2030 global climate goals." },
            { question: "Are local Saudi materials eligible for LEED points?", answer: "Yes, LEED rewards regional material sourcing (within 500km) and material transparency (EPDs), directly supporting local Saudi manufacturing." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED Technical Mastery: Architecting Global Sovereignty in Saudi Arabia",
            "description": "Premium technical guide to LEED certification in Saudi Arabia, focusing on professional execution and industrial-level strategy.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        excerpt: 'Deconstruct the world’s most powerful sustainability framework. This technical audit explores the strategic implementation of LEED in Saudi Arabia’s next-gen real estate sector.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article to Ultimate Enterprise Standard (V2 Fixed)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Ultimate Enterprise LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
