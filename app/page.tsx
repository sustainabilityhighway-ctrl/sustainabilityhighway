import Hero from '../components/Hero'
import HomeBody from '../components/HomeBody'
import { STATIC_BLOGS } from '../staticBlogs'
import { supabase } from '../services/supabaseClient'

async function getPublishedBlogs() {
    try {
        const { data, error } = await supabase
            .from('Blog')
            .select('*')
            .eq('status', 'PUBLISHED')
            .order('created_at', { ascending: false })
            .limit(3);

        if (error || !data || data.length === 0) {
            return STATIC_BLOGS.filter(b => b.is_published).slice(0, 3);
        }
        return data;
    } catch (e) {
        return STATIC_BLOGS.filter(b => b.is_published).slice(0, 3);
    }
}

export default async function Home() {
    const blogs = await getPublishedBlogs();

    return (
        <main>
            <Hero />
            <HomeBody initialBlogs={blogs} />
        </main>
    )
}
