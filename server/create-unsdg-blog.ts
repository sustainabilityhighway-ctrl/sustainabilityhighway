import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findFirst({
        where: { email: 'sustainabilityhighway@gmail.com' }
    });

    if (!user) {
        console.log('Admin user not found');
        return;
    }

    const blogData = {
        title: "Mastering the UN Sustainable Development Goals (UNSDG): A Comprehensive Guide for 2030",
        slug: "un-sustainable-development-goals-guide-2030",
        content: `
<h1>Mastering the UN Sustainable Development Goals (UNSDG): A Comprehensive Guide for 2030</h1>

<p>The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the <strong>17 Sustainable Development Goals (SDGs)</strong>, which are an urgent call for action by all countries - developed and developing - in a global partnership.</p>

<img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" alt="Sustainability and Nature" style="width:100%; height:auto; border-radius:15px; margin: 20px 0;">

<h2>What are the 17 SDGs?</h2>

<ul>
<li><strong>1. No Poverty:</strong> End poverty in all its forms everywhere.</li>
<li><strong>2. Zero Hunger:</strong> End hunger, achieve food security and improved nutrition and promote sustainable agriculture.</li>
<li><strong>3. Good Health and Well-being:</strong> Ensure healthy lives and promote well-being for all at all ages.</li>
<li><strong>4. Quality Education:</strong> Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</li>
<li><strong>5. Gender Equality:</strong> Achieve gender equality and empower all women and girls.</li>
<li><strong>6. Clean Water and Sanitation:</strong> Ensure availability and sustainable management of water and sanitation for all.</li>
<li><strong>7. Affordable and Clean Energy:</strong> Ensure access to affordable, reliable, sustainable and modern energy for all.</li>
<li><strong>8. Decent Work and Economic Growth:</strong> Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.</li>
<li><strong>9. Industry, Innovation and Infrastructure:</strong> Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.</li>
<li><strong>10. Reduced Inequalities:</strong> Reduce inequality within and among countries.</li>
<li><strong>11. Sustainable Cities and Communities:</strong> Make cities and human settlements inclusive, safe, resilient and sustainable.</li>
<li><strong>12. Responsible Consumption and Production:</strong> Ensure sustainable consumption and production patterns.</li>
<li><strong>13. Climate Action:</strong> Take urgent action to combat climate change and its impacts.</li>
<li><strong>14. Life Below Water:</strong> Conserve and sustainably use the oceans, seas and marine resources for sustainable development.</li>
<li><strong>15. Life on Land:</strong> Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.</li>
<li><strong>16. Peace, Justice and Strong Institutions:</strong> Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.</li>
<li><strong>17. Partnerships for the Goals:</strong> Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.</li>
</ul>

<img src="https://images.unsplash.com/photo-1449156001935-d2863fb72690" alt="Sustainable Cities" style="width:100%; height:auto; border-radius:15px; margin: 20px 0;">

<h2>Why UNSDGs Matter in 2026?</h2>

<p>As we cross the halfway point to 2030, the importance of these goals has never been more evident. From climate change to global inequality, the UNSDGs provide the framework needed to address our most pressing challenges.</p>

<h3>Integration with Vision 2030</h3>

<p>In the Kingdom of Saudi Arabia, the UNSDGs are deeply integrated into <strong>Vision 2030</strong>. The transformation happening across the Kingdom aligns perfectly with global sustainability targets, focusing on clean energy, sustainable urban development (like THE LINE in NEOM), and quality education.</p>

<p>To ensure this guide reaches a global audience, we have implemented rigorous SEO practices, from metadata optimization to structured data, ensuring that the message of sustainability is heard far and wide.</p>
    `,
        excerpt: "Explore the 17 UN Sustainable Development Goals (UNSDG) in this comprehensive guide for 2030, including their integration with Vision 2030.",
        image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
        status: "DRAFT",
        meta_title: "UN Sustainable Development Goals (UNSDG) Guide 2030 | Sustainability Highway",
        meta_description: "Explore the 17 UN Sustainable Development Goals (UNSDG) in this comprehensive guide. Learn how these global goals are shaping a sustainable future and their impact on global policies.",
        topic_tags: "UNSDG, Sustainability, Global Goals, Vision 2030",
        canonical_url: "https://sustainabilityhighway.com/blog/un-sustainable-development-goals-guide-2030",
        faq_data: JSON.stringify([
            { question: "What is the primary goal of the UNSDGs?", answer: "The primary goal is to provide a shared blueprint for peace and prosperity for people and the planet, now and into the future." },
            { question: "When were the SDGs adopted?", answer: "They were adopted by all UN Member States in 2015 as part of the 2030 Agenda for Sustainable Development." }
        ]),
        schema_data: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Mastering the UN Sustainable Development Goals (UNSDG): A Comprehensive Guide for 2030",
            "author": { "@type": "Person", "name": "Admin" }
        })
    };

    const blog = await prisma.blog.create({
        data: {
            ...blogData,
            authorId: user.id
        }
    });

    console.log('Blog created successfully:', blog.id);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
