import React from 'react';
import Link from 'next/link';

// Icon Components (using simplified SVG examples - replace with your actual icons)
const ExpertCareIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const PrecisionTechIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ServiceIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const OutcomeIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrustIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SpecializedIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-teal-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AdvantagesSection = () => {
  const advantagePillars = [
    {
      icon: ExpertCareIcon,
      title: 'Globally Trained Surgeons',
      description: 'Led by distinguished ophthalmic surgeons with extensive training and experience.',
    },
    {
      icon: PrecisionTechIcon,
      title: 'Precision Diagnostics Platform',
      description: 'Equipped with state-of-the-art diagnostic imaging (OCT, Retinal Mapping) for accurate results.',
    },
    {
      icon: ServiceIcon,
      title: 'Personalized Ocular Protocols',
      description: 'Comprehensive, customized eyecare from diagnostics to specialized surgical interventions.',
    },
    {
      icon: OutcomeIcon,
      title: 'Outcome-Centered Approach',
      description: 'Prioritizing both patient visual results and overall ocular well-being.',
    },
    {
      icon: TrustIcon,
      title: 'Jhansi Vision Benchmark',
      description: 'Trusted by the community as the region\'s gold standard in eyecare excellence.',
    },
    {
      icon: SpecializedIcon,
      title: 'Comprehensive Eye Hospital',
      description: 'Your one-stop destination for advanced eyecare solutions, all under one roof.',
    },
  ];

  return (
    <section className="bg-slate-950 py-12 md:py-16 text-slate-900 overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          {/* Main Title - Responsive sizing to prevent excessive scaling */}
          <h2 className="text-slate-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tighter shadow-slate-800">
            PRECISION PILLARS.
          </h2>
          {/* Subtitle - Fixed sizing with a small cap on larger viewports */}
          <p className="text-teal-400 text-base md:text-lg font-semibold tracking-tight">
            The Integrated Eyecare Advantage in Jhansi
          </p>
        </div>

        {/* Corrected Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagePillars.map((pillar, index) => (
            <div key={index} className="col-span-1 group">
              <div className="h-full bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg group-hover:shadow-teal-400/20 group-hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                {/* Icon in Black Container */}
                <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-teal-900 mb-5 transition-colors">
                  <pillar.icon />
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base font-normal text-slate-700 leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;