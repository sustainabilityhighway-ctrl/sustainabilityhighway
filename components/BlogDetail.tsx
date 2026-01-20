import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { STATIC_BLOGS } from '../staticBlogs';
import { useParams } from 'react-router-dom';

interface Blog {
    id: number;
    title: string;
    content?: string;
    image_url?: string;
    meta_title?: string;
    meta_description?: string;
    canonical_url?: string;
    schema_data?: any;
    faq_data?: any[];
    created_at?: string;
    slug?: string;
}

export default function BlogDetail() {
    const { slug, id } = useParams(); // Support both /blog/:slug and /insights/:id
    const querySlug = slug || id;

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (querySlug) {
            fetchBlog();
        }
    }, [querySlug]);

    async function fetchBlog() {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('slug', querySlug)
            .eq('is_published', true)
            .single();

        if (data) {
            setBlog(data);
            // Meta update logic omitted for brevity in demo
        } else {
            // Check Static Blogs
            const staticBlog = STATIC_BLOGS.find(b => b.slug === querySlug || b.id.toString() === querySlug);
            if (staticBlog) {
                setBlog(staticBlog as any);
            }
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center">
                <div className="text-white text-xl">Loading article...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <a href="/insights" className="text-[#4CAF50] hover:underline">
                        ← Back to Insights
                    </a>
                </div>
            </div>
        );
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
                <a
                    href="/insights"
                    className="inline-flex items-center text-[#4CAF50] hover:text-[#45a049] mb-8 font-bold uppercase tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md"
                >
                    ← Back to Insights
                </a>

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
        </div>
    );
}
