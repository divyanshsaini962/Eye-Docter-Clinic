import React from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
          ADVANCED <span className="text-teal-500">SERVICES</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-2xl mx-auto">
          Comprehensive ocular diagnostics and specialized surgical protocols designed for total visual well-being.
        </p>
      </div>

      {/* Section 1: Image Left, Text Right (Light Box) */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Professional Diagnostic Imaging */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image 
                src="/images/services_diagnostic.png" 
                alt="Advanced Ophthalmic Diagnostic Imaging Machine"
                fill
                className="object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Diagnostic Expertise</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Precision Imaging & Mapping
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Explain your advanced diagnostic capabilities here, such as OCT imaging, visual field analysis, and corneal topography.
                </p>
                <p>
                  Let your patients know how these foundational technologies lead to more accurate diagnoses and safer, personalized treatment plans.
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
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Surgical Care</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Advanced Cataract Surgery
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Describe your cataract and lens replacement procedures here. Discuss the minimally invasive techniques and premium IOL options available.
                </p>
                <p>
                  Reassure patients about the quick recovery times, the safety protocols, and the life-changing visual clarity they can expect post-surgery.
                </p>
              </div>
            </div>

            {/* Advanced Cataract Surgery Microscope */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
              <Image 
                src="/images/services_cataract.png" 
                alt="State-of-the-art Surgical Microscope in Operating Theater"
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Futuristic LASIK Workstation */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image 
                src="/images/services_lasik.png" 
                alt="Advanced LASIK Vision Correction Laser Workstation"
                fill
                className="object-cover rounded-3xl shadow-2xl border border-teal-500/20 shadow-teal-500/10 hover:shadow-teal-500/30 transition-shadow duration-300" 
              />
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-400 font-bold tracking-wider text-sm uppercase">Refractive Sub-Specialty</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                LASIK & Vision Correction
              </h2>
              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>
                  Highlight your refractive surgery services, such as LASIK, PRK, or SMILE procedures.
                </p>
                <p>
                  The dark clinical styling of this section heavily reinforces the idea of cutting-edge lasers, precise refractive modifications, and highly technical procedures.
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
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Comprehensive Care</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Glaucoma & Retina Management
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Use this final service section to describe chronic disease management. Detail therapies and surgical interventions for conditions like Glaucoma or Diabetic Retinopathy.
                </p>
                <p>
                  Reinforce the idea that Integrated Eyecare provides continuous, holistic support for long-term health.
                </p>
              </div>
              
              <div className="pt-4">
                <a href="/schedule" className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                  Consult A Specialist
                </a>
              </div>
            </div>

            {/* Compassionate Glaucoma Care */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
              <Image 
                src="/images/services_glaucoma.png" 
                alt="Doctor examining senior patient with a slit lamp for Glaucoma"
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
