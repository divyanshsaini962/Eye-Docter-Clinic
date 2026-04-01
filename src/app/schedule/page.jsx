import React from 'react';

export default function SchedulePage() {
  return (
    <main className="min-h-screen pt-32 pb-16 bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 lg:mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
          BOOK YOUR <span className="text-teal-500">APPOINTMENT</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-2xl mx-auto">
          Take the first step toward clearer vision by scheduling a priority consultation with our specialists.
        </p>
      </div>

      {/* Section 1: Image Left, Text Right (Light Box) */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Placeholder */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-slate-200 border-2 border-dashed border-slate-400 rounded-3xl flex flex-col items-center justify-center shadow-inner group transition-all hover:bg-slate-300">
               <svg className="w-12 h-12 text-slate-400 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <span className="text-slate-600 font-medium tracking-wide">Booking Options Image</span>
               <span className="text-sm text-slate-500 mt-1 px-4 text-center">Replace this div with your &lt;Image /&gt; component</span>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Easy Booking</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                How to Schedule
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Explain the easiest ways patients can schedule an appointment. Mention if they need a referral, or if they can simply walk in or call.
                </p>
                <p>
                  You might want to embed an online booking widget (like Calendly or a native hospital system) right here, or just list the phone numbers vividly.
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
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Preparation</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Before Your Visit
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Provide a checklist for new patients. What should they bring? (ID, Insurance Card, Current Glasses/Prescriptions).
                </p>
                <p>
                  Letting them know if their eyes will be dilated is also extremely helpful so they can arrange for a driver if necessary.
                </p>
              </div>
            </div>

            {/* Image Placeholder (Order 1 on mobile, 2 on desktop) */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-slate-200 border-2 border-dashed border-slate-400 rounded-3xl flex flex-col items-center justify-center shadow-inner group transition-all hover:bg-slate-300 order-1 lg:order-2">
               <svg className="w-12 h-12 text-slate-400 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <span className="text-slate-600 font-medium tracking-wide">Preparation Image</span>
               <span className="text-sm text-slate-500 mt-1 px-4 text-center">Replace this div with your &lt;Image /&gt; component</span>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Image Left, Text Right (Dark High-Contrast Navy Box) */}
      <section className="bg-slate-950 py-16 md:py-24 text-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Placeholder */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-slate-800 border-2 border-dashed border-slate-600 rounded-3xl flex flex-col items-center justify-center shadow-2xl group transition-all hover:bg-slate-700">
               <svg className="w-12 h-12 text-slate-500 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <span className="text-slate-300 font-medium tracking-wide">Consultation Image</span>
               <span className="text-sm text-slate-400 mt-1 px-4 text-center">Replace this div with your &lt;Image /&gt; component</span>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 lg:pl-10">
              <span className="text-teal-400 font-bold tracking-wider text-sm uppercase">The Experience</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                What to Expect
              </h2>
              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                <p>
                  Outline the patient's journey on the day of their appointment. From the front desk greeting, through preliminary vision testing, and their time with the doctor.
                </p>
                <p>
                  Setting accurate expectations greatly reduces patient anxiety and builds clinical trust.
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
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Financials</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Insurance & Payments
              </h2>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Reassure patients by listing the major insurance providers you accept, and briefly explaining your payment and financing options.
                </p>
                <p>
                  Clear financial communication prevents misunderstandings and proves that your clinic cares about the patient's overall experience.
                </p>
              </div>
              
            </div>

            {/* Image Placeholder (Order 1 on mobile, 2 on desktop) */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-slate-200 border-2 border-dashed border-slate-400 rounded-3xl flex flex-col items-center justify-center shadow-inner group transition-all hover:bg-slate-300 order-1 lg:order-2">
               <svg className="w-12 h-12 text-slate-400 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <span className="text-slate-600 font-medium tracking-wide">Insurance/Finance Image</span>
               <span className="text-sm text-slate-500 mt-1 px-4 text-center">Replace this div with your &lt;Image /&gt; component</span>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
