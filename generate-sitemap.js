import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { STATIC_BLOGS } from './staticBlogs.ts';

const SUPABASE_URL = 'https://xohrvqoftgiugocrhfnr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvaHJ2cW9mdGdpdWdvY3JoZm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NDgxNTgsImV4cCI6MjA4NDMyNDE1OH0.BilKFzk-ySSbtWuWGrXJ0cMPQ3FwcR-s40V3P0Vd9iA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function generateSitemap() {
    console.log('Generating sitemap...');
    const baseUrl = 'https://sustainabilityhighway.com';

    let blogs = [];
    try {
        // Fetch all published blogs from Supabase
        const { data, error } = await supabase
            .from('blogs')
            .select('slug, created_at')
            .eq('is_published', true);

        if (error) {
            console.warn('Supabase fetch failed, falling back to static blogs:', error.message);
        } else if (data && data.length > 0) {
            blogs = data;
        }
    } catch (e) {
        console.warn('Supabase fetch exception, falling back to static blogs:', e.message);
    }

    // If Supabase fetch was unsuccessful or empty, merge/fallback to static blogs
    if (blogs.length === 0) {
        blogs = STATIC_BLOGS.filter(b => b.is_published).map(b => ({
            slug: b.slug,
            created_at: b.created_at
        }));
    }

    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'weekly' },
        { url: '/insights', priority: '0.9', changefreq: 'daily' },
        { url: '/leed-guide', priority: '0.8', changefreq: 'weekly' },
        { url: '/projects/mostadam', priority: '0.8', changefreq: 'weekly' },
        { url: '/projects/envision', priority: '0.7', changefreq: 'monthly' },
        { url: '/projects/well', priority: '0.7', changefreq: 'monthly' },
        { url: '/projects/vision-2050', priority: '0.7', changefreq: 'monthly' }
    ];

    const blogPages = blogs.map(blog => ({
        url: `/blogs/${blog.slug}`,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: blog.created_at
    }));

    const allPages = [...staticPages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `\n    <lastmod>${new Date(page.lastmod).toISOString()}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('✅ Sitemap generated successfully to ./public/sitemap.xml');
}

generateSitemap().catch(console.error);

