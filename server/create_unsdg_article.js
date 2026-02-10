const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // UN Sustainable Development Goals (UNSDG): The Definitive 2030 Roadmap
    // Goal: 1600+ words, high-contrast premium design, 8 FAQs, Technical Table.

    const unsdgContent = `
        <div class="blog-content space-y-32 py-10 text-gray-200">
            
            <!-- Hero Section -->
            <section class="space-y-12">
                <p class="text-4xl leading-relaxed text-white font-black border-l-[12px] border-[#C5A059] pl-12 uppercase tracking-tighter italic">
                    The 2030 Agenda is no longer a distant aspiration; it is the fundamental framework for global survival.
                </p>
                <div class="space-y-8 text-lg leading-relaxed text-gray-300 max-w-5xl">
                    <p>
                        In 2015, all 193 United Nations Member States adopted the <strong>2030 Agenda for Sustainable Development</strong>. At its heart are the 17 <strong>Sustainable Development Goals (SDGs)</strong>—an urgent call for action by all countries in a global partnership. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
                    </p>
                    <p>
                        In Saudi Arabia, the UNSDGs are not just global targets; they are the technical underpinnings of <a href="/projects/vision-2030" class="text-[#C5A059] hover:underline font-black">Vision 2030</a>. From the circular economy principles of NEOM to the social transformations in Riyadh, the Kingdom is translating these 17 goals into physical realities. This guide provides a deep-dive into the technical architecture of the UNSDGs, exploring their dimensions, KPIs, and their strategic role in the Middle East's transition to a sustainable future.
                    </p>
                </div>
                
                <div class="relative rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/10 h-[600px] bg-black">
                    <img src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?fm=webp&w=1400&q=80" alt="UN Global Sustainability" class="w-full h-full object-cover opacity-60" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-16">
                        <div class="bg-white p-12 rounded-[3rem] max-w-xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                            <p class="text-[#C5A059] font-black text-sm uppercase tracking-[0.5em] mb-4">Global Blueprint</p>
                            <h2 class="text-black text-5xl font-black leading-tight tracking-tighter">UNSDG: The <br/><span class="text-[#C5A059]">2030 Roadmap</span></h2>
                            <p class="text-black/60 font-bold mt-4 text-lg">Unifying global action for a resilient planet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 1: The Five Dimensions -->
            <section class="space-y-16">
                <div class="space-y-6 text-center">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase">The Five Dimensions of Progress</h2>
                    <div class="w-40 h-2 bg-[#C5A059] mx-auto rounded-full"></div>
                    <p class="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        To simplify the complexity of 169 targets and 231 indicators, the UN organizes the SDGs into five critical themes, known as the "5 Ps."
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div class="p-8 rounded-[3rem] border-2 border-white/5 bg-[#0a0a0a] group hover:border-[#C5A059]/50 transition-all">
                        <div class="text-5xl mb-6">👥</div>
                        <h4 class="text-white font-black text-xl mb-4 group-hover:text-[#C5A059]">PEOPLE</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Ending poverty and hunger in all forms and ensuring dignity and equality.</p>
                    </div>
                    <div class="p-8 rounded-[3rem] border-2 border-white/5 bg-[#0a0a0a] group hover:border-[#C5A059]/50 transition-all">
                        <div class="text-5xl mb-6">🌍</div>
                        <h4 class="text-white font-black text-xl mb-4 group-hover:text-[#C5A059]">PLANET</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Protecting our planet’s natural resources and climate for future generations.</p>
                    </div>
                    <div class="p-8 rounded-[3rem] border-2 border-white/5 bg-[#0a0a0a] group hover:border-[#C5A059]/50 transition-all">
                        <div class="text-5xl mb-6">📉</div>
                        <h4 class="text-white font-black text-xl mb-4 group-hover:text-[#C5A059]">PROSPERITY</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Ensuring fulfilling lives in harmony with nature and technical innovation.</p>
                    </div>
                    <div class="p-8 rounded-[3rem] border-2 border-white/5 bg-[#0a0a0a] group hover:border-[#C5A059]/50 transition-all">
                        <div class="text-5xl mb-6">🕊️</div>
                        <h4 class="text-white font-black text-xl mb-4 group-hover:text-[#C5A059]">PEACE</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Fostering peaceful, just, and inclusive societies free from fear and violence.</p>
                    </div>
                    <div class="p-8 rounded-[3rem] border-2 border-white/5 bg-[#0a0a0a] group hover:border-[#C5A059]/50 transition-all">
                        <div class="text-5xl mb-6">🤝</div>
                        <h4 class="text-white font-black text-xl mb-4 group-hover:text-[#C5A059]">PARTNERSHIP</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Mobilizing the means to implement the agenda through global solidarity.</p>
                    </div>
                </div>
            </section>

             <!-- Section 2: Deep Dive into Strategic Goals -->
            <section class="space-y-24 bg-white rounded-[6rem] p-24 text-black shadow-[0_80px_200px_rgba(0,0,0,1)] border-[15px] border-black/5" style="background-color: #ffffff !important; color: #000000 !important;">
                <div class="space-y-8">
                    <h2 class="text-7xl font-black tracking-tighter uppercase" style="color: #000000 !important;">Strategic Pillars</h2>
                    <div class="w-32 h-4 bg-black rounded-full"></div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div class="space-y-8 p-12 bg-black/5 rounded-[4rem]">
                        <h4 class="text-[#C5A059] font-black text-3xl uppercase tracking-tighter">SDG 6: Clean Water</h4>
                        <div class="space-y-6 text-lg leading-relaxed font-bold text-black/80" style="color: #1a1a1a !important;">
                            <p>In arid regions like Saudi Arabia, SDG 6 is a survival imperative. This goal demands 100% access to safely managed water and sanitation. Technically, this is achieved through advanced desalination technologies and the treatment of wastewater for agricultural and industrial reuse.</p>
                            <p>Projects like THE LINE in NEOM are setting new global benchmarks by utilizing 100% renewable energy for desalination and aiming for zero-brine discharge, protecting marine ecosystems while securing water for a growing population.</p>
                        </div>
                    </div>
                    <div class="space-y-8 p-12 bg-black/5 rounded-[4rem]">
                        <h4 class="text-[#C5A059] font-black text-3xl uppercase tracking-tighter">SDG 7: Clean Energy</h4>
                        <div class="space-y-6 text-lg leading-relaxed font-bold text-black/80" style="color: #1a1a1a !important;">
                            <p>SDG 7 focuses on affordable, reliable, sustainable, and modern energy. The Kingdom's massive shift toward blue and green hydrogen, along with world-scale solar PV installations in Al-Jouf, represents one of the largest national contributions to this goal.</p>
                            <p>By integrating smart grid technology and decentralizing power production, Saudi Arabia is not just meeting SDG 7 but is pioneering the future of energy infrastructure for the 21st century.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 3: The Measurement Mandate -->
            <section class="space-y-24">
                <div class="flex flex-col lg:flex-row gap-24 items-start">
                    <div class="flex-1 space-y-12">
                        <h2 class="text-6xl font-black text-white tracking-tighter border-l-[12px] border-[#C5A059] pl-10 uppercase">Technical Indicators</h2>
                        <div class="space-y-8 text-lg text-gray-300 leading-relaxed font-light">
                            <p>
                                A core principle of the 2030 Agenda is data transparency. Without rigorous measurement, the goals remain purely aspirations. The UN has developed a Global Indicator Framework that allows countries to track their performance against specific targets.
                            </p>
                            <p>
                                For the private sector, this has manifested as the ESG (Environmental, Social, and Governance) reporting standard. Companies now align their annual reports with specific SDGs to demonstrate leur contribution to global resilience. Using frameworks like GRI (Global Reporting Initiative) and SASB, organizations can quantify their impact on carbon reduction, water circularity, and social equity.
                            </p>
                        </div>
                        <div class="p-16 border-4 border-[#C5A059]/30 rounded-[4rem] bg-[#0a0a0a]">
                            <h4 class="text-white font-black text-3xl uppercase mb-6">Technical KPI: SDG 13</h4>
                            <p class="text-gray-400 italic text-lg opacity-80">
                                "Climate Action (SDG 13) is measured primarily through Scope 1, 2, and 3 emissions. In the construction industry, this translates to 'Embodied Carbon'—the CO2 emitted during the manufacturing and transport of materials. To meet SDG 13, projects must implement lifecycle assessments (LCAs) to minimize this footprint."
                            </p>
                        </div>
                    </div>
                    
                    <!-- DYNAMIC TABLE -->
                    <div class="flex-1 w-full bg-white rounded-[5rem] p-20 shadow-[0_50px_100px_rgba(0,0,0,1)] text-black">
                        <h3 class="text-5xl font-black mb-12 uppercase tracking-tighter border-b-4 border-black/10 pb-6" style="color: #000000 !important; border-color: #000000 !important;">Performance Matrix</h3>
                        <div class="space-y-10">
                            <div class="flex justify-between items-center border-b-2 border-black/5 pb-8">
                                <div class="space-y-1">
                                    <span class="text-2xl font-black">Carbon Intensity</span>
                                    <span class="text-black/50 text-xs font-bold uppercase tracking-widest">Target: Net Zero 2060</span>
                                </div>
                                <span class="text-3xl font-mono font-black text-[#C5A059]">tCO2e/m²</span>
                            </div>
                            <div class="flex justify-between items-center border-b-2 border-black/5 pb-8">
                                <div class="space-y-1">
                                    <span class="text-2xl font-black">Water Circularity</span>
                                    <span class="text-black/50 text-xs font-bold uppercase tracking-widest">Target: 100% Recycling</span>
                                </div>
                                <span class="text-3xl font-mono font-black text-[#C5A059]">% Rate</span>
                            </div>
                            <div class="flex justify-between items-center border-b-2 border-black/5 pb-8">
                                <div class="space-y-1">
                                    <span class="text-2xl font-black">Local Content</span>
                                    <span class="text-black/50 text-xs font-bold uppercase tracking-widest">Target: Economic Diversity</span>
                                </div>
                                <span class="text-3xl font-mono font-black text-[#C5A059]">% Spend</span>
                            </div>
                            <div class="flex justify-between items-center pb-8">
                                <div class="space-y-1">
                                    <span class="text-2xl font-black">Health & Safety</span>
                                    <span class="text-black/50 text-xs font-bold uppercase tracking-widest">Target: Zero LTIs</span>
                                </div>
                                <span class="text-3xl font-mono font-black text-[#C5A059]">Man-Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 4: UNSDG and Vision 2030 Synergy -->
            <section class="p-24 bg-gradient-to-br from-[#0B2B24] to-[#041612] rounded-[6rem] border border-white/10 shadow-inner relative overflow-hidden group">
                <div class="relative z-10 space-y-12">
                    <h2 class="text-6xl font-black text-white tracking-tighter uppercase">Synergy with Vision 2030</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div class="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                            <p>Saudi Arabia’s Vision 2030 is arguably the most comprehensive national embodiment of the UNSDGs on the planet today. Whether through the massive reforestation efforts of the <strong>Saudi Green Initiative</strong> (SDG 15) or the creation of future urban habitats in NEOM (SDG 11), the Kingdom is translating global targets into physical realities.</p>
                            <p>This synergy provides a unique opportunity for businesses and developers. By aligning with national mandates, they are simultaneously meeting international ESG requirements, making them more attractive to global capital markets.</p>
                        </div>
                        <div class="p-12 border-2 border-[#C5A059]/30 rounded-[4rem] bg-black/50 backdrop-blur-md">
                            <h4 class="text-[#C5A059] font-black text-3xl uppercase mb-6">Strategic Alignment</h4>
                            <ul class="space-y-6 text-xl text-gray-400">
                                <li class="flex items-center gap-4">
                                    <span class="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-black">15</span>
                                    <span>Life on Land: 10 Billion Trees Initiative</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <span class="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-black">11</span>
                                    <span>Modern Habitats: THE LINE & Diriyah</span>
                                </li>
                                <li class="flex items-center gap-4">
                                    <span class="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-black">12</span>
                                    <span>Circular Economy: Waste-to-Energy Plants</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 p-8 text-[#C5A059]/5 text-[20rem] font-black pointer-events-none transition-all duration-700 group-hover:scale-110">
                    2030
                </div>
            </section>

            <!-- CONCLUSION -->
            <section class="space-y-24 py-48 border-t-[30px] border-[#C5A059] text-center bg-black rounded-[6rem] mt-32 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                <div class="max-w-6xl mx-auto space-y-20 px-10 relative z-10">
                    <h2 class="text-[8rem] font-black text-white/5 tracking-[0.2em] leading-none absolute left-0 right-0 -translate-y-12 select-none pointer-events-none uppercase italic">RESILIENCE</h2>
                    <h3 class="text-6xl font-black text-white tracking-widest uppercase mb-4">CONCLUSION</h3>
                     <div class="w-48 h-6 bg-[#C5A059] mx-auto rounded-full"></div>
                    <div class="space-y-16 text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto text-center" style="color: #d1d5db !important;">
                        <p>
                            The UN Sustainable Development Goals are not a static end-state but a dynamic process of continuous improvement. As we move closer to the 2030 threshold, the window for meaningful intervention is narrowing, but our technical capacity for change has never been greater.
                        </p>
                        <p>
                            For the Kingdom's architects of change, the SDGs provide a rigorous, universally recognized framework for excellence. By integrating these 17 goals into the DNA of our developments today, we are ensuring a resilient, equitable, and prosperous Habitat for the generations of tomorrow.
                        </p>
                         <p class="text-white font-black text-2xl uppercase tracking-tighter italic border-y-4 border-white/10 py-16 bg-white/5 rounded-[3rem]" style="color: #ffffff !important;">
                            Building a global legacy, one goal at a time.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'UN Sustainable Development Goals (UNSDG): The Technical 2030 Roadmap',
        content: unsdgContent,
        slug: 'unsdg-2030-guide',
        status: 'DRAFT',
        meta_title: 'UNSDG 2030 Technical Roadmap | Sustainability Highway',
        meta_description: 'A professional technical guide to the 17 UN Sustainable Development Goals. Analysis of implementation patterns, KPIs, and synergy with Saudi Vision 2030.',
        faq_data: JSON.stringify([
            { question: "What are the 17 UN Sustainable Development Goals?", answer: "The 17 SDGs include No Poverty, Zero Hunger, Climate Action, Sustainable Cities (SDG 11), Clean Energy (SDG 7), and more. They are a global blueprint for a resilient future." },
            { question: "How does Vision 2030 align with the SDGs?", answer: "Vision 2030 is deeply integrated with the SDGs, particularly in areas of economic diversification (SDG 8), renewable energy (SDG 7), and sustainable urban development (SDG 11)." },
            { question: "What is the '5 Ps' framework?", answer: "The 5 Ps simplify the 17 goals into five logical dimensions: People, Planet, Prosperity, Peace, and Partnership." },
            { question: "Why is water conservation so critical in the SDGs for Saudi Arabia?", answer: "SDG 6 (Clean Water and Sanitation) is a national priority. Due to the arid climate, achieving this goal requires innovative desalination and 100% water recycling." },
            { question: "What role does the private sector play in achieving the SDGs?", answer: "Businesses contribute through ESG reporting, adopting sustainable materials, and ensuring fair labor practices, directly earning them trust in global capital markets." },
            { question: "What is SDG 11 and why is it important for urban planners?", answer: "SDG 11 focuses on Sustainable Cities and Communities. It aims to make cities inclusive, safe, resilient, and sustainable through better planning and waste management." },
            { question: "How many targets and indicators are in the SDG framework?", answer: "The 17 goals are supported by 169 specific technical targets and over 230 indicators to track progress accurately." },
            { question: "What happens after 2030?", answer: "While 2030 is the primary deadline, the work toward the sustainability transition is expected to evolve into more advanced frameworks aimed at 2050 and 2060 Net Zero targets." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "UN Sustainable Development Goals 2030 Technical Roadmap",
            "datePublished": "2024-02-10",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?fm=webp&w=1400&q=80"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1473186578172-c141e6798ee4?fm=webp&w=1400&q=80',
        excerpt: 'A deep dive into the technical architecture of the UN Sustainable Development Goals (UNSDG). Explore the 5 Ps, technical KPIs, and national implementation paths.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated UNSDG Article: Professional Technical Overhaul with 8 FAQs and Premium Design.');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created New UNSDG Article in DRAFT.');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
