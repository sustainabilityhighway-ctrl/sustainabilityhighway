const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const blogs = await prisma.blog.findMany({
        select: { id: true, title: true, status: true, slug: true }
    });
    blogs.forEach(b => {
        console.log(`ID: ${b.id} | Status: ${b.status} | Title: ${b.title} | Slug: ${b.slug}`);
    });
}
main().catch(console.error).finally(() => prisma.$disconnect());
