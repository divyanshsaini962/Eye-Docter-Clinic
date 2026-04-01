"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/admin/RichTextEditor';
import SerializationTool from '@/components/admin/SerializationTool';

export default function EditBlogPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    imageSource: 'url',
    coverImage: '',
    author: 'Ishant Saini',
    tags: '',
    content: '',
    status: 'Draft',
  });
  
  const [isFetching, setIsFetching] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Handle Cloudinary Upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setMessage({ type: 'info', text: 'Uploading to Cloudinary...' });

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      const data = await response.json();

      if (data.success) {
        setFormData(prev => ({ ...prev, coverImage: data.url }));
        setMessage({ type: 'success', text: 'Image successfully updated on Cloudinary!' });
      } else {
        setMessage({ type: 'error', text: data.message || 'Upload failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Cloudinary configuration error' });
    } finally {
      setIsUploading(false);
    }
  };
   
  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        if (data && !data.error) {
          // Convert tags array to comma-separated string for the input field
          if (Array.isArray(data.tags)) {
            data.tags = data.tags.join(', ');
          }
          setFormData(data);
        } else {
          setMessage({ type: 'error', text: 'Blog not found' });
        }
      } catch (error) {
        setMessage({ type: 'error', text: 'Error fetching blog' });
      } finally {
        setIsFetching(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ type: 'info', text: 'Updating MongoDB record...' });

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });
        setTimeout(() => router.push('/admin/posts'), 1500);
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to update' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Connection error' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest animate-pulse">Retrieving Clinical Data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white tracking-tight leading-none italic uppercase">
            Edit <span className="text-teal-500">Insight</span>
          </h1>
          <p className="text-[9px] text-slate-500 font-medium tracking-widest uppercase italic">Modify existing clinical record: {id}</p>
        </div>
        <Link href="/admin/posts" className="text-slate-500 hover:text-rose-500 transition-colors font-black text-[10px] uppercase tracking-widest border-b border-transparent hover:border-rose-500 pb-1">
          Discard Changes
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 px-6">Title</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-8 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-950 font-black transition-all text-2xl tracking-tight" 
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 px-6">Slug</label>
              <input 
                type="text" 
                required
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                className="w-full px-8 py-2 bg-slate-100 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-400 font-mono text-xs tracking-tighter" 
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 px-6">Excerpt</label>
              <textarea 
                rows="2"
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                className="w-full px-8 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-500 font-medium leading-relaxed italic text-sm" 
              ></textarea>
            </div>

            <div className="pt-4">
              <label className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4 px-6">Contents</label>
              <RichTextEditor 
                value={formData.content}
                onChange={(val) => setFormData({...formData, content: val})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          
          <div className="bg-teal-600 rounded-3xl p-8 shadow-2xl text-white space-y-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-3xl">💾</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-black tracking-tight leading-none uppercase">Save Changes</h3>
                <div className="flex bg-teal-700/50 p-1 rounded-full border border-teal-500/30">
                    <button 
                        type="button"
                        onClick={() => setFormData({...formData, status: 'Draft'})}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${formData.status === 'Draft' ? 'bg-white text-teal-600' : 'text-teal-200 hover:text-white'}`}
                    >Draft</button>
                    <button 
                        type="button"
                        onClick={() => setFormData({...formData, status: 'Published'})}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${formData.status === 'Published' ? 'bg-slate-950 text-white' : 'text-teal-200 hover:text-white'}`}
                    >Live</button>
                </div>
            </div>

            <button 
              type="submit"
              disabled={isSaving}
              className={`w-full py-4 rounded-3xl font-black italic uppercase tracking-widest text-sm transition-all shadow-xl ${isSaving ? 'bg-teal-800 text-teal-300 animate-pulse' : 'bg-slate-950 hover:bg-slate-900 text-white hover:scale-105 active:scale-95'}`}
            >
              {isSaving ? 'Updating...' : 'Update Record'} 
            </button>

            {message.text && (
              <p className={`text-[9px] font-bold uppercase tracking-widest p-4 rounded-2xl w-full border ${
                message.type === 'success' ? 'bg-white/10 border-white/30 text-white' : 
                message.type === 'error' ? 'bg-rose-500/20 border-rose-500/30 text-rose-100' : 'bg-white/10 border-white/30 text-white'
              }`}>
                {message.text}
              </p>
            )}
          </div>

          <SerializationTool data={formData} />

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <h3 className="text-[10px] uppercase font-black text-slate-400 tracking-widest border-b border-slate-50 pb-4">Cover Image</h3>
            
            <div className="flex gap-4">
               <button 
                type="button"
                onClick={() => setFormData({...formData, imageSource: 'url'})}
                className={`flex-1 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all border ${formData.imageSource === 'url' ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-slate-100 text-slate-400 hover:border-teal-500/20'}`}
               >URL</button>
               <button 
                type="button"
                onClick={() => setFormData({...formData, imageSource: 'upload'})}
                className={`flex-1 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all border ${formData.imageSource === 'upload' ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-slate-100 text-slate-400 hover:border-teal-500/20'}`}
               >Upload</button>
            </div>

            {formData.coverImage && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50">
                    <img 
                        src={formData.coverImage} 
                        alt="Clinical Cover Preview" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-slate-950/50 backdrop-blur-sm text-white text-[8px] font-black uppercase rounded-md tracking-widest">Preview</div>
                </div>
            )}

            {formData.imageSource === 'url' ? (
                <div>
                    <input 
                        type="url" 
                        value={formData.coverImage}
                        onChange={(e) => setFormData({...formData, coverImage: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-600 text-xs italic" 
                        placeholder="https://example.com/image.jpg"
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    <div className={`p-8 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center transition-all ${isUploading ? 'border-teal-500 bg-teal-50 animate-pulse' : 'border-slate-100'}`}>
                        <span className="text-3xl mb-2">{isUploading ? '📤' : '☁️'}</span>
                        <label className="cursor-pointer">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full border ${isUploading ? 'text-teal-600 border-teal-200' : 'text-slate-400 border-slate-200 hover:bg-slate-50'}`}>
                                {isUploading ? 'Uploading...' : 'Update Medical Image'}
                            </span>
                            <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleFileUpload}
                                disabled={isUploading}
                            />
                        </label>
                    </div>
                    {formData.coverImage && formData.imageSource === 'upload' && (
                        <div className="text-[9px] text-teal-600 font-bold truncate p-2 bg-teal-50 rounded-lg">
                             Cloudinary URL: {formData.coverImage}
                        </div>
                    )}
                </div>
            )}
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 px-2">Author</label>
              <input 
                type="text" 
                value={formData.author}
                onChange={(e) => setFormData({...formData, author: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-950 font-bold tracking-tight" 
              />
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}
