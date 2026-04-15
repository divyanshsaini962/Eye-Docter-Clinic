"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// You will likely want to import professional fonts like Inter or Roboto in your layout.js/globals.css
// Example import in Next.js layout:
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const IntegratedHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Same links as requested
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // Header is semi-translucent (bg-opacity-70) on a dark charcoal blue background, using Glassmorphism (blur)
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Left Side: Practice Branding (Integrated Font & Palette) */}
        <div className="flex flex-col items-start gap-0.5">
          <Link href="/" className="flex items-center gap-1.5 group">
            {/* Minimal SVG Icon (represents clarity/scan) */}
            <svg
              className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-50 tracking-tight">
              INTEGRATED <span className="text-teal-400 font-extrabold">EYE</span>CARE
            </span>
          </Link>
          <span className="text-[10px] sm:text-xs font-light text-slate-300 tracking-wider">Precision Vision Clinic</span>
        </div>

        {/* 2. Middle: Streamlined Navigation (Integrated Data Overlay) */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-100 hover:text-teal-400 transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Right Side: Reimagined CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Link
            href="/admin"
            className="inline-block px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-semibold text-slate-300 border-2 border-transparent hover:border-slate-700 rounded-full hover:bg-slate-800 transition-all shadow-sm"
          >
            Admin
          </Link>
          <Link
            href="/contact#booking"
            className="inline-block px-4 py-2 md:px-7 md:py-3 text-xs md:text-sm font-semibold text-teal-400 border-2 border-teal-400 rounded-full hover:bg-teal-400 hover:text-slate-900 transition-all shadow-md group"
          >
            Book <span className="hidden sm:inline">Appointment</span>
            <span className="inline-block md:ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-1 text-slate-100 hover:text-teal-400 focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. Mobile Navigation Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl overflow-hidden animate-fade-in">
          <nav className="flex flex-col py-4 px-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-100 hover:text-teal-400 transition-colors py-3 border-b border-slate-800/50 block w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default IntegratedHeader;