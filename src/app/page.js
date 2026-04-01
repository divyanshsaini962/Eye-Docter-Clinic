import Image from "next/image";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Ouradvantage from "@/components/sections/OurAdvantage";
import BlogPreview from "@/components/sections/BlogPreview";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {

   return (
    <main>
      <Hero />
      <About />
      <Ouradvantage/>
      <Services />
      <Testimonials />
      <BlogPreview />
    </main>
  );

}
