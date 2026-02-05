const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkImages() {
    const blogs = await prisma.blog.findMany();

    blogs.forEach(blog => {
        const imageCount = (blog.content.match(/<img/g) || []).length;
        const textOnly = blog.content.replace(/<[^>]*>/g, ' ');
        const wordCount = textOnly.split(/\s+/).filter(w => w.length > 0).length;

        console.log('='.repeat(70));
        console.log(`Title: ${blog.title}`);
        console.log(`Status: ${blog.status}`);
        console.log(`Word Count: ${wordCount}`);
        console.log(`Images: ${imageCount}`);
        console.log(`Content Length: ${blog.content.length} characters`);
        console.log(`Has FAQ: ${blog.faq_data ? 'YES' : 'NO'}`);
        console.log(`Has Schema: ${blog.schema_data ? 'YES' : 'NO'}`);
        console.log('='.repeat(70));
        console.log('');
    });

    await prisma.$disconnect();
}

checkImages().catch(console.error);
