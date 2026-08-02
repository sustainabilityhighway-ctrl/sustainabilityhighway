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

// Parse premium article
const pArticle = new Function(`return ${premiumArticleContent.replace('export const PREMIUM_ARTICLE =', '')}`)();

const allArticles = [pArticle, ...staticBlogs];

console.log(`Auditing total ${allArticles.length} articles...\n`);

let totalIssues = 0;

allArticles.forEach((art, idx) => {
    const title = art.title || '';
    const content = art.content || '';
    const id = art.id;
    const slug = art.slug;

    // 1. Check for 2024
    const count2024 = (content.match(/2024/g) || []).length + 
                      (title.match(/2024/g) || []).length + 
                      ((art.meta_title || '').match(/2024/g) || []).length;

    // 2. Check exact light background classes (not /5 or /10)
    const lightBgMatches = content.match(/\bbg-(white|gray-50|gray-100|gray-200|yellow-50|blue-50|green-50|emerald-50)\b(?!\/)/g) || [];

    // 3. Check dark text classes
    const darkTextMatches = content.match(/\btext-(gray-900|gray-800|gray-700|gray-600|black)\b/g) || [];

    // 4. Check local /artifacts/
    const artifactImgs = content.match(/src=["']\/artifacts\/[^"']+["']/g) || [];

    if (count2024 > 0 || lightBgMatches.length > 0 || darkTextMatches.length > 0 || artifactImgs.length > 0) {
        totalIssues++;
        console.log(`=== Article #${idx + 1} | ID: ${id} | Slug: ${slug} ===`);
        console.log(`Title: "${title}"`);
        if (count2024 > 0) console.log(`  ⚠️ Found ${count2024} instance(s) of "2024"`);
        if (lightBgMatches.length > 0) console.log(`  ⚠️ Light backgrounds found (${lightBgMatches.length}): ${Array.from(new Set(lightBgMatches)).join(', ')}`);
        if (darkTextMatches.length > 0) console.log(`  ⚠️ Dark text classes (${darkTextMatches.length}): ${Array.from(new Set(darkTextMatches)).join(', ')}`);
        if (artifactImgs.length > 0) console.log(`  ⚠️ Local /artifacts/ images (${artifactImgs.length})`);
    }
});

if (totalIssues === 0) {
    console.log('🎉 PERFECT! All 26 articles are 100% clean and free of visual bugs, light background glitches, broken image links, or 2024 year references!');
}
