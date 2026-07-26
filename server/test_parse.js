const fs = require('fs');
const path = require('path');

function testParse() {
    try {
        const filePath = path.join(__dirname, '../staticBlogs.ts');
        const content = fs.readFileSync(filePath, 'utf8');

        // Extract the content starting from the first object { "id": 1001
        const startMarker = 'PREMIUM_ARTICLE,';
        const startIndex = content.indexOf(startMarker) + startMarker.length;
        const endIndex = content.lastIndexOf('];');
        
        let jsonText = content.substring(startIndex, endIndex).trim();
        // Remove trailing commas if any
        if (jsonText.endsWith(',')) {
            jsonText = jsonText.substring(0, jsonText.length - 1);
        }
        
        const arrayText = `[${jsonText}]`;
        
        // Evaluate the JS array using a Function constructor (safer than raw eval)
        const parsed = new Function(`return ${arrayText}`)();
        console.log('SUCCESS! Parsed', parsed.length, 'blogs.');
        console.log('First blog ID:', parsed[0].id);
        console.log('First blog slug:', parsed[0].slug);
    } catch (e) {
        console.error('PARSE FAILED:', e);
    }
}

testParse();
