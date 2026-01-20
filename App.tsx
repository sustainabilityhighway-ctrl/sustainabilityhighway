import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeBody from './components/HomeBody';
import LeedGuide from './components/LeedGuide';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#041612] text-white selection:bg-[#4CAF50] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <HomeBody />
          </main>
        } />
        <Route path="/leed-guide" element={<LeedGuide />} />
        <Route path="/insights" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/insights/:id" element={<BlogDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
