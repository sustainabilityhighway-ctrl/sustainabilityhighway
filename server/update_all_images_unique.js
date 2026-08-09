const fs = require('fs');
const path = require('path');

// Curated dictionary of UNIQUE Unsplash images mapped per article ID.
// GUARANTEE: Every single image URL in this dictionary is 100% unique!
const UNIQUE_IMAGES = {
    // Article 201: Premium LEED Guide 2027
    201: {
        featured: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        inlines: [
            "https://images.unsplash.com/photo-1544107159-3fe514831421?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    // Article 1001: UNSDG 2030 Guide
    1001: {
        featured: "https://images.unsplash.com/photo-1466611653911-954ff213150b?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1548332915-ae29590aa701?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071823990-b86db173b88a?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449156003711-3397e67a72c4?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    // Article 1002: LEED Certification in Saudi Arabia 2027 Guide
    1002: {
        featured: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000",
        inlines: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
        ]
    },
    // Article 1007: Mostadam Rating System Guide
    1007: {
        featured: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?q=80&w=1000",
            "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1000"
        ]
    },
    // Article 1008: Wind Load Analysis
    1008: {
        featured: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fm=webp&w=1400&q=80",
        inlines: [
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200"
        ]
    },
    // Article 1009: Extended Producer Responsibility
    1009: {
        featured: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop"
        ]
    },
    // Article 1010: LEED and Mostadam Certification
    1010: {
        featured: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
        inlines: [
            "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=1200"
        ]
    },
    // Article 1011: NEOM's Sustainability Goals
    1011: {
        featured: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
        inlines: [
            "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=800"
        ]
    },
    // Article 1012: How LEED Certification Is Awarded
    1012: {
        featured: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200"
        ]
    },
    // Article 1013: LEED Certification Process Step by Step
    1013: {
        featured: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1200"
        ]
    },
    // Article 1014: LEED Prerequisites Explained
    1014: {
        featured: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200"
        ]
    },
    // Article 1015: LEED Credits vs Prerequisites
    1015: {
        featured: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200"
        ]
    },
    // Article 1016: LEED Scorecard Explained
    1016: {
        featured: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200"
        ]
    },
    // Article 1017: LEED Documentation Requirements
    1017: {
        featured: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200"
        ]
    },
    // Article 1021: LEED Water Efficiency Strategies
    1021: {
        featured: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
        ]
    },
    // Article 1022: LEED Sustainable Sites Requirements
    1022: {
        featured: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1511497584788-876761c11969?q=80&w=1200"
        ]
    },
    // Article 1023: LEED Innovation Credits Explained
    1023: {
        featured: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200"
        ]
    },
    // Article 1024: LEED Regional Priority Credits
    1024: {
        featured: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200"
        ]
    },
    // Article 1025: LEED Construction Waste Management Guide
    1025: {
        featured: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
        ]
    },
    // Article 1026: LEED Commissioning Requirements
    1026: {
        featured: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200"
        ]
    },
    // Article 1027: LEED Fundamental vs Enhanced Commissioning
    1027: {
        featured: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
        ]
    },
    // Article 1028: LEED EPD Requirements Explained
    1028: {
        featured: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1600&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
        ]
    },
    // Article 1029: LEED vs. Mostadam Comprehensive Comparison
    1029: {
        featured: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2000&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=1200"
        ]
    },
    // Article 1030: Understanding Mostadam Rating System Categories
    1030: {
        featured: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"
        ]
    },
    // Article 1031: Envision Sustainability Framework
    1031: {
        featured: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200"
        ]
    },
    // Article 1032: Which Sustainability Rating System Is Right for Your Project
    1032: {
        featured: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop",
        inlines: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
        ]
    }
};

// Validate that every single URL in UNIQUE_IMAGES is unique
const usedUrls = new Set();
let duplicatesFound = 0;

for (const [id, data] of Object.entries(UNIQUE_IMAGES)) {
    if (usedUrls.has(data.featured)) {
        console.error(`❌ Duplicate featured URL in ID ${id}: ${data.featured}`);
        duplicatesFound++;
    }
    usedUrls.add(data.featured);

    if (Array.isArray(data.inlines)) {
        data.inlines.forEach(url => {
            if (typeof url === 'string') {
                if (usedUrls.has(url)) {
                    console.error(`❌ Duplicate inline URL in ID ${id}: ${url}`);
                    duplicatesFound++;
                }
                usedUrls.add(url);
            }
        });
    }
}

if (duplicatesFound > 0) {
    console.error(`Aborting script due to ${duplicatesFound} duplicate(s) in UNIQUE_IMAGES config!`);
    process.exit(1);
}

console.log(`✅ Config validated! Total ${usedUrls.size} 100% unique image URLs prepared.\n`);

// 1. Update premiumArticle.ts
const premiumPath = path.join(__dirname, '../premiumArticle.ts');
let premiumContent = fs.readFileSync(premiumPath, 'utf8');

// Update featured image in premiumArticle.ts
premiumContent = premiumContent.replace(
    /image_url:\s*["'][^"']+["']/,
    `image_url: "${UNIQUE_IMAGES[201].featured}"`
);
premiumContent = premiumContent.replace(
    /"image":\s*["'][^"']+["']/,
    `"image": "${UNIQUE_IMAGES[201].featured}"`
);

// Update inline images in premiumArticle.ts
const existingPremiumImgs = premiumContent.match(/<img[^>]+>/g) || [];
if (existingPremiumImgs.length > 0 && UNIQUE_IMAGES[201].inlines && UNIQUE_IMAGES[201].inlines.length > 0) {
    UNIQUE_IMAGES[201].inlines.forEach((newUrl, i) => {
        if (existingPremiumImgs[i]) {
            const updatedTag = existingPremiumImgs[i].replace(/src=["'][^"']+["']/, `src="${newUrl}"`);
            premiumContent = premiumContent.replace(existingPremiumImgs[i], updatedTag);
        }
    });
}

fs.writeFileSync(premiumPath, premiumContent, 'utf8');
console.log('✅ Updated premiumArticle.ts featured and inline images!');

// 2. Update staticBlogs.ts
const staticPath = path.join(__dirname, '../staticBlogs.ts');
let staticContent = fs.readFileSync(staticPath, 'utf8');

// We will parse staticBlogs objects and inject/update images into each article block
const startMarker = 'PREMIUM_ARTICLE,';
const startIndex = staticContent.indexOf(startMarker) + startMarker.length;
const endIndex = staticContent.lastIndexOf('];');

let jsonText = staticContent.substring(startIndex, endIndex).trim();
if (jsonText.endsWith(',')) {
    jsonText = jsonText.substring(0, jsonText.length - 1);
}
const staticBlogs = new Function(`return [${jsonText}]`)();

staticBlogs.forEach(blog => {
    const imgConfig = UNIQUE_IMAGES[blog.id];
    if (!imgConfig) return;

    // Update featured image
    blog.image_url = imgConfig.featured;
    if (blog.schema_data && blog.schema_data.image) {
        blog.schema_data.image = imgConfig.featured;
    }

    // Ensure content has inline images if missing or outdated
    let content = blog.content || '';

    // If blog has no inline images, add an inline image section seamlessly into the content
    const existingImgs = content.match(/<img[^>]+>/g) || [];

    if (existingImgs.length === 0 && imgConfig.inlines && imgConfig.inlines.length > 0) {
        // Add an inline image after the second section or after the first <h2> block
        const inlineUrl = imgConfig.inlines[0];
        const imgHtml = `\n\n<img src="${inlineUrl}" alt="${blog.title} Technical Visual" class="w-full rounded-2xl shadow-2xl my-10 object-cover max-h-[500px]" />\n\n`;
        
        if (content.includes('</section>')) {
            const firstSectionEnd = content.indexOf('</section>') + 10;
            content = content.slice(0, firstSectionEnd) + imgHtml + content.slice(firstSectionEnd);
        } else if (content.includes('</h2>')) {
            const firstH2End = content.indexOf('</h2>') + 5;
            content = content.slice(0, firstH2End) + imgHtml + content.slice(firstH2End);
        } else {
            content = content + imgHtml;
        }
        blog.content = content;
    } else if (existingImgs.length > 0 && imgConfig.inlines && imgConfig.inlines.length > 0) {
        // Replace existing inline images with our guaranteed unique URLs
        imgConfig.inlines.forEach((newUrl, i) => {
            if (existingImgs[i]) {
                const updatedTag = existingImgs[i].replace(/src=["'][^"']+["']/, `src="${newUrl}"`);
                content = content.replace(existingImgs[i], updatedTag);
            }
        });
        blog.content = content;
    }
});

// Re-serialize staticBlogs back into staticBlogs.ts
let updatedJson = JSON.stringify(staticBlogs, null, 4).trim();
if (updatedJson.startsWith('[')) {
    updatedJson = updatedJson.substring(1);
}
if (updatedJson.endsWith(']')) {
    updatedJson = updatedJson.substring(0, updatedJson.length - 1);
}
const prefix = staticContent.substring(0, startIndex);
const suffix = staticContent.substring(endIndex);

const newStaticBlogsTs = `${prefix}\n${updatedJson}\n${suffix}`;
fs.writeFileSync(staticPath, newStaticBlogsTs, 'utf8');

console.log('✅ Updated staticBlogs.ts with 100% unique featured & inline images for all articles!');
