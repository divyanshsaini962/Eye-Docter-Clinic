"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ManagePostsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState({ type: '', text: '' });

  // Fetch blogs from MongoDB
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (Array.isArray(data)) {
        setBlogs(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to PERMANENTLY DELETE the blog: "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (result.success) {
        setDeleteMessage({ type: 'success', text: `Successfully deleted "${title}"` });
        setBlogs(blogs.filter(blog => blog._id !== id));
        setTimeout(() => setDeleteMessage({ type: '', text: '' }), 3000);
      } else {
        setDeleteMessage({ type: 'error', text: result.message || 'Failed to delete' });
      }
    } catch (error) {
      setDeleteMessage({ type: 'error', text: 'Connection error' });
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-950 tracking-tight leading-none italic uppercase">Manage <span className="text-teal-600">Blogs</span></h1>
          <p className="text-slate-500 text-sm font-medium tracking-tight">Clinical Insight Management (Trial Hub).</p>
        </div>
        <div className="flex items-center gap-4">
            {deleteMessage.text && (
                <div className={`px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border animate-bounce ${
                    deleteMessage.type === 'success' ? 'bg-emerald-50 border-emerald-500/20 text-emerald-600' : 'bg-rose-50 border-rose-500/20 text-rose-600'
                }`}>
                    {deleteMessage.text}
                </div>
            )}
            <Link 
            href="/admin/create"
            className="bg-teal-600 text-white px-8 py-4 rounded-3xl font-black italic uppercase tracking-widest text-[10px] hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20 flex items-center gap-2"
            >
            <span className="text-xl">+</span> New Article
            </Link>
        </div>
      </div>

      {/* Blog Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase font-black tracking-widest text-slate-400">
                <th className="px-6 py-4">Article Title</th>
                <th className="px-6 py-4">Category / Tags</th>
                <th className="px-6 py-4 px-2">Added Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-600">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-400 font-bold italic uppercase tracking-widest animate-pulse">Synchronizing with MongoDB...</td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-400 font-bold italic uppercase tracking-widest">No Medical Insights Registered</td>
                </tr>
              ) : blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-slate-950 font-black tracking-tight max-w-sm truncate">{blog.title}</div>
                    <div className="text-[10px] text-slate-300 font-mono tracking-tighter">/{blog.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] text-teal-600 font-black uppercase tracking-widest bg-teal-50 px-2 py-1 rounded-md">{blog.tags || 'General'}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 font-normal italic text-xs">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      blog.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400 italic'
                    }`}>
                      {blog.status || 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-6">
                    <Link href={`/admin/edit/${blog._id}`} className="text-slate-950 hover:text-teal-600 transition-colors font-black text-[10px] uppercase tracking-widest border-b border-transparent hover:border-teal-500 pb-0.5">Edit</Link>
                    <button 
                        onClick={() => handleDelete(blog._id, blog.title)}
                        className="text-rose-500 hover:text-rose-700 transition-colors font-black text-[10px] uppercase tracking-widest border-b border-transparent hover:border-rose-500 pb-0.5"
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
