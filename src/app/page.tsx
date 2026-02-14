'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Experience from '@/components/Projects';
import SkillsAndEducation from '@/components/SkillsAndEducation';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] flex flex-col items-center">

      {/* Scroll Section */}
      <ScrollyCanvas frameCount={120}>
        {({ scrollYProgress }) => (
          <Overlay scrollYProgress={scrollYProgress} />
        )}
      </ScrollyCanvas>

      {/* About Section */}
      <About />

      {/* Projects Section (Renamed to Experience in UI) */}
      <Experience />

      {/* Engineering Philosophy */}
      <Philosophy />

      {/* Skills & Education */}
      <SkillsAndEducation />

      {/* Testimonials */}
      <Testimonials />


      {/* Footer / Contact */}
      <footer className="w-full py-20 bg-black/50 border-t border-white/5 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

        <a
          href="https://drive.google.com/uc?export=download&id=1shBDsm2rCF3ft2SgGz7ALWDexJQI8zR1"
          className="mb-12 px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
          download
        >
          Download Resume
        </a>

        <div className="flex flex-col md:flex-row gap-8 mb-12 text-gray-400">
          <a href="mailto:vineetdhiman15@gmail.com" className="hover:text-cyan-400 transition-colors">vineetdhiman15@gmail.com</a>
          <span className="hidden md:inline">•</span>
          <a href="https://linkedin.com/in/vineetdhiman0" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <span className="hidden md:inline">•</span>
          <a href="tel:+919780634425" className="hover:text-cyan-400 transition-colors">+91-9780634425</a>
          <span className="hidden md:inline">•</span>
          <a href="https://wa.me/919780634425" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Vineet Dhiman. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
