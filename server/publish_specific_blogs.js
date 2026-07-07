const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function publishBlogs() {
    const slugs = [
        'wind-load-analysis',
        'mostadam-rating-system-guide',
        'leed-saudi-arabia-guide',
        'unsdg-2030-guide'
    ];

    console.log('🚀 Publishing blogs with slugs:', slugs);

    for (const slug of slugs) {
        try {
            const blog = await prisma.blog.update({
                where: { slug: slug },
                data: { status: 'PUBLISHED' }
            });
            console.log(`✅ Published: ${blog.title} (${blog.slug})`);
        } catch (error) {
            console.error(`❌ Failed to publish ${slug}:`, error.message);
        }
    }
}

publishBlogs()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
