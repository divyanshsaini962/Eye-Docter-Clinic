import React from 'react';
import { getBlogBySlug } from '@/lib/blogService';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: 'Clinical Insight Not Found' };

  return {
    title: `${blog.title} | EyeCare Insights`,
    description: blog.excerpt || "Expert medical perspectives from Integrated Eye Care.",
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-20 font-sans overflow-x-hidden">
      
      {/* Premium Blog Header */}
      <header className="relative pt-36 pb-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto break-words">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-teal-400 font-bold uppercase text-[10px] tracking-widest mb-10 hover:text-white transition-colors group"
            >
              <span className="mr-2 transform transition-transform group-hover:-translate-x-1">←</span> Back to Medical Library
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-8">
                 {(blog.tags && blog.tags.length > 0 ? blog.tags : [blog.category || "Clinical Update"]).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-teal-900/40 border border-teal-500/30 text-teal-400 text-[9px] uppercase font-black tracking-widest rounded-lg break-all">
                        {tag}
                    </span>
                 ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-10 text-white break-words">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-slate-400 text-sm font-medium border-t border-slate-900/50 pt-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-black shadow-lg shadow-teal-900/20">
                        {blog.author?.charAt(0) || 'D'}
                    </div>
                    <div>
                        <div className="text-teal-400 font-black uppercase tracking-widest text-[9px]">Lead Clinician</div>
                        <div className="text-slate-100 font-bold">{blog.author || 'Eye Care Specialist'}</div>
                    </div>
                </div>
                
                <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
                
                <div>
                     <div className="text-slate-500 font-black uppercase tracking-widest text-[9px]">Published Date</div>
                     <div className="text-slate-300 font-semibold">{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image Container */}
      <div className="container mx-auto px-6 md:px-12 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[21/10] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-200">
                <Image 
                    src={blog.coverImage || "/images/about_history.png"} 
                    alt={blog.title} 
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
      </div>

      {/* Article Content Area */}
      <div className="container mx-auto px-6 md:px-12 mt-20 md:mt-24">
        <div className="max-w-4xl mx-auto">
          
          {/* High-Contrast Excerpt */}
          {blog.excerpt && (
              <div className="bg-slate-50 border-l-4 border-teal-600 p-10 rounded-r-3xl mb-16 text-xl text-slate-800 leading-relaxed font-bold shadow-sm">
                  <span className="text-teal-600 text-4xl leading-none font-serif align-top mr-2">“</span>
                  {blog.excerpt}
              </div>
          )}

          {/* Main Content Rendered via dangerouslySetInnerHTML for Rich Text (Quill) */}
          <article 
            className="clinical-post-content selection:bg-teal-100 selection:text-teal-900"
            dangerouslySetInnerHTML={{ __html: blog.content || "<i>Clinical content is currently being updated for this record.</i>" }}
          />

          {/* Footer Social / Source Section */}
          <div className="mt-24 pt-16 border-t-2 border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-10">
                <div className="space-y-1 text-center sm:text-left">
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinical Review Board Approved</div>
                     <div className="text-slate-950 font-black text-lg">Integrated Eye Care Specialists</div>
                </div>
                <Link 
                    href="/blog" 
                    className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white bg-slate-950 rounded-full overflow-hidden transition-all hover:bg-teal-600 hover:scale-105 active:scale-95 shadow-xl"
                >
                    <span className="relative uppercase tracking-widest text-xs italic">Explore Clinical Library</span>
                </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
