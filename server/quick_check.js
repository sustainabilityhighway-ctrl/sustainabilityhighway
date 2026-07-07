const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const blogs = await prisma.blog.findMany();
    blogs.forEach(blog => {
        const textOnly = blog.content.replace(/<[^>]*>/g, ' ');
        const words = textOnly.split(/\s+/).filter(w => w.length > 0);
        console.log(`${blog.title}: ${words.length} words`);
    });
    await prisma.$disconnect();
}
main();
