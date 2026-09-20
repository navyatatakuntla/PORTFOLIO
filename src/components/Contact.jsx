import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link with prefilled subject and body
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:navyatatakuntla99@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#140d12] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-[#2a1420]">
      {/* Huge Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/[0.03] uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-gradient-to-br from-[#6a253a] via-[#591d2f] to-[#3e121f] w-full md:w-[90%] lg:w-[80%] p-8 md:p-16 text-white flex flex-col justify-between shadow-2xl border-t md:border-l border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#e59a68] mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Let’s Connect & Collaborate
              </h2>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap gap-3 text-xs">
              <a 
                href="mailto:navyatatakuntla99@gmail.com" 
                className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#fde4d0] font-semibold transition-all flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-[#e59a68]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                navyatatakuntla99@gmail.com
              </a>
              <a 
                href="tel:+919618693109" 
                className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#fde4d0] font-semibold transition-all flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 text-[#e59a68]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9618693109
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <label className="text-xs text-[#fde4d0]/80 font-bold uppercase tracking-wider block mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditi Sharma" 
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-[#e59a68] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs text-[#fde4d0]/80 font-bold uppercase tracking-wider block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. aditi@example.com" 
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-[#e59a68] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs text-[#fde4d0]/80 font-bold uppercase tracking-wider block mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity" 
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-[#e59a68] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <label className="text-xs text-[#fde4d0]/80 font-bold uppercase tracking-wider block mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Navya, I came across your portfolio and would like to connect regarding..." 
                    className="w-full h-full min-h-[160px] bg-transparent border-b border-white/30 pb-3 text-lg focus:outline-none focus:border-[#e59a68] transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 border-t border-white/15">
              <div className="flex items-center gap-3 text-xs text-white/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                <span>Based in Visakhapatnam, Andhra Pradesh &bull; Open to Remote & On-site roles</span>
              </div>

              <button 
                type="submit" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e59a68] to-[#d66f8a] hover:from-[#f3b77d] hover:to-[#e0809b] text-[#1f1118] font-black flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap self-stretch sm:self-auto cursor-pointer"
              >
                Send Message via Email
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            {submitted && (
              <p className="text-xs text-[#fde4d0] font-semibold text-center bg-white/10 py-2 rounded-lg">
                Redirecting to your email client to send message to navyatatakuntla99@gmail.com!
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

