import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
  // Fallback values for safety
  const title = blog?.title || 'Untitled Article';
  const excerpt = blog?.excerpt || (blog?.content ? blog.content.substring(0, 120) + '...' : 'No description available.');
  const date = blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : 'Recently Published';
  const category = blog?.category || blog?.tags || 'Clinical Update';
  const slug = blog?.slug || '#';
  const coverImage = blog?.coverImage || '/images/about_history.png';

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={coverImage} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-teal-600 text-[10px] uppercase tracking-widest font-bold rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex items-center text-slate-400 text-xs font-medium tracking-wide">
          <span>{date}</span>
          <span className="mx-2 text-slate-300">•</span>
          <span>5 min read</span>
        </div>

        <h3 className="text-xl font-bold text-slate-950 leading-tight group-hover:text-teal-600 transition-colors duration-300">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Action Link */}
        <div className="pt-2 mt-auto">
          <Link 
            href={`/blog/${slug}`}
            className="inline-flex items-center text-teal-600 text-sm font-bold hover:text-teal-700 transition-colors group/btn"
          >
            Explore Case Study
            <svg 
              className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
