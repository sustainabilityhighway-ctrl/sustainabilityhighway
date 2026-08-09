const fs = require('fs');
const path = require('path');
const https = require('https');

const staticBlogsContent = fs.readFileSync(path.join(__dirname, '../staticBlogs.ts'), 'utf8');
const premiumArticleContent = fs.readFileSync(path.join(__dirname, '../premiumArticle.ts'), 'utf8');

const startMarker = 'PREMIUM_ARTICLE,';
const startIndex = staticBlogsContent.indexOf(startMarker) + startMarker.length;
const endIndex = staticBlogsContent.lastIndexOf('];');
let jsonText = staticBlogsContent.substring(startIndex, endIndex).trim();
if (jsonText.endsWith(',')) jsonText = jsonText.substring(0, jsonText.length - 1);
const staticBlogs = new Function(`return [${jsonText}]`)();
const pArticle = new Function(`return ${premiumArticleContent.replace('export const PREMIUM_ARTICLE =', '')}`)();

const allArticles = [pArticle, ...staticBlogs];
const urlMap = new Map(); // url -> [{articleId, type}]

allArticles.forEach(art => {
    const content = art.content || '';
    const inlineImgs = (content.match(/<img[^>]+src=["']([^"']+)["']/g) || []).map(tag => {
        const m = tag.match(/src=["']([^"']+)["']/);
        return m ? m[1] : '';
    }).filter(Boolean);

    const add = (url, type) => {
        if (!urlMap.has(url)) urlMap.set(url, []);
        urlMap.get(url).push({ id: art.id, type });
    };
    if (art.image_url) add(art.image_url, 'featured');
    inlineImgs.forEach(u => add(u, 'inline'));
});

console.log(`Checking ${urlMap.size} unique image URLs...\n`);

function checkUrl(url) {
    return new Promise((resolve) => {
        try {
            const req = https.request(url, { method: 'HEAD', timeout: 10000 }, (res) => {
                resolve(res.statusCode);
            });
            req.on('error', () => resolve('ERROR'));
            req.on('timeout', () => { req.destroy(); resolve('TIMEOUT'); });
            req.end();
        } catch (e) {
            resolve('ERROR');
        }
    });
}

(async () => {
    const broken = [];
    const urls = Array.from(urlMap.keys());
    let checked = 0;
    for (const url of urls) {
        const status = await checkUrl(url);
        checked++;
        const ok = status === 200;
        if (!ok) {
            broken.push({ url, status, refs: urlMap.get(url) });
        }
        process.stdout.write(`[${checked}/${urls.length}] ${status} ${ok ? '' : '<< BROKEN'} ${url}\n`);
    }

    console.log('\n=== BROKEN IMAGE REPORT ===');
    if (broken.length === 0) {
        console.log('All image URLs returned 200 OK.');
    } else {
        broken.forEach(b => {
            console.log(`Status ${b.status}: ${b.url}`);
            b.refs.forEach(r => console.log(`   used by article ${r.id} (${r.type})`));
        });
    }
    fs.writeFileSync(path.join(__dirname, 'broken_images.json'), JSON.stringify(broken, null, 2));
})();
