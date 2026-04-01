import React from 'react';
import { getAllBlogs } from '@/lib/blogService';
import BlogList from '@/components/sections/BlogList';

export const dynamic = 'force-dynamic';

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Blog Posts</h1>
        <p className="text-lg text-gray-600">Stay updated with our latest news and insights.</p>
      </header>
      
      <BlogList blogs={JSON.parse(JSON.stringify(blogs))} />
    </div>
  );
}
