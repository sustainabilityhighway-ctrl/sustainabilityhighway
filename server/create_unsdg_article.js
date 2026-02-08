const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Definitive Guide to UN Sustainable Development Goals (UNSDG)
    // Criteria:
    // - DRAFT Status
    // - No Numbered Headings (1. 2. 3. removed)
    // - High word count (~1600 words)
    // - Fixed Visibility (Black text on white sections using 'not-prose')
    // - No repeated FAQs
    // - Strong Conclusion
    // - Optimized WebP Images
    // - Internal Linking (Mostadam, LEED, Vision 2030)

    const unsdgContent = `
        <div class="blog-content space-y-16 py-8 text-gray-100">
            
            <!-- Introduction -->
            <header class="space-y-8 max-w-4xl">
                <p class="text-2xl leading-relaxed font-light text-gray-300">
                    The year 2030 is no longer a distant target on a policy document; it is a rapidly approaching deadline for global transformation. The <a href="/projects/vision-2030" class="text-[#C5A059] hover:underline font-bold">2030 Agenda for Sustainable Development</a>, adopted by all 193 UN Member States, represents the most ambitious collective undertaking in human history.
                </p>
                <div class="p-8 bg-[#0B2B24] border-l-8 border-[#C5A059] rounded-r-2xl shadow-inner">
                    <p class="text-xl leading-relaxed text-gray-300 italic">
                        "The 17 Sustainable Development Goals are not merely a 'to-do' list for governments. They are the scaffolding upon which we must build a resilient, equitable, and sustainable global economy."
                    </p>
                </div>
                <p class="text-lg leading-relaxed text-gray-400">
                    This analysis provides a strategic roadmap for understanding the UNSDGs within the context of the Middle East's rapid transition, exploring how these 17 goals intersect with regional giga-projects and technical frameworks like <a href="/blogs/mostadam-rating-system-guide" class="text-[#C5A059] hover:underline">Mostadam</a> and <a href="/blogs/leed-saudi-arabia-guide" class="text-[#C5A059] hover:underline">LEED</a>.
                </p>
            </header>

            <!-- Hero Image with INLINE STYLE FIX -->
            <figure class="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                    src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?fm=webp&w=1400&q=80" 
                    alt="UN Sustainability Goals Global Coordination" 
                    style="width: 100%; height: 500px; object-fit: cover; display: block;"
                    class="transition-transform duration-700 group-hover:scale-105" 
                />
                <figcaption class="p-6 bg-[#041612]/90 backdrop-blur-md text-center text-sm text-gray-300">
                    Global cooperation is the engine driving the 2030 Agenda forward.
                </figcaption>
            </figure>

            <!-- Section: The 5 Ps -->
            <section class="space-y-10">
                <h2 class="text-4xl font-black text-white tracking-tight">The Architecture of the 17 Goals</h2>
                <p class="text-xl text-gray-300 leading-relaxed max-w-3xl">
                    To understand the UNSDGs effectively, one must look past the individual icons to the underlying philosophy. The UN categorizes these 17 goals into five critical dimensions: <strong>People, Planet, Prosperity, Peace, and Partnership.</strong>
                </p>

                <!-- 5 Ps Grid with ULTRA-AGGRESSIVE VISIBILITY FIX -->
                <div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
                    <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200" style="background-color: white !important;">
                        <div class="text-3xl mb-4">👥</div>
                        <h3 style="color: #000 !important; font-weight: 900 !important;" class="text-xl font-black mb-2 uppercase tracking-tight">People</h3>
                        <p style="color: #1f2937 !important; font-weight: 700 !important;" class="text-sm leading-relaxed">Ending poverty and hunger in all forms and ensuring dignity and equality for all humans.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200" style="background-color: white !important;">
                        <div class="text-3xl mb-4">🌍</div>
                        <h3 style="color: #000 !important; font-weight: 900 !important;" class="text-xl font-black mb-2 uppercase tracking-tight">Planet</h3>
                        <p style="color: #1f2937 !important; font-weight: 700 !important;" class="text-sm leading-relaxed">Protecting our planet's natural resources and climate stability for future generations.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200" style="background-color: white !important;">
                        <div class="text-3xl mb-4">📈</div>
                        <h3 style="color: #000 !important; font-weight: 900 !important;" class="text-xl font-black mb-2 uppercase tracking-tight">Prosperity</h3>
                        <p style="color: #1f2937 !important; font-weight: 700 !important;" class="text-sm leading-relaxed">Ensuring prosperous and fulfilling lives that are lived in perfect harmony with nature.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200" style="background-color: white !important;">
                        <div class="text-3xl mb-4">🕊️</div>
                        <h3 style="color: #000 !important; font-weight: 900 !important;" class="text-xl font-black mb-2 uppercase tracking-tight">Peace</h3>
                        <p style="color: #1f2937 !important; font-weight: 700 !important;" class="text-sm leading-relaxed">Fostering peaceful, just, and inclusive societies free from the shadow of fear and violence.</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200" style="background-color: white !important;">
                        <div class="text-3xl mb-4">🤝</div>
                        <h3 style="color: #000 !important; font-weight: 900 !important;" class="text-xl font-black mb-2 uppercase tracking-tight">Partnership</h3>
                        <p style="color: #1f2937 !important; font-weight: 700 !important;" class="text-sm leading-relaxed">Mobilizing the critical means to implement the agenda through global solidarity.</p>
                    </div>
                </div>
            </section>

            <!-- Section: Deep Dive into Critical Goals -->
            <section class="space-y-12">
                <h2 class="text-4xl font-black text-white tracking-tight">Strategic Implementation: 2024 and Beyond</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="space-y-4 group">
                        <div class="h-1 bg-[#C5A059] w-20 transition-all duration-500 group-hover:w-full"></div>
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3 italic">
                            Clean Water and Sanitation (SDG 6)
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            For Saudi Arabia and the wider GCC region, SDG 6 is a survival imperative. Projects like NEOM's advanced desalination plants and Riyadh's massive wastewater recycling initiatives are benchmarks for this goal. Reducing potable water usage in construction (aligned with <a href="/blogs/mostadam-rating-system-guide" class="text-[#C5A059] hover:underline">Mostadam</a>) is a key tactical entry point.
                        </p>
                    </div>

                    <div class="space-y-4 group">
                        <div class="h-1 bg-[#C5A059] w-20 transition-all duration-500 group-hover:w-full"></div>
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3 italic">
                            Affordable and Clean Energy (SDG 7)
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            The transition to solar and hydrogen energy in the Kingdom represents one of the largest contributions to SDG 7 globally. By integrating smart grids and high-efficiency HVAC systems into new urban developments, developers directly earn points toward both <a href="/blogs/leed-saudi-arabia-guide" class="text-[#C5A059] hover:underline">LEED Platinum</a> status and global SDG targets.
                        </p>
                    </div>

                    <div class="space-y-4 group">
                        <div class="h-1 bg-[#C5A059] w-20 transition-all duration-500 group-hover:w-full"></div>
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3 italic">
                            Sustainable Cities and Communities (SDG 11)
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                            SDG 11 is where sustainability meets the ground. It focuses on making cities inclusive, safe, and resilient. In the Saudi context, this means reducing the "Urban Heat Island" effect through innovative shading, promoting non-motorized transport (walking and cycling), and preserving cultural heritage sites (SDG 11.4).
                        </p>
                    </div>

                    <div class="space-y-4 group">
                        <div class="h-1 bg-[#C5A059] w-20 transition-all duration-500 group-hover:w-full"></div>
                        <h3 class="text-2xl font-bold text-[#C5A059] flex items-center gap-3 italic">
                            Responsible Consumption and Production (SDG 12)
                        </h3>
                        <p class="text-gray-300 leading-relaxed text-lg">
                             This goal targets the construction supply chain directly. By prioritizing locally manufactured, sustainable materials (Local Content), projects reduce transport emissions and support a circular economy. This also aligns with national mandates for industrial diversification.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Image 3 with INLINE STYLE FIX -->
            <figure class="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                    src="https://images.unsplash.com/photo-1449156001935-d2863fb72690?fm=webp&w=1200&q=80" 
                    alt="Sustainable City Infrastructure UN SDGs" 
                    style="width: 100%; height: 400px; object-fit: cover; display: block;"
                    class="transition-transform duration-700 group-hover:scale-105" 
                />
                <figcaption class="p-6 bg-[#041612]/90 backdrop-blur-md text-center text-sm text-gray-300">
                    The intersection of infrastructure, innovation, and social equity in the modern sustainable city.
                </figcaption>
            </figure>

            <!-- Section: Progress Tracking Table -->
            <section class="space-y-10">
                <div class="space-y-4">
                    <h2 class="text-4xl font-black text-white tracking-tight">The Measurement Mandate</h2>
                    <p class="text-lg text-gray-300 max-w-3xl">
                        A core tenant of the 2030 Agenda is data transparency. Without rigorous measurement, the goals remain aspirations. Below is a thematic breakdown of how technical projects track SDG alignment.
                    </p>
                </div>

                <!-- Technical Table with ULTRA-AGGRESSIVE INLINE STYLE FIX -->
                <div class="not-prose overflow-hidden rounded-3xl shadow-2xl border-4 border-slate-100" style="background-color: white !important;">
                    <table class="w-full text-left border-collapse" style="background-color: white !important;">
                        <thead class="bg-gray-100 border-b-2 border-slate-200" style="background-color: #f3f4f6 !important;">
                            <tr>
                                <th style="color: #000 !important; font-weight: 900 !important; padding: 2rem;" class="text-sm uppercase tracking-widest">Dimension</th>
                                <th style="color: #000 !important; font-weight: 900 !important; padding: 2rem;" class="text-sm uppercase tracking-widest">Key Indicator</th>
                                <th style="color: #000 !important; font-weight: 900 !important; padding: 2rem;" class="text-sm uppercase tracking-widest hidden md:table-cell">Target Alignment</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td style="padding: 2rem;">
                                    <span style="color: #000 !important; font-weight: 900 !important; font-size: 1.25rem;">Carbon Intensity</span>
                                </td>
                                <td style="padding: 2rem;">
                                    <span style="color: #059669 !important; font-weight: 900 !important; font-size: 1.125rem; font-family: monospace;">tCO2e / m2</span>
                                </td>
                                <td style="padding: 2rem; color: #1f2937 !important; font-weight: 700 !important; font-style: italic;" class="hidden md:table-cell">Net Zero by 2060 (KSA Mandate)</td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td style="padding: 2rem;">
                                    <span style="color: #000 !important; font-weight: 900 !important; font-size: 1.25rem;">Water Circularity</span>
                                </td>
                                <td style="padding: 2rem;">
                                    <span style="color: #1d4ed8 !important; font-weight: 900 !important; font-size: 1.125rem; font-family: monospace;">% Recycling Rate</span>
                                </td>
                                <td style="padding: 2rem; color: #1f2937 !important; font-weight: 700 !important; font-style: italic;" class="hidden md:table-cell">100% Reuse of Treated Water</td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td style="padding: 2rem;">
                                    <span style="color: #000 !important; font-weight: 900 !important; font-size: 1.25rem;">Local Content</span>
                                </td>
                                <td style="padding: 2rem;">
                                    <span style="color: #78350f !important; font-weight: 900 !important; font-size: 1.125rem; font-family: monospace;">% Material Spend</span>
                                </td>
                                <td style="padding: 2rem; color: #1f2937 !important; font-weight: 700 !important; font-style: italic;" class="hidden md:table-cell">Economic Diversification Pillar</td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td style="padding: 2rem;">
                                    <span style="color: #000 !important; font-weight: 900 !important; font-size: 1.25rem;">Waste Diversion</span>
                                </td>
                                <td style="padding: 2rem;">
                                    <span style="color: #1e293b !important; font-weight: 900 !important; font-size: 1.125rem; font-family: monospace;">% Sent to Landfill</span>
                                </td>
                                <td style="padding: 2rem; color: #1f2937 !important; font-weight: 700 !important; font-style: italic;" class="hidden md:table-cell">Target 90%+ Non-Hazardous Diversion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Section: Vision 2030 Synergy -->
            <section class="p-12 bg-gradient-to-br from-[#0B2B24] to-[#041612] rounded-[3rem] border border-white/10 shadow-inner relative overflow-hidden group">
                <div class="relative z-10 space-y-6">
                    <h2 class="text-4xl font-black text-white">The Synergy: UNSDG and Vision 2030</h2>
                    <p class="text-xl text-gray-300 leading-relaxed font-light">
                        Saudi Arabia’s Vision 2030 is arguably one of the most comprehensive national embodiments of the UNSDGs. Whether through the massive reforestation efforts (Saudi Green Initiative) or the creation of future urban habitats (The Line), the Kingdom is translating global targets into physical realities. This synergy provides a unique opportunity for businesses to align with global standards while contributing to national growth.
                    </p>
                </div>
                <div class="absolute bottom-0 right-0 p-8 text-[#C5A059]/5 text-[12rem] font-black pointer-events-none transition-all duration-500 group-hover:scale-110">
                    2030
                </div>
            </section>

            <!-- Final Conclusion Added -->
            <section class="space-y-10 border-t border-white/10 pt-16">
                <h2 class="text-4xl font-black text-white tracking-tight">Conclusion: The Urgency of Action</h2>
                <div class="space-y-6 text-xl leading-relaxed text-gray-300 font-light italic">
                    <p>
                        The UN Sustainable Development Goals are not a static end-state but a dynamic process of continuous improvement. As we move closer to the 2030 threshold, the window for meaningful intervention is narrowing, but the tools for success—infrastructure, innovation, and global partnership—are more powerful than ever.
                    </p>
                    <p>
                        For practitioners in the Kingdom and beyond, achieving these goals requires a technical commitment to transparency, a design commitment to circularity, and a social commitment to inclusivity. Only by integrating these 17 goals into the very DNA of our urban landscapes can we ensure a future that is truly sustainable.
                    </p>
                    <p class="text-[#C5A059] font-bold py-10 border-y border-white/10 text-center tracking-wider uppercase">
                        "The future is not something we predict; it is something we build one goal at a time."
                    </p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'UN Sustainable Development Goals (UNSDG): The Definitive 2030 Guide',
        content: unsdgContent,
        slug: 'unsdg-2030-guide',
        status: 'DRAFT', // ENSURED DRAFT
        meta_title: 'UNSDG 2030 Guide: 17 Goals for a Sustainable Future',
        meta_description: 'Comprehensive guide to the 17 UN Sustainable Development Goals (UNSDG). Technical analysis of SDG impact, measurement indicators, and Vision 2030 synergy.',
        faq_data: JSON.stringify([
            { question: "What are the 17 UN Sustainable Development Goals?", answer: "The 17 SDGs include No Poverty, Zero Hunger, Climate Action, Sustainable Cities, and 13 other goals designed to create a more equitable and sustainable world by 2030." },
            { question: "How does Vision 2030 align with the UNSDGs?", answer: "Vision 2030 is deeply integrated with the SDGs, particularly in areas of clean energy, sustainable urban development (NEOM), and economic diversification." },
            { question: "Why is data important for the 2030 Agenda?", answer: "Data allows for transparent measurement of progress against the 169 targets of the SDGs, ensuring accountability and highlighting areas needing intervention." },
            { question: "Can businesses contribute to the UNSDGs?", answer: "Absolutely. Most global corporations now align their ESG strategies with specific SDGs to demonstrate social responsibility and environmental commitment." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "UN Sustainable Development Goals 2030 Guide",
            "datePublished": "2024-02-06",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fm=webp&w=1400&q=80"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fm=webp&w=1400&q=80',
        excerpt: 'The strategic roadmap to the 17 UN Sustainable Development Goals (UNSDG). Understanding global targets, measurement indicators, and national synergy.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated UNSDG Article: DRAFT secured, No numbers, Fixed visibility, Conclusion added.');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created New UNSDG Article in DRAFT.');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
