const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
async function main() {
    const blogs = await prisma.blog.findMany();
    let output = '--- LOCAL BLOGS ---\n';
    blogs.forEach(b => {
        output += `ID: ${b.id} | Slug: ${b.slug} | Status: ${b.status} | Title: ${b.title}\n`;
    });
    fs.writeFileSync('server/local_blogs_output.txt', output);
}
main().catch(console.error).finally(() => prisma.$disconnect());
