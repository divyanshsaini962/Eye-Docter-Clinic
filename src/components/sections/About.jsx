import Image from 'next/image';
import React from 'react';

import Link from 'next/link';

// Specialized Service Pillar Icons (Customized SVGs for specific eyecare expertise)
const EyePillarIcon = () => (
  <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const PrecisionRefractionIcon = () => (
  <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const OpticalExpertiseIcon = () => (
  <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SpecialistCareIcon = () => (
  <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// New, specialized pillars for Integrated Eyecare (Auth structure)
const authorityPillars = [
  { icon: EyePillarIcon, title: 'Integrated Eye Diagnostics', bgColor: 'bg-slate-900' },
  { icon: PrecisionRefractionIcon, title: 'Refractive Surgery Excellence', bgColor: 'bg-slate-900' },
  { icon: OpticalExpertiseIcon, title: 'Custom Ophthalmic Lab', bgColor: 'bg-slate-900' },
  { icon: SpecialistCareIcon, title: 'Multi-Specialty Medicine', bgColor: 'bg-slate-900' },
];

export default function AboutSectionModern() {
  return (
    <section className="bg-slate-50 py-24  text-slate-900 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 1. Specialized Authority Pillars (Synth layout, new content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {authorityPillars.map((pillar, index) => (
            <div key={index} className={`flex items-center gap-5 p-6 rounded-2xl ${pillar.bgColor} text-white shadow-xl`}>
              <div className="p-3 bg-slate-800/50 rounded-full">
                <pillar.icon />
              </div>
              <h3 className="text-xl md:text-xl font-semibold leading-snug tracking-tight">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        {/* 2. Main Title and Vision (Synth structure, original high-auth copy) */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tighter">
            INTEGRATED EYECARE IN JHANSI
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-teal-600 tracking-tight">
            Restoring, Protecting, and Perfecting Your Vision.
          </p>
        </div>

        {/* 3. Split Screen Content (Synth layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Diagonal Photo Frame (Synth aesthetic, new AI image) */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            {/* AI Generated Image: Futuristic Hospital */}
            <Image
              src="/images/Hospital.jpeg" // AI Generated Futuristic Hospital
              alt="Integrated Eyecare Jhansi - Futuristic Eye Hospital"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              quality={90}
            />
            {/* The diagonal line aesthetic (Synth) */}
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors"></div>
          </div>

          {/* Right Side: Authority Copy (New high-auth content blocks) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-10">
            
            <div className="space-y-4 text-lg md:text-xl font-normal text-slate-700 leading-relaxed">
              <p>
                Integrated Eyecare stands as a cornerstone institution in Jhansi, recognized globally for setting new standards in ophthalmic care. We are dedicated to delivering a seamless patient experience that pairs advanced technology with profound medical expertise.
              </p>
              <p>
                Our facility is equipped with state-of-the-art diagnostic platforms, enabling us to achieve unrivaled precision in identifying complex ocular conditions. This technological foundation allows us to manage everything from common visual challenges to highly specialized refractive errors and ocular diseases with meticulous accuracy.
              </p>
              <p>
                Led by a distinguished team of surgeons and specialized optometrists, we focus on patient-centric outcomes. We believe in tailored treatment protocols that combine surgical finesse with long-term preventative health, ensuring your visual well-being is maximized at every stage of life.
              </p>
            </div>

            {/* CTA Button (High-auth palette) */}
            <div className="pt-6">
              <Link href="/contact#booking" className="inline-block px-12 py-5 bg-slate-900 text-white text-lg font-semibold tracking-wide rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                Schedule Your Priority Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}