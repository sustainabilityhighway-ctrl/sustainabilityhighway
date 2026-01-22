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

async function getBlog(slug: string) {
    // Try finding by slug or id
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .or(`slug.eq.${slug},id.eq.${slug}`) // Attempt to match slug or id (if slug is numeric)
        .single();

    if (data) return data;

    // Fallback to static
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
            url: `https://sustainabilityhighway.com/blog/${blog.slug}`,
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
