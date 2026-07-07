const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const leedContent = `
        <div class="blog-content space-y-20 py-12 text-gray-800 bg-white leading-relaxed">
            
            <!-- Hero Section -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="space-y-6">
                    <h1 class="text-6xl font-black text-gray-900 leading-tight">LEED rating system</h1>
                    <p class="text-2xl text-gray-600 font-medium">The most widely used green building rating system.</p>
                </div>
                
                <div class="mt-12 relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="LEED Certified Building" class="w-full h-full object-cover" loading="lazy" />
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                        <p class="text-white text-sm italic">Phipps Center for Sustainable Landscapes | LEED Platinum | Photo: ©denmarsh photography, inc.</p>
                    </div>
                </div>
            </section>

            <!-- LEED-certified green buildings are better buildings -->
            <section class="max-w-5xl mx-auto px-6 space-y-8">
                <h2 class="text-4xl font-bold text-gray-900">LEED-certified green buildings are better buildings</h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    LEED is the most widely recognized green building rating system in the world. LEED certification offers a framework for healthy, efficient, and cost-effective green buildings, providing environmental and social benefits. It serves as a globally recognized symbol of sustainability leadership, supported by a committed community of organizations and individuals driving market transformation.
                </p>
                
                <!-- Image: Green Building -->
                <div class="mt-8 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" alt="Sustainable Green Building" class="w-full h-[400px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- LEED is designed for all building types and phases -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <div class="space-y-4">
                    <h2 class="text-4xl font-bold text-gray-900">LEED is designed for all building types and phases</h2>
                    <p class="text-lg text-gray-600">
                        LEED is for all project types and phases, including new construction, core and shell, interior fit-outs, operations and maintenance, neighborhoods and cities. To select a rating system, review the rating system selection guidance.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- BD+C -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Building Design and Construction (BD+C)</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For the design and construction of whole buildings, and additions to buildings, of various use types that are either new construction or undergoing major renovations.
                        </p>
                    </div>

                    <!-- ID+C -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Interior Design and Construction (ID+C)</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For complete commercial interior fit-out projects that have no scope for the exterior shell of the building and/or site work.
                        </p>
                    </div>

                    <!-- O+M -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Building Operations and Maintenance (O+M)</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For existing buildings that are undergoing improvement work or little to no construction, O+M offers an opportunity to pay close attention to building operations by supporting whole buildings that have been fully operational and occupied for at least one year.
                        </p>
                    </div>

                    <!-- ND -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Neighborhood Development (ND)</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For new land development projects or redevelopment projects containing residential uses, nonresidential uses, or a mix. Projects can be at any stage of the development process, from conceptual planning to construction.
                        </p>
                    </div>

                    <!-- Residential -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Residential</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For the design and construction of high-performance residential buildings.
                        </p>
                    </div>

                    <!-- Cities -->
                    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all">
                        <h5 class="text-xl font-bold text-gray-900 mb-4">Cities</h5>
                        <p class="text-gray-600 leading-relaxed">
                            For entire cities and sub-sections of a city. LEED for Cities projects can measure and manage their city's water consumption, energy use, waste, transportation and human experience.
                        </p>
                    </div>
                </div>
                
                <!-- Image: Urban Development -->
                <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop" alt="Sustainable Urban Development" class="w-full h-[400px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- How LEED works -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 bg-gray-50 rounded-3xl space-y-12">
                <div class="max-w-4xl space-y-6">
                    <h2 class="text-4xl font-bold text-gray-900">How LEED works</h2>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        LEED is holistic. As a framework, it addresses everything from energy and water use to materials selection, managing waste and indoor environmental quality through a series of credit categories tailored for each rating system. To achieve LEED certification, a project must first complete all prerequisites and then earn points by selecting and satisfying credit requirements. Projects go through a verification and review process by GBCI and are awarded points that correspond to a level of LEED certification: Certified, Silver, Gold and Platinum.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-8 rounded-2xl shadow-md text-center space-y-4">
                        <div class="text-green-600 font-black text-sm uppercase tracking-wider">Valuable</div>
                        <h4 class="text-2xl font-bold text-gray-900">Platinum</h4>
                        <p class="text-gray-600 font-semibold">80+ points earned</p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-md text-center space-y-4">
                        <div class="text-green-600 font-black text-sm uppercase tracking-wider">Sustainable</div>
                        <h4 class="text-2xl font-bold text-gray-900">Gold</h4>
                        <p class="text-gray-600 font-semibold">60-79 points earned</p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-md text-center space-y-4">
                        <div class="text-green-600 font-black text-sm uppercase tracking-wider">Flexible</div>
                        <h4 class="text-2xl font-bold text-gray-900">Silver</h4>
                        <p class="text-gray-600 font-semibold">50-59 points earned</p>
                    </div>
                    <div class="bg-white p-8 rounded-2xl shadow-md text-center space-y-4">
                        <div class="text-green-600 font-black text-sm uppercase tracking-wider">2.2 million</div>
                        <h4 class="text-2xl font-bold text-gray-900">Certified</h4>
                        <p class="text-gray-600 font-semibold">40-49 points earned</p>
                    </div>
                </div>

                <!-- Certification Process -->
                <div class="mt-12 space-y-8">
                    <h5 class="text-2xl font-bold text-gray-900">Certification process for the LEED BD+C, ID+C, and O+M rating systems</h5>
                    <ol class="space-y-6 text-gray-600 leading-relaxed">
                        <li class="flex gap-4">
                            <span class="font-bold text-green-600 shrink-0">1.</span>
                            <span>Determine the appropriate LEED rating system and version: LEED v5, LEED v4.1 or LEED v4. Review the minimum program requirements and prerequisites for credit categories related to your chosen rating system.</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="font-bold text-green-600 shrink-0">2.</span>
                            <span>Depending on the selected version, register the project in Arc (LEED v5) or LEED Online (LEED v4.1 and LEED v4).</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="font-bold text-green-600 shrink-0">3.</span>
                            <span>Choose the credits that align with your project's goals and build your LEED project scorecard. Learn more about the credits in the LEED credit library.</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="font-bold text-green-600 shrink-0">4.</span>
                            <span>Manage the implementation of your sustainability strategies with your project team. Assign credits to team members and document the achievement of prerequisites and credits.</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="font-bold text-green-600 shrink-0">5.</span>
                            <span>Submit documentation for review in Arc or LEED Online.</span>
                        </li>
                    </ol>
                </div>
                
                <!-- Image: Certification Process -->
                <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" alt="LEED Certification Process" class="w-full h-[350px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- LEED project tools and resources -->
            <section class="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
                <h2 class="text-4xl font-bold text-gray-900">LEED project tools and resources</h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                    LEED is powered by comprehensive education offerings designed to equip professionals with the knowledge and skills needed to design, build, and operate sustainable buildings. Through events, courses, credentialing programs, and continuing education, professionals can lead the way in creating a healthier, more resilient built environment.
                </p>

                <!-- Understanding LEED and getting started -->
                <div class="space-y-8">
                    <h5 class="text-2xl font-bold text-gray-900">Understanding LEED and getting started</h5>
                    <ul class="space-y-6">
                        <li>
                            <strong class="text-gray-900">Minimum program requirements:</strong>
                            <span class="text-gray-600"> Project teams that are new to LEED use the minimum program requirements (MPRs) to determine whether their building type is eligible to achieve a LEED rating. While most are eligible, the MPRs define the types of buildings that LEED was designed to evaluate.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">Rating system selection guidance:</strong>
                            <span class="text-gray-600"> This information helps project teams identify the most appropriate LEED rating system for their project.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">LEED credit library:</strong>
                            <span class="text-gray-600"> This is the central resource for understanding LEED credit requirements. It provides details on compliance paths and points earned.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">Guide to Certification:</strong>
                            <span class="text-gray-600"> This resource outlines the overall process of pursuing LEED certification, including key steps, policies, pricing and deadlines for each rating system. This is the roadmap to getting certified.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">LEED reference guides:</strong>
                            <span class="text-gray-600"> Comprehensive guides that provide in-depth explanations of each credit and prerequisite within a specific rating system. You can think of these as detailed instruction manuals.</span>
                        </li>
                    </ul>
                </div>

                <!-- Project development and documentation -->
                <div class="space-y-8">
                    <h5 class="text-2xl font-bold text-gray-900">Project development and documentation</h5>
                    <ul class="space-y-6">
                        <li>
                            <strong class="text-gray-900">Sample forms:</strong>
                            <span class="text-gray-600"> Access required documentation templates and examples to demonstrate compliance with LEED credits.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">Addenda:</strong>
                            <span class="text-gray-600"> A repository of clarification, corrections, and interpretations of the LEED rating systems to ensure consistent application.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">Regional priority credits:</strong>
                            <span class="text-gray-600"> Identify LEED credits that address specific environmental priorities in your project's geographic location, potentially earning extra points.</span>
                        </li>
                        <li>
                            <strong class="text-gray-900">Pilot credits:</strong>
                            <span class="text-gray-600"> Explore and utilize new, innovative credits that are being tested for potential inclusion in future LEED rating systems.</span>
                        </li>
                    </ul>
                </div>
                
                <!-- Image: Documentation -->
                <div class="mt-12 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" alt="Project Documentation" class="w-full h-[350px] object-cover" loading="lazy" />
                </div>
            </section>

            <!-- Simple Professional Conclusion -->
            <section class="max-w-5xl mx-auto px-6 py-20 text-center space-y-10">
                <div class="space-y-6">
                    <h2 class="text-4xl font-bold text-gray-900">Start your LEED journey today</h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        LEED certification provides a framework for healthy, efficient, and cost-effective green buildings. Join the global movement toward sustainable development.
                    </p>
                </div>
                
                <div class="pt-8">
                    <p class="text-green-600 font-bold text-2xl">Sustainability Highway</p>
                    <p class="text-gray-400 text-xs uppercase tracking-widest mt-2">Your Guide to Green Building Excellence</p>
                </div>
            </section>

        </div>
    `;

    const blogData = {
        title: 'LEED rating system | The Most Widely Used Green Building Rating System',
        content: leedContent,
        slug: 'leed-saudi-arabia-guide',
        status: 'DRAFT',
        meta_title: 'LEED rating system | U.S. Green Building Council',
        meta_description: 'LEED is the most widely recognized green building rating system in the world. Learn about BD+C, ID+C, O+M, certification levels, and the complete certification process.',
        faq_data: JSON.stringify([
            { question: "What is LEED certification?", answer: "LEED is the most widely recognized green building rating system in the world, offering a framework for healthy, efficient, and cost-effective green buildings." },
            { question: "What are the LEED certification levels?", answer: "LEED has four certification levels: Certified (40-49 points), Silver (50-59 points), Gold (60-79 points), and Platinum (80+ points)." },
            { question: "What is LEED BD+C?", answer: "Building Design and Construction (BD+C) is for the design and construction of whole buildings that are either new construction or undergoing major renovations." },
            { question: "What is LEED ID+C?", answer: "Interior Design and Construction (ID+C) is for complete commercial interior fit-out projects with no scope for the exterior shell." },
            { question: "What is LEED O+M?", answer: "Building Operations and Maintenance (O+M) is for existing buildings that have been fully operational and occupied for at least one year." },
            { question: "How does the LEED certification process work?", answer: "The process involves: 1) Determining the appropriate rating system, 2) Registering in Arc or LEED Online, 3) Choosing credits, 4) Managing implementation, and 5) Submitting documentation for GBCI review." },
            { question: "What are LEED MPRs?", answer: "Minimum Program Requirements (MPRs) help determine whether a building type is eligible to achieve a LEED rating." },
            { question: "Can LEED be applied to cities?", answer: "Yes, LEED for Cities can measure and manage city-scale water consumption, energy use, waste, transportation and human experience." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LEED rating system | The Most Widely Used Green Building Rating System",
            "description": "Complete guide to LEED certification based on official USGBC content.",
            "author": { "@type": "Organization", "name": "Sustainability Highway" },
            "publisher": { "@type": "Organization", "name": "Sustainability Highway" },
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            "datePublished": "2024-02-11"
        }),
        authorId: 'c75aa70c-160c-4cef-8017-9669043d09f4',
        image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        excerpt: 'The most widely used green building rating system. Complete guide to LEED certification, rating systems, and the certification process.'
    };

    const existing = await prisma.blog.findUnique({ where: { slug: blogData.slug } });

    if (existing) {
        await prisma.blog.update({
            where: { id: existing.id },
            data: blogData
        });
        console.log('✅ Updated LEED Article with Exact USGBC Official Content');
    } else {
        await prisma.blog.create({ data: blogData });
        console.log('✅ Created LEED Article with Exact USGBC Official Content');
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
