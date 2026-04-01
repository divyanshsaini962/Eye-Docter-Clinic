import Image from 'next/image';
import React from 'react';

// Use Inter/Roboto font import in layout.js or globals.css
// e.g., import { Inter, Roboto } from 'next/font/google';

// Mock verified Google Map testimonial data for Jhansi (Synth structure)
const verifiedTestimonials = [
  {
    id: 1,
    name: 'Anjali Sharma',
    location: 'Verified Jhansi Patient',
    rating: 5,
    quote: 'Compassionate care, highly advanced diagnostics. Found clarity I hadn\'t seen in years.',
    image: '/images/firsts.png', // Placeholder patient photo
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    location: 'Verified Jhansi Surgical Patient',
    rating: 5,
    quote: 'State-of-the-art surgery. Expert hands and seamless process. Strongly recommend the specialized approach.',
    image: '/images/second.png', // Placeholder patient photo
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    location: 'Global Eyecare Colleague',
    rating: 5,
    quote: 'Integrated Eyecare sets a world-class benchmark. Impressive surgical finesse and medical capability.',
    image: '/images/Third.png', // Placeholder colleague photo
  },
];

const VerifiedTestimonialsHud = () => {
  return (
    // Section uses deep charcoal (#0B101D) and integrated cyan palette (font Inter/Roboto)
    <section className="bg-slate-950 py-12 md:py-16 text-slate-100 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* Authority Headings */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-semibold text-teal-400 tracking-tighter shadow-teal-400">
            PATIENT FEEDBACK.
          </h2>
          <p className="text-base md:text-lg font-medium text-slate-300 tracking-tight">
            Trusted by the local Jhansi community and global eyecare professionals for proven outcomes.
          </p>
        </div>

        {/* 1. Main Feedback Panel - Responsive Container */}
        <div className="relative w-full max-w-6xl mx-auto mb-16 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/40">
          
          <Image
            src="/images/Feedbackbg.png"
            alt="Glassmorphism grid background"
            fill
            className="object-cover object-center z-0 opacity-30"
            quality={90}
          />
          
          {/* 2. Content Grid - Dictates Height Naturally */}
          <div className="relative z-10 p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {verifiedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative group bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-teal-800 flex flex-col items-center text-center space-y-5 transition-colors">
                
                {/* Patient Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-teal-400/50 shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Rating & Google Maps Logo */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-teal-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs tracking-wide">Google Maps Verified</span>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 text-sm md:text-base font-light leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Patient Details */}
                <cite className="not-italic pt-2">
                  <span className="text-slate-50 text-base md:text-lg font-semibold tracking-tight block">{testimonial.name}</span>
                  <span className="text-teal-400/80 text-xs md:text-sm tracking-wide block">{testimonial.location}</span>
                </cite>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Verified Map Location (Interactive Google Map) */}
        <div className="relative aspect-video md:aspect-[21/9] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="Jhansi Location"
            className="absolute inset-0 z-20 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115264.93922129033!2d78.49051877864332!3d25.448425717387438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55934817a!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716500000000!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VerifiedTestimonialsHud;