const fs = require('fs');
const path = require('path');

const staticBlogsContent = fs.readFileSync(path.join(__dirname, '../staticBlogs.ts'), 'utf8');
const premiumArticleContent = fs.readFileSync(path.join(__dirname, '../premiumArticle.ts'), 'utf8');

// Parse static blogs
const startMarker = 'PREMIUM_ARTICLE,';
const startIndex = staticBlogsContent.indexOf(startMarker) + startMarker.length;
const endIndex = staticBlogsContent.lastIndexOf('];');

let jsonText = staticBlogsContent.substring(startIndex, endIndex).trim();
if (jsonText.endsWith(',')) {
    jsonText = jsonText.substring(0, jsonText.length - 1);
}
const staticBlogs = new Function(`return [${jsonText}]`)();
const pArticle = new Function(`return ${premiumArticleContent.replace('export const PREMIUM_ARTICLE =', '')}`)();

const allArticles = [pArticle, ...staticBlogs];

const allImageUrls = [];
const imageCounts = {};

console.log(`Inspecting images across all ${allArticles.length} articles...\n`);

allArticles.forEach((art, idx) => {
    const title = art.title || '';
    const featuredImg = art.image_url || '';
    const content = art.content || '';
    
    // Find all inline img tags
    const inlineImgs = (content.match(/<img[^>]+src=["']([^"']+)["']/g) || []).map(tag => {
        const m = tag.match(/src=["']([^"']+)["']/);
        return m ? m[1] : '';
    }).filter(Boolean);

    console.log(`[Article ${idx + 1}] ID: ${art.id} | Slug: ${art.slug}`);
    console.log(`  Title: "${title}"`);
    console.log(`  Featured Image: ${featuredImg}`);
    console.log(`  Inline Images (${inlineImgs.length}):`, inlineImgs);

    if (featuredImg) {
        allImageUrls.push({ url: featuredImg, articleId: art.id, type: 'featured' });
        imageCounts[featuredImg] = (imageCounts[featuredImg] || 0) + 1;
    }

    inlineImgs.forEach(url => {
        allImageUrls.push({ url, articleId: art.id, type: 'inline' });
        imageCounts[url] = (imageCounts[url] || 0) + 1;
    });
});

console.log('\n=== DUPLICATE IMAGE ANALYSIS ===');
const duplicates = Object.entries(imageCounts).filter(([url, count]) => count > 1);
if (duplicates.length > 0) {
    console.log(`⚠️ Found ${duplicates.length} duplicated image URL(s):`);
    duplicates.forEach(([url, count]) => {
        console.log(`  - Used ${count} times: ${url}`);
    });
} else {
    console.log('✅ No duplicate images found.');
}
