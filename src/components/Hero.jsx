import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import navyaImage from '../assets/navya.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#140d12]">
      {/* Background Image with Warm Vignette/Overlay matching photo palette */}
      <img
        src={navyaImage}
        alt="Navya Tatakuntla - Full Stack Developer"
        className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-[center_35%] z-0 select-none pointer-events-none brightness-105 contrast-[1.03]"
      />

      {/* Multi-directional gradient overlays to ensure high contrast for typography while showcasing the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140d12] via-[#140d12]/60 to-black/20 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#140d12]/95 via-[#140d12]/70 to-transparent md:w-[70%] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#140d12]/30 to-[#140d12]/80 z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen px-6 pt-32 pb-16 md:pb-24 md:px-12 max-w-7xl mx-auto flex flex-col justify-end md:justify-between items-start text-left w-full">
        
        {/* Top spacer for desktop */}
        <div className="hidden md:block"></div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          
          {/* Left Side: Text and Buttons */}
          <div className="flex flex-col items-start text-left max-w-2xl w-full">
            {/* Status Pill */}
            <div 
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3d1a26]/70 border border-[#e59a68]/30 backdrop-blur-md mb-5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-[#fde4d0]">
                B.Tech Computer Science &bull; Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              data-aos="fade-up"
              className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hi, I’m <br /> 
              <span className="bg-gradient-to-r from-[#fde4d0] via-[#e59a68] to-[#d66f8a] bg-clip-text text-transparent">
                Navya Tatakuntla
              </span>
            </h1>

            {/* Subheading */}
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#f5ece6]/90 text-base md:text-lg font-normal mb-8 max-w-xl leading-relaxed drop-shadow-md"
            >
              Computer Science student & Full-Stack Developer specializing in building modern web platforms, secure database architectures, and data-driven applications.
            </p>

            {/* Action Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-row flex-wrap items-center gap-3.5 w-full"
            >
              {/* Primary Button */}
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8b3852] to-[#a64866] hover:from-[#9c425f] hover:to-[#b95575] text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(139,56,82,0.4)] text-center text-sm"
              >
                View My Projects
              </a>
              
              {/* Secondary Button - Glassmorphism style */}
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-[#201319]/60 border border-white/20 text-[#fdfbf9] font-bold hover:bg-[#341b26]/70 hover:border-[#e59a68]/60 transition-all duration-300 backdrop-blur-md text-center text-sm"
              >
                Contact Me
              </a>

              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#fde4d0] font-semibold transition-all duration-300 backdrop-blur-md text-center text-sm flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#e59a68] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume PDF
              </a>
            </div>
          </div>

          {/* Right Side: Social Media Links */}
          <div 
            data-aos="fade-left"
            data-aos-delay="600"
            className="mt-6 md:mt-0 flex flex-row md:flex-col items-center gap-3 self-start md:self-auto z-30"
          >
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/navya-tatakuntla" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/15 bg-[#201319]/60 backdrop-blur-md flex justify-center items-center hover:scale-110 hover:bg-[#8b3852] hover:border-[#e59a68]/60 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] text-white group"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5 text-[#f5ece6] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Email Link */}
            <a 
              href="mailto:navyatatakuntla99@gmail.com"
              className="w-12 h-12 rounded-full border border-white/15 bg-[#201319]/60 backdrop-blur-md flex justify-center items-center hover:scale-110 hover:bg-[#8b3852] hover:border-[#e59a68]/60 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] text-white group"
              title="Send Email"
            >
              <svg className="w-5 h-5 text-[#f5ece6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Phone Link */}
            <a 
              href="tel:+919618693109"
              className="w-12 h-12 rounded-full border border-white/15 bg-[#201319]/60 backdrop-blur-md flex justify-center items-center hover:scale-110 hover:bg-[#8b3852] hover:border-[#e59a68]/60 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] text-white group"
              title="Call Phone"
            >
              <svg className="w-5 h-5 text-[#f5ece6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          data-aos="fade-up"
          data-aos-delay="800"
          className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="animate-bounce flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#f5ece6]/60">Scroll</span>
            <svg 
              className="w-5 h-5 text-[#e59a68] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

