const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-24 py-16 text-gray-800 bg-white leading-relaxed font-sans">
            
            <!-- Hero Section: Official USGBC Style -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
                <div class="flex flex-col lg:flex-row gap-16 items-center">
                    <div class="lg:w-1/2 space-y-8">
                        <div class="inline-block px-4 py-1.5 bg-sky-50 rounded-full border border-sky-100">
                            <p class="text-sky-600 font-bold text-xs uppercase tracking-widest">Global Standard</p>
                        </div>
                        <h1 class="text-7xl font-black text-gray-900 leading-none tracking-tight">LEED rating system</h1>
                        <p class="text-2xl text-gray-400 font-medium">The most widely used green building rating system in human history.</p>
                        <div class="w-32 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
                
                <div class="mt-16 relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[700px]">
                    <img src="https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000&auto=format&fit=crop" alt="Sustainable Architecture" class="w-full h-full object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-16">
                        <p class="text-white/90 text-sm italic font-bold tracking-wide">Phipps Center for Sustainable Landscapes | LEED Platinum | A paradigm of green engineering.</p>
                    </div>
                </div>
            </section>

            <!-- Mission Statement -->
            <section class="max-w-5xl mx-auto px-6 text-center space-y-12 py-16">
                <h2 class="text-5xl font-black text-gray-900 tracking-tight leading-tight">LEED-certified green buildings <br/>are <span class="text-emerald-500 italic">better</span> buildings.</h2>
                <div class="w-20 h-1.5 bg-gray-100 mx-auto rounded-full"></div>
                <p class="text-2xl text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
                    LEED is the most widely recognized green building rating system in the world. LEED certification offers a technical framework for healthy, highly efficient, and cost-effective green buildings, providing profound environmental and social benefits.
                </p>
            </section>

            <!-- All Building Types & Phases Grid -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
                <div class="space-y-4">
                    <h2 class="text-4xl font-black text-gray-900 italic">LEED for all building types & phases</h2>
                    <p class="text-gray-400 text-xl font-medium">Versatility meets precision across the entire urban lifecycle.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <!-- BD+C (Green Theme) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter">BD+C</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors uppercase">Building Design + Construction</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For the design and construction of whole buildings, and additions to buildings, including new construction or major renovations of various use types.</p>
                        <div class="h-1 w-12 bg-emerald-500/20 rounded-full mt-4"></div>
                    </div>
                    <!-- ID+C (Vibrant Blue/Green) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-sky-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-sky-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter">ID+C</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-sky-600 transition-colors uppercase">Interior Design + Construction</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For complete commercial interior fit-out projects that focus on the internal environment with no scope for the exterior shell.</p>
                        <div class="h-1 w-12 bg-sky-500/20 rounded-full mt-4"></div>
                    </div>
                    <!-- O+M (Vibrant Emerald) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-teal-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">O+M</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-teal-600 transition-colors uppercase">Operations + Maintenance</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">Optimizing operations for buildings which have been fully occupied for at least one year. Ensuring long-term efficiency.</p>
                        <div class="h-1 w-12 bg-teal-500/20 rounded-full mt-4"></div>
                    </div>
                    <!-- ND (Indigo Green Mix) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">ND</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors uppercase">Neighborhood Development</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For new land development projects or redevelopments that emphasize sustainable urbanism and smart growth.</p>
                        <div class="h-1 w-12 bg-indigo-500/20 rounded-full mt-4"></div>
                    </div>
                    <!-- Residential (Orange/Emerald Contrast) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">Res</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors uppercase">Residential</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">Specialized design and construction for high-performance homes. Creating superior domestic environments for KSA.</p>
                        <div class="h-1 w-12 bg-orange-500/20 rounded-full mt-4"></div>
                    </div>
                    <!-- Cities (Rose/Azure) -->
                    <div class="p-12 rounded-[4rem] bg-white border-2 border-gray-50 hover:border-rose-500/20 hover:shadow-2xl hover:shadow-rose-500/10 transition-all group flex flex-col h-full active:scale-95 duration-500">
                        <div class="w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-rose-500/30 group-hover:scale-110 transition-transform">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">City</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 group-hover:text-rose-600 transition-colors uppercase">Cities</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">Measuring and managing water, energy, waste, and human experience at a massive urban city scale.</p>
                        <div class="h-1 w-12 bg-rose-500/20 rounded-full mt-4"></div>
                    </div>
                </div>
            </section>

            <!-- How LEED Works -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 bg-gray-50 rounded-[5rem] border border-gray-100 flex flex-col lg:flex-row gap-20 items-center">
                <div class="lg:w-1/2 space-y-8">
                    <h2 class="text-5xl font-black text-gray-900 uppercase italic tracking-tighter">How <span class="text-emerald-500">LEED</span> works</h2>
                    <div class="w-24 h-2 bg-emerald-500 rounded-full"></div>
                    <p class="text-2xl text-gray-600 font-medium leading-relaxed text-justify">
                        LEED represents a holistic integration of energy, water, materials, and human intelligence. It addresses the entire metabolic cycle of a structure through a series of credit categories.
                    </p>
                    <p class="text-gray-400 text-lg text-justify font-medium italic">
                        To achieve certification, projects must meet all prerequisites and earn points across levels ranging from Certified to the ultimate Platinum.
                    </p>
                </div>

                <div class="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <!-- Platinum Card (Vibrant Azure) -->
                    <div class="bg-white p-10 rounded-[3rem] border-2 border-sky-500/20 shadow-2xl shadow-sky-500/5 text-center space-y-6 group hover:scale-105 transition-all">
                        <div class="inline-block p-6 bg-sky-500 rounded-full mb-2 shadow-lg shadow-sky-500/30">
                             <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <h4 class="text-3xl font-black text-gray-900 italic">Platinum</h4>
                        <div class="space-y-1">
                            <p class="text-sky-500 font-black text-2xl uppercase tracking-tighter">80+ Pts</p>
                            <p class="text-gray-300 text-[10px] font-black uppercase tracking-widest">Global Honor</p>
                        </div>
                    </div>
                    <!-- Gold Card (Vibrant Amber) -->
                    <div class="bg-white p-10 rounded-[3rem] border-2 border-amber-500/20 shadow-2xl shadow-amber-500/5 text-center space-y-6 group hover:scale-105 transition-all">
                        <div class="inline-block p-6 bg-amber-500 rounded-full mb-2 shadow-lg shadow-amber-500/30">
                             <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <h4 class="text-3xl font-black text-gray-900 italic">Gold</h4>
                        <div class="space-y-1">
                            <p class="text-amber-500 font-black text-2xl uppercase tracking-tighter">60–79 Pts</p>
                            <p class="text-gray-300 text-[10px] font-black uppercase tracking-widest">High Tier</p>
                        </div>
                    </div>
                    <!-- Silver Card (Vibrant Slate) -->
                    <div class="bg-white p-10 rounded-[3rem] border-2 border-slate-500/20 shadow-2xl shadow-slate-500/5 text-center space-y-6 group hover:scale-105 transition-all">
                        <div class="inline-block p-6 bg-slate-500 rounded-full mb-2 shadow-lg shadow-slate-500/30">
                             <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <h4 class="text-3xl font-black text-gray-900 italic">Silver</h4>
                        <div class="space-y-1">
                            <p class="text-slate-500 font-black text-2xl uppercase tracking-tighter">50–59 Pts</p>
                            <p class="text-gray-300 text-[10px] font-black uppercase tracking-widest">Optimized</p>
                        </div>
                    </div>
                    <!-- Certified Card (Vibrant Emerald) -->
                    <div class="bg-white p-10 rounded-[3rem] border-2 border-emerald-500/20 shadow-2xl shadow-emerald-500/5 text-center space-y-6 group hover:scale-105 transition-all">
                        <div class="inline-block p-6 bg-emerald-500 rounded-full mb-2 shadow-lg shadow-emerald-500/30">
                             <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <h4 class="text-3xl font-black text-gray-900 italic">Certified</h4>
                        <div class="space-y-1">
                            <p class="text-emerald-500 font-black text-2xl uppercase tracking-tighter">40–49 Pts</p>
                            <p class="text-gray-300 text-[10px] font-black uppercase tracking-widest">Baseline</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tools & Resources: Refined for KSA -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-20 py-24">
                <div class="text-center space-y-6">
                    <h2 class="text-5xl font-black text-gray-900 uppercase tracking-tighter italic">Technical <span class="text-emerald-500">Anchors</span></h2>
                    <p class="text-gray-400 uppercase tracking-[0.8em] text-xs font-black">Industrial Knowledge Vault</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="p-16 rounded-[4rem] bg-emerald-50/20 border-2 border-emerald-500/10 space-y-10 group hover:bg-emerald-500/5 transition-all relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full"></div>
                        <h4 class="text-4xl font-black text-gray-900 group-hover:text-emerald-600 transition-colors italic">MPRs</h4>
                        <p class="text-xl text-gray-500 leading-relaxed font-medium">Minimum Program Requirements define whether your building type is eligible to achieve a LEED rating. They are the essential filter for eligibility.</p>
                        <div class="w-16 h-1 w-full bg-emerald-500/10 rounded-full"></div>
                    </div>
                    <div class="p-16 rounded-[4rem] bg-sky-50/20 border-2 border-sky-500/10 space-y-10 group hover:bg-sky-500/5 transition-all relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-40 h-40 bg-sky-500/5 blur-3xl rounded-full"></div>
                        <h4 class="text-4xl font-black text-gray-900 group-hover:text-sky-600 transition-colors italic">Reference Guides</h4>
                        <p class="text-xl text-gray-500 leading-relaxed font-medium">Comprehensive instruction manuals providing in-depth explanations of each credit and prerequisite within the LEED framework.</p>
                        <div class="w-16 h-1 w-full bg-sky-500/10 rounded-full"></div>
                    </div>
                </div>
            </section>

            <!-- Final Executive Conclusion -->
            <section class="max-w-5xl mx-auto px-6 py-40 text-center space-y-16 border-t border-gray-100">
                <div class="space-y-6">
                    <h2 class="text-7xl font-black text-gray-900 tracking-tighter leading-none italic uppercase">The Future of <br/><span class="text-emerald-500">Sovereignty</span></h2>
                    <div class="w-40 h-3 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
                
                <p class="text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic opacity-80">
                    By aligning the Kingdom’s giga-projects with the world’s most powerful green standard, we are not just building real estate; we are architecting global environmental legacy.
                </p>

                <div class="pt-24 space-y-4">
                     <p class="text-emerald-500 font-black text-5xl uppercase tracking-tighter italic shadow-sm">Sustainability Highway</p>
                     <p class="text-gray-300 text-[12px] font-black uppercase tracking-[1em] mt-8">Engineering Excellence. Archiving The Future.</p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'The LEED Rating System: A Technical Masterclass in Green Engineering',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'PUBLISHED',
        meta_title: 'Offical LEED Rating System Guide 2024 | Premium Technical Review',
        meta_description: 'Master the LEED rating system. Full breakdown of BD+C, ID+C, O+M, and certification levels (Platinum, Gold, Silver) with high-contrast, professional design.',
        faq_data: JSON.stringify([
            { question: "What is the primary objective of LEED?", answer: "LEED provides a holistic framework for creating healthy, highly efficient, and cost-effective green buildings with verifiable performance data." },
            { question: "What are the certification levels?", answer: "The four levels are Platinum (80+ pts), Gold (60-79 pts), Silver (50-59 pts), and Certified (40-49 pts)." },
            { question: "Who performs the verification?", answer: "Green Business Certification Inc. (GBCI) is the third-party organization that reviews and verifies all LEED projects globally." },
            { question: "Which system is best for major renovations?", answer: "Building Design and Construction (BD+C) is specifically designed for new construction or significant improvements to existing buildings." },
            { question: "What are the MPRs?", answer: "Minimum Program Requirements (MPRs) are the baseline eligibility criteria that determine if a building is suitable for LEED certification." },
            { question: "Can a building achieve both LEED and Mostadam?", answer: "Yes. Mostadam ensures local Saudi regulatory compliance while LEED provides international recognition and market trust." },
            { question: "What is LEED O+M?", answer: "Building Operations and Maintenance (O+M) is for existing buildings that have been fully operational for at least one year." },
            { question: "Is LEED recognized in Saudi Arabia?", answer: "Absolutely. It is the dominant international green building standard in the Kingdom, vital for international investors and corporate tenants." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The LEED Rating System: A Technical Masterclass in Green Engineering",
            "description": "High-authority technical guide following the official USGBC structure with enhanced professional design for Saudi Arabia.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000',
        excerpt: 'Deconstruct the world’s most powerful sustainability framework. This technical audit explores the strategic implementation of LEED in Saudi Arabia’s next-gen real estate sector.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article to Ultimate High-Response Standard (V3 Fixed)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Ultimate High-Response LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
