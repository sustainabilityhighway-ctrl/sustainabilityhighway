"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '../services/api';
import dynamic from 'next/dynamic';
import {
    LayoutDashboard, FileText, Settings, LogOut, Plus, Search, Bell,
    ChevronRight, MoreVertical, Eye, Edit3, Trash2, Image as ImageIcon,
    BarChart3, Users, Menu, X, CheckCircle, AlertCircle, UploadCloud,
    ShieldCheck, TrendingUp, Clock, ArrowUpRight, Share2, MessageSquare,
    Sun, Moon, Tags, FolderTree, Globe, Type, ExternalLink, Filter,
    FileSearch, Activity, FileCheck2, Network, AlertTriangle, CheckSquare,
    Terminal, Zap, FileWarning, ShieldAlert, Leaf
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
    views?: number;
    category?: Category;
    tags?: Tag[];
    excerpt?: string;
    status: 'DRAFT' | 'PUBLISHED';
    author?: { name: string };
}

interface Category { id: number; name: string; slug: string; blogCount?: number; }
interface Tag { id: number; name: string; slug: string; blogCount?: number; }
interface MediaItem { id: number; url: string; name: string; size: string; type: string; created_at: string; }
interface FAQ { question: string; answer: string; }
interface Subscriber { id: number; email: string; created_at: string; status: 'active' | 'unsubscribed'; }

// --- Components ---
const StatCard = ({ title, value, icon: Icon, trend, color, isDark }: any) => (
    <div className={`${isDark ? 'bg-primary-light border-white/5' : 'bg-white border-gray-100'} p-7 rounded-[2.5rem] border shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-5 group-hover:scale-110 transition-transform ${color}`}></div>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-4 rounded-2xl bg-opacity-10 ${color.replace('bg-', 'text-')} bg-current`}>
                <Icon className="w-6 h-6" />
            </div>
            {trend && <div className="text-green-600 font-bold text-xs bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full">{trend}</div>}
        </div>
        <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">{title}</p>
        <h3 className={`text-3xl font-black ${isDark ? 'text-white' : 'text-primary'} tracking-tight`}>{value}</h3>
    </div>
);

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [activeTab, setActiveTab] = useState<'dashboard' | 'blogs' | 'seo-analyzer' | 'duplicate-checker' | 'schema-manager' | 'internal-linking' | 'media' | 'settings'>('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notification, setNotification] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showImport, setShowImport] = useState(false);
    const [importTopic, setImportTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const router = useRouter();

    // --- Initialization ---
    useEffect(() => {
        const savedMode = localStorage.getItem('adminTheme');
        const mode = savedMode === 'dark' ? true : false;
        setIsDarkMode(mode);
        if (mode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
        } else {
            fetchData();
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('adminTheme', newMode ? 'dark' : 'light');
        if (newMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await api.get('/blogs');
            // Backend returns { items: Blog[], meta: { ... } }
            setBlogs(data.items || (Array.isArray(data) ? data : []));

            // Mock Data for other modules until backend is ready
            setCategories([
                { id: 1, name: 'Sustainability', slug: 'sustainability', blogCount: 12 },
                { id: 2, name: 'Renewable Energy', slug: 'renewable-energy', blogCount: 8 },
                { id: 3, name: 'Green Building', slug: 'green-building', blogCount: 15 },
            ]);
            setTags([
                { id: 1, name: 'LEED', slug: 'leed', blogCount: 10 },
                { id: 2, name: 'Mostadam', slug: 'mostadam', blogCount: 5 },
                { id: 3, name: 'Vision 2030', slug: 'vision-2030', blogCount: 20 },
            ]);
            setMediaItems([
                { id: 1, name: 'hero-banner.jpg', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e', size: '1.2MB', type: 'image/jpeg', created_at: '2023-10-10' },
                { id: 2, name: 'green-city.png', url: 'https://images.unsplash.com/photo-1449156001935-d2863fb72690', size: '800KB', type: 'image/png', created_at: '2023-10-12' },
            ]);
            setSubscribers([
                { id: 1, email: 'riyadh.pro@vision2030.sa', created_at: '2023-10-01', status: 'active' },
                { id: 2, email: 'fatima.sustain@gmail.com', created_at: '2023-10-05', status: 'active' }
            ]);
        } catch (err) {
            console.error('Failed to fetch data', err);
        } finally {
            setLoading(false);
        }
    };

    // --- Actions ---
    const showToast = (message: string, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const togglePublish = async (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
        try {
            await api.patch(`/blogs/${id}`, { status: newStatus });
            showToast(newStatus === 'PUBLISHED' ? 'Published' : 'Drafted');
            fetchData();
        } catch (err) {
            showToast('Update failed', 'error');
        }
    };

    const deleteBlog = async (id: number) => {
        if (!confirm('Delete this article?')) return;
        try {
            await api.delete(`/blogs/${id}`);
            showToast('Deleted');
            fetchData();
        } catch (err) {
            showToast('Delete failed', 'error');
        }
    };

    const openEditor = (blog: Blog) => {
        setEditingBlog(blog);
        let parsedFaqs: FAQ[] = [];
        try {
            if (typeof blog.faq_data === 'string') {
                parsedFaqs = JSON.parse(blog.faq_data);
            } else if (Array.isArray(blog.faq_data)) {
                parsedFaqs = blog.faq_data;
            }
        } catch (e) {
            console.error("Failed to parse FAQ data", e);
        }
        setFaqs(parsedFaqs);
    };

    const saveContent = async () => {
        if (!editingBlog) return;
        try {
            const payload = {
                ...editingBlog,
                faq_data: JSON.stringify(faqs)
            };
            if (editingBlog.id) {
                await api.patch(`/blogs/${editingBlog.id}`, payload);
            } else {
                await api.post('/blogs', payload);
            }
            showToast('Saved Successfully');
            setEditingBlog(null);
            fetchData();
        } catch (err: any) {
            showToast(err.message || 'Save failed', 'error');
        }
    };

    const handlePreview = () => {
        if (editingBlog?.slug) {
            window.open(`/blogs/${editingBlog.slug}`, '_blank');
        } else {
            showToast('Please set a slug to preview', 'error');
        }
    };

    const handleAIImport = async () => {
        if (!importTopic) return;
        setIsGenerating(true);
        try {
            const generated = await gemini.generateBlogPost(importTopic);
            if (generated) {
                const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(generated.image_alt_text)}?width=800&height=450&nologo=true`;
                await api.post('/blogs', { ...generated, image_url: imageUrl, status: 'DRAFT' });
                showToast('Blog Generated by AI');
                fetchData();
                setShowImport(false);
            }
        } catch (err) {
            showToast('Generation failed', 'error');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin/login');
    };

    const calculateSEOScore = (b: any) => {
        let score = 50;
        if (b.meta_description) score += 20;
        if (b.slug) score += 10;
        const wordCount = b.content?.split(/\s+/).length || 0;
        if (wordCount > 1000) score += 20;
        else if (wordCount > 500) score += 10;
        return Math.min(score, 100);
    };

    const filteredBlogs = blogs.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterStatus === 'all' || (filterStatus === 'published' ? b.status === 'PUBLISHED' : b.status === 'DRAFT'))
    );

    const renderContent = () => {
        const stats = {
            published: blogs.filter(b => b.status === 'PUBLISHED').length,
            drafts: blogs.filter(b => b.status === 'DRAFT').length,
            duplicates: blogs.filter((b, i) => blogs.findIndex(t => t.title === b.title) !== i).length,
            seoIssues: blogs.filter(b => !b.meta_description || !b.slug).length
        };

        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
                        {/* Intelligence Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <StatCard title="Published Nodes" value={stats.published} icon={CheckCircle} color="bg-emerald-500" trend="Active" isDark={isDarkMode} />
                            <StatCard title="Draft Entities" value={stats.drafts} icon={FileText} color="bg-amber-500" trend="Pending" isDark={isDarkMode} />
                            <StatCard title="Integrity Risks" value={stats.duplicates} icon={AlertTriangle} color="bg-red-500" trend="Critical" isDark={isDarkMode} />
                            <StatCard title="SEO Optimization" value={stats.seoIssues} icon={Zap} color="bg-blue-500" trend="Attention" isDark={isDarkMode} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {/* Performance Architecture View */}
                            <div className={`lg:col-span-2 p-12 rounded-[3.5rem] border shadow-2xl relative overflow-hidden group ${isDarkMode ? 'bg-[#08201B] border-white/5' : 'bg-white border-gray-100'}`}>
                                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-[0.03] rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[9px] font-black text-accent uppercase tracking-[0.3em]">Infrastructure Rating</div>
                                        <div className="h-0.5 w-12 bg-white/5"></div>
                                        <span className="text-xs font-black text-white/40 uppercase tracking-widest leading-none">Global Performance Index</span>
                                    </div>
                                    <h3 className="text-5xl font-black mb-6 tracking-tighter max-w-xl leading-[1.1]">Content Architecture <span className="text-accent underline decoration-white/10 underline-offset-8 italic">Optimal</span></h3>
                                    <p className="text-gray-500 mb-12 max-w-lg font-medium text-lg leading-relaxed">System scan complete. Your sustainability platform shows 94% SEO structural integrity across 42 core content nodes.</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setActiveTab('blogs')} className="bg-accent text-primary px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-accent/20 uppercase tracking-[0.2em] text-[10px]">Optimize Article Nodes</button>
                                        <button className={`px-10 py-5 rounded-2xl font-black border transition-all uppercase tracking-[0.2em] text-[10px] ${isDarkMode ? 'border-white/10 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`}>System Log</button>
                                    </div>
                                </div>
                            </div>

                            {/* Critical Integrity Alerts */}
                            <div className={`p-10 rounded-[3.5rem] border shadow-sm ${isDarkMode ? 'bg-[#08201B] border-white/5' : 'bg-white border-gray-100'}`}>
                                <h3 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-white/30 flex items-center justify-between">
                                    Priority Alerts
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { title: 'Duplicate Topic Detected', desc: 'Solar Efficiency in DESERTEC', severity: 'HIGH' },
                                        { title: 'Missing Schema Markup', desc: 'Article: Green Hydrogen', severity: 'MED' },
                                        { title: 'Canonical Mismatch', desc: 'Vision 2030 Housing Strategy', severity: 'LOW' }
                                    ].map((alert, i) => (
                                        <div key={i} className="flex gap-5 group cursor-pointer">
                                            <div className={`w-1 h-12 rounded-full ${alert.severity === 'HIGH' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : alert.severity === 'MED' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                                            <div className="flex-1">
                                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">{alert.title}</p>
                                                <p className="text-sm font-bold text-white/80">{alert.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-12 py-4 rounded-xl border border-white/5 text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:bg-white/5 transition-all">View All Intelligence Reports</button>
                            </div>
                        </div>
                    </div>
                );
            case 'blogs':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
                        {/* Intelligence Header */}
                        <div className="flex flex-col md:flex-row justify-between items-center bg-[#08201B] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                                <ShieldCheck className="w-40 h-40 text-accent" />
                            </div>
                            <div className="relative z-10 space-y-2">
                                <h2 className="text-3xl font-black tracking-tight uppercase">Article Infrastructure</h2>
                                <p className="text-gray-500 font-medium max-w-md">Real-time content integrity monitoring. High-risk articles are flagged for immediate SEO optimization.</p>
                            </div>
                            <div className="relative z-10 flex gap-4 mt-6 md:mt-0">
                                <button onClick={() => openEditor({ id: 0, title: '', content: '', slug: '', status: 'DRAFT' })} className="bg-accent text-primary px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-accent/20 uppercase tracking-widest text-[10px]">
                                    <Plus className="w-5 h-5" /> Initialize Node
                                </button>
                                <button onClick={() => setShowImport(true)} className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]">
                                    ✨ AI Synthesis
                                </button>
                            </div>
                        </div>

                        {/* Node Filters */}
                        <div className="flex justify-between items-center bg-[#08201B]/50 p-3 rounded-[1.5rem] border border-white/5">
                            <div className="flex gap-2">
                                {['all', 'published', 'draft'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setFilterStatus(s)}
                                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filterStatus === s ? 'bg-accent text-primary shadow-lg shadow-accent/20' : 'text-gray-500 hover:text-white'}`}
                                    >
                                        {s} Nodes
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 px-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
                                <Search className="w-4 h-4" />
                                <span className="hidden md:inline">Global Infrastructure Scan</span>
                            </div>
                        </div>

                        {/* Article Intelligence Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map(b => {
                                const wordCount = b.content?.split(/\s+/).length || 0;
                                const hasLowWordCount = wordCount < 800;
                                const seoScore = calculateSEOScore(b);

                                return (
                                    <div key={b.id} className={`rounded-[3rem] overflow-hidden border transition-all duration-700 group relative ${isDarkMode ? 'bg-[#08201B] border-white/5 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 hover:shadow-2xl'}`}>
                                        <div className="h-64 relative overflow-hidden">
                                            <img src={b.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#041612] via-transparent to-transparent opacity-80"></div>

                                            <div className="absolute top-6 left-6 flex gap-2">
                                                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md border ${b.status === 'PUBLISHED' ? 'bg-green-500/30 border-green-500/40' : 'bg-amber-500/30 border-amber-500/40'}`}>
                                                    {b.status}
                                                </span>
                                                {hasLowWordCount && (
                                                    <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md bg-red-500/30 border border-red-500/40 animate-pulse">
                                                        Thin Content
                                                    </span>
                                                )}
                                            </div>

                                            <div className="absolute inset-0 bg-[#041612]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                                                <button onClick={() => openEditor(b)} className="w-16 h-16 bg-white text-[#041612] rounded-3xl flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"><Edit3 className="w-6 h-6" /></button>
                                                <button onClick={() => deleteBlog(b.id)} className="w-16 h-16 bg-red-500 text-white rounded-3xl flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"><Trash2 className="w-6 h-6" /></button>
                                            </div>
                                        </div>

                                        <div className="p-10 space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${seoScore > 90 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">SEO Score: {seoScore}</span>
                                                </div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${hasLowWordCount ? 'text-red-500' : 'text-accent'}`}>{wordCount} Words</span>
                                            </div>

                                            <h3 className="text-xl font-black leading-tight tracking-tight group-hover:text-accent transition-colors block min-h-[3.5rem]">{b.title}</h3>

                                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                                                    <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> {b.slug}</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-1 h-1 rounded-full bg-accent/20"></div>
                                                    <div className="w-1 h-1 rounded-full bg-accent/40"></div>
                                                    <div className="w-1 h-1 rounded-full bg-accent/60"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            case 'media':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
                        <div className="flex justify-between items-center">
                            <h3 className="text-3xl font-black tracking-tight">Media Library</h3>
                            <button className="bg-accent text-primary px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-accent/20 uppercase tracking-widest text-[10px]">
                                <UploadCloud className="w-5 h-5" /> Upload Assets
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {mediaItems.map(item => (
                                <div key={item.id} className={`aspect-square rounded-3xl border overflow-hidden group relative ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                                    <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
                                        <button className="p-3 bg-white text-primary rounded-xl"><Eye className="w-4 h-4" /></button>
                                        <button className="p-3 bg-red-400 text-white rounded-xl"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'seo-analyzer':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-3xl font-black tracking-tight uppercase">SEO Health Audit</h3>
                                <p className="text-gray-500 font-medium">Real-time analysis of metadata and content structure.</p>
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent font-black text-[10px] uppercase tracking-widest">
                                Scan Active
                            </div>
                        </div>

                        <div className={`rounded-[3rem] border shadow-2xl overflow-hidden ${isDarkMode ? 'bg-[#08201B] border-white/5' : 'bg-white border-gray-100'}`}>
                            <table className="w-full text-left">
                                <thead className="bg-[#041612]/50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    <tr>
                                        <th className="px-10 py-6">Article Node</th>
                                        <th className="px-10 py-6">Meta Status</th>
                                        <th className="px-10 py-6">Length Audit</th>
                                        <th className="px-10 py-6">SEO Score</th>
                                        <th className="px-10 py-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {blogs.map(b => {
                                        const wordCount = b.content?.split(/\s+/).length || 0;
                                        const score = calculateSEOScore(b);
                                        return (
                                            <tr key={b.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-10 py-8">
                                                    <p className="font-bold text-sm truncate max-w-[250px]">{b.title}</p>
                                                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">/{b.slug}</p>
                                                </td>
                                                <td className="px-10 py-8">
                                                    {b.meta_description ?
                                                        <span className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase"><CheckCircle className="w-3 h-3" /> Optimized</span> :
                                                        <span className="flex items-center gap-2 text-red-400 text-[10px] font-black uppercase"><AlertCircle className="w-3 h-3" /> Missing</span>
                                                    }
                                                </td>
                                                <td className="px-10 py-8">
                                                    <span className={`text-[10px] font-black uppercase ${wordCount < 500 ? 'text-amber-500' : 'text-gray-400'}`}>
                                                        {wordCount} Words {wordCount < 500 && '(Short)'}
                                                    </span>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-1 h-1.5 w-24 bg-white/5 rounded-full overflow-hidden">
                                                            <div className={`h-full ${score > 90 ? 'bg-emerald-500' : 'bg-accent'}`} style={{ width: `${score}%` }}></div>
                                                        </div>
                                                        <span className="text-[10px] font-black">{score}%</span>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8 text-right">
                                                    <button onClick={() => openEditor(b)} className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-accent hover:bg-accent/10 transition-all">
                                                        <Edit3 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'duplicate-checker':
                const duplicates = blogs.filter((b, index) => blogs.findIndex(t => t.title === b.title || t.slug === b.slug) !== index);
                return (
                    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
                        <div className="bg-red-500/10 border border-red-500/20 p-10 rounded-[3rem] flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center">
                                    <FileWarning className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Cannibalization Risk</h3>
                                    <p className="text-gray-500 font-medium font-sans">Scanning for duplicate Titles and Slugs that may harm your search rankings.</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-4xl font-black text-red-500">{duplicates.length}</p>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Conflicts Found</p>
                            </div>
                        </div>

                        {duplicates.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {duplicates.map(b => (
                                    <div key={b.id} className="p-8 rounded-[2.5rem] border border-white/5 bg-[#08201B] flex items-center justify-between group hover:border-red-500/30 transition-all">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-black text-red-500">!</div>
                                            <div>
                                                <h4 className="font-black text-lg group-hover:text-red-400 transition-colors">{b.title}</h4>
                                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1">Conflicting Slug: /{b.slug}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={() => openEditor(b)} className="px-6 py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10">Resolve Conflict</button>
                                            <button onClick={() => deleteBlog(b.id)} className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-[40vh] border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-40">
                                <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                                <h3 className="text-xl font-black uppercase">Infrastructure Sync'd</h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">No duplicate entities detected in current scan.</p>
                            </div>
                        )}
                    </div>
                );
            case 'schema-manager':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
                        <div className="flex items-center gap-4 bg-accent/10 border border-accent/20 p-8 rounded-[2.5rem]">
                            <Network className="w-10 h-10 text-accent" />
                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tight">Structured Data Controller</h3>
                                <p className="text-xs font-medium text-gray-500">Automated Schema.org injection tracking across your article network.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {blogs.map(b => (
                                <div key={b.id} className="p-8 rounded-[2.5rem] border border-white/5 bg-[#08201B] flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                                    <div className="flex-1">
                                        <h4 className="font-black text-lg group-hover:text-accent transition-colors">{b.title}</h4>
                                        <div className="flex gap-4 mt-4">
                                            <span className="flex items-center gap-2 text-[9px] font-black text-emerald-500 uppercase tracking-widest"><CheckSquare className="w-3 h-3" /> Article Schema</span>
                                            <span className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest ${faqs.length > 0 ? 'text-emerald-500' : 'text-gray-600 opacity-50'}`}><CheckSquare className="w-3 h-3" /> FAQ Schema</span>
                                            <span className="flex items-center gap-2 text-[9px] font-black text-emerald-500 uppercase tracking-widest"><CheckSquare className="w-3 h-3" /> Breadcrumb</span>
                                        </div>
                                    </div>
                                    <button onClick={() => openEditor(b)} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:border-accent/40 transition-all text-gray-400 hover:text-white">Configure JSON-LD</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'internal-linking':
                return (
                    <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-700">
                        <div className="w-24 h-24 rounded-[2rem] bg-accent/10 flex items-center justify-center text-accent">
                            <Zap className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Link Infrastructure</h3>
                            <p className="text-gray-500 font-medium max-w-sm font-sans leading-relaxed">Map your content ecosystem. The internal linking graph is currently indexing your article nodes.</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="p-12 text-center h-[50vh] flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-black mb-2">Module Under Calibration</h3>
                        <p className="text-gray-500 font-medium">This professional control module is being configured for your environment.</p>
                        <button onClick={() => setActiveTab('dashboard')} className="mt-8 text-accent font-black uppercase tracking-[0.2em] text-[10px] bg-accent/10 px-6 py-3 rounded-xl border border-accent/20">Return to Core Overview</button>
                    </div>
                );
        }
    };

    return (
        <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#041612] text-white' : 'bg-[#F8FAFC] text-primary'} font-sans`}>
            {/* --- Premium Sidebar --- */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-80 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-all duration-700 ease-in-out border-r ${isDarkMode ? 'bg-[#08201B] border-white/5 shadow-[20px_0_60px_rgba(0,0,0,0.4)]' : 'bg-white border-gray-100 shadow-xl'}`}>
                <div className="flex flex-col h-full">
                    {/* Brand Header */}
                    <div className="p-10 pb-6">
                        <div className="flex items-center gap-5 mb-12 group cursor-pointer" onClick={() => setActiveTab('dashboard')}>
                            <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent/30 group-hover:rotate-6 transition-all duration-500">
                                <Leaf className="w-7 h-7 text-[#041612]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm font-black tracking-[0.3em] uppercase font-montserrat leading-none">Sustainability</h1>
                                <p className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mt-1.5 opacity-80">Highway</p>
                            </div>
                        </div>

                        <nav className="space-y-2.5">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.35em] mb-5 ml-4 opacity-50">Operational Core</p>
                            {[
                                { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
                                { id: 'blogs', label: 'Article Control', icon: FileText },
                                { id: 'media', label: 'Media Library', icon: ImageIcon },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id as any)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] font-black text-[12px] transition-all duration-500 relative group overflow-hidden ${activeTab === item.id ? (isDarkMode ? 'bg-white/5 text-accent shadow-inner' : 'bg-accent/10 text-accent') : (isDarkMode ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-primary hover:bg-gray-50')}`}
                                >
                                    {activeTab === item.id && <div className="absolute left-0 w-1.5 h-6 bg-accent rounded-full -ml-0.5 shadow-[0_0_20px_rgba(197,160,89,0.8)]"></div>}
                                    <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-accent' : 'group-hover:scale-110 transition-transform duration-500'}`} />
                                    <span className="tracking-widest uppercase">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Intelligence Section */}
                    <div className="p-10 pt-4 flex-1">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.35em] mb-5 ml-4 opacity-50">Content Intelligence</p>
                        <nav className="space-y-2.5">
                            {[
                                { id: 'seo-analyzer', label: 'SEO Analyzer', icon: Activity },
                                { id: 'duplicate-checker', label: 'Duplicate Check', icon: FileSearch },
                                { id: 'schema-manager', label: 'Schema Control', icon: FileCheck2 },
                                { id: 'internal-linking', label: 'Link Structure', icon: Network },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id as any)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] font-black text-[12px] transition-all duration-500 relative group overflow-hidden ${activeTab === item.id ? (isDarkMode ? 'bg-white/5 text-accent shadow-inner' : 'bg-accent/10 text-accent') : (isDarkMode ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-primary hover:bg-gray-50')}`}
                                >
                                    {activeTab === item.id && <div className="absolute left-0 w-1.5 h-6 bg-accent rounded-full -ml-0.5 shadow-[0_0_20px_rgba(197,160,89,0.8)]"></div>}
                                    <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-accent' : 'group-hover:scale-110 transition-transform duration-500'}`} />
                                    <span className="tracking-widest uppercase">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-10 border-t border-white/5">
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] font-black text-[12px] transition-all mb-4 ${activeTab === 'settings' ? 'text-accent bg-white/5' : 'text-gray-500 hover:text-white'}`}
                        >
                            <Settings className="w-5 h-5" />
                            <span className="uppercase tracking-[0.2em]">System Preferences</span>
                        </button>
                        <button
                            onClick={() => { localStorage.clear(); router.push('/admin/login'); }}
                            className="w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] font-black text-[12px] text-red-500/50 hover:text-red-500 hover:bg-red-500/5 transition-all group shadow-sm hover:shadow-red-500/10"
                        >
                            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="uppercase tracking-[0.2em]">Terminate Session</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* --- Main Viewport --- */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Modern Header */}
                <header className={`h-24 px-10 lg:px-16 flex items-center justify-between border-b ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100 shadow-sm'} sticky top-0 z-40 transition-all duration-500`}>
                    <div className="flex items-center gap-10">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden p-4 rounded-2xl bg-accent/10 text-accent transition-transform hover:scale-110 active:scale-95">
                            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <div className="hidden sm:flex items-center gap-5 p-3 px-6 rounded-[1.5rem] border border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl">
                            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-gray-500 uppercase leading-none mb-1.5 tracking-widest">Website Integrity Health</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-black text-white leading-none">94.2%</span>
                                    <span className="text-green-500 text-[9px] font-black bg-green-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest border border-green-500/20">Optimal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-4 px-5 py-3 rounded-[1.5rem] bg-white/5 border border-white/5 shadow-inner">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-primary font-black text-xs shadow-lg shadow-accent/20">AD</div>
                            <div className="text-left">
                                <p className="text-xs font-black uppercase text-white leading-none mb-1.5 tracking-tight">Main Administrator</p>
                                <p className="text-[9px] font-black text-accent uppercase tracking-[0.2em] opacity-60 leading-none">Security Override Level 5</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={toggleTheme} className={`p-4 rounded-2xl transition-all shadow-sm ${isDarkMode ? 'bg-white/5 text-accent hover:bg-accent hover:text-primary' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                            <button className="hidden sm:flex flex-col items-center justify-center h-14 w-14 rounded-2xl bg-white/5 border border-white/5 relative hover:bg-white/10 transition-all shadow-lg group">
                                <Bell className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:animate-bounce" />
                                <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full border-[3px] border-[#041612]"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- Content Area --- */}
                <div className="flex-1 overflow-y-auto p-10 lg:p-16 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
                    {renderContent()}
                </div>
            </main>

            {/* --- AI Import Modal --- */}
            {showImport && (
                <div className="fixed inset-0 bg-[#041612]/90 backdrop-blur-2xl z-[100] flex items-center justify-center p-4 animate-in fade-in duration-500">
                    <div className={`${isDarkMode ? 'bg-[#08201B] border-white/10' : 'bg-white border-gray-100'} rounded-[3rem] p-12 lg:p-16 max-w-2xl w-full shadow-[0_0_100px_rgba(197,160,89,0.15)] relative overflow-hidden border`}>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mb-8">
                                <Activity className="w-10 h-10 text-accent animate-pulse" />
                            </div>
                            <h2 className="text-3xl font-black mb-4 tracking-tight uppercase">Intelligence Synthesis</h2>
                            <p className="text-gray-500 mb-10 font-medium">Harness AI to generate SEO-optimized content based on professional sustainability data-points.</p>

                            <div className="w-full space-y-6">
                                <div className={`p-2 rounded-3xl border transition-all ${isDarkMode ? 'bg-[#041612] border-white/5 focus-within:border-accent/50' : 'bg-gray-50 border-gray-200 focus-within:border-accent'}`}>
                                    <input value={importTopic} onChange={e => setImportTopic(e.target.value)} placeholder="Topic e.g. 'Green Hydrogen Economics 2026'" className="w-full p-6 bg-transparent outline-none font-bold placeholder-gray-700 text-center" />
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={handleAIImport} disabled={isGenerating || !importTopic} className="flex-1 py-5 bg-accent text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-accent/20 disabled:opacity-50">
                                        {isGenerating ? 'Synthesizing Content...' : 'Launch Intelligence Engine'}
                                    </button>
                                    <button onClick={() => setShowImport(false)} className={`px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isDarkMode ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Content Studio (Full Screen Editor Overlay) --- */}
            {editingBlog && (
                <div className={`fixed inset-0 z-[150] overflow-hidden flex flex-col ${isDarkMode ? 'bg-[#041612]' : 'bg-[#F8FAFC]'} animate-in slide-in-from-bottom-10 duration-700`}>
                    <header className={`h-24 px-10 border-b flex justify-between items-center ${isDarkMode ? 'bg-[#08201B] border-white/5' : 'bg-white border-gray-100'}`}>
                        <div className="flex items-center gap-10">
                            <button onClick={() => setEditingBlog(null)} className="p-4 rounded-2xl bg-white/5 hover:bg-accent hover:text-primary transition-all group">
                                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                            </button>
                            <div className="hidden md:block">
                                <h2 className="text-xl font-black tracking-tight">{editingBlog.id ? 'Optimizing Architecture' : 'Synthesizing New Node'}</h2>
                                <p className="text-[10px] text-accent font-black uppercase tracking-[0.3em] mt-1.5 opacity-80">Intelligence Active</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button onClick={handlePreview} className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all">Preview Analysis</button>
                            <button onClick={saveContent} className="px-10 py-4 bg-accent text-primary rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-accent/30 hover:scale-105 active:scale-95 transition-all">Publish Content</button>
                        </div>
                    </header>

                    <div className="flex-1 flex overflow-hidden">
                        <div className="flex-1 overflow-y-auto p-12 lg:p-20 scrollbar-none">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <textarea value={editingBlog.title || ''} onChange={e => setEditingBlog({ ...editingBlog, title: e.target.value })} className="w-full bg-transparent text-6xl font-black outline-none placeholder:text-gray-900 leading-tight tracking-tighter resize-none h-auto" placeholder="Insightful Headline..." rows={2} />
                                <div className={`prose-editor ${isDarkMode ? 'dark-editor' : ''}`}>
                                    <ReactQuill value={editingBlog.content || ''} onChange={val => setEditingBlog({ ...editingBlog, content: val })} theme="snow" />
                                </div>
                            </div>
                        </div>

                        <aside className={`w-[450px] border-l p-12 overflow-y-auto hidden xl:block ${isDarkMode ? 'bg-[#08201B] border-white/5' : 'bg-white border-gray-100'} shadow-[-10px_0_30px_rgba(0,0,0,0.2)]`}>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 opacity-60">Node Parameters</h4>
                                    <div className="space-y-6">
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Canonical Slug</label>
                                            <input value={editingBlog.slug || ''} onChange={e => setEditingBlog({ ...editingBlog, slug: e.target.value })} className={`w-full p-4 rounded-xl border outline-none font-bold text-sm ${isDarkMode ? 'bg-[#041612] border-white/5 focus:border-accent/40' : 'bg-gray-50'}`} />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Meta Description</label>
                                            <textarea value={editingBlog.meta_description || ''} onChange={e => setEditingBlog({ ...editingBlog, meta_description: e.target.value })} className={`w-full p-5 rounded-xl border outline-none font-medium text-sm leading-relaxed h-40 resize-none ${isDarkMode ? 'bg-[#041612] border-white/5 focus:border-accent/40' : 'bg-gray-50'}`} placeholder="SEO Optimization Data..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-accent/5 border border-accent/10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Network className="w-5 h-5 text-accent" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Suggested Content Links</h4>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { title: 'The Future of NEOM Energy', slug: 'neom-energy' },
                                            { title: 'Vision 2030 Sustainability Goals', slug: 'vision-2030' },
                                        ].map((link, i) => (
                                            <div key={link.slug} className="flex items-center justify-between p-4 rounded-xl bg-[#041612]/40 border border-white/5 group hover:border-accent/30 transition-all cursor-pointer">
                                                <span className="text-[11px] font-bold text-white/60 group-hover:text-white truncate">{link.title}</span>
                                                <Plus className="w-3 h-3 text-accent" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest text-center">AI generated link suggestions</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            )}

            {/* --- Global Styles & Interactions --- */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Outfit:wght@400;500;700;900&display=swap');
                
                :root {
                    --accent: #C5A059;
                    --accent-hover: #D4B475;
                }

                * { font-family: 'Outfit', sans-serif; }

                .scrollbar-none::-webkit-scrollbar { display: none; }
                
                .prose-editor .ql-container { min-height: 700px; font-size: 1.15rem; border: none !important; color: inherit; line-height: 1.8; }
                .prose-editor .ql-editor { padding: 5rem 0 !important; }
                .prose-editor .ql-toolbar { border: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; position: sticky; top: 0; background: inherit; z-index: 10; padding: 2rem 0 !important; backdrop-filter: blur(10px); }
                .dark-editor .ql-toolbar .ql-stroke { stroke: rgba(255,255,255,0.6) !important; }
                .dark-editor .ql-toolbar .ql-fill { fill: rgba(255,255,255,0.6) !important; }
                .dark-editor .ql-editor.ql-blank::before { color: rgba(255,255,255,0.1) !important; font-style: normal; }
                
                .animate-in { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                ::selection { background: var(--accent); color: #041612; }
            `}</style>
        </div>
    );
}
