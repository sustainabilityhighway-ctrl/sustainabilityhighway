const fs = require('fs');
const path = require('path');

function parseBlogs() {
    const filePath = path.join(__dirname, '../staticBlogs.ts');
    const content = fs.readFileSync(filePath, 'utf8');

    // Regex to match the structures
    // Let's search for id: and fields
    const idRegex = /"id"\s*:\s*(\d+)|id\s*:\s*(\d+)/g;
    const blogs = [];
    let match;

    while ((match = idRegex.exec(content)) !== null) {
        const idVal = match[1] || match[2];
        const startIdx = match.index;
        const substring = content.substring(startIdx, startIdx + 1000);

        const titleMatch = substring.match(/"title"\s*:\s*"([^"]+)"/) || substring.match(/title\s*:\s*"([^"]+)"/);
        const slugMatch = substring.match(/"slug"\s*:\s*"([^"]+)"/) || substring.match(/slug\s*:\s*"([^"]+)"/);
        const imgMatch = substring.match(/"image_url"\s*:\s*"([^"]+)"/) || substring.match(/image_url\s*:\s*"([^"]+)"/);

        blogs.append = blogs.push({
            id: parseInt(idVal),
            title: titleMatch ? titleMatch[1] : 'Unknown',
            slug: slugMatch ? slugMatch[1] : 'Unknown',
            image_url: imgMatch ? imgMatch[1] : 'Unknown'
        });
    }

    console.log(JSON.stringify(blogs, null, 2));
}

parseBlogs();
