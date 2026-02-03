import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '../../../services/supabaseClient'; // Adjusted path: app/blog/[slug]/ -> ../../../
import { STATIC_BLOGS } from '../../../staticBlogs';
import { Metadata } from 'next';

// In Next.js 15, params is a Promise. We'll type it defensively or assume async.
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    return STATIC_BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}

async function getBlog(slug: string) {
    // 1. Try fetching from the NestJS Backend API (Local SQLite)
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1'; // Fallback for SSG/SSR
        const res = await fetch(`${apiUrl}/blogs?search=${slug}`); // Using search since we don't have a direct slug endpoint yet or we can filter. 
        // Ideally we should have a get by slug endpoint. But check if findAll supports filtering by slug? 
        // The Controller has findAll(@Query('search') search?: string). 
        // A better approach: If the backend supports retrieving by ID, we can't use it easily with a slug. 
        // Let's assume we can fetch all and find, or update backend to support slug.
        // For now, let's fetch list and find.

        if (res.ok) {
            const data = await res.json();
            // The backend returns { items: Blog[], meta: ... } or Blog[] depending on implementation. 
            // Looking at AdminDashboard: setBlogs(data.items || (Array.isArray(data) ? data : []));
            // Let's assume data.items is the array.
            const blogs = data.items || (Array.isArray(data) ? data : []);

            // Find the specific blog
            const found = blogs.find((b: any) => b.slug === slug || b.id.toString() === slug);
            if (found) return found;
        }
    } catch (e) {
        console.warn('Backend API fetch failed:', e);
    }

    // 2. Fallback to Supabase (if needed, but likely data is in SQLite)
    try {
        const { data } = await supabase
            .from('blogs')
            .select('*')
            .or(`slug.eq.${slug},id.eq.${slug}`)
            .single();

        if (data) return data;
    } catch (e) {
        // Warning suppressed
    }

    // 3. Fallback to static content
    return STATIC_BLOGS.find(b => b.slug === slug || b.id.toString() === slug);
}

export async function generateMetadata(
    props: Props,
): Promise<Metadata> {
    const params = await props.params;
    const blog = await getBlog(params.slug);

    if (!blog) return { title: 'Article Not Found' };

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description,
        openGraph: {
            title: blog.meta_title || blog.title,
            description: blog.meta_description,
            images: blog.image_url ? [blog.image_url] : [],
            url: `https://sustainabilityhighway.com/blogs/${blog.slug}`,
            type: 'article',
        },
        // Schema logic could be added here or via script in body
    }
}

export default async function BlogPage(props: Props) {
    const params = await props.params;
    const blog = await getBlog(params.slug);

    if (!blog) {
        notFound();
    }

    // Ensure faq_data is an array (backend returns stringified JSON)
    if (typeof blog.faq_data === 'string') {
        try {
            blog.faq_data = JSON.parse(blog.faq_data);
        } catch (e) {
            blog.faq_data = [];
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#041612] to-[#0B2B24]">
            {/* Hero Section */}
            {blog.image_url && (
                <div className="h-96 relative overflow-hidden">
                    <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041612] to-transparent"></div>
                </div>
            )}

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12 relative z-10 -mt-20">
                <Link
                    href="/insights"
                    className="inline-flex items-center text-[#4CAF50] hover:text-[#45a049] mb-8 font-bold uppercase tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md"
                >
                    ← Back to Insights
                </Link>

                <article className="bg-[#041612]/80 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight font-heading">
                        {blog.title}
                    </h1>

                    <div
                        className="prose prose-invert prose-lg max-w-none
                               prose-headings:text-white prose-headings:font-heading
                               prose-p:text-white/80 prose-p:leading-relaxed
                               prose-a:text-[#4CAF50] prose-a:no-underline hover:prose-a:underline
                               prose-strong:text-[#C5A059] prose-strong:font-bold
                               prose-ul:text-white/80 prose-li:marker:text-[#4CAF50]
                               prose-img:rounded-xl prose-img:border prose-img:border-white/10"
                        dangerouslySetInnerHTML={{ __html: blog.content || '' }}
                    />

                    {/* FAQ Section */}
                    {blog.faq_data && blog.faq_data.length > 0 && (
                        <div className="mt-16 border-t border-white/10 pt-12">
                            <h2 className="text-3xl font-bold text-white mb-8 font-heading">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {blog.faq_data.map((faq: any, index: number) => (
                                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                        <h3 className="text-lg font-bold text-[#4CAF50] mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-white/80">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </div>

            {/* Schema markup */}
            {blog.schema_data && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.schema_data) }}
                />
            )}
        </div>
    );
}
