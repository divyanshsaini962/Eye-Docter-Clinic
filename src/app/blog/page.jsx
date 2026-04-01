import React from 'react';
import BlogCard from '@/components/sections/BlogCard';
import Link from 'next/link';
import { getPaginatedBlogs } from '@/lib/blogService';

export default async function BlogPage({ searchParams }) {
  const { page: pageStr } = await searchParams;
  const page = parseInt(pageStr) || 1;
  const limit = 9;

  let blogs = [];
  let totalCount = 0;

  try {
    const result = await getPaginatedBlogs(page, limit);
    blogs = result.blogs;
    totalCount = result.totalCount;
  } catch (error) {
    console.error("Database connection failed for Blog Page:", error);
  }

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <main className="min-h-screen pt-32 pb-16 bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 uppercase italic font-black">
          EYECARE <span className="text-teal-500">INSIGHTS</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-2xl mx-auto italic">
          Expert articles, clinical updates, and patient guides from our leading specialists.
        </p>
      </div>

      {/* Latest Articles Grid Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase px-1 border-l-2 border-teal-500">Medical Library</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950 uppercase italic leading-none">
                Clinical <span className="text-teal-500">Archive</span>
              </h2>
            </div>
            <div className="text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                Page {page} of {totalPages || 1}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))
            ) : (
                <div className="col-span-full border-2 border-dashed border-slate-200 rounded-[3rem] p-32 text-center uppercase font-black text-slate-300 tracking-widest text-xs flex flex-col items-center justify-center bg-slate-50">
                    <span className="text-4xl mb-4">🧬</span>
                    No Insights Found in This Section Yet
                </div>
            )}
          </div>

          {/* Clinical Pagination Controls */}
          {totalPages > 1 && (
            <nav className="flex justify-center items-center gap-4 mt-16 pt-12 border-t border-slate-100">
                {/* Previous Button */}
                <Link
                    href={`/blog?page=${page - 1}`}
                    className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${
                        page <= 1 
                        ? 'bg-slate-50 text-slate-300 border-slate-100 pointer-events-none' 
                        : 'bg-white text-slate-950 border-slate-200 hover:border-teal-500 hover:text-teal-600 hover:scale-105 active:scale-95 shadow-sm'
                    }`}
                >
                    ← Previous
                </Link>

                {/* Page Number Indicators */}
                <div className="flex gap-2 mx-4 sm:flex hidden">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <Link
                            key={pageNum}
                            href={`/blog?page=${pageNum}`}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all border ${
                                page === pageNum 
                                ? 'bg-slate-950 text-white border-slate-950 shadow-lg' 
                                : 'bg-white text-slate-500 border-slate-200 hover:border-teal-500 hover:text-teal-600'
                            }`}
                        >
                            {pageNum}
                        </Link>
                    ))}
                </div>

                {/* Next Button */}
                <Link
                    href={`/blog?page=${page + 1}`}
                    className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border shadow-sm ${
                        page >= totalPages 
                        ? 'bg-slate-50 text-slate-300 border-slate-100 pointer-events-none' 
                        : 'bg-slate-950 text-white border-slate-950 hover:bg-teal-600 hover:border-teal-600 hover:scale-105 active:scale-95'
                    }`}
                >
                    Next Page →
                </Link>
            </nav>
          )}
        </div>
      </section>

    </main>
  );
}
