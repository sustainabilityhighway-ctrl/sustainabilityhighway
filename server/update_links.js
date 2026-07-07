const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Update LEED Article to include Mostadam link
    const leedBlog = await prisma.blog.findFirst({
        where: { slug: 'leed-saudi-arabia-guide' }
    });

    if (leedBlog) {
        let content = leedBlog.content;
        // Add a link to Mostadam at the end if not present
        if (!content.includes('mostadam-rating-system-guide')) {
            const linkHtml = `
                <div class="mt-12 p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-200">
                    <p class="text-xl font-bold text-slate-900 mb-4">Want to learn about Saudi Arabia's national standard?</p>
                    <a href="/blogs/mostadam-rating-system-guide" class="text-amber-600 font-black text-2xl hover:underline">Explore the Mostadam Rating System Guide →</a>
                </div>
            `;
            // Insert before the last closing div or at the end of a section
            content = content.replace('</div>\n        </div>', linkHtml + '</div>\n        </div>');

            await prisma.blog.update({
                where: { id: leedBlog.id },
                data: { content }
            });
            console.log('✅ Added Mostadam link to LEED article');
        }
    }

    // 2. Update UNSDG Article to include Mostadam link
    const unsdgBlog = await prisma.blog.findFirst({
        where: { slug: 'unsdg-2030-guide' }
    });

    if (unsdgBlog) {
        let content = unsdgBlog.content;
        if (!content.includes('mostadam-rating-system-guide')) {
            const linkHtml = `
                <div class="mt-12 p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-200">
                    <p class="text-xl font-bold text-slate-900 mb-4">How does this align with local Saudi standards?</p>
                    <a href="/blogs/mostadam-rating-system-guide" class="text-amber-600 font-black text-2xl hover:underline">Technical Guide to Mostadam Certification →</a>
                </div>
            `;
            content = content.replace('</div>\n        </div>', linkHtml + '</div>\n        </div>');

            await prisma.blog.update({
                where: { id: unsdgBlog.id },
                data: { content }
            });
            console.log('✅ Added Mostadam link to UNSDG article');
        }
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
