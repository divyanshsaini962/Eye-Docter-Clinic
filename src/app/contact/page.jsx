"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Routine Eye Exam',
    preferredDate: '',
    message: '',
  });

  const [captcha, setCaptcha] = useState({ q: '', a: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });

  // Generate a random math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ q: `${num1} + ${num2}`, a: num1 + num2 });
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;

    // Verify Captcha
    if (parseInt(captchaInput) !== captcha.a) {
      setStatus({ type: 'error', text: 'Incorrect captcha. Please try again.' });
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', text: 'Processing clinical request...' });

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', text: 'Appointment request sent! Our team will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '', service: 'Routine Eye Exam', preferredDate: '', message: '' });
        generateCaptcha();
      } else {
        setStatus({ type: 'error', text: result.message || 'Failed to submit request.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Connection error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-16 bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mb-4 uppercase italic">
          CONTACT <span className="text-teal-600">US</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-2xl mx-auto italic">
          We're here to answer your questions and assist you with your eyecare journey.
        </p>
      </div>

      {/* Section 1: Clinic Exterior Location */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image 
                src="/images/contact_location.png" 
                alt="Exterior view of the eye clinic"
                fill
                className="object-cover rounded-3xl shadow-xl border-4 border-white" 
              />
            </div>
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase px-1 border-l-2 border-teal-500">Visit Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight italic uppercase">
                Our Clinic Location
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  <strong>Address:</strong><br/>
                  Integrated Eye Care & Hospital<br/>
                  123 Vision Avenue, Jhansi, UP 284001
                </p>
                <p className="italic text-slate-500 text-sm">
                  Conveniently located in the Medical District with ample reserved parking for patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Appointment Booking Form (CORE FEATURE) */}
      <section id="booking" className="bg-white py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              
              <div className="space-y-8">
                <div>
                  <span className="text-teal-400 font-bold tracking-wider text-sm uppercase">Booking</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none italic uppercase mt-2">
                    Schedule Your <span className="text-teal-400">Visit</span>
                  </h2>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Fill out the form to request an appointment. Our clinical team will reach out to confirm your scheduled time within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-teal-400 shadow-inner border border-slate-800">📞</div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Call Directly</p>
                      <p className="font-bold text-white">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-teal-400 shadow-inner border border-slate-800">📧</div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">General Inquiry</p>
                      <p className="font-bold text-white">care@integratedeye.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[2rem] space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Full Name</label>
                    <input 
                      type="text" required
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Email Address</label>
                    <input 
                      type="email" required
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Phone Number</label>
                    <input 
                      type="tel" required
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Preferred Service</label>
                    <select 
                      value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors appearance-none"
                    >
                      <option>Routine Eye Exam</option>
                      <option>LASIK Consultation</option>
                      <option>Cataract Surgery</option>
                      <option>Glaucoma Treatment</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Preferred Date</label>
                  <input 
                    type="date" required
                    value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-2">Captcha: What is {captcha.q}?</label>
                  <div className="flex gap-4">
                    <input 
                      type="number" required placeholder="Result"
                      value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-teal-500 transition-colors"
                    />
                    <button 
                      type="button" onClick={generateCaptcha}
                      className="px-6 py-4 bg-slate-800 text-slate-400 rounded-2xl hover:bg-slate-700 transition-colors"
                    >🔄</button>
                  </div>
                </div>

                <button 
                  type="submit" disabled={isSubmitting}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm italic transition-all ${
                    isSubmitting ? 'bg-slate-800 text-slate-600' : 'bg-teal-600 text-white hover:bg-teal-500 hover:scale-[1.02] shadow-xl hover:shadow-teal-500/20 active:scale-95'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Request Appointment →'}
                </button>

                {status.text && (
                  <div className={`p-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest border ${
                    status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 
                    status.type === 'error' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-teal-500/10 border-teal-500/30 text-teal-400'
                  }`}>
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Availability & Hours */}
      <section className="bg-slate-950 py-16 md:py-24 text-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative group">
                    <Image src="/images/contact_team.png" alt="Clinical Team" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                 </div>
                 <div className="aspect-square bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative group mt-8">
                    <Image src="/images/contact_support.png" alt="Patient Support" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                 </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="text-teal-400 font-bold tracking-wider text-sm uppercase px-1 border-l-2 border-teal-500">Hours</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight italic uppercase">
                Clinic <span className="text-teal-400">Openings</span>
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-medium">
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span className="text-white">9:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-white">10:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between pb-2 text-teal-400 font-black italic"><span>Sunday</span> <span>Closed (Emergencies Only)</span></li>
                </ul>
              </div>
            </div>
        </div>
      </section>

    </main>
  );
}
