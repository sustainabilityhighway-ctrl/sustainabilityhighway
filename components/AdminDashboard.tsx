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
    Sun, Moon, Tags, FolderTree, Globe, Type, ExternalLink, Filter
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
    faq_data?: any[];
    created_at?: string;
    views?: number;
    category?: Category;
    tags?: Tag[];
    excerpt?: string;
    status: 'DRAFT' | 'PUBLISHED';
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
    const [activeTab, setActiveTab] = useState<'dashboard' | 'blogs' | 'categories' | 'tags' | 'media' | 'subscribers'>('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
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
        const mode = savedMode === 'light' ? false : true;
        setIsDarkMode(mode);
        if (!mode) document.documentElement.classList.remove('dark');
        else document.documentElement.classList.add('dark');

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
            // Assuming the backend returns { data: Blog[], total: number, ... }
            setBlogs(data.data || data);

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
        setFaqs(blog.faq_data || []);
    };

    const saveContent = async () => {
        if (!editingBlog) return;
        try {
            const payload = { ...editingBlog, faq_data: faqs };
            if (editingBlog.id) {
                await api.patch(`/blogs/${editingBlog.id}`, payload);
            } else {
                await api.post('/blogs', payload);
            }
            showToast('Saved Successfully');
            setEditingBlog(null);
            fetchData();
        } catch (err) {
            showToast('Save failed', 'error');
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

    const filteredBlogs = blogs.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterStatus === 'all' || (filterStatus === 'published' ? b.status === 'PUBLISHED' : b.status === 'DRAFT'))
    );

    return (
        <div className={`min-h-screen font-sans flex transition-colors duration-300 ${isDarkMode ? 'bg-primary text-white' : 'bg-[#F8FAFC] text-primary'}`}>

            {/* --- Sidebar --- */}
            <aside className={`w-80 ${isDarkMode ? 'bg-navy border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 shadow-xl'} fixed h-full z-40 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 rounded-r-[3rem] p-8 flex flex-col justify-between`}>
                <div>
                    <div className="flex items-center gap-3 mb-12 px-2">
                        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                            <ShieldCheck className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-primary'}`}>Sustain<span className="text-accent">Hub</span></h2>
                            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Admin Control</p>
                        </div>
                    </div>

                    <nav className="space-y-1.5">
                        {[
                            { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
                            { id: 'blogs', icon: FileText, label: 'Articles' },
                            { id: 'categories', icon: FolderTree, label: 'Categories' },
                            { id: 'tags', icon: Tags, label: 'Tags' },
                            { id: 'media', icon: ImageIcon, label: 'Media Assets' },
                            { id: 'subscribers', icon: Users, label: 'Community' }
                        ].map(t => (
                            <button
                                key={t.id}
                                onClick={() => setActiveTab(t.id as any)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${activeTab === t.id
                                    ? 'bg-accent text-primary shadow-lg shadow-accent/20 scale-[1.02]'
                                    : 'text-gray-400 hover:bg-accent/10 hover:text-accent'}`}
                            >
                                <t.icon className="w-5 h-5" />
                                <span className="text-sm">{t.label}</span>
                                {activeTab === t.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={toggleTheme}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold border transition-all ${isDarkMode ? 'border-white/10 text-gray-400 hover:text-white hover:bg-white/5' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                    >
                        {isDarkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
                        <span className="text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-4 px-6 py-4 text-red-400 hover:bg-red-400/10 rounded-2xl font-bold transition-all"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="text-sm">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* --- Main Content --- */}
            <main className={`flex-1 md:ml-80 p-6 md:p-12 overflow-y-auto w-full pb-24`}>

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="md:hidden p-3 bg-white dark:bg-primary-light rounded-xl shadow-sm border dark:border-white/5"><Menu /></button>
                        <div>
                            <h1 className="text-4xl font-black tracking-tighter capitalize mb-1">{activeTab}</h1>
                            <p className="text-sm text-gray-500 font-medium">Welcome back, Administrator</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border transition-all ${isDarkMode ? 'bg-primary-light border-white/5 focus-within:border-accent/50' : 'bg-white border-gray-100 focus-within:border-accent'}`}>
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search everything..."
                                className="bg-transparent outline-none text-sm font-bold w-64 placeholder:text-gray-600"
                            />
                        </div>
                        <div className="relative group">
                            <button className={`p-4 rounded-2xl border transition-all ${isDarkMode ? 'bg-primary-light border-white/5 hover:bg-white/5' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                                <Bell className="w-5 h-5 text-gray-400" />
                                <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border-2 border-primary"></span>
                            </button>
                        </div>
                        <div className="w-12 h-12 bg-accent rounded-2xl overflow-hidden shadow-lg border-2 border-primary cursor-pointer hover:rotate-6 transition-transform">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </div>
                </header>

                {/* --- Dashboard View --- */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <StatCard title="Total Articles" value={blogs.length} icon={FileText} color="bg-blue-500" trend="+4%" isDark={isDarkMode} />
                            <StatCard title="Total Views" value="48.2K" icon={BarChart3} color="bg-accent" trend="+12%" isDark={isDarkMode} />
                            <StatCard title="Categories" value={categories.length} icon={FolderTree} color="bg-emerald-500" isDark={isDarkMode} />
                            <StatCard title="Subscribers" value={subscribers.length} icon={Users} color="bg-purple-500" trend="Active" isDark={isDarkMode} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className={`lg:col-span-2 p-10 rounded-[3rem] border shadow-2xl relative overflow-hidden group ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                                <TrendingUp className="absolute top-0 right-0 p-10 opacity-5 w-64 h-64 text-accent" />
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black mb-4">Content Performance</h3>
                                    <p className="text-gray-500 mb-10 max-w-sm font-medium">Your sustainability content is reaching 15% more readers this month. Keep it up!</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setActiveTab('blogs')} className="bg-accent text-primary px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-accent/20">Manage Content</button>
                                        <button className={`px-8 py-4 rounded-2xl font-black border transition-all ${isDarkMode ? 'border-white/10 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`}>View Analytics</button>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-8 rounded-[3rem] border shadow-sm ${isDarkMode ? 'bg-primary-light border-white/5' : 'bg-white border-gray-100'}`}>
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-accent" />
                                    Recent Activity
                                </h3>
                                <div className="space-y-6">
                                    {blogs.slice(0, 4).map((b, i) => (
                                        <div key={b.id} className="flex items-center gap-4 group cursor-pointer" onClick={() => openEditor(b)}>
                                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center font-black text-accent text-[10px]">0{i + 1}</div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-sm font-bold truncate group-hover:text-accent transition-colors">{b.title}</p>
                                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{new Date(b.created_at || '').toLocaleDateString()}</p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-gray-700 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Articles View --- */}
                {activeTab === 'blogs' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex gap-4 w-full md:w-auto">
                                <button onClick={() => openEditor({ id: 0, title: '', content: '', slug: '', status: 'DRAFT' })} className="flex-1 md:flex-none bg-accent text-primary px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-accent/20">
                                    <Plus className="w-5 h-5" /> Write Article
                                </button>
                                <button onClick={() => setShowImport(true)} className={`flex-1 md:flex-none px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 border transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-accent hover:text-primary hover:border-accent' : 'bg-white border-gray-200 text-primary hover:bg-gray-50'}`}>
                                    ✨ AI Generator
                                </button>
                            </div>
                            <div className={`flex items-center gap-2 p-1.5 rounded-2xl border ${isDarkMode ? 'bg-primary-light border-white/5' : 'bg-white border-gray-100'}`}>
                                {['all', 'published', 'draft'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setFilterStatus(s)}
                                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${filterStatus === s
                                            ? 'bg-accent text-primary shadow-sm'
                                            : 'text-gray-500 hover:text-gray-300'}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map(b => (
                                <div key={b.id} className={`rounded-[2.5rem] overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-500 group relative ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                                    <div className="h-60 relative overflow-hidden">
                                        <img src={b.image_url || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                        <span className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md ${b.status === 'PUBLISHED' ? 'bg-green-500/50 outline outline-1 outline-green-400' : 'bg-amber-500/50 outline outline-1 outline-amber-400'}`}>
                                            {b.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                                        </span>
                                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                                            <button onClick={() => openEditor(b)} className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Edit3 className="w-6 h-6" /></button>
                                            <button onClick={() => togglePublish(b.id, b.status)} className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Eye className="w-6 h-6" /></button>
                                            <button onClick={() => deleteBlog(b.id)} className="w-14 h-14 bg-red-400 text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Trash2 className="w-6 h-6" /></button>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-[10px] font-black text-accent uppercase tracking-widest">Sustainability</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">5 min read</span>
                                        </div>
                                        <h3 className="text-xl font-black line-clamp-2 mb-6 group-hover:text-accent transition-colors leading-tight">{b.title}</h3>
                                        <div className="flex items-center justify-between pt-6 border-t border-white/5 font-bold text-[11px] text-gray-500 uppercase tracking-wider">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5" />
                                                {new Date(b.created_at || '').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BarChart3 className="w-3.5 h-3.5" />
                                                {(b.views || 0).toLocaleString()} Views
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Categories View --- */}
                {activeTab === 'categories' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex justify-between items-center bg-accent/5 p-8 rounded-[2.5rem] border border-accent/10">
                            <div>
                                <h2 className="text-2xl font-black mb-1">Taxonomy Explorer</h2>
                                <p className="text-sm text-gray-500 font-medium">Categorize your sustainability focus areas</p>
                            </div>
                            <button className="bg-accent text-primary px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-accent/10">
                                <Plus /> New Category
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories.map(c => (
                                <div key={c.id} className={`p-8 rounded-[2.5rem] border group transition-all hover:scale-[1.02] ${isDarkMode ? 'bg-primary-light border-white/5 hover:border-accent/40' : 'bg-white border-gray-100'}`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                                            <FolderTree className="w-7 h-7 text-accent" />
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-accent/10 rounded-lg text-gray-400 hover:text-accent"><Edit3 className="w-4 h-4" /></button>
                                            <button className="p-2 hover:bg-red-400/10 rounded-lg text-gray-400 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black mb-2">{c.name}</h4>
                                    <p className="text-xs font-bold text-gray-500 mb-6 uppercase tracking-widest leading-loose">Slug: {c.slug}</p>
                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <span className="text-sm font-black text-accent">{c.blogCount} Articles</span>
                                        <button className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white flex items-center gap-2">View Content <ChevronRight className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Media Library --- */}
                {activeTab === 'media' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <h2 className="text-2xl font-black self-start md:self-auto">Digital Assets</h2>
                            <button className="w-full md:w-auto bg-white dark:bg-accent dark:text-primary px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 border border-gray-100 dark:border-none shadow-xl">
                                <UploadCloud className="w-6 h-6" /> Upload To Cloud
                            </button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {mediaItems.map(item => (
                                <div key={item.id} className={`group cursor-pointer rounded-[2.5rem] overflow-hidden border transition-all ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                                    <div className="h-48 relative overflow-hidden">
                                        <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                            <button className="w-10 h-10 bg-white dark:bg-accent text-primary rounded-xl flex items-center justify-center"><Eye className="w-5 h-5" /></button>
                                            <button className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center"><Share2 className="w-5 h-5" /></button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm font-black truncate mb-2">{item.name}</p>
                                        <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                            <span>{item.size}</span>
                                            <span>{item.type.split('/')[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="h-full min-h-[250px] border-2 border-dashed border-gray-800 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-gray-600 hover:border-accent hover:text-accent transition-all cursor-pointer">
                                <div className="p-4 bg-gray-900 rounded-full"><Plus className="w-8 h-8" /></div>
                                <span className="font-bold text-xs uppercase tracking-widest">Add New Asset</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Community View --- */}
                {activeTab === 'subscribers' && (
                    <div className={`rounded-[3rem] border shadow-2xl overflow-hidden animate-in fade-in duration-700 ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                        <div className="p-12 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <h3 className="text-3xl font-black mb-2 tracking-tight">Ecosystem Members</h3>
                                <p className="text-sm text-gray-500 font-medium">Tracking your community growth and engagement</p>
                            </div>
                            <div className="flex gap-4">
                                <button className={`p-4 rounded-xl transition-all ${isDarkMode ? 'hover:bg-white/5 text-gray-500' : 'hover:bg-gray-50 text-gray-400'}`}><Filter /></button>
                                <button className="bg-accent text-primary px-8 py-4 rounded-2xl font-black">Export CSV</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className={`bg-black/20 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500`}>
                                    <tr>
                                        <th className="px-12 py-8">User Identity</th>
                                        <th className="px-12 py-8">Registration Date</th>
                                        <th className="px-12 py-8 text-right">Access Status</th>
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${isDarkMode ? 'divide-white/5' : 'divide-gray-50'}`}>
                                    {subscribers.map(s => (
                                        <tr key={s.id} className={`group transition-all ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50/50'}`}>
                                            <td className="px-12 py-10 flex items-center gap-4">
                                                <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center font-black">{s.email[0].toUpperCase()}</div>
                                                <span className="font-black text-lg">{s.email}</span>
                                            </td>
                                            <td className="px-12 py-10 text-gray-500 font-bold">{new Date(s.created_at).toLocaleDateString()}</td>
                                            <td className="px-12 py-10 text-right">
                                                <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${s.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                    {s.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            {/* --- AI Import Modal --- */}
            {showImport && (
                <div className="fixed inset-0 bg-primary/80 backdrop-blur-2xl z-50 flex items-center justify-center p-4">
                    <div className={`${isDarkMode ? 'bg-primary-light border-white/10' : 'bg-white border-gray-100'} rounded-[4rem] p-16 max-w-2xl w-full shadow-2xl relative overflow-hidden border`}>
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-accent/20 rounded-[2rem] flex items-center justify-center mb-10 animate-bounce">
                                <Globe className="w-12 h-12 text-accent" />
                            </div>
                            <h2 className="text-4xl font-black mb-4 tracking-tighter">AI Content Engine</h2>
                            <p className="text-gray-500 mb-12 font-medium">Harness the power of AI to synthesize premium articles based on latest sustainability trends.</p>

                            <div className="w-full space-y-6">
                                <div className={`p-2 rounded-3xl border transition-all ${isDarkMode ? 'bg-navy border-white/5 focus-within:border-accent/50' : 'bg-gray-50 border-gray-200 focus-within:border-accent'}`}>
                                    <input
                                        value={importTopic}
                                        onChange={e => setImportTopic(e.target.value)}
                                        placeholder="e.g. Impact of LEED v4 on Middle East"
                                        className="w-full p-6 bg-transparent outline-none font-bold placeholder-gray-600 text-center"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={handleAIImport}
                                        disabled={isGenerating || !importTopic}
                                        className="flex-1 py-6 bg-accent text-primary rounded-[2rem] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-accent/20 disabled:opacity-50 disabled:scale-100"
                                    >
                                        {isGenerating ? <span className="flex items-center justify-center gap-3 animate-pulse">Synthesizing...</span> : 'Launch Synthesis'}
                                    </button>
                                    <button onClick={() => setShowImport(false)} className={`px-10 py-6 rounded-[2rem] font-bold transition-all ${isDarkMode ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Content Studio (Editor) --- */}
            {editingBlog && (
                <div className={`fixed inset-0 z-[60] overflow-hidden flex flex-col ${isDarkMode ? 'bg-primary' : 'bg-[#F8FAFC]'}`}>
                    <header className={`p-6 md:px-12 border-b flex justify-between items-center ${isDarkMode ? 'bg-navy border-white/5' : 'bg-white border-gray-100'}`}>
                        <div className="flex items-center gap-8">
                            <button onClick={() => setEditingBlog(null)} className={`p-4 rounded-2xl hover:bg-white/5 transition-all ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                                <X className="w-7 h-7" />
                            </button>
                            <div className="hidden md:block">
                                <h2 className="text-2xl font-black tracking-tight">{editingBlog.id ? 'Refining Content' : 'New Article'}</h2>
                                <p className="text-[10px] text-accent font-black uppercase tracking-widest mt-1">Status: {editingBlog.status === 'PUBLISHED' ? 'Live' : 'Drafting Stage'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className={`px-8 py-4 rounded-2xl font-black transition-all border ${isDarkMode ? 'border-white/10 text-gray-400 hover:text-white hover:bg-white/5' : 'border-gray-200'}`}>
                                Preview <ExternalLink className="inline-block w-4 h-4 ml-2" />
                            </button>
                            <button onClick={saveContent} className="px-12 py-4 bg-accent text-primary rounded-2xl font-black shadow-2xl shadow-accent/30 hover:scale-[1.05] transition-all">
                                Publish Changes
                            </button>
                        </div>
                    </header>

                    <div className="flex-1 flex overflow-hidden">
                        <div className="flex-1 overflow-y-auto p-12 lg:px-24">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <textarea
                                    value={editingBlog.title}
                                    onChange={e => setEditingBlog({ ...editingBlog, title: e.target.value })}
                                    className="w-full bg-transparent text-6xl font-black outline-none placeholder:text-gray-800 tracking-tighter resize-none overflow-hidden h-auto"
                                    placeholder="Enter Headline..."
                                    rows={2}
                                />

                                <div className="flex flex-wrap gap-4 pb-12 border-b border-white/5">
                                    <div className={`px-6 py-3 rounded-2xl border flex items-center gap-3 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-white border-gray-100'}`}>
                                        <Type className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase">Standard Layout</span>
                                    </div>
                                    <div className={`px-6 py-3 rounded-2xl border flex items-center gap-3 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-white border-gray-100'}`}>
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase">SEO Score: 85</span>
                                    </div>
                                    <button className="px-6 py-3 rounded-2xl bg-accent/20 text-accent font-black text-xs uppercase flex items-center gap-3">
                                        <ImageIcon className="w-4 h-4" /> Set Featured Image
                                    </button>
                                </div>

                                <div className={`prose-editor ${isDarkMode ? 'dark-editor' : ''}`}>
                                    <ReactQuill
                                        value={editingBlog.content}
                                        onChange={val => setEditingBlog({ ...editingBlog, content: val })}
                                        theme="snow"
                                    />
                                </div>

                                <div className="pt-24 space-y-12">
                                    <div className="flex justify-between items-center"><h3 className="text-3xl font-black tracking-tight">Interactive FAQ Component</h3><button onClick={() => setFaqs([...faqs, { question: '', answer: '' }])} className="text-sm font-black text-accent p-2 hover:bg-accent/10 rounded-xl transition-all">+ Inject New FAQ</button></div>
                                    <div className="space-y-6">
                                        {faqs.map((f, i) => (
                                            <div key={i} className={`p-10 rounded-[2.5rem] border relative group transition-all ${isDarkMode ? 'bg-primary-light border-white/5 hover:bg-white/10' : 'bg-white border-gray-100 hover:shadow-xl'}`}>
                                                <input value={f.question} onChange={e => { const u = [...faqs]; u[i].question = e.target.value; setFaqs(u); }} className="w-full bg-transparent font-black text-xl outline-none mb-4 placeholder:text-gray-700" placeholder="Question Title..." />
                                                <textarea value={f.answer} onChange={e => { const u = [...faqs]; u[i].answer = e.target.value; setFaqs(u); }} className="w-full bg-transparent text-gray-500 font-medium outline-none resize-none leading-relaxed" placeholder="Detailed answer content goes here..." rows={3} />
                                                <button onClick={() => setFaqs(faqs.filter((_, idx) => idx !== i))} className="absolute top-10 right-10 text-red-100 group-hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="w-6 h-6" /></button>
                                            </div>
                                        ))}
                                        {faqs.length === 0 && (
                                            <div className="p-20 border-2 border-dashed border-white/10 rounded-[3rem] text-center text-gray-600 font-bold uppercase tracking-widest text-xs">
                                                No FAQs configured for this article.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <aside className={`w-[450px] border-l p-12 overflow-y-auto hidden xl:block ${isDarkMode ? 'bg-navy border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.3)]' : 'bg-white border-gray-100'}`}>
                            <div className="space-y-12 pb-24">
                                <section>
                                    <h4 className="text-[11px] font-black uppercase text-accent tracking-[0.3em] mb-8">System Identifiers</h4>
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Universal Slug</label>
                                            <div className={`p-4 rounded-2xl border transition-all ${isDarkMode ? 'bg-primary-light border-white/5 focus-within:border-accent/40' : 'bg-gray-50 border-gray-200'}`}>
                                                <input value={editingBlog.slug} onChange={e => setEditingBlog({ ...editingBlog, slug: e.target.value })} className="w-full bg-transparent outline-none font-bold text-sm" placeholder="url-slug-here" />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h4 className="text-[11px] font-black uppercase text-accent tracking-[0.3em] mb-8">SEO Metadata</h4>
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Meta Description</label>
                                            <textarea
                                                value={editingBlog.meta_description}
                                                onChange={e => setEditingBlog({ ...editingBlog, meta_description: e.target.value })}
                                                className={`w-full p-6 rounded-2xl border transition-all resize-none font-medium text-sm leading-relaxed ${isDarkMode ? 'bg-primary-light border-white/5 focus:border-accent/40 outline-none' : 'bg-gray-50 border-gray-200 outline-none focus:border-accent'}`}
                                                rows={5}
                                                placeholder="Write a compelling summary for Google results..."
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Primary Keywords</label>
                                            <div className={`p-5 rounded-2xl border transition-all ${isDarkMode ? 'bg-primary-light border-white/5' : 'bg-white border-gray-100'}`}>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Sustainability', 'Vision 2030', 'KSA'].map(kw => (
                                                        <span key={kw} className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-[10px] font-black text-accent uppercase">{kw} <X className="inline w-3 h-3 ml-1 cursor-pointer" /></span>
                                                    ))}
                                                    <input className="bg-transparent outline-none text-xs font-bold p-1 flex-1" placeholder="Add custom tag..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h4 className="text-[11px] font-black uppercase text-accent tracking-[0.3em] mb-8">Classification</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className={`p-6 rounded-3xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? 'bg-white/5 border-white/5 hover:bg-accent/10 hover:border-accent/30' : 'bg-gray-50 hover:bg-accent/5 hover:border-accent'}`}>
                                            <div className="flex items-center gap-4">
                                                <FolderTree className="w-5 h-5 text-gray-600 group-hover:text-accent" />
                                                <span className="font-bold text-sm">Category: General</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-gray-700" />
                                        </div>
                                        <div className={`p-6 rounded-3xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? 'bg-white/5 border-white/5 hover:bg-accent/10 hover:border-accent/30' : 'bg-gray-50 hover:bg-accent/5 hover:border-accent'}`}>
                                            <div className="flex items-center gap-4">
                                                <Tags className="w-5 h-5 text-gray-600 group-hover:text-accent" />
                                                <span className="font-bold text-sm">Manage Tags (3)</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-gray-700" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </aside>
                    </div>
                </div>
            )}

            {notification && (
                <div className={`fixed bottom-12 right-12 px-10 py-6 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-[100] font-black text-sm flex items-center gap-5 border-l-8 transition-all animate-in slide-in-from-right-10 duration-500 ${isDarkMode ? 'bg-navy border-accent text-white' : 'bg-white border-accent text-primary'}`}>
                    <div className="w-3 h-3 rounded-full bg-accent animate-ping"></div>
                    {notification.message}
                </div>
            )}

            <style jsx global>{`
                .prose-editor .ql-container { min-height: 600px; font-size: 1.25rem; border: none !important; font-family: 'Inter', sans-serif; line-height: 1.8; }
                .prose-editor .ql-editor { padding: 4rem 0 !important; }
                .prose-editor .ql-toolbar { border: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; position: sticky; top: 0; background: inherit; z-index: 10; padding: 1.5rem 0 !important; }
                .dark-editor .ql-toolbar .ql-stroke { stroke: rgba(255,255,255,0.6) !important; }
                .dark-editor .ql-toolbar .ql-fill { fill: rgba(255,255,255,0.6) !important; }
                .dark-editor .ql-editor { color: rgba(255,255,255,0.9); }
                .dark-editor .ql-editor.ql-blank::before { color: rgba(255,255,255,0.2) !important; }
                ::-webkit-scrollbar { width: 10px; height: 10px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { background: rgba(197, 160, 89, 0.1); border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover { background: rgba(197, 160, 89, 0.3); }
            `}</style>
        </div>
    );
}
