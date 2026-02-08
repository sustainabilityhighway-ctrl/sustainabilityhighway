const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Definitive Guide to LEED in Saudi Arabia
    // Criteria:
    // - DRAFT Status
    // - No Numbered Headings (1. 2. 3. removed)
    // - High word count (~1500-1800 words)
    // - Fixed Visibility (Black text on white sections using 'not-prose')
    // - No repeated FAQs
    // - Strong Conclusion
    // - Optimized WebP Images

    const leedContent = `
        <div class="blog-content space-y-16 py-8 text-gray-100">
            
            <!-- Introduction -->
            <header class="space-y-8 max-w-4xl">
                <p class="text-2xl leading-relaxed font-light text-gray-300">
                    Saudi Arabia's architectural landscape is undergoing a profound metamorphosis. As the Kingdom pushes toward <a href="/projects/vision-2030" class="text-[#C5A059] hover:underline font-bold">Vision 2030</a>, the integration of global sustainability standards has moved from a commendable choice to a core development strategy.
                </p>
                <p class="text-xl leading-relaxed border-l-4 border-[#C5A059] pl-6 text-gray-300 italic">
                    Among these standards, <strong>LEED (Leadership in Energy and Environmental Design)</strong> remains the most widely recognized international benchmark for high-performance green buildings.
                </p>
                <p class="text-lg leading-relaxed text-gray-400">
                    This comprehensive analysis explores the technical nuances of implementing LEED within the unique climatic and economic context of the Middle East, specifically focusing on the Kingdom's mega-projects like NEOM and the Red Sea Global initiatives.
                </p>
            </header>

            <!-- Hero Image -->
            <figure class="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&w=1400&q=80" alt="Sustainable Skyscraper Saudi Arabia LEED" class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption class="p-6 bg-[#041612]/90 backdrop-blur-md text-center text-sm text-gray-300">
                    Redefining the Saudi skyline through the lens of LEED-certified sustainability.
                </figcaption>
            </figure>

            <!-- Section: Defining LEED -->
            <section class="space-y-8">
                <h2 class="text-4xl font-black text-white tracking-tight">Understanding the LEED Framework</h2>
                <div class="space-y-6 text-lg leading-relaxed text-gray-300">
                    <p>
                        Developed by the U.S. Green Building Council (USGBC), LEED provides a points-based system that allows building owners and operators to be environmentally responsible and use resources efficiently. In Saudi Arabia, this framework is often used alongside the local <a href="/blogs/mostadam-rating-system-guide" class="text-[#C5A059] hover:underline">Mostadam system</a> to provide both international prestige and local regulatory alignment.
                    </p>
                    <p>
                        The core advantage of LEED in the region lies in its ability to standardize performance metrics across global portfolios, making it a favorite for sovereign wealth funds and international investors looking to fulfill ESG (Environmental, Social, and Governance) commitments.
                    </p>
                </div>

                <!-- Three Pillars Grid with FIX: not-prose and black text -->
                <div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="text-[#C5A059] text-5xl mb-6">🏜️</div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase">Environmental</h3>
                        <p class="text-slate-800 font-medium leading-relaxed">Reducing carbon emissions, protecting biodiversity in the Red Sea, and maximizing water circularity in arid zones.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="text-[#C5A059] text-5xl mb-6">💰</div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase">Economic</h3>
                        <p class="text-slate-800 font-medium leading-relaxed">Lowering operational costs by up to 30% through energy-efficient cooling and smart building automation systems.</p>
                    </div>
                    <div class="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 transform hover:-translate-y-2 transition-all duration-300">
                        <div class="text-[#C5A059] text-5xl mb-6">👤</div>
                        <h3 class="text-2xl font-black text-slate-900 mb-4 uppercase">Social</h3>
                        <p class="text-slate-800 font-medium leading-relaxed">Enhancing occupant well-being through superior indoor air quality and design that celebrates Saudi heritage.</p>
                    </div>
                </div>
            </section>

            <!-- Section: Certification Tiers -->
            <section class="space-y-10">
                <div class="space-y-4">
                    <h2 class="text-4xl font-black text-white tracking-tight">The Hierarchy of Achievement</h2>
                    <p class="text-lg text-gray-300 max-w-3xl">
                        Certification is not merely a label; it is a rigorous verification process. Projects must meet all prerequisites before any elective credits can be counted toward a rating level.
                    </p>
                </div>

                <!-- Performance Table with FIX: not-prose and black text -->
                <div class="not-prose overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 bg-white">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 border-b-2 border-slate-200">
                                <th class="p-8 text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Rating Level</th>
                                <th class="p-8 text-sm font-black text-slate-500 uppercase tracking-[0.2em]">Point Threshold</th>
                                <th class="p-8 text-sm font-black text-slate-500 uppercase tracking-[0.2em] hidden md:table-cell">Impact Class</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 italic">
                            <tr class="group hover:bg-slate-50 transition-colors">
                                <td class="p-8 flex items-center gap-4">
                                    <div class="w-4 h-4 rounded-full bg-emerald-500"></div>
                                    <span class="text-xl font-black text-slate-900">Certified</span>
                                </td>
                                <td class="p-8">
                                    <span class="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-mono font-bold tracking-tighter text-lg">40 — 49</span>
                                </td>
                                <td class="p-8 hidden md:table-cell text-slate-700 font-medium">Standard green compliance.</td>
                            </tr>
                            <tr class="group hover:bg-slate-50 transition-colors">
                                <td class="p-8 flex items-center gap-4">
                                    <div class="w-4 h-4 rounded-full bg-slate-400"></div>
                                    <span class="text-xl font-black text-slate-900">Silver</span>
                                </td>
                                <td class="p-8">
                                    <span class="px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-mono font-bold tracking-tighter text-lg">50 — 59</span>
                                </td>
                                <td class="p-8 hidden md:table-cell text-slate-700 font-medium">Above-average environmental performance.</td>
                            </tr>
                             <tr class="group hover:bg-slate-50 transition-colors">
                                <td class="p-8 flex items-center gap-4">
                                    <div class="w-4 h-4 rounded-full bg-[#C5A059]"></div>
                                    <span class="text-xl font-black text-slate-900">Gold</span>
                                </td>
                                <td class="p-8">
                                    <span class="px-4 py-2 bg-[#C5A059]/10 rounded-full text-[#C5A059] font-mono font-bold tracking-tighter text-lg">60 — 79</span>
                                </td>
                                <td class="p-8 hidden md:table-cell text-slate-700 font-medium">Sustainable market leadership.</td>
                            </tr>
                            <tr class="group hover:bg-slate-50 transition-colors">
                                <td class="p-8 flex items-center gap-4">
                                    <div class="w-4 h-4 rounded-full bg-[#0B2B24] ring-4 ring-[#0B2B24]/20"></div>
                                    <span class="text-xl font-black text-slate-900">Platinum</span>
                                </td>
                                <td class="p-8">
                                    <span class="px-4 py-2 bg-slate-900 rounded-full text-white font-mono font-bold tracking-tighter text-lg">80+</span>
                                </td>
                                <td class="p-8 hidden md:table-cell text-slate-700 font-medium">Global benchmark for excellence.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Image 3 -->
            <figure class="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fm=webp&w=1200&q=80" alt="Sustainable Construction Site Saudi" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>

            <!-- Section: Credits Deep Dive -->
            <section class="space-y-12">
                <h2 class="text-4xl font-black text-white tracking-tight">Technical Credit Optimization</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-sm">⚡</span> Energy and Atmosphere
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            In Saudi Arabia, energy modeling is the cornerstone of a LEED application. With extreme exterior temperatures, projects must focus on high-efficiency chiller plants and district cooling systems to meet the necessary ASHRAE baselines. Integrating photovoltaic (PV) arrays can significantly bolster points in the renewable energy category.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-sm">💧</span> Water Efficiency
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            Water scarcity is the region's greatest environmental hurdle. LEED v4 places immense weight on water reduction. Successful projects often implement dual-flush systems, greywater recycling for irrigation, and xeriscaping with native Ghaf or Neem trees, which require minimal potable water once established.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-sm">🏗️</span> Materials and Resources
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            The focus here is on Lifecycle Assessment (LCA). Saudi projects can earn points by sourcing materials locally, reducing transport emissions, and utilizing transparency reports (EPDs and HPDs) from reputable manufacturers within the Kingdom’s growing green supply chain.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3">
                            <span class="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-sm">🌿</span> Indoor Environmental Quality
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            Creating a healthy indoor environment involves rigorous chemical management. Points are awarded for low-emitting materials, enhanced ventilation, and design that provides occupants with daylight and views, which is scientifically proven to increase productivity in commercial settings.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Case Study / Highlight -->
            <section class="p-12 bg-gradient-to-br from-[#0B2B24] to-[#041612] rounded-[3rem] border border-white/10 shadow-inner relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <h2 class="text-4xl font-black text-white">The Path to Platinum: KAPSARC</h2>
                    <p class="text-xl text-gray-300 leading-relaxed">
                        The King Abdullah Petroleum Studies and Research Center (KAPSARC) in Riyadh serves as a global beacon for LEED achievement. By utilizing a modular hexagonal design, the facility naturally mitigates the harsh Saudi sun while maximizing internal daylight. It achieved Platinum status not just through technology, but through passive design strategies that are uniquely adapted to the desert.
                    </p>
                </div>
                <div class="absolute top-0 right-0 p-8 text-[#C5A059]/10 text-9xl font-black pointer-events-none">
                    KSA
                </div>
            </section>

            <!-- Final Conclusion Added -->
            <section class="space-y-10 border-t border-white/10 pt-16">
                <h2 class="text-4xl font-black text-white tracking-tight">Conclusion</h2>
                <div class="space-y-6 text-xl leading-relaxed text-gray-300 font-light">
                    <p>
                        LEED certification in Saudi Arabia is far more than a marketing exercise; it is a fundamental shift toward building a sustainable, post-oil economy. By adhering to these rigorous standards, developers are not just meeting current demands but are future-proofing their assets against a changing climate and evolving global regulations.
                    </p>
                    <p>
                        As the Kingdom matures as a global sustainability leader, the synergy between international standards like LEED and local frameworks like Mostadam will create a unique hybrid of green building excellence that is both globally relevant and culturally specific.
                    </p>
                    <p class="text-[#C5A059] font-bold italic py-8 border-y border-white/10 text-center">
                        "Sustainable design is no longer just a choice—it is the blueprint for the survival and prosperity of our future cities."
                    </p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED Certification in Saudi Arabia: A Strategic 2024 Guide',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT', // ENSURED DRAFT
        meta_title: 'LEED Guide Saudi Arabia 2024 | Green Building Strategy',
        meta_description: 'Strategic guide to LEED certification in Saudi Arabia. Master the 4 rating levels, technical credit optimization for desert climates, and Vision 2030 alignment.',
        faq_data: JSON.stringify([
            { question: "Is LEED mandatory for all projects in Saudi Arabia?", answer: "LEED is typically voluntary but often required for government-backed mega-projects, Giga-projects like NEOM, and international investment-driven commercial properties." },
            { question: "How does LEED differ from the local Mostadam system?", answer: "LEED is an international framework focused on global standardization, whereas Mostadam is specifically tailored to the Saudi climate, regulations, and culture." },
            { question: "Which LEED level is most common in Riyadh?", answer: "Most commercial developments in Riyadh target Gold or Silver, while landmark flagship projects often strive for the Platinum level to showcase innovation." },
            { question: "Are there specific benefits for LEED buildings in KSA?", answer: "Yes, benefits include significantly lower energy bills, higher asset valuation, faster market absorption, and prestige among international ESG-conscious tenants." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED Certification Saudi Arabia Guide",
            "datePublished": "2024-02-06",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&w=1400&q=80"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&w=1200&q=80',
        excerpt: 'The complete strategic roadmap to LEED certification in Saudi Arabia. Understanding the rating system, credit optimization, and Vision 2030 synergy.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article: DRAFT secured, No numbers, Fixed white-out visibility, Conclusion added.');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created New LEED Article in DRAFT.');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
