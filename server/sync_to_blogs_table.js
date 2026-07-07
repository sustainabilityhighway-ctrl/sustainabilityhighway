const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://wwsktlepebphvzeafhsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2t0bGVwZWJwaHZ6ZWFmaHN4Iiwicm9sZSI6ImFub24pLCJpYXQiOjE3Njk2OTI2MzgsImV4cCI6MjA4NTI2ODYzOH0.6dCZ6AsjnlhC2ye5ZLyIrxwrDSeAIK3OvgBDR-uoF6c';
const supabase = createClient(supabaseUrl, supabaseKey);

async function syncTables() {
    console.log('🔄 Syncing "Blog" to "blogs" table in Supabase...');

    // Fetch from Blog
    const { data: sourceBlogs, error: fetchError } = await supabase
        .from('Blog')
        .select('*');

    if (fetchError) {
        console.error('❌ Error fetching from Blog:', fetchError);
        return;
    }

    console.log(`📊 Found ${sourceBlogs.length} articles in "Blog" table.`);

    for (const blog of sourceBlogs) {
        console.log(`Processing: ${blog.title}`);

        // Prepare data for "blogs" table
        const blogData = {
            title: blog.title,
            slug: blog.slug,
            content: blog.content,
            description: blog.excerpt || blog.meta_description,
            image_url: blog.image_url,
            is_published: blog.status === 'PUBLISHED',
            meta_title: blog.meta_title,
            meta_description: blog.meta_description,
            canonical_url: blog.canonical_url,
            topic_tags: blog.topic_tags ? (typeof blog.topic_tags === 'string' ? [blog.topic_tags] : blog.topic_tags) : [],
            source_url: blog.source_url,
            // Handle jsonb fields
            faq_data: typeof blog.faq_data === 'string' ? JSON.parse(blog.faq_data || '[]') : (blog.faq_data || []),
            schema_data: typeof blog.schema_data === 'string' ? JSON.parse(blog.schema_data || '{}') : (blog.schema_data || {}),
            template_id: blog.template_id || 'standard',
            updated_at: new Date().toISOString()
        };

        // Check if exists in "blogs"
        const { data: existing, error: checkError } = await supabase
            .from('blogs')
            .select('id')
            .eq('slug', blog.slug)
            .maybeSingle();

        if (existing) {
            const { error: updateError } = await supabase
                .from('blogs')
                .update(blogData)
                .eq('id', existing.id);
            if (updateError) console.error(`  ❌ Update error for ${blog.slug}:`, updateError.message);
            else console.log(`  ✅ Updated in "blogs" table.`);
        } else {
            blogData.created_at = blog.created_at || new Date().toISOString();
            const { error: insertError } = await supabase
                .from('blogs')
                .insert([blogData]);
            if (insertError) console.error(`  ❌ Insert error for ${blog.slug}:`, insertError.message);
            else console.log(`  ✅ Inserted into "blogs" table.`);
        }
    }

    console.log('✨ Table sync completed!');
}

syncTables().catch(console.error);
