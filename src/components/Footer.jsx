import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#10090e] text-[#c9b7be] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold tracking-wider">Navya Tatakuntla</p>
          <p className="text-[#e59a68]">B.Tech &bull; Computer Science Engineering</p>
          <p className="text-white/60">Full-Stack Development & AI/ML</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-white font-bold tracking-wider">Quick Navigation</p>
          <div className="flex gap-4">
            <a href="#projects" className="underline hover:text-[#e59a68] transition-colors mt-0.5 underline-offset-4 decoration-1">Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#e59a68] transition-colors mt-0.5 underline-offset-4 decoration-1">Resume PDF</a>
            <a href="#about" className="underline hover:text-[#e59a68] transition-colors mt-0.5 underline-offset-4 decoration-1">About</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end">
          <p className="text-white font-bold tracking-wider">Location</p>
          <p className="text-white/80">Visakhapatnam, Andhra Pradesh</p>
          <p className="text-[#e59a68]">Open for Opportunities</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 
          className="text-[18vw] md:text-[16vw] leading-none font-bold tracking-tighter lowercase select-none text-[#fdfbf9]/95 hover:text-[#e59a68] transition-colors duration-500 w-full text-center cursor-default"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          navya
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full items-end font-medium border-t border-white/10 pt-8">
        <div className="flex flex-col gap-2">
          <a href="https://www.linkedin.com/in/navya-tatakuntla" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-[#e59a68]">
            LinkedIn: in/navya-tatakuntla
          </a>
          <p className="text-white/50 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Navya Tatakuntla &bull; All Rights Reserved
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:navyatatakuntla99@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase text-white/90">
            navyatatakuntla99@gmail.com
          </a>
          <a href="tel:+919618693109" className="text-white/60 hover:text-white transition-colors mt-0.5">
            +91 9618693109
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="inline-flex items-center gap-1 text-[#e59a68] hover:text-white transition-colors">
            <span>Back to Top</span>
            <span>&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

