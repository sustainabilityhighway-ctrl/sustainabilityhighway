const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://wwsktlepebphvzeafhsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2t0bGVwZWJwaHZ6ZWFmaHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTI2MzgsImV4cCI6MjA4NTI2ODYzOH0.6dCZ6AsjnlhC2ye5ZLyIrxwrDSeAIK3OvgBDR-uoF6c';
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    const { data, error } = await supabase.from('Blog').select('id, title, slug, status, image_url');
    if (error) {
        console.error('Error fetching blogs:', error);
    } else {
        console.log('SUPABASE BLOGS:', JSON.stringify(data, null, 2));
    }
}
main();
