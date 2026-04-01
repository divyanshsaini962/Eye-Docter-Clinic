import React from 'react';
import { getAllBlogs } from '@/lib/blogService';
import BlogList from './BlogList';
import Link from 'next/link';

export default async function BlogPreview() {
  let blogs = [];
  try {
    const allBlogs = await getAllBlogs();
    // Latest 3 for the homepage preview
    blogs = allBlogs.slice(0, 3);
  } catch (error) {
    console.error("Clinical Data Fetch Error:", error);
  }

  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sans overflow-hidden border-t border-slate-200/50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Authority Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 lg:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-teal-500"></span>
              <span className="text-teal-600 font-bold tracking-[0.2em] text-[10px] uppercase">Science & Innovation</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight italic uppercase leading-none">
              LATEST <span className="text-teal-600">INSIGHTS.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium tracking-tight italic max-w-xl">
              Exploring the frontiers of ocular health through clinical updates and case studies.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-4 py-4 px-8 bg-slate-950 text-white rounded-3xl font-black tracking-tighter text-xs uppercase hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-500/20"
          >
            View All Articles
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Blog Feed Grid */}
        <div className="relative">
          {/* Subtle background decorative accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-[100px] -z-0 pointer-events-none opacity-50"></div>
          
          <div className="relative z-10">
            <BlogList blogs={JSON.parse(JSON.stringify(blogs))} />
          </div>
        </div>

        {/* Mobile-only secondary CTA (Just in case) */}
        <div className="mt-16 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-block border-2 border-slate-200 text-slate-950 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-teal-500 transition-colors"
          >
            Explore Full Archive
          </Link>
        </div>

      </div>
    </section>
  );
}
