
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const blogs = await prisma.blog.findMany({
        select: { id: true, title: true, slug: true, status: true }
    });
    console.log('BLOGS:', JSON.stringify(blogs, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
