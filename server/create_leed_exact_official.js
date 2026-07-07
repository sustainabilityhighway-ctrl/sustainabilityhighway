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
                        <h1 class="text-6xl font-black text-gray-900 leading-tight tracking-tight">LEED rating system</h1>
                        <p class="text-2xl text-gray-500 font-medium">The most widely used green building rating system.</p>
                        <div class="w-24 h-1.5 bg-sky-500 rounded-full"></div>
                    </div>
                </div>
                
                <div class="mt-16 relative rounded-[3rem] overflow-hidden shadow-2xl h-[650px]">
                    <img src="https://images.unsplash.com/photo-1544107159-3fe514831421?q=80&w=2000&auto=format&fit=crop" alt="Phipps Center for Sustainable Landscapes" class="w-full h-full object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-12">
                        <p class="text-white/80 text-sm italic font-medium">Phipps Center for Sustainable Landscapes | LEED Platinum | Photo: ©Sustainability Highway Archive</p>
                    </div>
                </div>
            </section>

            <!-- Mission Statement -->
            <section class="max-w-5xl mx-auto px-6 text-center space-y-8 py-12">
                <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">LEED-certified green buildings are better buildings</h2>
                <p class="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    LEED is the most widely recognized green building rating system in the world. LEED certification offers a framework for healthy, efficient, and cost-effective green buildings, providing environmental and social benefits. It serves as a globally recognized symbol of sustainability leadership, supported by a committed community of organizations and individuals driving market transformation.
                </p>
            </section>

            <!-- All Building Types & Phases Grid -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
                <div class="space-y-4">
                    <h2 class="text-3xl font-extrabold text-gray-900">LEED is designed for all building types and phases</h2>
                    <p class="text-gray-500 text-lg">LEED is for all project types and phases, including new construction, core and shell, interior fit-outs, operations and maintenance, neighborhoods and cities.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- BD+C -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-500/20">
                            <span class="text-white font-bold text-lg">BD+C</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">Building Design and Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For the design and construction of whole buildings, and additions to buildings, of various use types that are either new construction or undergoing major renovations.</p>
                    </div>
                    <!-- ID+C -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-sky-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-400/20">
                            <span class="text-white font-bold text-lg">ID+C</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-500 transition-colors">Interior Design and Construction</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For complete commercial interior fit-out projects that have no scope for the exterior shell of the building and/or site work.</p>
                    </div>
                    <!-- O+M -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                            <span class="text-white font-bold text-lg">O+M</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Building Operations and Maintenance</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For existing buildings that are undergoing improvement work or little to no construction, O+M offers an opportunity to pay close attention to building operations by supporting whole buildings.</p>
                    </div>
                    <!-- ND -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20">
                            <span class="text-white font-bold text-lg">ND</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Neighborhood Development</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For new land development projects or redevelopment projects containing residential uses, nonresidential uses, or a mix. Projects can be at any stage from conceptual planning to construction.</p>
                    </div>
                    <!-- Residential -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                            <span class="text-white font-bold text-lg">Res</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Residential</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For the design and construction of high-performance residential buildings. Ensuring home environments are efficient, healthy, and sustainable.</p>
                    </div>
                    <!-- Cities -->
                    <div class="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-sky-50/50 hover:border-sky-200 transition-all group flex flex-col h-full">
                        <div class="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-rose-500/20">
                            <span class="text-white font-bold text-lg">City</span>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">Cities</h4>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow text-justify">For entire cities and sub-sections of a city. LEED for Cities projects can measure and manage their city’s water consumption, energy use, waste, and transportation.</p>
                    </div>
                </div>
            </section>

            <!-- How LEED Works -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-sky-50/50 rounded-[4rem] border border-sky-100 space-y-16">
                <div class="max-w-4xl space-y-6">
                    <h2 class="text-4xl font-extrabold text-gray-900">How LEED works</h2>
                    <p class="text-xl text-gray-600 leading-relaxed text-justify">
                        LEED is holistic. As a framework, it addresses everything from energy and water use to materials selection, managing waste and indoor environmental quality through a series of credit categories tailored for each rating system. 
                    </p>
                    <p class="text-gray-500 text-justify">
                        To achieve LEED certification, a project must first complete all prerequisites and then earn points by selecting and satisfying credit requirements. Projects go through a verification and review process by GBCI and are awarded points that correspond to a level of LEED certification: Certified, Silver, Gold and Platinum.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Platinum Card -->
                    <div class="bg-white p-8 rounded-3xl border border-sky-200 shadow-xl shadow-sky-500/5 text-center space-y-4">
                        <div class="inline-block p-4 bg-sky-100 rounded-full mb-2">
                             <!-- Flower/Star Icon -->
                             <svg class="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <p class="text-sky-600 font-bold uppercase tracking-widest text-xs">Excellence</p>
                        <h4 class="text-2xl font-black text-gray-900">Platinum</h4>
                        <p class="text-sky-500 font-bold text-lg">80+ Points</p>
                    </div>
                    <!-- Gold Card -->
                    <div class="bg-white p-8 rounded-3xl border border-yellow-200 shadow-xl shadow-yellow-500/5 text-center space-y-4">
                        <div class="inline-block p-4 bg-yellow-100 rounded-full mb-2">
                             <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <p class="text-yellow-600 font-bold uppercase tracking-widest text-xs">High Performance</p>
                        <h4 class="text-2xl font-black text-gray-900">Gold</h4>
                        <p class="text-yellow-500 font-bold text-lg">60-79 Points</p>
                    </div>
                    <!-- Silver Card -->
                    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-500/5 text-center space-y-4">
                        <div class="inline-block p-4 bg-slate-100 rounded-full mb-2">
                             <svg class="w-8 h-8 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <p class="text-slate-500 font-bold uppercase tracking-widest text-xs">Optimized</p>
                        <h4 class="text-2xl font-black text-gray-900">Silver</h4>
                        <p class="text-slate-500 font-bold text-lg">50-59 Points</p>
                    </div>
                    <!-- Certified Card -->
                    <div class="bg-white p-8 rounded-3xl border border-emerald-200 shadow-xl shadow-emerald-500/5 text-center space-y-4">
                        <div class="inline-block p-4 bg-emerald-100 rounded-full mb-2">
                             <svg class="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                        </div>
                        <p class="text-emerald-600 font-bold uppercase tracking-widest text-xs">Standard</p>
                        <h4 class="text-2xl font-black text-gray-900">Certified</h4>
                        <p class="text-emerald-500 font-bold text-lg">40-49 Points</p>
                    </div>
                </div>
            </section>

            <!-- Certification Process -->
            <section class="max-w-5xl mx-auto px-6 space-y-12">
                <h2 class="text-3xl font-extrabold text-gray-900 border-l-8 border-sky-500 pl-6 uppercase">Certification Process</h2>
                <div class="space-y-8">
                    <div class="flex gap-8 group">
                        <div class="h-12 w-12 bg-gray-100 group-hover:bg-sky-500 group-hover:text-white transition-all rounded-[1rem] flex items-center justify-center shrink-0 font-black text-xl text-gray-400">01</div>
                        <div class="pt-2">
                            <p class="text-lg text-gray-600 font-medium">Determine the appropriate LEED rating system and version: LEED v5, LEED v4.1 or LEED v4. Review the minimum program requirements (MPRs) and prerequisites.</p>
                        </div>
                    </div>
                    <div class="flex gap-8 group">
                        <div class="h-12 w-12 bg-gray-100 group-hover:bg-sky-500 group-hover:text-white transition-all rounded-[1rem] flex items-center justify-center shrink-0 font-black text-xl text-gray-400">02</div>
                        <div class="pt-2">
                            <p class="text-lg text-gray-600 font-medium">Register the project in Arc (LEED v5) or LEED Online (LEED v4.1 and LEED v4).</p>
                        </div>
                    </div>
                    <div class="flex gap-8 group">
                        <div class="h-12 w-12 bg-gray-100 group-hover:bg-sky-500 group-hover:text-white transition-all rounded-[1rem] flex items-center justify-center shrink-0 font-black text-xl text-gray-400">03</div>
                        <div class="pt-2">
                            <p class="text-lg text-gray-600 font-medium">Choose the credits that align with your project’s goals and build your LEED project scorecard.</p>
                        </div>
                    </div>
                    <div class="flex gap-8 group">
                        <div class="h-12 w-12 bg-gray-100 group-hover:bg-sky-500 group-hover:text-white transition-all rounded-[1rem] flex items-center justify-center shrink-0 font-black text-xl text-gray-400">04</div>
                        <div class="pt-2">
                            <p class="text-lg text-gray-600 font-medium">Manage implementation with your project team. Assign credits and document prerequisites.</p>
                        </div>
                    </div>
                    <div class="flex gap-8 group">
                        <div class="h-12 w-12 bg-gray-100 group-hover:bg-sky-500 group-hover:text-white transition-all rounded-[1rem] flex items-center justify-center shrink-0 font-black text-xl text-gray-400">05</div>
                        <div class="pt-2">
                            <p class="text-lg text-gray-600 font-medium">Submit documentation for review in Arc or LEED Online for final verification by GBCI.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tools & Resources -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-gray-50 rounded-[4rem] border border-gray-100 space-y-12">
                <div class="text-center space-y-4">
                    <h2 class="text-3xl font-extrabold text-gray-900">LEED project tools and resources</h2>
                    <p class="text-gray-500 max-w-3xl mx-auto">Equipping professionals with the knowledge and skills needed to design, build, and operate sustainable buildings.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 class="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span class="w-2 h-2 bg-sky-500 rounded-full"></span> MPRs
                        </h4>
                        <p class="text-gray-500 leading-relaxed text-justify">Minimum program requirements (MPRs) help project teams determine whether their building type is eligible to achieve a LEED rating. They define the types of buildings LEED was designed to evaluate.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 class="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span class="w-2 h-2 bg-sky-500 rounded-full"></span> Reference Guides
                        </h4>
                        <p class="text-gray-500 leading-relaxed text-justify">Comprehensive guides providing in-depth explanations of each credit and prerequisite within a specific rating system. Think of these as detailed instruction manuals for success.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 class="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span class="w-2 h-2 bg-sky-500 rounded-full"></span> Credit Library
                        </h4>
                        <p class="text-gray-500 leading-relaxed text-justify">The central resource for understanding LEED credit requirements. It provides granular details on compliance paths and exact points earned for each criteria.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <h4 class="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span class="w-2 h-2 bg-sky-500 rounded-full"></span> Guide to Certification
                        </h4>
                        <p class="text-gray-500 leading-relaxed text-justify">Outlines the overall process of pursuing LEED certification, including key steps, policies, pricing and deadlines for each rating system.</p>
                    </div>
                </div>
            </section>

            <!-- Final Professional Conclusion -->
            <section class="max-w-5xl mx-auto px-6 py-24 text-center space-y-12">
                <div class="space-y-4">
                    <h2 class="text-5xl font-black text-gray-900 tracking-tight italic">Leading the future of green development</h2>
                    <div class="w-32 h-2 bg-sky-500 mx-auto rounded-full"></div>
                </div>
                <p class="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto text-justify">
                    LEED is more than just a certification; it's a commitment to building a healthier, more sustainable future for the Kingdom of Saudi Arabia. By following these global standards, developers can ensure their buildings are as efficient as they are iconic.
                </p>
                <div class="pt-12">
                     <p class="text-sky-600 font-black text-2xl uppercase tracking-tighter italic">Sustainability Highway</p>
                     <p class="text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] mt-3">Verified Excellence in Green Architecture</p>
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
        console.log('✅ Updated LEED Article to EXACT Official USGBC Standard (White Theme)');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created EXACT Official USGBC LEED Article');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
