const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Import the premium article content
const { PREMIUM_ARTICLE } = require('../premiumArticle.ts');

async function importPremiumArticle() {
    try {
        // Find the LEED blog
        const leedBlog = await prisma.blog.findFirst({
            where: {
                OR: [
                    { title: { contains: 'LEED' } },
                    { slug: 'leed-saudi-arabia-guide' }
                ]
            }
        });

        if (leedBlog) {
            await prisma.blog.update({
                where: { id: leedBlog.id },
                data: {
                    title: PREMIUM_ARTICLE.title,
                    content: PREMIUM_ARTICLE.content,
                    slug: PREMIUM_ARTICLE.slug,
                    status: 'DRAFT',
                    meta_title: PREMIUM_ARTICLE.meta_title,
                    meta_description: PREMIUM_ARTICLE.meta_description,
                    faq_data: JSON.stringify(PREMIUM_ARTICLE.faq_data),
                    schema_data: JSON.stringify(PREMIUM_ARTICLE.schema_data),
                    topic_tags: PREMIUM_ARTICLE.topic_tags.join(', ')
                }
            });
            console.log('✅ Successfully imported PREMIUM LEED article (1650+ words with images)');
        } else {
            console.log('❌ LEED blog not found');
        }

        await prisma.$disconnect();
    } catch (error) {
        console.error('Error:', error);
        await prisma.$disconnect();
    }
}

importPremiumArticle();
