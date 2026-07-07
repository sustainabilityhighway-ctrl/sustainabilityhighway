const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const unsdgContent = `
        <div class="blog-content space-y-24 py-12 text-gray-800 bg-white leading-relaxed">
            
            <!-- Hero -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="space-y-6">
                    <h1 class="text-6xl font-black text-gray-900 leading-tight">The 2030 Agenda for Sustainable Development</h1>
                    <p class="text-2xl text-gray-500 font-medium">17 Goals to transform our world by 2030.</p>
                </div>
                
                <div class="mt-12 rounded-3xl overflow-hidden shadow-2xl h-[600px] relative">
                    <img src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=1600&auto=format&fit=crop" alt="UN Sustainable Development HQ" class="w-full h-full object-cover" loading="lazy" />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10">
                        <p class="text-white/90 text-sm italic">The 2030 Agenda: A universal call to action to end poverty, protect the planet, and ensure peace and prosperity.</p>
                    </div>
                </div>
            </section>

            <!-- What are the SDGs -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="flex flex-col lg:flex-row gap-16 items-start">
                    <div class="lg:w-1/2 space-y-8">
                        <h2 class="text-4xl font-bold text-gray-900">What are the Sustainable Development Goals?</h2>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            In 2015, all 193 United Nations Member States adopted the 2030 Agenda for Sustainable Development. At its heart are the 17 Sustainable Development Goals (SDGs)—an urgent call for action by all countries in a global partnership.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            The SDGs are supported by <strong>169 specific targets</strong> and over <strong>230 indicators</strong> to track progress accurately. This makes them one of the most comprehensive global action frameworks ever adopted.
                        </p>
                    </div>
                    <div class="lg:w-1/2 rounded-3xl overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=1200&auto=format&fit=crop" alt="United Nations General Assembly" class="w-full h-[450px] object-cover" loading="lazy" />
                    </div>
                </div>
            </section>

            <!-- The 5 Ps of Sustainable Development -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <div class="text-center space-y-4">
                    <h2 class="text-4xl font-bold text-gray-900">The 5 Ps of Sustainable Development</h2>
                    <p class="text-lg text-gray-500 max-w-3xl mx-auto">The UN organizes the 17 SDGs into five critical interconnected dimensions.</p>
                </div>

                <div class="space-y-6">
                    <!-- People -->
                    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-rose-50 border border-rose-100">
                        <div class="md:w-1/4 flex flex-col items-center justify-center text-center space-y-2">
                            <div class="text-6xl">👥</div>
                            <h4 class="text-2xl font-black text-rose-700 uppercase">People</h4>
                            <p class="text-sm text-rose-500 font-semibold">SDGs 1, 2, 3, 4, 5</p>
                        </div>
                        <div class="md:w-3/4 space-y-3">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Ensuring that all human beings can fulfill their potential in dignity and equality in a healthy environment. In the Saudi context, this involves massive investments in healthcare quality (SDG 3) and the empowerment of women and youth (SDG 5), creating a society where opportunities are accessible to all.
                            </p>
                            <p class="text-gray-700 text-lg leading-relaxed">
                                The Kingdom has seen a historic surge in female workforce participation—reaching over 36% in early 2025, far surpassing the initial 2030 target of 30%. This is a technical expansion of the nation's human capital.
                            </p>
                        </div>
                    </div>

                    <!-- Planet -->
                    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-green-50 border border-green-100">
                        <div class="md:w-1/4 flex flex-col items-center justify-center text-center space-y-2">
                            <div class="text-6xl">🌍</div>
                            <h4 class="text-2xl font-black text-green-700 uppercase">Planet</h4>
                            <p class="text-sm text-green-500 font-semibold">SDGs 6, 12, 13, 14, 15</p>
                        </div>
                        <div class="md:w-3/4 space-y-3">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Protecting the planet from degradation through sustainable consumption, production, and natural resource management. This is the technical heart of the Saudi Green Initiative, focusing on land restoration (SDG 15) and the protection of marine life in the Red Sea (SDG 14).
                            </p>
                            <p class="text-gray-700 text-lg leading-relaxed">
                                In arid regions like Saudi Arabia, SDG 6 (Clean Water) is a survival imperative. Projects like THE LINE use 100% renewable energy for desalination with zero-brine discharge, protecting marine ecosystems.
                            </p>
                        </div>
                    </div>

                    <!-- Prosperity -->
                    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-amber-50 border border-amber-100">
                        <div class="md:w-1/4 flex flex-col items-center justify-center text-center space-y-2">
                            <div class="text-6xl">💰</div>
                            <h4 class="text-2xl font-black text-amber-700 uppercase">Prosperity</h4>
                            <p class="text-sm text-amber-500 font-semibold">SDGs 7, 8, 9, 10, 11</p>
                        </div>
                        <div class="md:w-3/4 space-y-3">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Ensuring that all human beings can enjoy prosperous and fulfilling lives and that economic, social and technological progress occurs in harmony with nature. This dimension tracks the diversification of the Saudi economy (SDG 8) and the growth of the non-oil sector.
                            </p>
                            <p class="text-gray-700 text-lg leading-relaxed">
                                SDG 7 (Clean Energy) drives the Kingdom's massive shift toward blue and green hydrogen, along with world-scale solar PV installations in Al-Jouf—one of the largest national contributions to this goal globally.
                            </p>
                        </div>
                    </div>

                    <!-- Peace -->
                    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-indigo-50 border border-indigo-100">
                        <div class="md:w-1/4 flex flex-col items-center justify-center text-center space-y-2">
                            <div class="text-6xl">🕊️</div>
                            <h4 class="text-2xl font-black text-indigo-700 uppercase">Peace</h4>
                            <p class="text-sm text-indigo-500 font-semibold">SDG 16</p>
                        </div>
                        <div class="md:w-3/4">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Fostering peaceful, just, and inclusive societies free from fear and violence. This involves strengthening institutions (SDG 16), ensuring the rule of law, and enhancing the transparency of governance models—critical for attracting international investment and building a stable, ambitious nation.
                            </p>
                        </div>
                    </div>

                    <!-- Partnership -->
                    <div class="flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-sky-50 border border-sky-100">
                        <div class="md:w-1/4 flex flex-col items-center justify-center text-center space-y-2">
                            <div class="text-6xl">🤝</div>
                            <h4 class="text-2xl font-black text-sky-700 uppercase">Partnership</h4>
                            <p class="text-sm text-sky-500 font-semibold">SDG 17</p>
                        </div>
                        <div class="md:w-3/4">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Mobilizing the means required to implement this Agenda through a revitalized Global Partnership. Saudi Arabia's leadership in the G20 and its role as a global energy hub make its partnerships (SDG 17) essential for the technical success of the global transition to sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Image Break -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Sustainable Development" class="w-full h-[450px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- Key Goals Deep Dive -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
                <div class="space-y-4">
                    <h2 class="text-4xl font-bold text-gray-900">Key goals driving Saudi Arabia's transformation</h2>
                    <p class="text-lg text-gray-500">A closer look at the SDGs most relevant to the Kingdom's national priorities.</p>
                </div>

                <!-- SDG 6 & 7 -->
                <div class="flex flex-col lg:flex-row gap-12">
                    <div class="lg:w-1/2 p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
                        <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-bold text-sm rounded-full">SDG 6</div>
                        <h3 class="text-3xl font-bold text-gray-900">Clean Water & Sanitation</h3>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            In arid regions like Saudi Arabia, SDG 6 is a survival imperative. This goal demands 100% access to safely managed water and sanitation. Technically, this is achieved through advanced desalination technologies and the treatment of wastewater for agricultural and industrial reuse.
                        </p>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            Projects like THE LINE in NEOM are setting new global benchmarks by utilizing 100% renewable energy for desalination and aiming for zero-brine discharge, protecting marine ecosystems while securing water for a growing population.
                        </p>
                    </div>
                    <div class="lg:w-1/2 p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
                        <div class="inline-block px-4 py-1 bg-amber-100 text-amber-700 font-bold text-sm rounded-full">SDG 7</div>
                        <h3 class="text-3xl font-bold text-gray-900">Affordable & Clean Energy</h3>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            SDG 7 focuses on affordable, reliable, sustainable, and modern energy. The Kingdom's massive shift toward blue and green hydrogen, along with world-scale solar PV installations in Al-Jouf, represents one of the largest national contributions to this goal.
                        </p>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            By integrating smart grid technology and decentralizing power production, Saudi Arabia is not just meeting SDG 7 but is pioneering the future of energy infrastructure for the 21st century.
                        </p>
                    </div>
                </div>

                <!-- Image -->
                <div class="rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop" alt="Solar Energy" class="w-full h-[400px] object-cover" loading="lazy" />
                </div>

                <!-- SDG 11 & 12 -->
                <div class="flex flex-col lg:flex-row gap-12">
                    <div class="lg:w-1/2 p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
                        <div class="inline-block px-4 py-1 bg-green-100 text-green-700 font-bold text-sm rounded-full">SDG 11</div>
                        <h3 class="text-3xl font-bold text-gray-900">Sustainable Cities & Communities</h3>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            SDG 11 aims to make cities and human settlements inclusive, safe, resilient, and sustainable. In Saudi Arabia, this is being realized through King Salman Park in Riyadh—one of the largest urban park projects in the world—and the development of transit-oriented districts.
                        </p>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            The integration of green spaces and advanced public transport systems (like the Riyadh Metro) reduces the urban heat island effect and lowers the per capita carbon footprint, directly aligning with global mandates.
                        </p>
                    </div>
                    <div class="lg:w-1/2 p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
                        <div class="inline-block px-4 py-1 bg-teal-100 text-teal-700 font-bold text-sm rounded-full">SDG 12</div>
                        <h3 class="text-3xl font-bold text-gray-900">Responsible Consumption & Production</h3>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            Responsible consumption and production require a transition from a linear "take-make-waste" model to a circular economy. The Kingdom's National Center for Waste Management (MWAN) is driving this transition by targeting 82% landfill diversion by 2035.
                        </p>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            Implementing waste-to-energy plants and industrial recycling hubs in Jubail and Yanbu ensures industrial growth does not come at the cost of environmental degradation.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Vision 2030 Synergy -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <div class="flex flex-col lg:flex-row gap-16 items-start">
                    <div class="lg:w-1/2 space-y-8">
                        <h2 class="text-4xl font-bold text-gray-900">Synergy with Saudi Vision 2030</h2>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            Saudi Arabia's Vision 2030 is arguably the most comprehensive national embodiment of the UNSDGs on the planet today. Whether through the massive reforestation efforts of the Saudi Green Initiative (SDG 15) or the creation of future urban habitats in NEOM (SDG 11), the Kingdom is translating global targets into physical realities.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            This synergy provides a unique opportunity for businesses and developers. By aligning with national mandates, they are simultaneously meeting international ESG requirements, making them more attractive to global capital markets.
                        </p>

                        <div class="space-y-4 pt-4">
                            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <span class="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-black text-lg">15</span>
                                <span class="text-gray-800 font-semibold text-lg">Life on Land: 10 Billion Trees Initiative</span>
                            </div>
                            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <span class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-lg">11</span>
                                <span class="text-gray-800 font-semibold text-lg">Modern Habitats: THE LINE & Diriyah</span>
                            </div>
                            <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <span class="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-lg">12</span>
                                <span class="text-gray-800 font-semibold text-lg">Circular Economy: Waste-to-Energy Plants</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 rounded-3xl overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Vision 2030 Saudi Arabia" class="w-full h-[550px] object-cover" loading="lazy" />
                    </div>
                </div>
            </section>

            <!-- Digital Transformation -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-gray-50 rounded-3xl space-y-12">
                <div class="space-y-4">
                    <h2 class="text-4xl font-bold text-gray-900">Digital transformation & the Fourth Industrial Revolution</h2>
                    <p class="text-lg text-gray-500">Leveraging technology for sustainable outcomes.</p>
                </div>

                <div class="flex flex-col lg:flex-row gap-12 items-start">
                    <div class="lg:w-3/5 space-y-6">
                        <p class="text-lg text-gray-600 leading-relaxed">
                            The achievement of the 2030 Agenda is inextricably linked to the Digital Transformation of the Kingdom. Saudi Arabia is leveraging the Fourth Industrial Revolution (4IR)—including AI, IoT, and Big Data—to drive efficiency in resource management (SDG 12) and urban resilience (SDG 11).
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            In Smart Cities like Riyadh and the emerging Cognitive City of NEOM, sensors monitor air quality, traffic flow, and energy demand in real-time. This technical layer allows municipal authorities to respond to environmental stressors before they become crises.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            By using AI-driven predictive maintenance for desalination plants, the Kingdom ensures that SDG 6 (Clean Water) is met with maximum energy efficiency and minimal downtime.
                        </p>
                    </div>
                    <div class="lg:w-2/5 space-y-4">
                        <div class="p-6 bg-white rounded-2xl border border-gray-200 flex items-center gap-5">
                            <span class="text-3xl text-blue-600 font-black">AI</span>
                            <p class="text-gray-700 font-semibold">Predictive Energy & Water Modeling</p>
                        </div>
                        <div class="p-6 bg-white rounded-2xl border border-gray-200 flex items-center gap-5">
                            <span class="text-3xl text-blue-600 font-black">IoT</span>
                            <p class="text-gray-700 font-semibold">Real-Time Environmental Sensor Networks</p>
                        </div>
                        <div class="p-6 bg-white rounded-2xl border border-gray-200 flex items-center gap-5">
                            <span class="text-3xl text-blue-600 font-black">5G</span>
                            <p class="text-gray-700 font-semibold">Low-Latency Infrastructure for Smart Grids</p>
                        </div>
                    </div>
                </div>
                
                <!-- Image -->
                <div class="rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="Digital Transformation Technology" class="w-full h-[350px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- Measurement & Reporting -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <h2 class="text-4xl font-bold text-gray-900">Measurement, reporting & transparency</h2>

                <div class="flex flex-col lg:flex-row gap-12 items-start">
                    <div class="lg:w-1/2 space-y-6">
                        <p class="text-lg text-gray-600 leading-relaxed">
                            A core principle of the 2030 Agenda is data transparency. Without rigorous measurement, the goals remain purely aspirations. The UN has developed a Global Indicator Framework that allows countries to track their performance against specific targets.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            For the private sector, this has manifested as the ESG (Environmental, Social, and Governance) reporting standard. Companies now align their annual reports with specific SDGs to demonstrate their contribution to global resilience using frameworks like GRI and SASB.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            The Saudi Exchange (Tadawul) and the Capital Market Authority (CMA) have introduced ESG disclosure guidelines that incentivize listed companies to report their contribution to the SDGs. This data-driven approach ensures that "Greenwashing" is replaced by verifiable progress.
                        </p>
                    </div>
                    <div class="lg:w-1/2 p-10 bg-gray-50 rounded-3xl border border-gray-200 space-y-6">
                        <h4 class="text-2xl font-bold text-gray-900">Performance Matrix</h4>
                        <div class="space-y-6">
                            <div class="flex justify-between items-center border-b border-gray-200 pb-4">
                                <div>
                                    <p class="font-bold text-gray-900 text-lg">Carbon Intensity</p>
                                    <p class="text-gray-500 text-sm">Target: Net Zero 2060</p>
                                </div>
                                <span class="text-blue-600 font-bold text-lg">tCO2e/m²</span>
                            </div>
                            <div class="flex justify-between items-center border-b border-gray-200 pb-4">
                                <div>
                                    <p class="font-bold text-gray-900 text-lg">Water Circularity</p>
                                    <p class="text-gray-500 text-sm">Target: 100% Recycling</p>
                                </div>
                                <span class="text-blue-600 font-bold text-lg">% Rate</span>
                            </div>
                            <div class="flex justify-between items-center border-b border-gray-200 pb-4">
                                <div>
                                    <p class="font-bold text-gray-900 text-lg">Local Content</p>
                                    <p class="text-gray-500 text-sm">Target: Economic Diversity</p>
                                </div>
                                <span class="text-blue-600 font-bold text-lg">% Spend</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="font-bold text-gray-900 text-lg">Health & Safety</p>
                                    <p class="text-gray-500 text-sm">Target: Zero LTIs</p>
                                </div>
                                <span class="text-blue-600 font-bold text-lg">Man-Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Final Image -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="rounded-3xl overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop" alt="Sustainable Future City" class="w-full h-[450px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- Conclusion -->
            <section class="max-w-5xl mx-auto px-6 py-16 space-y-10">
                <h2 class="text-4xl font-bold text-gray-900 text-center">The global blueprint for our shared future</h2>
                <div class="space-y-6">
                    <p class="text-xl text-gray-600 leading-relaxed text-center">
                        The UN Sustainable Development Goals represent the most ambitious framework for global cooperation ever adopted. With 17 interconnected goals, 169 targets, and over 230 measurable indicators, the 2030 Agenda serves as both a compass and a accountability mechanism for nations, cities, and corporations alike.
                    </p>
                    <p class="text-xl text-gray-600 leading-relaxed text-center">
                        As Saudi Arabia continues its historic transformation through Vision 2030, the alignment with the UNSDGs ensures that the Kingdom's development is not only economically robust but also environmentally responsible and socially inclusive. From clean energy to sustainable cities, the work being done today is laying the foundation for a resilient future.
                    </p>
                </div>
                  
                <div class="text-center pt-8">
                    <p class="text-blue-600 font-bold text-2xl">Sustainability Highway</p>
                    <p class="text-gray-400 text-xs uppercase tracking-widest mt-2">Your Guide to the 2030 Agenda</p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'UN Sustainable Development Goals (UNSDG): The 2030 Agenda',
        content: unsdgContent,
        slug: 'unsdg-2030-guide',
        status: 'DRAFT',
        meta_title: 'UN Sustainable Development Goals 2030 | Complete Guide',
        meta_description: 'Comprehensive guide to the 17 UN Sustainable Development Goals (SDGs). Learn about the 5 Ps framework, strategic pillars, and alignment with Saudi Vision 2030.',
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
            "headline": "UN Sustainable Development Goals: The 2030 Agenda",
            "description": "Complete guide to the 17 UN SDGs and their implementation in Saudi Arabia.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
        excerpt: 'A comprehensive guide to the UN Sustainable Development Goals. Explore the 5 Ps framework, strategic pillars for Saudi Arabia, and the path to 2030.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated UNSDG Article - New Structure with Images & Conclusion');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created UNSDG Article - New Structure');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
