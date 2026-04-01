import React from 'react';
import Link from 'next/link';

const AdminSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Manage Blogs', href: '/admin/posts', icon: '📝' },
    { name: 'Appointments', href: '/admin/appointments', icon: '📅' },
    { name: 'Patient Files', href: '/admin/patients', icon: '🏥' },
    { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-slate-400 min-h-screen flex flex-col border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2 group">
          <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.043-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-50 tracking-tight leading-none uppercase">
              Admin <span className="text-teal-500 font-black">Panel</span>
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-grow p-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all group font-medium"
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800/50">
          <p className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] mb-1">
            System Status
          </p>
          <div className="flex items-center gap-2 text-xs text-teal-500">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Trial Mode Active
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
