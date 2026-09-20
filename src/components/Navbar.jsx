import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to add backdrop blur and subtle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#201319]/95 backdrop-blur-md py-4 border-b border-white/10'
          : isScrolled 
            ? 'bg-[#180f14]/80 backdrop-blur-xl py-3.5 border-b border-white/10 shadow-lg' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-black tracking-tight group flex items-center gap-0.5">
            <span className="group-hover:text-[#f8d7c2] transition-colors">Navya</span>
            <span className="text-[#e59a68] text-3xl leading-none">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-sm font-semibold tracking-wide relative group transition-colors duration-300 py-1"
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e59a68] to-[#9b4b66] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Resume & CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[#e59a68]/40 bg-[#e59a68]/10 text-[#fde4d0] hover:bg-[#e59a68]/20 hover:text-white text-xs font-bold transition-all duration-300 backdrop-blur-md flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-[#e59a68]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8b3852] to-[#a64866] hover:from-[#9b425d] hover:to-[#b85373] text-white text-xs font-bold tracking-wide transition-all duration-300 shadow-[0_4px_15px_rgba(139,56,82,0.35)] hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-6 opacity-100 bg-[#201319]/98 border-b border-white/10 shadow-2xl backdrop-blur-xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-[#f8d7c2] font-semibold text-base border-b border-white/10 pb-2.5 transition-colors flex items-center justify-between"
            >
              <span>{link}</span>
              <span className="text-[#e59a68] text-xs font-mono">&rarr;</span>
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
             <a 
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="px-5 py-2.5 rounded-full border border-[#e59a68]/50 text-[#fde4d0] font-bold text-center text-sm"
             >
               View Resume PDF
             </a>
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8b3852] to-[#a64866] text-white font-bold text-center text-sm shadow-md"
             >
               Get In Touch
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

