import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// New high-auth data (Rewritten to incorporate images from the blueprint asset)
const specializedServices = [
  {
    image: '/images/first.png', // Asset 1
    title: 'Advanced Diagnostics',
    description: 'Advanced phacoemulsification techniques ensuring precise visual outcomes and clear, restored vision through standard-setting procedures.',
    link: '/services/cataract'
  },
  {
    image: '/images/2nd.png', // Asset 2
    title: 'Specialized Surgery',
    description: 'Integrated diagnostics (OCT, visual fields) combined with personalized surgical protocols to manage pressure and preserve visual function.',
    link: '/services/glaucoma'
  },
  {
    image: '/images/3rd.png', // Asset 3
    title: 'Compassionate Treatment',
    description: 'Specialized management for complex vitreo-retinal conditions, utilizing high-resolution imaging for targeted sight-saving treatment.',
    link: '/services/retina'
  },
];

const IntegratedServicesAuthority = () => {
  return (
    <section className="bg-slate-950 py-12 md:py-16 text-slate-100 overflow-hidden relative font-sans">
      
      

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* Authority Headings (glowing cyan, specialized font weight) */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className=" text-3xl md:text-6xl lg:text-6xl leading-tight md:leading-snug font-semibold text-teal-400 tracking-tighter shadow-teal-400">
            OUR SERVICES.
          </h2>
          <p className=" text-base md:text-lg font-medium text-slate-300 tracking-tight">
            Specialized Ophthalmology Care and Precision Surgical Expertise in Jhansi
          </p>
        </div>

        {/* Corrected Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedServices.map((pillar, index) => (
            <div key={index} className="col-span-1 group">
              <div className="h-full bg-slate-900 bg-opacity-80 p-5 md:p-6 rounded-2xl border border-teal-800/40 hover:border-teal-400 shadow-xl group-hover:shadow-teal-400/20 group-hover:-translate-y-1 transition-all flex flex-col text-center">
                
                {/* 1. Image Holder (Integrated into the card, no icon) */}
                <div className="relative w-full h-48 md:h-56 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.title} - Integrated Eyecare Jhansi`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                
                {/* 2. Content */}
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-50 tracking-tight leading-snug mb-3 flex-1">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base font-light text-slate-300 leading-relaxed flex-grow">
                  {pillar.description}
                </p>
                
                {/* Link/Action */}
                <Link
                  href={pillar.link}
                  className="inline-block mt-6 pb-2 text-sm md:text-base font-medium tracking-wide text-teal-400 group-hover:text-white group"
                >
                  Explore Advanced Care
                  <span className="inline-block ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Central 'Explore All Services' button (integrated from analysis) */}
        <div className="pt-5 text-center">
          <Link
            href="/services"
            className="inline-block px-12 py-5 bg-slate-900 text-teal-400 text-lg font-semibold tracking-wide rounded-xl hover:bg-slate-800 transition-colors shadow-lg border-2 border-teal-900 group"
          >
            Explore All Services
            <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntegratedServicesAuthority;