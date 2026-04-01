"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      if (data.success) {
        setAppointments(data.data);
      } else {
        setError('Failed to load clinical feed');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
          <span className="text-teal-600 font-bold tracking-wider text-[10px] uppercase underline decoration-teal-500/30 underline-offset-4">Patient Registry</span>
          <h1 className="text-4xl font-black text-slate-950 tracking-tight italic uppercase">
            All <span className="text-teal-600">Appointments</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Review and manage patient requests from across your clinical network.</p>
        </div>
        <div className="flex gap-4">
            <button 
              onClick={fetchAppointments}
              className="bg-slate-50 text-slate-900 border border-slate-200 px-6 py-4 rounded-3xl font-black tracking-tighter hover:bg-slate-100 transition-all text-xs uppercase"
            >
              Refresh ↻
            </button>
            <Link 
              href="/admin"
              className="bg-slate-950 text-white px-8 py-4 rounded-3xl font-bold tracking-tighter hover:bg-teal-600 transition-all shadow-xl hover:shadow-teal-500/20 text-xs uppercase"
            >
              Dashboard Home
            </Link>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-32 text-center uppercase font-black text-slate-300 tracking-widest text-[11px] animate-pulse">
                Synchronizing Medical Records...
            </div>
          ) : error ? (
            <div className="p-32 text-center uppercase font-black text-rose-300 tracking-widest text-[11px] border border-rose-50 bg-rose-50/10 m-8 rounded-[2rem]">
                {error}
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase font-black tracking-widest text-slate-400 border-b border-slate-100 italic">
                  <th className="px-10 py-8">Patient Detail</th>
                  <th className="px-10 py-8">Clinical Service</th>
                  <th className="px-10 py-8">Schedule Date</th>
                  <th className="px-10 py-8">Phone Contact</th>
                  <th className="px-10 py-8 font-black">Clinical Status</th>
                  <th className="px-10 py-8 text-right">Review</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm font-medium text-slate-600">
                {appointments.length > 0 ? (
                  appointments.map((appt) => (
                    <tr key={appt._id} className="hover:bg-slate-50/30 transition-all duration-300 group">
                      <td className="px-10 py-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-slate-950 font-black uppercase text-xs tracking-tight italic group-hover:text-teal-600 transition-colors">{appt.name}</span>
                            <span className="text-[10px] text-slate-400 font-bold lowercase tracking-tighter bg-slate-50 px-2 py-0.5 rounded-md self-start">{appt.email}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-teal-100 shadow-sm">
                          {appt.service}
                        </span>
                      </td>
                      <td className="px-10 py-8 font-bold text-slate-900 italic text-xs">
                        {formatDate(appt.preferredDate)}
                      </td>
                      <td className="px-10 py-8 text-slate-600 font-black text-[10px] tracking-widest uppercase">
                        {appt.phone}
                      </td>
                      <td className="px-10 py-8">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                            appt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                            appt.status === 'Pending' ? 'bg-amber-50 text-amber-500 border-amber-100' : 
                            'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            appt.status === 'Confirmed' ? 'bg-emerald-600' : 
                            appt.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
                          }`}></span>
                          {appt.status}
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex justify-end gap-2 translate-x-4 opacity-30 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                            <button className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-teal-600 transition-colors shadow-lg">✓</button>
                            <button className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 hover:border-rose-100 transition-all">✕</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                    <tr>
                        <td colSpan="6" className="p-32 text-center uppercase font-black text-slate-300 tracking-widest text-[11px] italic bg-slate-50/30">
                            No Historical Patient Data Found
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
