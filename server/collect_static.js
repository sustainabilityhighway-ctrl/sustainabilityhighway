const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

async function collect() {
    const blogs = await prisma.blog.findMany({
        where: { status: 'PUBLISHED' }
    });

    let output = 'import { PREMIUM_ARTICLE } from "./premiumArticle";\n\n';
    output += 'export const STATIC_BLOGS = [\n';
    output += '    PREMIUM_ARTICLE,\n';

    blogs.forEach((blog, index) => {
        const blogObj = {
            id: blog.id + 1000,
            title: blog.title,
            slug: blog.slug,
            is_published: true,
            image_url: blog.image_url,
            meta_title: blog.meta_title,
            meta_description: blog.meta_description,
            created_at: blog.created_at,
            content: blog.content,
            faq_data: JSON.parse(blog.faq_data || '[]'),
            schema_data: JSON.parse(blog.schema_data || '{}')
        };
        output += '    ' + JSON.stringify(blogObj, null, 4).replace(/\n/g, '\n    ') + (index === blogs.length - 1 ? '' : ',') + '\n';
    });

    output += '];\n';

    const targetPath = path.join(__dirname, '..', 'staticBlogs.ts');
    fs.writeFileSync(targetPath, output, 'utf8');
    console.log(`✅ Successfully generated staticBlogs.ts at ${targetPath}`);
}

collect().catch(console.error).finally(() => prisma.$disconnect());
