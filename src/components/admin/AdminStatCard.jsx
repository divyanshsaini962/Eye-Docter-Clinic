import React from 'react';

const AdminStatCard = ({ title, value, icon, trend, trendValue }) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl text-2xl">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}%
          </span>
        )}
      </div>
      <div>
        <p className="text-slate-400 text-sm font-medium tracking-wide uppercase italic mb-1">
          {title}
        </p>
        <h3 className="text-3xl font-black text-slate-950 tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default AdminStatCard;
