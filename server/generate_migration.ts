
const { STATIC_BLOGS } = require('../staticBlogs');
const fs = require('fs');

function escapeSql(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/'/g, "''");
}

let sql = '';
const authorId = 'admin-user-001';

STATIC_BLOGS.forEach(blog => {
    const faqJson = JSON.stringify(blog.faq_data || []);
    const schemaJson = JSON.stringify(blog.schema_data || {});

    sql += `INSERT INTO "Blog" (
        title, slug, content, excerpt, image_url, status, 
        meta_title, meta_description, faq_data, schema_data, "authorId"
    ) VALUES (
        '${escapeSql(blog.title)}', 
        '${escapeSql(blog.slug)}', 
        '${escapeSql(blog.content)}', 
        '${escapeSql(blog.meta_description)}', 
        '${escapeSql(blog.image_url)}', 
        'PUBLISHED', 
        '${escapeSql(blog.meta_title)}', 
        '${escapeSql(blog.meta_description)}', 
        '${escapeSql(faqJson)}', 
        '${escapeSql(schemaJson)}', 
        '${authorId}'
    ) ON CONFLICT (slug) DO NOTHING;\n`;
});

fs.writeFileSync('migrate_to_supabase.sql', sql);
console.log('Migration SQL generated.');
