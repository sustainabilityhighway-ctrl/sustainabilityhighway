const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-24 py-16 text-gray-800 bg-white leading-relaxed font-sans">
            
            <!-- Hero Section: Official USGBC Style -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
                <div class="flex flex-col lg:flex-row gap-16 items-center">
                    <div class="lg:w-1/2 space-y-8">
                        <div class="inline-block px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                            <p class="text-emerald-600 font-bold text-xs uppercase tracking-widest">Global Standard</p>
                        </div>
                        <h1 class="text-7xl font-black text-gray-900 leading-none tracking-tight">LEED rating system</h1>
                        <p class="text-2xl text-gray-400 font-medium font-heading">The most widely used green building rating system.</p>
                        <div class="w-32 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
                
                <div class="mt-16 relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[700px]">
                    <img src="https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000&auto=format&fit=crop" alt="Sustainable Architecture" class="w-full h-full object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-16 text-center">
                        <p class="text-white/90 text-sm italic font-bold tracking-wide">Phipps Center for Sustainable Landscapes | LEED Platinum | Photo: ©USGBC</p>
                    </div>
                </div>
            </section>

            <!-- Mission Statement -->
            <section class="max-w-5xl mx-auto px-6 text-center space-y-12 py-16">
                <h2 class="text-5xl font-black text-gray-900 tracking-tight leading-tight">LEED-certified green buildings <br/>are <span class="text-emerald-500 italic">better</span> buildings.</h2>
                <div class="w-20 h-1.5 bg-gray-100 mx-auto rounded-full"></div>
                <p class="text-2xl text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto text-justify">
                    LEED is the most widely recognized green building rating system in the world. LEED certification offers a framework for healthy, highly efficient, and cost-effective green buildings, providing profound environmental and social benefits.
                </p>
            </section>

            <!-- All Building Types & Phases Grid: Unified GREEN Circles -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
                <div class="space-y-4">
                    <h2 class="text-4xl font-black text-gray-900 italic">LEED for all building types & phases</h2>
                    <p class="text-gray-400 text-xl font-medium">Systematic excellence across the entire urban landscape.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <!-- BD+C (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter">BD+C</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Building Design + Construction</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For the design and construction of whole buildings, of various use types that are either new construction or undergoing major renovations.</p>
                    </div>
                    <!-- ID+C (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter">ID+C</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Interior Design + Construction</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For complete commercial interior fit-out projects that have no scope for the exterior shell of the building or site work.</p>
                    </div>
                    <!-- O+M (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">O+M</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Operations + Maintenance</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For existing buildings that are undergoing improvement work or little to no construction, focusing on actual building operations.</p>
                    </div>
                    <!-- ND (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">ND</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Neighborhood Development</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For new land development projects or redevelopment projects containing residential uses. From planning to construction.</p>
                    </div>
                    <!-- Residential (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">Res</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Residential</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For the design and construction of high-performance residential buildings. Ensuring homes are healthy and efficient.</p>
                    </div>
                    <!-- Cities (Green Circle) -->
                    <div class="p-10 rounded-[3.5rem] bg-white border-2 border-gray-50 hover:border-emerald-500 transition-all group flex flex-col h-full active:scale-95 duration-300">
                        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-emerald-500/30">
                            <span class="text-white font-black text-2xl tracking-tighter uppercase">City</span>
                        </div>
                        <h4 class="text-2xl font-black text-gray-900 mb-4 uppercase">Cities</h4>
                        <p class="text-gray-500 text-base leading-relaxed mb-6 flex-grow text-justify font-medium">For entire cities and sub-sections. Measure and manage city-scale water, energy, and transportation.</p>
                    </div>
                </div>
            </section>

            <!-- How LEED Works: Restoring the high-quality Flower/Star Icons -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24 bg-emerald-50/30 rounded-[5rem] border border-emerald-100 flex flex-col lg:flex-row gap-20 items-center">
                <div class="lg:w-1/2 space-y-8">
                    <h2 class="text-5xl font-black text-gray-900 uppercase italic tracking-tighter">How <span class="text-emerald-600">LEED</span> works</h2>
                    <div class="w-24 h-2 bg-emerald-500 rounded-full"></div>
                    <p class="text-2xl text-gray-600 font-medium leading-relaxed text-justify italic font-heading">
                        LEED represents a holistic integration of energy, water, materials, and human intelligence. 
                    </p>
                    <p class="text-gray-500 text-lg text-justify font-medium">
                        To achieve certification, projects must first complete all prerequisites and then earn points corresponding to a level: Certified, Silver, Gold and Platinum.
                    </p>
                </div>

                <!-- Restore the original high-quality "Flower" icons requested earlier -->
                <div class="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <!-- Platinum -->
                    <div class="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8 hover:scale-105 transition-all">
                        <div class="relative w-24 h-24 mx-auto">
                            <!-- Restoration of the "Flower" style from earlier versions -->
                             <div class="absolute inset-0 bg-sky-500 rounded-2xl rotate-45 flex items-center justify-center">
                                <div class="w-12 h-12 bg-white/30 rounded-full rotate-45 flex items-center justify-center border border-white/50">
                                    <div class="w-6 h-6 bg-white rounded rotate-[30deg]"></div>
                                </div>
                             </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Platinum</h4>
                            <p class="text-sky-500 font-black text-xl">80+ Points</p>
                        </div>
                    </div>
                    <!-- Gold -->
                    <div class="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8 hover:scale-105 transition-all">
                        <div class="relative w-24 h-24 mx-auto">
                             <div class="absolute inset-0 bg-amber-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                <div class="w-12 h-12 bg-white/30 rounded-full rotate-45 flex items-center justify-center border border-white/50">
                                    <div class="w-6 h-6 bg-white rounded rotate-[30deg]"></div>
                                </div>
                             </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Gold</h4>
                            <p class="text-amber-600 font-black text-xl">60–79 Points</p>
                        </div>
                    </div>
                    <!-- Silver -->
                    <div class="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8 hover:scale-105 transition-all">
                        <div class="relative w-24 h-24 mx-auto">
                             <div class="absolute inset-0 bg-slate-400 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-slate-400/30">
                                <div class="w-12 h-12 bg-white/30 rounded-full rotate-45 flex items-center justify-center border border-white/50">
                                    <div class="w-6 h-6 bg-white rounded rotate-[30deg]"></div>
                                </div>
                             </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Silver</h4>
                            <p class="text-slate-500 font-black text-xl">50–59 Points</p>
                        </div>
                    </div>
                    <!-- Certified -->
                    <div class="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8 hover:scale-105 transition-all">
                        <div class="relative w-24 h-24 mx-auto">
                             <div class="absolute inset-0 bg-emerald-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <div class="w-12 h-12 bg-white/30 rounded-full rotate-45 flex items-center justify-center border border-white/50">
                                    <div class="w-6 h-6 bg-white rounded rotate-[30deg]"></div>
                                </div>
                             </div>
                        </div>
                        <div class="space-y-2">
                            <h4 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Certified</h4>
                            <p class="text-emerald-600 font-black text-xl">40–49 Points</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technical Anchors -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 py-24">
                <div class="text-center space-y-4">
                    <h2 class="text-5xl font-black text-gray-900 uppercase tracking-tighter italic">Technical <span class="text-emerald-500">Anchors</span></h2>
                    <p class="text-gray-400 uppercase tracking-[0.5em] text-xs font-black">Industrial Knowledge Vault</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="p-16 rounded-[4rem] bg-gray-50 border-2 border-gray-100 space-y-8 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                        <h4 class="text-4xl font-black text-gray-900 italic">MPRs</h4>
                        <p class="text-xl text-gray-500 leading-relaxed font-medium">Minimum Program Requirements define whether your building type is eligible to achieve a LEED rating. They define the types of buildings LEED was designed to evaluate.</p>
                        <div class="w-full h-1 bg-emerald-500/10 rounded-full mt-8"></div>
                    </div>
                    <div class="p-16 rounded-[4rem] bg-gray-50 border-2 border-gray-100 space-y-8 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                        <h4 class="text-4xl font-black text-gray-900 italic">Reference Guides</h4>
                        <p class="text-xl text-gray-500 leading-relaxed font-medium">Comprehensive instruction manuals providing in-depth explanations of each credit and prerequisite within a specific rating system.</p>
                        <div class="w-full h-1 bg-sky-500/10 rounded-full mt-8"></div>
                    </div>
                </div>
            </section>

            <!-- Final Conclusion -->
            <section class="max-w-5xl mx-auto px-6 py-40 text-center space-y-16 border-t border-gray-100">
                <div class="space-y-6">
                    <h2 class="text-7xl font-black text-gray-900 tracking-tighter leading-none italic uppercase">Engineering <span class="text-emerald-500">Excellence</span></h2>
                    <div class="w-40 h-3 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
                
                <p class="text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic opacity-80">
                    By following these global standards, developers ensure their buildings are as efficient as they are iconic, driving the future of green architecture in KSA.
                </p>

                <div class="pt-24 space-y-4">
                     <p class="text-emerald-500 font-black text-5xl uppercase tracking-tighter italic">Sustainability Highway</p>
                     <p class="text-gray-400 text-[10px] font-black uppercase tracking-[1em] mt-8">Verified Excellence. Archiving The Future.</p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED rating system: The Most Widely Used Green Building Standard',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'Official LEED Rating System Guide 2024 | Sustainability Highway',
        meta_description: 'Master the LEED rating system. Detailed guide on BD+C, ID+C, O+M, and certification levels. Based on official USGBC standards for Saudi Arabia.',
        faq_data: JSON.stringify([
            { question: "What is the most widely recognized green building rating system?", answer: "LEED (Leadership in Energy and Environmental Design) is the most widely recognized and used green building rating system globally." },
            { question: "What are the four levels of LEED certification?", answer: "Level points are: Certified (40-49), Silver (50-59), Gold (60-79), and Platinum (80+)." },
            { question: "How does LEED works as a framework?", answer: "LEED is holistic, addressing energy, water use, materials, waste, and indoor quality through tailored credit categories." },
            { question: "Which rating system should I use for a new building?", answer: "Building Design and Construction (BD+C) is for new buildings or major renovations." },
            { question: "Can existing buildings be certified?", answer: "Yes, using the Building Operations and Maintenance (O+M) rating system." },
            { question: "What are Minimum Program Requirements (MPRs)?", answer: "MPRs are base eligibility criteria that determine if a building is eligible for a LEED rating." },
            { question: "What is the role of GBCI in LEED?", answer: "GBCI (Green Business Certification Inc.) performs the third-party verification and review process for all LEED projects." },
            { question: "Does LEED apply to entire cities?", answer: "Yes, LEED for Cities allows sections or entire cities to manage water, energy, and transportation experience." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED rating system: The Most Widely Used Green Building Standard",
            "description": "Official breakdown of LEED rating systems and certification process in a professional white-theme design.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000',
        excerpt: 'Exactly following the official USGBC structure. Master the LEED rating system with a clean, professional, and white-themed technical breakdown.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article (Final Correction: All Green Circles & Restored Flower Icons)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created Corrected LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
