const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkWordCount() {
    const blogs = await prisma.blog.findMany();

    blogs.forEach(blog => {
        // Remove HTML tags and count words
        const textOnly = blog.content.replace(/<[^>]*>/g, ' ');
        const words = textOnly.split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;

        console.log('='.repeat(60));
        console.log(`Title: ${blog.title}`);
        console.log(`Status: ${blog.status}`);
        console.log(`Word Count: ${wordCount}`);
        console.log(`Has Images: ${blog.content.includes('<img') ? 'YES' : 'NO'}`);
        console.log('='.repeat(60));
        console.log('');
    });

    await prisma.$disconnect();
}

checkWordCount().catch(console.error);
