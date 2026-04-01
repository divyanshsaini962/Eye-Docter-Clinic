import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
          ABOUT OUR <span className="text-teal-500">CLINIC</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-2xl mx-auto">
          Setting the gold standard in ophthalmic care with globally trained surgeons and precision technology.
        </p>
      </div>

      {/* Section 1: Image Left, Text Right (Light Box) */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Professional Clinic Check-in Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image 
                src="/images/about_history.png" 
                alt="Integrated Eyecare Reception and Doctor Consultation"
                fill
                className="object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Our Foundation</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Our History & Mission
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Add your first paragraph of content here describing the history and mission of the clinic. Explain clearly to the patient why your practice is uniquely valuable.
                </p>
                <p>
                  Use this secondary paragraph to dive deeper into the core values, origin story, or the foundational principles that guide your patient care every day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right (White Box) */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
            
            {/* Text Content (Order 2 on mobile, 1 on desktop) */}
            <div className="space-y-6 lg:pr-10 order-2 lg:order-1">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Our Leadership</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Meet The Doctors
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Introduce your lead surgeons and specialists here. Talk about their global training, extensive experience, and areas of sub-specialty.
                </p>
                <p>
                  Building trust is key, so including a brief personal note or clinical philosophy from the head doctors will resonate strongly with prospective patients.
                </p>
              </div>
            </div>

            {/* Leadership Team Portrait */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
              <Image 
                src="/images/about_leadership.png" 
                alt="Expert Surgical Leadership Team"
                fill
                className="object-cover object-top rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Image Left, Text Right (Dark High-Contrast Navy Box) */}
      <section className="bg-slate-950 py-16 md:py-24 text-slate-100 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Advanced Diagnostic Tech */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image 
                src="/images/about_tech.png" 
                alt="State-of-the-Art Ophthalmic Laser Technology"
                fill
                className="object-cover rounded-3xl shadow-2xl border border-teal-500/20 shadow-teal-500/10 hover:shadow-teal-500/30 transition-shadow duration-300" 
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-400 font-bold tracking-wider text-sm uppercase">Our Facility</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                State-of-the-Art Hospital
              </h2>
              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>
                  Describe your clinic's modern facilities, surgical theaters, and specialized recovery rooms. A dark, high-contrast section like this is perfect for highlighting technology.
                </p>
                <p>
                  Detail the comfort and safety standards you maintain, ensuring patients that they are walking into a premium, world-class eyecare environment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Text Left, Image Right (Light Box) */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
            
            {/* Text Content (Order 2 on mobile, 1 on desktop) */}
            <div className="space-y-6 lg:pr-10 order-2 lg:order-1">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Community Impact</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Jhansi's Trusted Choice
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Use this final section to talk about local community involvement, awards, or the thousands of successful patient outcomes you've achieved in the Jhansi area.
                </p>
                <p>
                  Social proof and community ties strongly reinforce the 'Clinical Trust' branding.
                </p>
              </div>
              
              <div className="pt-4">
                <a href="/schedule" className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                  Schedule A Visit
                </a>
              </div>
            </div>

            {/* Community Restored Vision Lifestyle */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
              <Image 
                src="/images/about_community.png" 
                alt="Senior woman enjoying clear vision in nature"
                fill
                className="object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
