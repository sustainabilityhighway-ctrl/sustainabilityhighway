const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Starting Migration of Missing Articles...');

    const authorId = 'c75aa70c-160c-4cef-8017-9669043d09f4';

    // 1. LEED and Mostadam Certification
    const leedMostadamContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            <!-- Hero Section -->
            <section class="space-y-12">
                <p class="text-4xl leading-relaxed text-white font-black border-l-[12px] border-[#4CAF50] pl-12 uppercase tracking-tighter italic">
                    The dual pillar of Saudi Arabia's green building revolution: Global recognition meets local excellence.
                </p>
                <div class="space-y-8 text-lg leading-relaxed text-gray-300 max-w-5xl">
                    <p>
                        In the pursuit of <a href="/projects/vision-2030" class="text-[#4CAF50] hover:underline font-black">Saudi Vision 2030</a>, the construction industry stands as a primary battlefield for sustainability. Developers are faced with a strategic choice: the internationally recognized <strong>LEED (Leadership in Energy and Environmental Design)</strong> or the Kingdom's homegrown <strong>Mostadam</strong> rating system.
                    </p>
                    <p>
                        While LEED provides a global benchmark for excellence, Mostadam is precisely calibrated for the unique environmental and cultural context of Saudi Arabia. This guide explores the synergy between these two frameworks and how they collectively drive the Kingdom toward a net-zero future.
                    </p>
                </div>
                
                <div class="relative rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/10 h-[600px] bg-black">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="LEED and Mostadam Certification" class="w-full h-full object-cover opacity-60" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-16">
                        <div class="bg-white p-12 rounded-[3rem] max-w-xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                            <p class="text-[#4CAF50] font-black text-sm uppercase tracking-[0.5em] mb-4">Dual Certification</p>
                            <h2 class="text-black text-5xl font-black leading-tight tracking-tighter">LEED & <br/><span class="text-[#4CAF50]">Mostadam</span></h2>
                            <p class="text-black/60 font-bold mt-4 text-lg">The ultimate synergy for sustainable development in KSA.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 1: Comparison -->
            <section class="space-y-16">
                <div class="space-y-6 text-center">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase">Global vs. Local</h2>
                    <div class="w-40 h-2 bg-[#4CAF50] mx-auto rounded-full"></div>
                    <p class="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Understanding the distinct advantages of each system is critical for strategic project planning.
                    </p>
                </div>

                <div class="not-prose overflow-hidden rounded-[5rem] border-4 border-white/10 shadow-[0_100px_200px_rgba(0,0,0,1)] bg-white text-black">
                     <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div class="p-16 space-y-8 hover:bg-slate-50 transition-all duration-500">
                            <h3 class="font-black text-4xl text-center">LEED (USGBC)</h3>
                            <ul class="space-y-4 text-lg font-medium text-slate-600">
                                <li class="flex items-center gap-4"><span class="text-emerald-500 text-2xl">✔</span> Internationally recognized prestige</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-500 text-2xl">✔</span> Preferred by multinational tenants</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-500 text-2xl">✔</span> Focus on energy & carbon reduction</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-500 text-2xl">✔</span> Robust global supply chain integration</li>
                            </ul>
                        </div>
                        <div class="p-16 space-y-8 bg-slate-50/50">
                            <h3 class="font-black text-4xl text-center text-emerald-800">Mostadam (MOH)</h3>
                            <ul class="space-y-4 text-lg font-medium text-slate-700">
                                <li class="flex items-center gap-4"><span class="text-emerald-600 text-2xl">✔</span> Mandatory for government projects</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-600 text-2xl">✔</span> Calibrated for Saudi climate & humidity</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-600 text-2xl">✔</span> Emphasis on water conservation (25% weight)</li>
                                <li class="flex items-center gap-4"><span class="text-emerald-600 text-2xl">✔</span> Reward for local cultural heritage</li>
                            </ul>
                        </div>
                     </div>
                </div>
            </section>

            <!-- Section 2: Technical Synergy -->
             <section class="space-y-24 bg-white rounded-[6rem] p-24 text-black shadow-[0_80px_200px_rgba(0,0,0,1)] border-[15px] border-black/5">
                <div class="space-y-8">
                    <h2 class="text-7xl font-black tracking-tighter uppercase leading-none">The Path to <br/>Dual Certification</h2>
                    <div class="w-32 h-4 bg-emerald-600 rounded-full"></div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="space-y-6">
                        <h4 class="text-emerald-700 font-black text-2xl uppercase">Shared Baselines</h4>
                        <p class="text-lg leading-relaxed font-bold text-black/60">Both systems utilize ASHRAE standards for energy modeling, allowing a single model to serve both certification paths with minor adjustments.</p>
                    </div>
                    <div class="space-y-6">
                        <h4 class="text-emerald-700 font-black text-2xl uppercase">Water Mastery</h4>
                        <p class="text-lg leading-relaxed font-bold text-black/60">Credits earned for water recycling in Mostadam directly contribute to LEED's Outdoor Water Use Reduction targets.</p>
                    </div>
                    <div class="space-y-6">
                        <h4 class="text-emerald-700 font-black text-2xl uppercase">Local Materials</h4>
                        <p class="text-lg leading-relaxed font-bold text-black/60">Sourcing materials from Saudi factories earns points in both Mostadam's Local Content and LEED's Regional Priority categories.</p>
                    </div>
                </div>
            </section>

            <section class="p-24 bg-gradient-to-br from-[#0a2012] to-black rounded-[6rem] border-4 border-white/5 text-center">
                <h3 class="text-5xl font-black text-white mb-8">Ready to Certify?</h3>
                <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Our team of LEED APs and Mostadam Accredited Professionals can guide your project from registration to plaque.</p>
                <div class="flex justify-center gap-8">
                    <div class="px-10 py-5 bg-[#4CAF50] text-white font-black rounded-full uppercase tracking-widest shadow-xl">Get Started</div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="space-y-16">
                <h3 class="text-4xl font-black text-white text-center uppercase tracking-widest">Frequently Asked Questions</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                        <h4 class="text-[#4CAF50] font-black text-xl mb-4">Is Mostadam replaces LEED in KSA?</h4>
                        <p class="text-gray-400">No, Mostadam complements LEED. While Mostadam is local, LEED remains the global gold standard preferred by international investors.</p>
                    </div>
                    <div class="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                        <h4 class="text-[#4CAF50] font-black text-xl mb-4">Can I achieve both at once?</h4>
                        <p class="text-gray-400">Yes! In fact, we recommend it. Over 60% of technical requirements overlap, making dual certification highly cost-effective.</p>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 2. NEOM's Sustainability Goals
    const neomContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            <!-- Hero Section -->
            <section class="space-y-12">
                <p class="text-4xl leading-relaxed text-white font-black border-l-[12px] border-[#00d084] pl-12 uppercase tracking-tighter italic">
                    Building the world's most sustainable region from a clean sheet: Where the future of humanity begins.
                </p>
                <div class="space-y-8 text-lg leading-relaxed text-gray-300 max-w-5xl">
                    <p>
                        NEOM is not just a city; it is a vision of how the future could look. Strategically located in the northwest of Saudi Arabia, NEOM represents the boldest sustainability experiment in human history. By integrating 100% renewable energy, a circular economy, and cognitive city technology, NEOM aims to solve the world's most pressing urban challenges.
                    </p>
                    <p>
                        From <strong>The Line</strong>—a revolution in zero-carbon urbanism—to the cognitive industrial hub of <strong>Oxagon</strong>, every project within NEOM is built on a foundation of absolute sustainability and harmony with nature.
                    </p>
                </div>
                
                <div class="relative rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/10 h-[600px] bg-black">
                    <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200" alt="NEOM Sustainability" class="w-full h-full object-cover opacity-60" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-16">
                        <div class="bg-white p-12 rounded-[3rem] max-w-xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                            <p class="text-[#00d084] font-black text-sm uppercase tracking-[0.5em] mb-4">Future of Living</p>
                            <h2 class="text-black text-5xl font-black leading-tight tracking-tighter">NEOM: The <br/><span class="text-[#00d084]">Green Frontier</span></h2>
                            <p class="text-black/60 font-bold mt-4 text-lg">Achieving 100% renewable energy and 0% carbon emissions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 1: The 3 Pillars -->
            <section class="space-y-16">
                <div class="space-y-6 text-center">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase">The Three Foundations</h2>
                    <div class="w-40 h-2 bg-[#00d084] mx-auto rounded-full"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div class="p-12 bg-white/5 rounded-[4rem] border-2 border-white/5 hover:border-[#00d084]/30 transition-all text-center">
                        <h4 class="text-[#00d084] font-black text-2xl uppercase mb-6">Environment</h4>
                        <p class="text-gray-400 font-medium">95% of NEOM's land is protected for conservation. Achieving net-positive biodiversity through rewilding and sea-water farming.</p>
                    </div>
                    <div class="p-12 bg-white/5 rounded-[4rem] border-2 border-white/5 hover:border-[#00d084]/30 transition-all text-center">
                        <h4 class="text-[#00d084] font-black text-2xl uppercase mb-6">Society</h4>
                        <p class="text-gray-400 font-medium">Humans first design. No cars, no streets. All daily needs reachable within a 5-minute walk. Zero noise and air pollution.</p>
                    </div>
                    <div class="p-12 bg-white/5 rounded-[4rem] border-2 border-white/5 hover:border-[#00d084]/30 transition-all text-center">
                        <h4 class="text-[#00d084] font-black text-2xl uppercase mb-6">Economy</h4>
                        <p class="text-gray-400 font-medium">A hub for the world's leading innovators. 100% circular economy where waste is a resource and growth is green.</p>
                    </div>
                </div>
            </section>

            <!-- Section 2: Technical Innovation -->
            <section class="space-y-24 bg-white rounded-[6rem] p-24 text-black shadow-[0_80px_200px_rgba(0,0,0,1)] border-[15px] border-black/5">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div class="space-y-12">
                        <h2 class="text-7xl font-black tracking-tighter uppercase leading-none">Net Zero <br/>By Design</h2>
                        <div class="w-32 h-4 bg-emerald-600 rounded-full"></div>
                        <div class="space-y-8 text-lg font-bold text-black/70 italic">
                            <p>NEOM will be powered by 100% renewable energy—solar, wind, and the world's largest green-hydrogen project. Its infrastructure is built for water circularity, with zero liquid discharge into the marine environment.</p>
                            <p>The Line's mirror facade is not just aesthetic; it reflects the sun and allows the city to blend into the landscape, minimizing the disruption to native ecosystems while maximizing thermal efficiency.</p>
                        </div>
                    </div>
                    <div class="relative rounded-[4rem] overflow-hidden shadow-2xl h-[500px]">
                        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" alt="Renewable Energy NEOM" class="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="space-y-16">
                <h3 class="text-4xl font-black text-white text-center uppercase tracking-widest">Sustainability FAQ</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                        <h4 class="text-[#00d084] font-black text-xl mb-4">How is NEOM powered?</h4>
                        <p class="text-gray-400">NEOM aims to be the first large-scale development in the world to be 100% powered by renewable energy, including solar, wind, and green hydrogen.</p>
                    </div>
                    <div class="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                        <h4 class="text-[#00d084] font-black text-xl mb-4">What happens to waste in NEOM?</h4>
                        <p class="text-gray-400">NEOM implements a zero-waste policy. Everything is recycled or reused within a closed-loop circular economy system.</p>
                    </div>
                </div>
            </section>
        </div>
    `;

    const articles = [
        {
            title: 'LEED and Mostadam Certification: The Unified Roadmap',
            content: leedMostadamContent,
            slug: 'leed-and-mostadam-certification',
            status: 'PUBLISHED',
            meta_title: 'LEED and Mostadam Certification Guide | Saudi Arabia',
            meta_description: 'Discover the ultimate guide to LEED and Mostadam certification in Saudi Arabia. Compare local vs global standards and learn how to achieve dual certification.',
            faq_data: JSON.stringify([
                { question: "What is LEED?", answer: "LEED (Leadership in Energy and Environmental Design) is a world-renowned green building certification system." },
                { question: "What is Mostadam?", answer: "Mostadam is Saudi Arabia’s local sustainability rating system for building and community projects." },
                { question: "Is certification mandatory?", answer: "Mostadam is mandatory for certain government-funded and residential projects, while LEED is voluntary but expected for giga-projects." },
                { question: "Which one is better?", answer: "Both are excellent. LEED offers global prestige, while Mostadam offers local relevance and focus on water conservation." }
            ]),
            schema_data: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "LEED and Mostadam Certification: The Unified Roadmap",
                "author": { "@type": "Organization", "name": "Sustainability Highway" }
            }),
            authorId: authorId,
            image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            excerpt: 'The ultimate comparison and implementation guide for LEED and Mostadam in Saudi Arabia.'
        },
        {
            title: "NEOM's Sustainability Goals: A Vision for Tomorrow",
            content: neomContent,
            slug: 'neoms-sustainability-goals',
            status: 'PUBLISHED',
            meta_title: "NEOM's Sustainability Goals: Leading the Green Revolution",
            meta_description: "Explore the ambitious sustainability goals of NEOM. From 100% renewable energy to zero-carbon urbanism in The Line.",
            faq_data: JSON.stringify([
                { question: "What are NEOM's key sustainability goals?", answer: "Achieving carbon neutrality by 2030, 100% renewable energy, zero waste, and 95% nature preservation." },
                { question: "What is The Line?", answer: "A 170km-long zero-carbon city with no cars or streets, built in NEOM." },
                { question: "How does NEOM conserve water?", answer: "Through a circular water economy and zero liquid discharge into the Red Sea." },
                { question: "Is NEOM real?", answer: "Yes, it is a flagship giga-project under Saudi Vision 2030 currently under construction." }
            ]),
            schema_data: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "NEOM's Sustainability Goals: A Vision for Tomorrow",
                "author": { "@type": "Organization", "name": "Sustainability Highway" }
            }),
            authorId: authorId,
            image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200',
            excerpt: 'How NEOM is redefining the limits of sustainable development and cognitive urban living.'
        }
    ];

    for (const article of articles) {
        const existing = await prisma.blog.findUnique({ where: { slug: article.slug } });
        if (existing) {
            await prisma.blog.update({
                where: { id: existing.id },
                data: article
            });
            console.log(`✅ Updated article: ${article.title}`);
        } else {
            await prisma.blog.create({ data: article });
            console.log(`✅ Created article: ${article.title}`);
        }
    }

    console.log('✨ Migration Completed Successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Migration Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
