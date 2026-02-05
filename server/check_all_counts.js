const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
    const blogs = await prisma.blog.findMany();
    console.log('\n--- BLOG AUDIT START ---\n');
    blogs.forEach(blog => {
        const text = blog.content.replace(/<[^>]*>/g, ' ');
        const count = text.split(/\s+/).filter(w => w.length > 0).length;
        console.log(`TITLE: ${blog.title}`);
        console.log(`SLUG: ${blog.slug}`);
        console.log(`WORDS: ${count}`);
        console.log(`STATUS: ${blog.status}`);
        console.log('----------------------------');
    });
    console.log('\n--- BLOG AUDIT END ---\n');
    await prisma.$disconnect();
}

check().catch(console.error);
