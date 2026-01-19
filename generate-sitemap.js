import { supabase } from './services/supabaseClient';

async function generateSitemap() {
    const baseUrl = 'https://sustainabilityhighway.com';

    // Fetch all published blogs
    const { data: blogs } = await supabase
        .from('blogs')
        .select('slug, created_at')
        .eq('is_published', true);

    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'weekly' },
        { url: '/insights', priority: '0.9', changefreq: 'daily' }
    ];

    const blogPages = (blogs || []).map(blog => ({
        url: `/blog/${blog.slug}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: blog.created_at
    }));

    const allPages = [...staticPages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${new Date(page.lastmod).toISOString()}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    console.log(sitemap);
    return sitemap;
}

// Run this script: node generate-sitemap.js
generateSitemap().then(sitemap => {
    const fs = require('fs');
    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('✅ Sitemap generated successfully!');
}).catch(console.error);
