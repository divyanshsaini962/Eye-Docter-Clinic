import React from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Trial Version Banner */}
        <div className="sticky top-0 z-50 bg-teal-600 text-white px-6 py-3 flex flex-col md:flex-row justify-between items-center shadow-lg border-b border-teal-500/30">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-widest border border-white/30">
              Trial Mode
            </span>
            <p className="text-sm font-semibold tracking-wide">
              Full authentication will be implemented upon completion of the medical portal.
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <a 
              href="https://www.sainistudio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition-colors flex items-center gap-2 group"
            >
              <span className="text-xs font-bold uppercase tracking-tighter">Contact Saini Studio to Buy Full Version</span>
              <span className="bg-white text-teal-600 px-2 py-0.5 rounded text-[10px] font-black group-hover:bg-teal-50 transition-colors">→</span>
            </a>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <main className="p-8 md:p-12">
          {children}
        </main>

        {/* Footer info in admin */}
        <footer className="mt-auto p-8 text-center text-slate-400 text-xs tracking-widest font-medium border-t border-slate-200">
          © {new Date().getFullYear()} Clinical Portal Admin — Developed by <a href="https://www.sainistudio.com/" className="text-teal-600 hover:underline">Saini Studio</a>
        </footer>
      </div>
    </div>
  );
}
