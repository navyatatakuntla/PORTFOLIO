import React from 'react';
import navyaImage from '../assets/navya.jpg';

const About = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      school: "Gayatri Vidya Parishad College of Engineering for Women",
      affiliation: "Visakhapatnam, Andhra Pradesh",
      period: "Expected in June 2027",
      grade: "8.25 CGPA"
    },
    {
      degree: "Diploma in Computer Science",
      field: "Computer Science & Engineering",
      school: "Andhra Polytechnic College",
      affiliation: "Kakinada, Andhra Pradesh",
      period: "2021 - 2024",
      grade: "87.75%"
    },
    {
      degree: "SSC (Secondary School Certificate)",
      field: "General Education",
      school: "Zphs High School",
      affiliation: "Pippara, Andhra Pradesh",
      period: "2020 - 2021",
      grade: "98%"
    }
  ];

  const highlights = [
    "1st Prize Winner at Aditya Engineering College (Surampalem) for architecting 'Hungry Hearts' — a community food donation and distribution platform.",
    "Java Full-Stack Developer with hands-on internship experience designing end-to-end web applications with React, Node.js, and SQLite.",
    "Strong technical foundation across C, C++, Python, Data Handling, Cloud Platforms (Azure, AWS, Google, Oracle), and SQL/NoSQL databases.",
    "Proactive problem solver and collaborator known for quick adaptability, leadership in team initiatives, and clear communication across English (C1), Telugu (C2), and Hindi."
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-[#5c1f32] via-[#6d253c] to-[#481726] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e59a68]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#2a0e18]/40 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative z-20">
        
        {/* Row 1: Profile & Objective */}
        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
          {/* Left Column: Lanyard Badge */}
          <div className="flex flex-col items-center w-full md:w-[320px] shrink-0">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full">
              {/* Lanyard strap */}
              <div className="absolute -top-32 left-1/2 w-4 h-40 bg-[#2b161f] transform -translate-x-1/2 shadow-lg z-0 border-x border-[#e59a68]/20"></div>
              {/* Lanyard clip */}
              <div className="absolute -top-6 left-1/2 w-7 h-12 bg-gradient-to-b from-[#e59a68] to-[#b87347] rounded-sm border border-[#f5c6a5] transform -translate-x-1/2 z-10 shadow-md flex items-center justify-center">
                <div className="w-2.5 h-6 bg-[#2a131b]/60 rounded-full"></div>
              </div>
              
              {/* Badge Card */}
              <div className="bg-[#1f1118]/95 backdrop-blur-md w-full max-w-[290px] rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-[#e59a68]/30">
                {/* Cutout Hole */}
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#1f1118] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-t border-x border-[#e59a68]/30">
                  <div className="w-8 h-2 bg-black/50 rounded-full shadow-inner"></div>
                </div>
                {/* Image Container */}
                <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#140d12] border border-white/10 shadow-inner mt-2">
                  <img 
                    src={navyaImage} 
                    alt="Navya Tatakuntla" 
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
                {/* Badge text info */}
                <div className="mt-4 text-center">
                  <h3 className="text-[#fdfbf9] text-base font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    NAVYA TATAKUNTLA
                  </h3>
                  <p className="text-[11px] text-[#e59a68] font-bold uppercase tracking-wider mt-1">
                    B.Tech &bull; Computer Science
                  </p>
                  <p className="text-[10px] text-white/60 font-medium mt-0.5">
                    Gayatri Vidya Parishad CEW
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
            <div className="inline-block border border-[#e59a68]/40 rounded-full px-4 py-1 text-[10px] font-extrabold tracking-[0.2em] mb-4 uppercase bg-[#e59a68]/10 text-[#fde4d0]">
              Biography & Objective
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Hello & Welcome!
            </h2>
            <p className="text-base md:text-lg font-medium mb-8 leading-relaxed text-[#fdeee4]">
              Enthusiastic and goal-oriented B.Tech Computer Science student with a strong foundation in programming, full-stack development, and data handling. Skilled in both modern engineering tools and analytical thinking, with hands-on experience in leading teams, collaborating effectively, and driving impactful results. Known for quick learning, adaptability, and a proactive mindset, I seek to contribute to innovative projects and dynamic environments while continuously expanding my knowledge.
            </p>

            {/* Core Highlights & Strengths */}
            <div className="border-t border-white/20 pt-8 mt-8">
              <h3 className="text-lg font-extrabold text-[#fde4d0] mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e59a68]"></span>
                Key Strengths & Highlights
              </h3>
              <div className="flex flex-col gap-3.5">
                {highlights.map((act, actIdx) => (
                  <div key={actIdx} className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-[#e59a68] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-[#fcf5f0]/95 leading-relaxed">{act}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Education Grid */}
        <div className="border-t border-white/15 pt-16 flex flex-col gap-8">
          <div data-aos="fade-up" className="text-center md:text-left">
            <span className="text-[10px] font-extrabold tracking-[0.2em] block uppercase text-[#e59a68] mb-2">
              Academic Background
            </span>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationList.map((edu, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-[#24121b]/80 border border-white/15 hover:border-[#e59a68]/60 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm group"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#e59a68]/20 text-[#fde4d0] border border-[#e59a68]/30 px-3 py-1 rounded-full inline-block">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-black text-white mt-4 mb-1 leading-snug group-hover:text-[#fde4d0] transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-bold text-[#e59a68] uppercase tracking-wide mb-4">
                    {edu.field}
                  </p>
                  <p className="text-sm font-semibold text-white/90 mb-1 leading-relaxed">
                    {edu.school}
                  </p>
                  <p className="text-xs font-medium text-white/60">
                    {edu.affiliation}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold text-white/60 uppercase">Score / Grade</span>
                  <span className="text-base font-black text-[#fde4d0] bg-[#e59a68]/15 px-3 py-1 rounded-lg border border-[#e59a68]/30">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Torn paper divider at bottom transitioning seamlessly into Skills dark section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#140d12]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;

