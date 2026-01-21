import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { STATIC_BLOGS } from '../staticBlogs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Blog {
    id: number;
    title: string;
    source_url: string;
    link: string;
    is_published: boolean;
    image_url?: string;
    content?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    canonical_url?: string;
    schema_data?: any;
    faq_data?: any[];
    template_id?: string;
}

interface FAQ {
    question: string;
    answer: string;
}

import { gemini } from '../services/gemini';

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState<number | null>(null);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    // AI Import State
    const [showImport, setShowImport] = useState(false);
    const [importTopic, setImportTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    async function fetchBlogs() {
        setLoading(true);
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('id', { ascending: false });

        if (error) {
            console.error('Error fetching blogs:', error);
        } else {
            setBlogs(data || []);
        }
        setLoading(false);
    }

    // ... existing uploadImage, saveContent, togglePublish functions ...

    async function togglePublish(id: number, currentStatus: boolean) {
        const { error } = await supabase
            .from('blogs')
            .update({ is_published: !currentStatus })
            .eq('id', id);

        if (error) {
            alert('Error updating status');
        } else {
            fetchBlogs();
        }
    }

    function generateSlug(title: string): string {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    function generateSchema(blog: Blog, faqs: FAQ[]) {
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.meta_title || blog.title,
            "description": blog.meta_description || "",
            "image": blog.image_url || "",
            "author": {
                "@type": "Organization",
                "name": "Sustainability Highway"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Sustainability Highway",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://yourdomain.com/logo.png"
                }
            }
        };

        const faqSchema = faqs.length > 0 ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        } : null;

        return { articleSchema, faqSchema };
    }

    async function saveContent(e: React.FormEvent) {
        e.preventDefault();
        if (!editingBlog) return;

        // Validation
        if (!editingBlog.slug) {
            alert('Please enter a slug');
            return;
        }

        const schemas = generateSchema(editingBlog, faqs);

        const { error } = await supabase
            .from('blogs')
            .update({
                content: editingBlog.content,
                title: editingBlog.title,
                slug: editingBlog.slug,
                meta_title: editingBlog.meta_title,
                meta_description: editingBlog.meta_description,
                canonical_url: editingBlog.canonical_url,
                schema_data: schemas.articleSchema,
                faq_data: faqs,
                template_id: editingBlog.template_id || 'standard'
            })
            .eq('id', editingBlog.id);

        if (error) {
            alert('Error saving content: ' + error.message);
        } else {
            alert('Blog updated successfully!');
            setEditingBlog(null);
            setFaqs([]);
            fetchBlogs();
        }
    }

    async function uploadImage(event: React.ChangeEvent<HTMLInputElement>, blogId: number) {
        if (!event.target.files || event.target.files.length === 0) return;

        const file = event.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${blogId}-${Math.random()}.${fileExt}`;

        setUploading(blogId);

        try {
            const { error: uploadError } = await supabase.storage.from('sadia').upload(fileName, file);
            if (uploadError) throw uploadError;

            const { data } = supabase.storage.from('sadia').getPublicUrl(fileName);

            const { error: updateError } = await supabase
                .from('blogs')
                .update({ image_url: data.publicUrl })
                .eq('id', blogId);

            if (updateError) throw updateError;
            fetchBlogs();
        } catch (error: any) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setUploading(null);
        }
    }

    function openEditor(blog: Blog) {
        setEditingBlog({
            ...blog,
            slug: blog.slug || generateSlug(blog.title),
            meta_title: blog.meta_title || blog.title,
            meta_description: blog.meta_description || '',
            template_id: blog.template_id || 'standard'
        });
        setFaqs(blog.faq_data || []);
    }

    function addFAQ() {
        setFaqs([...faqs, { question: '', answer: '' }]);
    }

    function updateFAQ(index: number, field: 'question' | 'answer', value: string) {
        const updated = [...faqs];
        updated[index][field] = value;
        setFaqs(updated);
    }

    function removeFAQ(index: number) {
        setFaqs(faqs.filter((_, i) => i !== index));
    }

    async function handleLogout() {
        await supabase.auth.signOut();
        window.location.reload();
    }

    async function handleAIImport() {
        if (!importTopic.trim()) return;
        setIsGenerating(true);

        const generated = await gemini.generateBlogPost(importTopic);

        if (generated) {
            const { error } = await supabase.from('blogs').insert({
                title: generated.title,
                slug: generated.slug,
                meta_title: generated.meta_title,
                meta_description: generated.meta_description,
                content: generated.content,
                is_published: false,
                template_id: 'standard',
                source_url: 'AI Generated',
                link: generated.slug // Just filling required field
            });

            if (error) {
                alert('Error saving generated blog: ' + error.message);
            } else {
                alert('✨ Article generated and saved as Draft! You can now add an image.');
                setShowImport(false);
                setImportTopic('');
                fetchBlogs();
            }
        } else {
            alert('Failed to generate article. Please try again.');
        }

        setIsGenerating(false);
    }

    async function handleImportDefaults() {
        if (!confirm('Import default static blogs as Drafts?')) return;
        setLoading(true);
        let importedCount = 0;

        for (const blog of STATIC_BLOGS) {
            // 1. Check duplicate slug
            const { data: existing } = await supabase
                .from('blogs')
                .select('id')
                .eq('slug', blog.slug)
                .single();

            if (!existing) {
                // 2. Insert as Draft
                const { error } = await supabase.from('blogs').insert({
                    title: blog.title,
                    slug: blog.slug,
                    content: blog.content,
                    image_url: blog.image_url,
                    meta_title: blog.meta_title,
                    meta_description: blog.meta_description,
                    faq_data: blog.faq_data,
                    is_published: false, // Force Draft
                    source_url: 'Static Import',
                    link: blog.slug
                });
                if (!error) importedCount++;
            }
        }
        alert(`Imported ${importedCount} new blogs to Admin.`);
        fetchBlogs();
        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#041612] text-white py-4 px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Content & Imports</h1>
                    <button
                        onClick={handleImportDefaults}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 text-white"
                    >
                        📥 Import Defaults
                    </button>
                    <button
                        onClick={() => setShowImport(true)}
                        className="bg-[#4CAF50] hover:bg-[#43a047] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 text-[#041612]"
                    >
                        ✨ Import Article (AI)
                    </button>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
                >
                    Logout
                </button>
            </div>

            <div className="max-w-7xl mx-auto p-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm text-gray-600">
                        Managing <span className="font-bold text-[#4CAF50]">{blogs.length}</span> topics
                    </div>
                </div>

                {/* IMPORT MODAL */}
                {showImport && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
                            <h3 className="text-xl font-bold mb-4">Import Article via AI</h3>
                            <p className="text-sm text-gray-600 mb-4">Enter a topic (e.g., "The Line Construction Updates") and our AI will write a complete blog post for you.</p>

                            <input
                                type="text"
                                value={importTopic}
                                onChange={(e) => setImportTopic(e.target.value)}
                                placeholder="Topic or Title..."
                                className="w-full p-3 border border-gray-300 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-[#4CAF50]"
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowImport(false)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAIImport}
                                    disabled={isGenerating}
                                    className={`px-4 py-2 bg-[#041612] text-white rounded-lg flex items-center gap-2 ${isGenerating ? 'opacity-50' : 'hover:bg-[#0B2B24]'}`}
                                >
                                    {isGenerating ? 'Generating...' : 'Start Import ✨'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* EDITOR MODAL ... existing ... */}
                {editingBlog && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
                        <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl my-8">
                            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
                                <h2 className="text-2xl font-bold text-[#041612]">Content Editor</h2>
                                <button
                                    onClick={() => { setEditingBlog(null); setFaqs([]); }}
                                    className="text-gray-400 hover:text-gray-600 text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <form onSubmit={saveContent} className="p-6 space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        value={editingBlog.title}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none"
                                    />
                                </div>

                                {/* Slug */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        URL Slug <span className="text-xs text-gray-500">(SEO-friendly URL)</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={editingBlog.slug || ''}
                                            onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                            placeholder="vision-2030-leed-mostadam"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setEditingBlog({ ...editingBlog, slug: generateSlug(editingBlog.title) })}
                                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
                                        >
                                            Auto-Generate
                                        </button>
                                    </div>
                                </div>

                                {/* SEO Meta */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                                            Meta Title <span className="text-xs text-gray-500">({editingBlog.meta_title?.length || 0}/60)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={editingBlog.meta_title || ''}
                                            onChange={(e) => setEditingBlog({ ...editingBlog, meta_title: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                            maxLength={60}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                                            Meta Description <span className="text-xs text-gray-500">({editingBlog.meta_description?.length || 0}/155)</span>
                                        </label>
                                        <textarea
                                            value={editingBlog.meta_description || ''}
                                            onChange={(e) => setEditingBlog({ ...editingBlog, meta_description: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                            rows={3}
                                            maxLength={155}
                                        />
                                    </div>
                                </div>

                                {/* Template Selection */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Page Template</label>
                                    <select
                                        value={editingBlog.template_id || 'standard'}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, template_id: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                    >
                                        <option value="standard">Standard Article</option>
                                        <option value="modern">Modern Layout</option>
                                        <option value="minimal">Minimal Design</option>
                                    </select>
                                </div>

                                {/* Canonical URL */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                                        Canonical URL <span className="text-xs text-gray-500">(Optional - for duplicate content)</span>
                                    </label>
                                    <input
                                        type="url"
                                        value={editingBlog.canonical_url || ''}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, canonical_url: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                        placeholder="https://example.com/original-article"
                                    />
                                </div>

                                {/* Rich Text Editor */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">Content</label>
                                    <ReactQuill
                                        theme="snow"
                                        value={editingBlog.content || ''}
                                        onChange={(value) => setEditingBlog({ ...editingBlog, content: value })}
                                        className="bg-white rounded-lg"
                                        style={{ height: '400px', marginBottom: '50px' }}
                                    />
                                </div>

                                {/* FAQ Section */}
                                <div className="border-t pt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-gray-800">FAQ Schema (Optional)</h3>
                                        <button
                                            type="button"
                                            onClick={addFAQ}
                                            className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] text-sm"
                                        >
                                            + Add FAQ
                                        </button>
                                    </div>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-semibold text-gray-600">FAQ #{index + 1}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFAQ(index)}
                                                    className="text-red-500 hover:text-red-700 text-sm"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Question"
                                                value={faq.question}
                                                onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                                                className="w-full p-2 mb-2 border rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                            />
                                            <textarea
                                                placeholder="Answer"
                                                value={faq.answer}
                                                onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#4CAF50] outline-none"
                                                rows={2}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-3 pt-4 border-t sticky bottom-0 bg-white pb-4">
                                    <button
                                        type="button"
                                        onClick={() => { setEditingBlog(null); setFaqs([]); }}
                                        className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-[#041612] text-white rounded-lg hover:bg-[#0B2B24]"
                                    >
                                        Save & Publish
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* BLOG LIST */}
                {loading ? (
                    <div className="text-center py-12 text-gray-500">Loading content...</div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Image</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase w-1/2">Title</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Status</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="h-14 w-14 rounded-lg bg-gray-100 overflow-hidden relative border">
                                                {blog.image_url ? (
                                                    <img src={blog.image_url} className="h-full w-full object-cover" alt="" />
                                                ) : (
                                                    <label className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-gray-200 text-gray-400">
                                                        <span className="text-sm">{uploading === blog.id ? '...' : '📷'}</span>
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/*"
                                                            disabled={uploading === blog.id}
                                                            onChange={(e) => uploadImage(e, blog.id)}
                                                        />
                                                    </label>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-semibold text-gray-900 mb-1">{blog.title}</div>
                                            <div className="text-xs text-gray-500">
                                                {blog.slug ? `/${blog.slug}` : 'No slug set'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => togglePublish(blog.id, blog.is_published)}
                                                className={`px-3 py-1 rounded-full text-xs font-bold ${blog.is_published
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                                    }`}>
                                                {blog.is_published ? '✓ LIVE' : '○ DRAFT'}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => openEditor(blog)}
                                                className="text-white bg-[#041612] px-4 py-2 rounded-lg hover:bg-[#0B2B24] transition-colors text-sm font-medium"
                                            >
                                                ✏️ Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
