const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');

const prisma = new PrismaClient();

// Supabase configuration
const supabaseUrl = 'https://wwsktlepebphvzeafhsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2t0bGVwZWJwaHZ6ZWFmaHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTI2MzgsImV4cCI6MjA4NTI2ODYzOH0.6dCZ6AsjnlhC2ye5ZLyIrxwrDSeAIK3OvgBDR-uoF6c';
const supabase = createClient(supabaseUrl, supabaseKey);

async function syncToSupabase() {
    try {
        console.log('🔄 Starting sync to Supabase (Table: "Blog")...\n');

        // Fetch all blogs from local SQLite
        const blogs = await prisma.blog.findMany();

        console.log(`📊 Found ${blogs.length} blogs in local database\n`);

        for (const blog of blogs) {
            console.log(`Syncing: ${blog.title}`);

            // Check if blog exists in Supabase
            const { data: existing, error: fetchError } = await supabase
                .from('Blog')
                .select('id')
                .eq('slug', blog.slug)
                .maybeSingle();

            if (fetchError) {
                console.error(`  ❌ Error fetching: ${fetchError.message}`);
                continue;
            }

            const blogData = {
                title: blog.title,
                slug: blog.slug,
                content: blog.content,
                excerpt: blog.excerpt,
                image_url: blog.image_url,
                status: blog.status,
                meta_title: blog.meta_title,
                meta_description: blog.meta_description,
                canonical_url: blog.canonical_url,
                topic_tags: blog.topic_tags,
                faq_data: blog.faq_data,
                schema_data: blog.schema_data,
                template_id: blog.template_id,
                source_url: blog.source_url,
                authorId: 'admin-user-001', // Use the valid Supabase user ID
                categoryId: blog.categoryId,
                updated_at: new Date().toISOString(),
            };

            if (existing) {
                // Update existing blog
                const { error } = await supabase
                    .from('Blog')
                    .update(blogData)
                    .eq('id', existing.id);

                if (error) {
                    console.error(`  ❌ Error updating: ${error.message}`);
                } else {
                    console.log(`  ✅ Updated successfully (ID: ${existing.id})`);
                }
            } else {
                // Insert new blog
                blogData.created_at = new Date().toISOString();

                const { error } = await supabase
                    .from('Blog')
                    .insert([blogData]);

                if (error) {
                    console.error(`  ❌ Error inserting: ${error.message}`);
                } else {
                    console.log(`  ✅ Inserted successfully`);
                }
            }
            console.log('');
        }

        console.log('✅ Sync completed successfully!');
    } catch (error) {
        console.error('❌ Sync failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

syncToSupabase();
