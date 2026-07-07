const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const blogs = await prisma.blog.findMany();
    console.log('--- LOCAL BLOGS ---');
    blogs.forEach(b => {
        console.log(`ID: ${b.id} | Slug: ${b.slug} | Status: ${b.status} | Title: ${b.title.substring(0, 30)}...`);
    });
}
main().catch(console.error).finally(() => prisma.$disconnect());
