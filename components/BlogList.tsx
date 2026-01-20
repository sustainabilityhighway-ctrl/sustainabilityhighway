import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { STATIC_BLOGS } from '../staticBlogs';

interface Blog {
    id: number;
    title: string;
    content?: string;
    image_url?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    created_at?: string;
    faq_data?: any[];
}

export default function BlogList() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPublishedBlogs();
    }, []);

    async function fetchPublishedBlogs() {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('is_published', true)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching blogs from DB (using static fallback):', error);
            setBlogs(STATIC_BLOGS);
        } else {
            setBlogs((data && data.length > 0) ? data : STATIC_BLOGS);
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center">
                <div className="text-white text-xl">Loading insights...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#041612] to-[#0B2B24] py-24 px-6 pt-32">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-white mb-4 uppercase tracking-tight font-heading">
                        Sustainability <span className="text-[#C5A059]">Insights</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Expert knowledge on Vision 2030, LEED, Mostadam, and sustainable construction in Saudi Arabia
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <a
                            key={blog.id}
                            href={`/blog/${blog.slug || blog.id}`}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#4CAF50] transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {blog.image_url && (
                                <div className="h-48 overflow-hidden bg-gray-800">
                                    <img
                                        src={blog.image_url}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4CAF50] transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                {blog.meta_description && (
                                    <p className="text-white/60 text-sm line-clamp-3 mb-4">
                                        {blog.meta_description}
                                    </p>
                                )}
                                <div className="flex items-center text-[#C5A059] text-sm font-semibold">
                                    Read More →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
