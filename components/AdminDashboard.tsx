"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../services/api';
import dynamic from 'next/dynamic';
import {
    LayoutDashboard, FileText, Settings, LogOut, Plus, Search,
    Eye, Edit3, Trash2, Image as ImageIcon, CheckCircle, AlertCircle,
    Sun, Moon, Globe, Zap, AlertTriangle,
    List, ShieldAlert, Activity, BarChart3, ChevronRight
} from 'lucide-react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';
import { gemini } from '../services/gemini';

// --- Types ---
interface Blog {
    id: number;
    title: string;
    source_url?: string;
    image_url?: string;
    content?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    canonical_url?: string;
    faq_data?: any[];
    created_at?: string;
    status: 'DRAFT' | 'PUBLISHED';
    author?: { name: string };
}

interface AuditIssue {
    type: 'error' | 'warning' | 'success';
    category: string;
    message: string;
}

// --- Audit Logic ---
const runIntegrityAudit = (blog: Blog, allBlogs: Blog[]): AuditIssue[] => {
    const issues: AuditIssue[] = [];

    // 1. Duplicate/URL Check
    const isDup = allBlogs.some(b => b.id !== blog.id && (b.title.trim().toLowerCase() === blog.title?.trim().toLowerCase() || b.slug === blog.slug));
    if (isDup) issues.push({ type: 'error', category: 'Technical', message: 'Critical: Duplicate Title or URL Slug detected.' });
    else if (blog.slug) issues.push({ type: 'success', category: 'Technical', message: 'Unique URL footprint confirmed.' });

    // 2. SEO Complete Check
    if (!blog.meta_description || blog.meta_description.length < 120)
        issues.push({ type: 'error', category: 'On-Page', message: 'Missing Meta Description (Req: 120+ chars).' });
    else issues.push({ type: 'success', category: 'On-Page', message: 'Meta Description optimized.' });

    if (!blog.meta_title) issues.push({ type: 'warning', category: 'On-Page', message: 'Meta Title not set (Defaults to Article Title).' });

    // 3. Hierarchy/Structure Check
    const hasH1 = /<h1/i.test(blog.content || '');
    const hasH2 = /<h2/i.test(blog.content || '');
    if (!hasH1 && !hasH2) issues.push({ type: 'error', category: 'Hierarchy', message: 'Critical: No Heading structure found (H1/H2 missing).' });
    else if (!hasH2) issues.push({ type: 'warning', category: 'Hierarchy', message: 'Improvement: Add H2 sub-headers for better ranking.' });
    else issues.push({ type: 'success', category: 'Hierarchy', message: 'Semantic structure is valid.' });

    // 4. Content Integrity
    const wordCount = (blog.content || '').split(/\s+/).length;
    if (wordCount < 300) issues.push({ type: 'warning', category: 'Quality', message: 'Content is too short for SEO authority (<300 words).' });
    else issues.push({ type: 'success', category: 'Quality', message: `Rich content depth (${wordCount} words).` });

    if (!blog.image_url) issues.push({ type: 'warning', category: 'Media', message: 'Visual Gap: No featured image assigned.' });

    return issues;
};

// --- Sub-Components ---
const MetricCard = ({ title, value, icon: Icon, color, isDark }: any) => (
    <div className={`${isDark ? 'bg-[#0A2B23] border-white/5' : 'bg-white border-gray-100 shadow-sm'} p-6 rounded-[2rem] border transition-all hover:border-[#C5A059]/30 group`}>
        <div className="flex justify-between items-center">
            <div>
                <p className="text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
                <p className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
            </div>
            <div className={`p-4 rounded-2xl ${color} bg-opacity-10 ${color.replace('bg-', 'text-')}`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
    </div>
);

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [activeTab, setActiveTab] = useState<'blogs' | 'media' | 'settings'>('blogs');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [notification, setNotification] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showImport, setShowImport] = useState(false);
    const [importTopic, setImportTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const savedMode = localStorage.getItem('adminTheme');
        const mode = savedMode === 'light' ? false : true;
        setIsDarkMode(mode);
        if (mode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        const token = localStorage.getItem('adminToken');
        if (!token) router.push('/admin/login');
        else fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await api.get('/blogs');
            setBlogs(data.items || (Array.isArray(data) ? data : []));
        } catch (err) { console.error('Data fetch error', err); }
        finally { setLoading(false); }
    };

    const showToast = (message: string, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const togglePublish = async (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
        try {
            await api.patch(`/blogs/${id}`, { status: newStatus });
            showToast(newStatus === 'PUBLISHED' ? 'LIVE ON WEB' : 'MOVED TO DRAFT');
            fetchData();
        } catch (err) { showToast('Action failed', 'error'); }
    };

    const deleteBlog = async (id: number) => {
        if (!confirm('DELETE PERMANENTLY?')) return;
        try {
            await api.delete(`/blogs/${id}`);
            showToast('PURGED FROM SYSTEM');
            fetchData();
        } catch (err) { showToast('Delete failed', 'error'); }
    };

    const saveContent = async () => {
        if (!editingBlog) return;
        try {
            const payload = { ...editingBlog, status: editingBlog.id ? editingBlog.status : 'DRAFT' };
            if (editingBlog.id) await api.patch(`/blogs/${editingBlog.id}`, payload);
            else await api.post('/blogs', payload);
            showToast('DATA SYNCED');
            setEditingBlog(null);
            fetchData();
        } catch (err: any) { showToast(err.message || 'Sync failed', 'error'); }
    };

    const handleAIImport = async () => {
        if (!importTopic) return;
        setIsGenerating(true);
        try {
            const generated = await gemini.generateBlogPost(importTopic);
            if (generated) {
                const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(generated.image_alt_text)}?width=800&height=450&nologo=true`;
                await api.post('/blogs', { ...generated, image_url: imageUrl, status: 'DRAFT' });
                showToast('AI DRAFT GENERATED');
                fetchData();
                setShowImport(false);
                setImportTopic('');
            }
        } catch (err) { showToast('AI failure', 'error'); }
        finally { setIsGenerating(false); }
    };

    const filteredBlogs = blogs.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterStatus === 'all' || (filterStatus === 'published' ? b.status === 'PUBLISHED' : b.status === 'DRAFT'))
    );

    const renderBlogList = () => (
        <div className="space-y-6 animate-in">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10">
                <div className="flex gap-2 bg-black/20 p-1.5 rounded-2xl border border-white/5">
                    {['all', 'published', 'draft'].map(s => (
                        <button
                            key={s}
                            onClick={() => setFilterStatus(s)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filterStatus === s ? 'bg-[#C5A059] text-[#041612]' : 'text-gray-500 hover:text-white'}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="flex gap-4 w-full lg:w-auto">
                    <div className="relative flex-1 lg:flex-none">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input
                            placeholder="SEARCH ARTICLES..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full lg:w-80 pl-12 pr-6 py-4 bg-[#0A2B23] border border-white/5 rounded-2xl text-[11px] font-bold outline-none focus:border-[#C5A059]/50 transition-all uppercase tracking-widest"
                        />
                    </div>
                    <button onClick={() => setEditingBlog({ id: 0, title: '', content: '', slug: '', status: 'DRAFT' })} className="bg-[#C5A059] text-[#041612] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                        + New
                    </button>
                    <button onClick={() => setShowImport(true)} className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                        ✨ AI
                    </button>
                </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/5 bg-[#0A2B23] overflow-hidden">
                <table className="w-full text-left">
                    <thead className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5 bg-black/20">
                        <tr>
                            <th className="px-10 py-6">Identity & Health</th>
                            <th className="px-10 py-6">State</th>
                            <th className="px-10 py-6 text-right">Settings</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filteredBlogs.map(b => {
                            const audit = runIntegrityAudit(b, blogs);
                            const errors = audit.filter(a => a.type === 'error').length;
                            const warnings = audit.filter(a => a.type === 'warning').length;

                            return (
                                <tr key={b.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-10 py-8">
                                        <div className="flex items-start gap-5">
                                            <div className="mt-1 flex flex-col items-center gap-1">
                                                {errors > 0 ? <ShieldAlert className="w-5 h-5 text-red-500" /> : <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                                <span className={`text-[8px] font-black ${errors > 0 ? 'text-red-500' : 'text-emerald-500'}`}>{errors > 0 ? 'FAIL' : 'PASS'}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-white group-hover:text-[#C5A059] transition-colors mb-2">{b.title || 'UNNAMED ARTICLE'}</p>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">ID: {b.slug || 'no-slug'}</span>
                                                    <div className="flex gap-2">
                                                        {errors > 0 && <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[8px] font-black border border-red-500/20">{errors} ERRORS</span>}
                                                        {warnings > 0 && <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[8px] font-black border border-amber-500/20">{warnings} WARNINGS</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${b.status === 'PUBLISHED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-amber-500/10 border-amber-500/20 text-amber-500'}`}>
                                                {b.status}
                                            </span>
                                            {b.status === 'DRAFT' && (
                                                <button
                                                    onClick={() => togglePublish(b.id, b.status)}
                                                    className="flex items-center gap-2 px-4 py-1.5 bg-[#4CAF50] text-black rounded-full text-[8px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
                                                >
                                                    <Globe className="w-3 h-3" /> Publish Now
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex justify-end gap-3 transition-all">
                                            <button
                                                onClick={() => window.open(`/blogs/${b.slug}`, '_blank')}
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-[#C5A059] hover:bg-[#C5A059] hover:text-[#041612] transition-all border border-[#C5A059]/20"
                                            >
                                                <Eye className="w-4 h-4" /> Preview
                                            </button>
                                            <button onClick={() => setEditingBlog(b)} className="p-3 bg-white/5 rounded-xl text-gray-500 hover:text-[#C5A059] transition-colors"><Edit3 className="w-4 h-4" /></button>
                                            <button onClick={() => deleteBlog(b.id)} className="p-3 bg-white/5 rounded-xl text-gray-500 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#041612] text-white' : 'bg-[#F8FAFC] text-slate-900'} font-sans`}>
            {/* Minimal Sidebar */}
            <aside className="w-72 border-r border-white/5 hidden lg:flex flex-col p-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-10 h-10 rounded-2xl bg-[#C5A059] flex items-center justify-center"><Activity className="w-5 h-5 text-[#041612]" /></div>
                    <span className="font-black text-xs uppercase tracking-[0.3em]">H-WAY <span className="text-[#C5A059]">CTRL</span></span>
                </div>
                <nav className="flex-1 space-y-3">
                    {[
                        { id: 'blogs', label: 'Dashboard', icon: LayoutDashboard },
                        { id: 'media', label: 'Media Hub', icon: ImageIcon },
                        { id: 'settings', label: 'System', icon: Settings },
                    ].map(item => (
                        <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === item.id ? 'bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                            <item.icon className="w-4 h-4" /> {item.label}
                        </button>
                    ))}
                </nav>
                <div className="pt-10 border-t border-white/5 space-y-4">
                    <button onClick={() => { localStorage.clear(); router.push('/admin/login'); }} className="flex items-center gap-4 px-6 text-red-500/50 hover:text-red-500 text-[10px] font-black uppercase tracking-[0.2em] transition-all"><LogOut className="w-4 h-4" /> Sign Out</button>
                </div>
            </aside>

            <main className="flex-1 h-screen overflow-y-auto p-10 lg:p-20">
                <header className="flex justify-between items-start mb-16">
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tight">Main <span className="text-[#C5A059]">Console</span></h2>
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-[10px] font-bold text-[#C5A059] border border-[#C5A059]/30 px-3 py-1 rounded-full uppercase tracking-widest">Global Integrity Node</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Status: SYNCED</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <MetricCard title="System Load" value={blogs.length} icon={List} color="bg-blue-500" isDark={isDarkMode} />
                    <MetricCard title="Live Assets" value={blogs.filter(b => b.status === 'PUBLISHED').length} icon={Globe} color="bg-emerald-500" isDark={isDarkMode} />
                    <MetricCard title="Audit Issues" value={blogs.reduce((acc, b) => acc + runIntegrityAudit(b, blogs).filter(a => a.type === 'error').length, 0)} icon={ShieldAlert} color="bg-red-500" isDark={isDarkMode} />
                </div>

                {activeTab === 'blogs' ? renderBlogList() : <div className="py-40 text-center uppercase tracking-widest text-[9px] font-black opacity-20">Module Initializing...</div>}
            </main>

            {/* --- Advanced Content Editor Overlay --- */}
            {editingBlog && (
                <div className="fixed inset-0 z-[200] bg-[#041612] flex flex-col p-6 animate-in">
                    <header className="h-24 flex justify-between items-center bg-[#0A2B23] px-12 rounded-t-[3rem] border border-white/5">
                        <div className="flex items-center gap-8">
                            <button onClick={() => setEditingBlog(null)} className="text-gray-500 hover:text-white transition-colors">✕</button>
                            <div className="h-6 w-[1px] bg-white/10"></div>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em]">{editingBlog.id ? 'R-Refining Asset' : 'New Staging Asset'}</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            {editingBlog.slug && (
                                <button
                                    onClick={() => window.open(`/blogs/${editingBlog.slug}`, '_blank')}
                                    className="px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
                                >
                                    <Eye className="w-4 h-4 text-[#C5A059]" /> Live Preview
                                </button>
                            )}
                            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                <span className="text-[8px] font-black text-emerald-500 uppercase">Auto-Sync Active</span>
                            </div>
                            {editingBlog.status === 'DRAFT' && (
                                <button
                                    onClick={async () => {
                                        const updated = { ...editingBlog, status: 'PUBLISHED' };
                                        setEditingBlog(updated as any);
                                        await api.patch(`/blogs/${editingBlog.id}`, { status: 'PUBLISHED' });
                                        showToast('ARTICLE PUBLISHED LIVE');
                                        fetchData();
                                    }}
                                    className="px-8 py-4 bg-[#4CAF50] text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2"
                                >
                                    <Globe className="w-4 h-4" /> Publish Now
                                </button>
                            )}
                            <button onClick={saveContent} className="px-10 py-4 bg-[#C5A059] text-[#041612] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Save & Sync</button>
                        </div>
                    </header>

                    <div className="flex-1 bg-[#0A2B23] border-x border-b border-white/5 rounded-b-[3rem] flex overflow-hidden">
                        {/* Editor Area */}
                        <div className="flex-1 overflow-y-auto p-16 lg:p-24 scrollbar-none border-r border-white/5">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <textarea
                                    value={editingBlog.title}
                                    onChange={e => setEditingBlog({ ...editingBlog, title: e.target.value })}
                                    className="w-full bg-transparent text-5xl font-black outline-none placeholder:text-white/5 tracking-tight resize-none border-none focus:ring-0 leading-tight"
                                    placeholder="HEADLINE..."
                                    rows={2}
                                />
                                <div className="prose-editor dark-editor">
                                    <ReactQuill value={editingBlog.content || ''} onChange={val => setEditingBlog({ ...editingBlog, content: val })} theme="snow" />
                                </div>
                            </div>
                        </div>

                        {/* Audit & Settings Sidebar */}
                        <aside className="w-[450px] overflow-y-auto p-12 bg-black/20 scrollbar-none space-y-12">
                            {/* Integrity Audit Console */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <ShieldAlert className="w-5 h-5 text-[#C5A059]" />
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059]">Integrity Audit</h4>
                                </div>
                                <div className="space-y-4">
                                    {runIntegrityAudit(editingBlog, blogs).map((issue, idx) => (
                                        <div key={idx} className={`p-4 rounded-2xl border flex items-start gap-4 transition-all ${issue.type === 'error' ? 'bg-red-500/5 border-red-500/20' : issue.type === 'warning' ? 'bg-amber-500/5 border-amber-500/20' : 'bg-emerald-500/5 border-emerald-500/20'}`}>
                                            {issue.type === 'error' ? <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> : issue.type === 'warning' ? <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> : <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
                                            <div>
                                                <p className={`text-[8px] font-black uppercase mb-1 ${issue.type === 'error' ? 'text-red-500' : issue.type === 'warning' ? 'text-amber-500' : 'text-emerald-500'}`}>{issue.category}</p>
                                                <p className="text-[10px] font-medium text-white/60 leading-relaxed">{issue.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SEO Configuration */}
                            <div className="pt-10 border-t border-white/5 space-y-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Asset Parameters</h4>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-600 ml-1">URL Identifier (Slug)</label>
                                        <div className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-2xl px-5 py-4 focus-within:border-[#C5A059]/40 transition-all">
                                            <span className="text-[10px] font-bold text-gray-600">/blogs/</span>
                                            <input value={editingBlog.slug || ''} onChange={e => setEditingBlog({ ...editingBlog, slug: e.target.value })} className="bg-transparent outline-none font-bold text-[11px] w-full text-white" placeholder="unique-slug" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-600 ml-1">Meta Blueprint (Description)</label>
                                        <textarea value={editingBlog.meta_description || ''} onChange={e => setEditingBlog({ ...editingBlog, meta_description: e.target.value })} className="w-full p-5 rounded-2xl bg-black/40 border border-white/5 outline-none font-medium text-[11px] text-white/70 leading-relaxed h-32 resize-none focus:border-[#C5A059]/40" placeholder="Summarize for Google..." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-600 ml-1">Featured Visual URL</label>
                                        <div className="relative group">
                                            <ImageIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                            <input value={editingBlog.image_url || ''} onChange={e => setEditingBlog({ ...editingBlog, image_url: e.target.value })} className="w-full pl-14 pr-6 py-4 bg-black/40 border border-white/5 rounded-2xl outline-none font-bold text-[11px] text-white focus:border-[#C5A059]/40" placeholder="https://..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            )}

            {/* AI Modal */}
            {showImport && (
                <div className="fixed inset-0 bg-black/95 z-[300] flex items-center justify-center p-6 animate-in">
                    <div className="w-full max-w-lg bg-[#0A2B23] rounded-[3rem] p-12 text-center border border-white/10 shadow-2xl">
                        <div className="w-20 h-20 bg-[#C5A059]/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-[#C5A059]/20"><Zap className="w-8 h-8 text-[#C5A059]" /></div>
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-3">AI Synthesis</h2>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-12">Target high-authority draft creation</p>
                        <input value={importTopic} onChange={e => setImportTopic(e.target.value)} className="w-full p-6 bg-black/40 border border-white/5 rounded-2xl outline-none text-center font-black text-xs text-[#C5A059] uppercase tracking-widest mb-6 focus:border-[#C5A059]/40" placeholder="ENTER CORE TOPIC..." />
                        <div className="flex gap-4">
                            <button onClick={handleAIImport} disabled={isGenerating || !importTopic} className="flex-1 py-5 bg-[#C5A059] text-[#041612] rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all disabled:opacity-50">{isGenerating ? 'Synthesizing...' : 'Prime & Generate'}</button>
                            <button onClick={() => setShowImport(false)} className="px-10 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest">Abort</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {notification && (
                <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[400] px-10 py-5 bg-[#C5A059] text-[#041612] rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 animate-in shadow-2xl">
                    <CheckCircle className="w-5 h-5" /> {notification.message}
                </div>
            )}

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
                * { font-family: 'Outfit', sans-serif; }
                .scrollbar-none::-webkit-scrollbar { display: none; }
                .prose-editor .ql-container { min-height: 500px; border: none !important; color: white !important; font-size: 1.1rem; line-height: 2; }
                .prose-editor .ql-editor { padding: 4rem 0 !important; }
                .prose-editor .ql-toolbar { border: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; position: sticky; top: 0; background: #0A2B23; z-index: 50; padding: 1.5rem 0 !important; }
                .dark-editor .ql-stroke { stroke: rgba(255,255,255,0.4) !important; }
                .dark-editor .ql-fill { fill: rgba(255,255,255,0.4) !important; }
                .animate-in { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
                @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
            `}</style>
        </div>
    );
}
