const fs = require('fs');
const path = require('path');

function locateSuspicious(fileName) {
    const filePath = path.join(__dirname, '..', fileName);
    if (!fs.existsSync(filePath)) return;
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    console.log(`=== LOCATIONS IN ${fileName} ===`);
    lines.forEach((line, index) => {
        if (line.includes('/artifacts/')) {
            console.log(`Line ${index + 1}: ${line.trim()}`);
        }
    });
}

locateSuspicious('premiumArticle.ts');
locateSuspicious('staticBlogs.ts');
