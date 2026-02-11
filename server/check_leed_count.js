const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const blog = await prisma.blog.findUnique({ where: { slug: 'leed-saudi-arabia-guide' } });
    if (blog) {
        const textOnly = blog.content.replace(/<[^>]*>/g, ' ');
        const words = textOnly.split(/\s+/).filter(w => w.length > 0);
        console.log(`Title: ${blog.title}`);
        console.log(`Word Count: ${words.length}`);
    } else {
        console.log('Not found');
    }
    await prisma.$disconnect();
}
main();
