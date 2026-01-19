import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

interface BlogDetailProps {
    slug: string;
}

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
}

export default function BlogDetail({ slug }: BlogDetailProps) {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlog();
    }, [slug]);

    async function fetchBlog() {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('slug', slug)
            .eq('is_published', true)
            .single();

        if (error) {
            console.error('Error fetching blog:', error);
        } else {
            setBlog(data);

            // Update page title and meta
            if (data) {
                document.title = data.meta_title || data.title;

                // Add meta description
                let metaDesc = document.querySelector('meta[name="description"]');
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }
                metaDesc.setAttribute('content', data.meta_description || '');

                // Add canonical tag
                let canonical = document.querySelector('link[rel="canonical"]');
                if (!canonical) {
                    canonical = document.createElement('link');
                    canonical.setAttribute('rel', 'canonical');
                    document.head.appendChild(canonical);
                }
                const canonicalUrl = data.canonical_url || `https://sustainabilityhighway.com/blog/${slug}`;
                canonical.setAttribute('href', canonicalUrl);

                // Add JSON-LD Schema
                if (data.schema_data) {
                    const script = document.createElement('script');
                    script.type = 'application/ld+json';
                    script.text = JSON.stringify(data.schema_data);
                    document.head.appendChild(script);
                }

                // Add FAQ Schema if exists
                if (data.faq_data && data.faq_data.length > 0) {
                    const faqSchema = {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": data.faq_data.map((faq: any) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    };
                    const faqScript = document.createElement('script');
                    faqScript.type = 'application/ld+json';
                    faqScript.text = JSON.stringify(faqSchema);
                    document.head.appendChild(faqScript);
                }
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
            <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center">
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
            <div className="max-w-4xl mx-auto px-6 py-12">
                <a
                    href="/insights"
                    className="inline-flex items-center text-[#4CAF50] hover:text-[#45a049] mb-8 font-semibold"
                >
                    ← Back to Insights
                </a>

                <article>
                    <h1 className="text-5xl font-black text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    {blog.created_at && (
                        <div className="text-white/40 text-sm mb-8">
                            Published on {new Date(blog.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </div>
                    )}

                    <div
                        className="prose prose-invert prose-lg max-w-none
                                   prose-headings:text-white prose-headings:font-bold
                                   prose-p:text-white/80 prose-p:leading-relaxed
                                   prose-a:text-[#4CAF50] prose-a:no-underline hover:prose-a:underline
                                   prose-strong:text-white prose-strong:font-bold
                                   prose-ul:text-white/80 prose-ol:text-white/80
                                   prose-li:marker:text-[#4CAF50]
                                   prose-blockquote:border-l-[#4CAF50] prose-blockquote:text-white/60
                                   prose-code:text-[#C5A059] prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                        dangerouslySetInnerHTML={{ __html: blog.content || '' }}
                    />

                    {/* FAQ Section */}
                    {blog.faq_data && blog.faq_data.length > 0 && (
                        <div className="mt-16 border-t border-white/10 pt-12">
                            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {blog.faq_data.map((faq: any, index: number) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-[#4CAF50] mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-white/80 leading-relaxed">
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
