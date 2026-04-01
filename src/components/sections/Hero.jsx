import Image from 'next/image';
import Link from 'next/link';

// You will likely want to import professional fonts like Poppins (Sans-serif) or Inter in your layout.js/globals.css
// Example import in Next.js layout:
// import { Poppins } from 'next/font/google'
// const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const PrecisionEyeHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] pt-32 pb-16 lg:py-0 overflow-hidden bg-white text-slate-900 font-sans flex items-center">
      
      {/* 1. Optimized and Seamless Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/EYES.png" // Optimized WebP filename
          alt="Advanced diagnostic 3D eye scan with digital interface overlays"
          fill
          priority // High priority loading for hero image
          className="object-cover object-center lg:object-right w-full h-full opacity-100" // Responsive positioning
          quality={95}
        />
        {/* Subtle radial vignette/fade on the left for text readability on smaller screens */}
        <div className="absolute inset-0 z-10 lg:hidden bg-white/80"></div>
        {/* Subtle background overlay to reduce image contrast on large screens */}
        <div className="hidden lg:block absolute inset-0 z-10 bg-white opacity-20"></div>
      </div>

      {/* 2. Content Overlay Container (Grid for structure and positioning) */}
      <div className="relative z-20 w-full container mx-auto px-6 md:px-12 grid grid-cols-12 items-center gap-y-8">
        
        {/* Content Area (Left-side on large screens, centered on mobile) */}
        <div className="col-span-12 lg:col-span-7 space-y-6 md:space-y-8 lg:pr-12 text-left">
          
          {/* Practice Branding/Name (Subtle) */}
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-semibold text-teal-600 tracking-tight">
              INTEGRATED EYECARE
            </span>
          </div>

          {/* Headline (Uses bold, sans-serif font) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-[1.1] font-bold text-slate-900 tracking-tight">
            PRECISION VISION. <br />
            ADVANCED CARE.
          </h1>

          {/* Subheadline (Clean, professional, easy-to-read font) */}
          <p className=" text-lg md:text-xl font-normal text-slate-700 leading-relaxed md:leading-relaxed max-w-2xl md:max-w-xl">
            Trust your eyes to surgical specialists using state-of-the-art diagnostics and personalized treatment protocols.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 md:pt-10">
            <Link
              href="/contact#booking"
              className="inline-block px-8 py-4 sm:px-14 sm:py-5 bg-teal-600 text-white text-base sm:text-lg font-medium tracking-wide rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto text-center"
            >
              Request Consultation
            </Link>
            
            <Link
              href="/specialties"
              className="inline-block px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-medium tracking-wide text-teal-700 hover:text-teal-800 group border border-slate-200 hover:border-slate-300 rounded-full transition-all w-full sm:w-auto text-center"
            >
              Our Specialties 
              {/* Subtle hover icon animation */}
              <span className="inline-block ml-3 group-hover:translate-x-1.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionEyeHero;