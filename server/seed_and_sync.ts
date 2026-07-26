import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

const vision2030Content = `
<div class="blog-container space-y-16 text-white/90 font-sans leading-relaxed">
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&display=swap');
        
        .blog-container {
            font-family: 'Outfit', sans-serif;
        }
        .grad-text {
            background: linear-gradient(135deg, #C5A059 0%, #E6C587 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .tech-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1.5rem;
            padding: 2.5rem;
            transition: all 0.3s ease;
        }
        .tech-card:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(197, 160, 89, 0.3);
        }
        .indicator-tag {
            font-size: 0.7rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #C5A059;
            background: rgba(197, 160, 89, 0.1);
            padding: 0.2rem 0.6rem;
            border-radius: 4px;
        }
        .section-header {
            border-left: 4px solid #C5A059;
            padding-left: 1.5rem;
            margin-bottom: 2rem;
        }
        .seo-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 1rem;
            overflow: hidden;
        }
        .seo-table th, .seo-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.8);
        }
        .seo-table th {
            background: rgba(197, 160, 89, 0.1);
            color: #C5A059;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
        }
        .anchor-suggestion {
            display: inline-block;
            color: #C5A059;
            font-weight: 600;
            text-decoration: underline;
            text-underline-offset: 4px;
        }
        .list-premium li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
        }
        .list-premium li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #C5A059;
            font-weight: 900;
        }
        .content-img {
            width: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
            border-radius: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin: 3rem 0;
        }
        .img-caption {
            font-size: 0.8rem;
            color: #ffffff60;
            text-align: center;
            margin-top: -2rem;
            margin-bottom: 3rem;
            font-style: italic;
        }
    </style>

    <section class="space-y-8">
        <div class="flex items-center gap-4 mb-4">
            <span class="indicator-tag">National Blueprint</span>
            <div class="h-px flex-1 bg-white/10"></div>
            <span class="text-xs text-white/40 font-bold tracking-widest uppercase italic">Saudi Vision 2030 Sustainability Guide</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-black leading-tight">
            Vision 2030 Sustainability: Transforming <span class="grad-text">Saudi Arabia's Environmental & Economic Future</span>
        </h1>
        <div class="prose prose-invert max-w-none text-white/70 text-lg leading-relaxed space-y-6">
            <p>
                Vision 2030 sustainability initiatives represent one of the most ambitious national transformation programs in modern history. Launched in 2016, Saudi Arabia's Vision 2030 framework positions sustainability not as an optional enhancement but as a fundamental pillar of economic diversification, social development, and environmental stewardship.
            </p>
            <p>
                The integration of Vision 2030 sustainability principles across sectors signals a paradigm shift from resource extraction to environmental resilience. Saudi Arabia's commitment to sustainable development addresses critical challenges including water scarcity, energy transition, climate adaptation, and economic diversification beyond hydrocarbon dependence.
            </p>
            <p>
                For sustainability professionals, developers, and ESG consultants, understanding how Vision 2030 sustainability goals translate into actionable frameworks is essential for navigating Saudi Arabia's evolving regulatory landscape and capitalizing on green economy opportunities.
            </p>
        </div>

        <img src="https://images.unsplash.com/photo-1449156003711-3397e67a72c4?q=80&w=1600&auto=format&fit=crop" alt="Saudi Vision 2030 Sustainability Overview" class="content-img" />
        <p class="img-caption">Architecting a sustainable future for Saudi Arabia under the Vision 2030 framework.</p>
    </section>

    <section class="space-y-12">
        <div class="section-header">
            <h2 class="text-3xl font-bold uppercase tracking-tight text-white">Sustainability as a Core Pillar of Vision 2030</h2>
        </div>
        <div class="prose prose-invert max-w-none text-white/70 text-lg mb-8 space-y-6">
            <p>
                Vision 2030 explicitly embeds sustainability within its three strategic themes: a vibrant society, a thriving economy, and an ambitious nation. Unlike traditional development models that treat environmental concerns as externalities, Saudi Vision 2030 sustainability goals integrate ecological preservation with economic competitiveness.
            </p>
            <p>
                The National Transformation Program (NTP) and various Vision Realization Programs (VRPs) operationalize these commitments through measurable targets:
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="tech-card border-l-4 border-yellow-500 space-y-4">
                <h3 class="text-2xl font-bold text-white uppercase italic">Energy & Mix</h3>
                <p class="text-white/60 leading-relaxed">
                    Renewable energy capacity expansion to 50% of the total energy mix by the year 2030, transforming the Kingdom's utility sector.
                </p>
            </div>
            <div class="tech-card border-l-4 border-yellow-500 space-y-4">
                <h3 class="text-2xl font-bold text-white uppercase italic">Conservation</h3>
                <p class="text-white/60 leading-relaxed">
                    Protected land and marine areas increasing to 30% of total territory, conserving the Red Sea and inland ecosystems.
                </p>
            </div>
            <div class="tech-card border-l-4 border-yellow-500 space-y-4">
                <h3 class="text-2xl font-bold text-white uppercase italic">Circular Economy</h3>
                <p class="text-white/60 leading-relaxed">
                    Waste diversion rates targeting 85% municipal waste recycling by 2035, reducing landfill dependencies significantly.
                </p>
            </div>
            <div class="tech-card border-l-4 border-yellow-500 space-y-4">
                <h3 class="text-2xl font-bold text-white uppercase italic">Water Security</h3>
                <p class="text-white/60 leading-relaxed">
                    Water efficiency improvements reducing per capita consumption by 43% through smart grids and local conservation policies.
                </p>
            </div>
        </div>
        <div class="prose prose-invert max-w-none text-white/70 text-lg mt-8 space-y-6">
            <p>
                These targets are not aspirational statements but binding policy commitments enforced through regulatory mechanisms, procurement requirements, and investment frameworks. The Saudi Green Initiative (SGI) and Middle East Green Initiative (MGI) provide the institutional architecture for implementation, monitoring, and international collaboration.
            </p>
        </div>
    </section>

    <section class="space-y-12">
        <div class="section-header">
            <h2 class="text-3xl font-bold uppercase tracking-tight text-white">Environmental Sustainability Goals</h2>
        </div>
        <div class="prose prose-invert max-w-none text-white/70 text-lg space-y-6">
            <h3 class="text-2xl font-bold text-white">Climate Mitigation and Carbon Management</h3>
            <p>
                The Kingdom's pledge to achieve <strong>net zero emissions by 2060</strong> represents a fundamental commitment to climate action. Interim targets include reducing carbon emissions by 278 million tonnes annually by 2030 through carbon capture (CCUS) deployment, methane reduction, and afforestation programs planting 10 billion trees domestically.
            </p>
            <h3 class="text-2xl font-bold text-white">Biodiversity and Ecosystem Protection</h3>
            <p>
                Vision 2030 ESG framework prioritizes biodiversity conservation through the expansion of protected areas including marine reserves in the Red Sea, wildlife reintroduction programs for native species, coral reef restoration, and desert ecosystem management.
            </p>
        </div>
    </section>

    <section class="space-y-12 bg-white/5 rounded-[3rem] p-10 md:p-16 border border-white/10">
        <h2 class="text-3xl font-black text-white leading-tight uppercase tracking-tighter">Renewable Energy & Net-Zero</h2>
        <div class="prose prose-invert text-white/70 text-lg space-y-6">
            <p>
                Renewable energy Saudi Arabia Vision 2030 commitments transform the Kingdom from a hydrocarbon exporter to a renewable energy powerhouse.
            </p>
            <p>
                The National Renewable Energy Program (NREP) targets <strong>58.7 GW of renewable capacity by 2030</strong>: Solar PV (40 GW), Wind energy (16 GW), and CSP (2.7 GW).
            </p>
            <p>
                Furthermore, Saudi Arabia is positioning itself as a global green hydrogen leader through projects like the **NEOM green hydrogen facility**, producing 650 tonnes of clean ammonia per day powered entirely by renewables.
            </p>
        </div>
    </section>

    <section class="space-y-10">
        <div class="section-header">
            <h2 class="text-3xl font-bold uppercase tracking-tight text-white">Summary of Vision 2030 Sustainability Targets</h2>
        </div>
        <table class="seo-table">
            <thead>
                <tr>
                    <th>Vision 2030 Goal</th>
                    <th>Sustainability Impact</th>
                    <th>Target Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>50% Renewable Energy Mix</td>
                    <td>Reduced carbon emissions by 45 million tonnes/year</td>
                    <td>2030</td>
                </tr>
                <tr>
                    <td>30% Protected Land & Sea Areas</td>
                    <td>Enhanced biodiversity and ecosystem services</td>
                    <td>2030</td>
                </tr>
                <tr>
                    <td>85% Municipal Waste Recycling</td>
                    <td>Circular economy value creation of $13B annually</td>
                    <td>2035</td>
                </tr>
                <tr>
                    <td>Net Zero Emissions</td>
                    <td>Climate neutrality across all sectors</td>
                    <td>2060</td>
                </tr>
                <tr>
                    <td>10 Billion Trees Planted</td>
                    <td>Carbon sequestration of 2.5 billion tonnes CO2</td>
                    <td>2030</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="space-y-12">
        <div class="section-header">
            <h2 class="text-3xl font-bold uppercase tracking-tight text-white">Role of Construction & Green Buildings</h2>
        </div>
        <div class="prose prose-invert max-w-none text-white/70 text-lg space-y-6">
            <p>
                Sustainable construction in Saudi Arabia under Vision 2030 represents a critical implementation vector. The building sector accounts for approximately 60% of electricity consumption, making green building initiatives essential for achieving energy and emissions targets.
            </p>
            <p>
                The updated Saudi Building Code mandates energy efficiency, water conservation systems, minimum green space ratios, and waste management plans. Adoption of green certifications like Mostadam and LEED certification is driving structural resilience across premium commercial projects.
            </p>
        </div>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Green Building Riyadh" class="content-img" />
    </section>

    <section class="border-t border-white/10 pt-16 text-center space-y-8">
        <h2 class="text-3xl font-bold uppercase text-white italic">Stewardship & Leadership</h2>
        <div class="max-w-3xl mx-auto prose prose-invert text-white/60 text-lg space-y-8">
            <p>
                Saudi Vision 2030 sustainability represents a comprehensive transformation of Saudi Arabia's development paradigm. The framework transcends environmental protection to integrate economic competitiveness, social equity, and ecological resilience into the national strategy.
            </p>
            <p>
                Organizations engaging with Saudi Arabia's sustainability economy must align with Vision 2030 frameworks, adopt recognized ESG standards, and contribute to measurable environmental and social outcomes. The coming years will determine whether policy commitments translate into systemic change.
            </p>
            <div class="pt-12">
                <p class="text-white font-black text-2xl uppercase tracking-widest italic">Sustainability Highway</p>
                <p class="text-white/30 text-[10px] font-bold uppercase tracking-[0.5em] mt-4">Stewardship of Vision 2030</p>
            </div>
        </div>
    </section>
</div>
`;

async function sync() {
    try {
        console.log('Starting seed and sync script...');

        // We load the ES module using dynamic import
        const { STATIC_BLOGS } = await import('../staticBlogs.ts');

        // 1. Get the admin user
        const author = await prisma.user.findUnique({
            where: { email: 'sustainabilityhighway@gmail.com' }
        });

        if (!author) {
            throw new Error('Admin user sustainabilityhighway@gmail.com not found. Run npm run seed:admin first.');
        }

        const authorId = author.id;
        console.log(`Using Author ID: ${authorId}`);

        // 2. Clear out the database Blog table completely
        console.log('Clearing existing Blog table in SQLite...');
        await prisma.blog.deleteMany({});
        console.log('Cleared!');

        // 3. Process STATIC_BLOGS, modify the ones with issues, and insert them
        console.log(`Processing ${STATIC_BLOGS.length} static blogs...`);

        for (const blog of STATIC_BLOGS) {
            // Skip the premium article shell if it is imported (ID 201) because it's not stored in SQLite
            if (blog.id === 201) {
                console.log('Skipping static PREMIUM_ARTICLE placeholder (ID 201) for SQLite storage.');
                continue;
            }

            let title = blog.title;
            let slug = blog.slug;
            let content = blog.content;
            let image_url = blog.image_url;
            let meta_title = blog.meta_title;
            let meta_description = blog.meta_description;
            let faq_data = blog.faq_data;
            let schema_data = blog.schema_data;

            if (blog.id === 1001) {
                // Replacement for blog no.1
                console.log('Replacing Blog 1001 (UNSDG Guide) with new Saudi Vision 2030 Sustainability Guide...');
                title = "Vision 2030 Sustainability: Transforming Saudi Arabia's Environmental and Economic Future";
                slug = "vision-2030-sustainability-guide";
                content = vision2030Content;
                image_url = "https://images.unsplash.com/photo-1449156003711-3397e67a72c4?q=80&w=1600&auto=format&fit=crop";
                meta_title = "Vision 2030 Sustainability: Saudi Arabia's Green Future";
                meta_description = "Vision 2030 sustainability goals are reshaping Saudi Arabia through ESG frameworks, renewable energy, green buildings, and net-zero commitments.";
                faq_data = [
                    {
                        question: "What is the primary target for renewable energy in Saudi Vision 2030?",
                        answer: "Saudi Arabia targets to increase the share of renewable energy to 50% of the total energy mix by the year 2030, with the remaining 50% coming from natural gas."
                    },
                    {
                        question: "What is Mostadam and how does it relate to LEED?",
                        answer: "Mostadam is Saudi Arabia's national green building rating system, specifically calibrated for the local climate. It complements LEED, and developers often pursue dual certification."
                    },
                    {
                        question: "What is the Middle East Green Initiative?",
                        answer: "It is a regional campaign led by Saudi Arabia to plant 40 billion trees across the Middle East and reduce global carbon levels through collaborative climate action."
                    }
                ];
                schema_data = {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Vision 2030 Sustainability: Transforming Saudi Arabia's Environmental and Economic Future",
                    "description": "Explore Saudi Arabia's Vision 2030 sustainability targets, covering green buildings, renewable energy, and net-zero commitments.",
                    "author": {
                        "@type": "Organization",
                        "name": "Sustainability Highway"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Sustainability Highway"
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "http://localhost:3000/blogs/vision-2030-sustainability-guide"
                    },
                    "image": "https://images.unsplash.com/photo-1449156003711-3397e67a72c4?q=80&w=1600&auto=format&fit=crop",
                    "datePublished": "2026-01-31",
                    "dateModified": "2026-01-31",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": []
                    }
                } as any;
            } else if (blog.id === 1002) {
                // Fix broken images in LEED certification guide
                console.log('Fixing broken images inside LEED Certification Guide (ID 1002)...');
                content = content
                    .replace(/\/artifacts\/leed_certification_hero_1769872101229\.png/g, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000')
                    .replace(/\/artifacts\/leed_rating_levels_1769872118369\.png/g, 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000')
                    .replace(/\/artifacts\/green_building_riyadh_1769872134963\.png/g, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000');

                if (schema_data && typeof schema_data === 'object') {
                    (schema_data as any).image = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000';
                }
            }

            const dbId = blog.id - 1000;
            console.log(`Inserting: ID ${dbId} | Slug: ${slug} | Title: ${title}`);

            await prisma.blog.create({
                data: {
                    id: dbId,
                    title,
                    slug,
                    content,
                    excerpt: meta_description,
                    image_url,
                    status: 'PUBLISHED',
                    meta_title,
                    meta_description,
                    faq_data: JSON.stringify(faq_data || []),
                    schema_data: JSON.stringify(schema_data || {}),
                    authorId
                }
            });
        }

        // 4. Update the premiumArticle.ts file to remove broken image
        const premiumPath = path.join(__dirname, '../premiumArticle.ts');
        console.log(`Reading premiumArticle.ts at ${premiumPath}...`);
        let premiumContent = fs.readFileSync(premiumPath, 'utf8');
        
        console.log('Fixing broken image in premiumArticle.ts schema_data...');
        premiumContent = premiumContent.replace(
            /\/artifacts\/leed_certification_hero_1769872101229\.png/g,
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000'
        );
        fs.writeFileSync(premiumPath, premiumContent, 'utf8');
        console.log('premiumArticle.ts updated!');

        // 5. Run collect_static.js to regenerate staticBlogs.ts from database
        console.log('Running collect_static.js to regenerate staticBlogs.ts...');
        const collectScriptPath = path.join(__dirname, 'collect_static.js');
        execSync(`node "${collectScriptPath}"`, { stdio: 'inherit' });
        console.log('Database synced and staticBlogs.ts regenerated!');

    } catch (e) {
        console.error('Error in sync script:', e);
    } finally {
        await prisma.$disconnect();
    }
}

sync();
