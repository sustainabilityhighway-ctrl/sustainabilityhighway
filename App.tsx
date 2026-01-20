
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionProjects from './components/VisionProjects';
import SustainabilityStats from './components/SustainabilityStats';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';
import { ICONS } from './constants';
import { supabase } from './services/supabaseClient';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      subscription.unsubscribe();
    };
  }, []);

  // Admin route
  if (currentPath === '/admin') {
    return session ? <AdminDashboard /> : <Login />;
  }

  // Blog list route
  if (currentPath === '/insights') {
    return (
      <div className="min-h-screen">
        <Navbar />
        <BlogList />
      </div>
    );
  }

  // Blog detail route
  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    return (
      <div className="min-h-screen">
        <Navbar />
        <BlogDetail slug={slug} />
      </div>
    );
  }

  // Homepage - exact match only
  if (currentPath === '/' || currentPath === '') {
    return (
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Hero />

          {/* Subtle transition divider */}
          <div className="h-24 bg-gradient-to-b from-[#041612] to-[#0B2B24]"></div>



          <VisionProjects />

          <SustainabilityStats />
        </main>

        <footer className="bg-[#041612] py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-[#4CAF50] rounded-lg">
                  {ICONS.Leaf}
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">
                  Sustainability <span className="gold-text">Highway</span>
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Empowering the Kingdom's construction industry with modern standards and AI-driven intelligence for a greener Vision 2030.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Exploration</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">NEOM Insight</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">The Line Standards</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Red Sea Global</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Diriyah Heritage</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Standards</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Mostadam Rating</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LEED KSA</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Water Recycling</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Solar Integration</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-[#C5A059]">Official</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">MOMRAH</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Vision 2030 Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GBCI Middle East</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
              © 2026 SUSTAINABILITY HIGHWAY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-white/20 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Mostadam Guide</a>
              <a href="/insights" className="hover:text-[#4CAF50]">Insights</a>
              <a href="/admin" className="hover:text-[#C5A059]">Admin</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // 404 - All other routes
  return (
    <div className="min-h-screen">
      <Navbar />
      <NotFound />
    </div>
  );
};

export default App;
