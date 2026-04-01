import Link from 'next/link';
import React from 'react';

const specializedSurgery = [
  'Cataract Surgery', 'LASIK/SMILE Surgery', 'Glaucoma Intervention', 'Posterior Segment Care'
];

const advancedDiagnostics = [
  'OCT Retinal Mapping', 'Visual Field Analysis', 'Corneal Topography', 'Refractive Evaluation'
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Our Clinic', href: '/about' },
  { name: 'All Services', href: '/services' },
  { name: 'Patient Feedback', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Admin Portal', href: '/admin' },
];

const PrecisionEyecareFooter = () => {
  return (
    <footer className="bg-slate-950 pt-12 pb-6 border-t border-slate-800 text-slate-300 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-8">
          
          {/* Brand & Address */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.043-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-50 tracking-tight leading-none">
                  INTEGRATED <span className="text-teal-500">EYE</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Hospital & Clinic</span>
              </div>
            </Link>
            
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-teal-500">📍</span> 123 Vision Avenue, Jhansi, UP
              </p>
              <p className="flex items-center gap-2">
                <span className="text-teal-500">📞</span> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <span className="text-teal-500">✉️</span> care@integratedeye.com
              </p>
            </div>
          </div>

          {/* Our Services (Middle Column to fill negative space) */}
          <div>
            <h3 className="text-base font-semibold text-slate-100 tracking-wide mb-3">Our Services</h3>
            <ul className="space-y-2">
              {specializedSurgery.map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                    <span className="text-teal-900 text-xs">▸</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-end">
            <h3 className="text-base font-semibold text-slate-100 tracking-wide mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                    <span className="text-teal-900 text-xs">▸</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500 tracking-wide text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Integrated Eye Hospital Jhansi. All Rights Reserved.
            <span className="block md:inline md:border-l md:border-slate-800 md:ml-3 md:pl-3 mt-2 md:mt-0">
              Developed by <a href="https://www.sainistudio.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-400 font-medium transition-colors">Saini Studio</a>
            </span>
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PrecisionEyecareFooter;