"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminStatCard from '@/components/admin/AdminStatCard';

export default function AdminPage() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/appointments');
        const data = await response.json();
        if (data.success) {
          setAppointments(data.data);
        } else {
          setError('Failed to load appointments');
        }
      } catch (err) {
        setError('Connection error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <span className="text-teal-600 font-bold tracking-wider text-[10px] uppercase">Overview Dashboard</span>
          <h1 className="text-4xl font-black text-slate-950 tracking-tight">
            Welcome, <span className="text-teal-600">Administrator</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Manage your clinic operations and content from one secure portal.</p>
        </div>
        <Link 
          href="/admin/posts"
          className="bg-slate-950 text-white px-8 py-4 rounded-3xl font-bold tracking-tighter hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-500/20"
        >
          Manage All Content
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard title="Total Appointments" value={appointments.length.toString()} icon="📅" trend="up" trendValue="+Live" />
        <AdminStatCard title="Active Patients" value="--" icon="🏥" trend="up" trendValue="0" />
        <AdminStatCard title="Site Traffic" value="--" icon="📡" trend="down" trendValue="0" />
        <AdminStatCard title="System Performance" value="99.9%" icon="⚡" />
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div className="space-y-1">
                <h2 className="text-xl font-black text-slate-950 tracking-tight uppercase italic">Live <span className="text-teal-600">Booking Feed</span></h2>
                <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase">Verified Patient Requests</p>
            </div>
            <Link href="/admin/appointments" className="text-teal-600 font-black text-[10px] uppercase tracking-widest hover:text-teal-800 transition-colors px-4 py-2 bg-teal-50 rounded-full border border-teal-100">
              Refresh Feed ↻
            </Link>
        </div>

        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-20 text-center uppercase font-black text-slate-300 tracking-widest text-[10px] animate-pulse">
                Synchronizing Clinical Data...
            </div>
          ) : error ? (
            <div className="p-20 text-center uppercase font-black text-rose-300 tracking-widest text-[10px]">
                {error}
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase font-black tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-8 py-6">Patient Name</th>
                  <th className="px-8 py-6">Service Area</th>
                  <th className="px-8 py-6">Preferred Date</th>
                  <th className="px-8 py-6">Phone Number</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-600">
                {appointments.length > 0 ? (
                  appointments.map((appt) => (
                    <tr key={appt._id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                            <span className="text-slate-950 font-black uppercase text-xs italic tracking-tight">{appt.name}</span>
                            <span className="text-[9px] text-slate-400 font-bold lowercase tracking-tighter">{appt.email}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-teal-100">
                          {appt.service}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-xs">{formatDate(appt.preferredDate)}</span>
                            <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Selected Date</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-slate-600 font-black text-[10px] tracking-widest uppercase">{appt.phone}</td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                            appt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                            appt.status === 'Pending' ? 'bg-amber-50 text-amber-500 border-amber-100' : 
                            'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            appt.status === 'Confirmed' ? 'bg-emerald-600' : 
                            appt.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
                          }`}></span>
                          {appt.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="text-slate-300 hover:text-teal-600 transition-colors font-black text-xs uppercase tracking-tighter">Review •••</button>
                      </td>
                    </tr>
                  ))
                ) : (
                    <tr>
                        <td colSpan="6" className="p-20 text-center uppercase font-black text-slate-300 tracking-widest text-[10px]">
                            No Appointments Recorded Yet
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}
