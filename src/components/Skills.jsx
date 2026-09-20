import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java (Basics)", "JavaScript", "HTML", "CSS", "React.js"]
    },
    {
      title: "Databases & Storage",
      skills: ["SQL", "MySQL", "MongoDB", "PostgreSQL", "SQLite"]
    },
    {
      title: "Cloud Platforms",
      skills: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform", "Oracle Cloud"]
    },
    {
      title: "Web & Full-Stack",
      skills: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "Responsive UI", "Full-Stack Architecture"]
    },
    {
      title: "Spoken Languages",
      skills: ["English (C1 Proficient)", "Telugu (C2 Native Fluency)", "Hindi (Basic)"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "GitHub", "VS Code", "Agile Collaboration", "Team Leadership", "Data Handling"]
    }
  ];

  const certifications = [
    {
      title: "AI Machine Learning Internship",
      provider: "APSCHE - CSC India",
      year: "2024",
      file: "/certificates/csccertificateaimll.png"
    },
    {
      title: "Data Processing Visualization (AI ASCEND)",
      provider: "Accenture",
      year: "2024",
      file: "/certificates/Accenture_Certificate.pdf"
    },
    {
      title: "Hedera Certified Developer Associate (HCDA)",
      provider: "Hedera Hashgraph",
      year: "2024",
      file: "/certificates/hcda_certificate.pdf"
    },
    {
      title: "Hedera Certified Foundation (HCF)",
      provider: "Hedera Hashgraph",
      year: "2024",
      file: "/certificates/Hedera_Foundation_Certificate.pdf"
    },
    {
      title: "Python Internship",
      provider: "SkillDzire",
      year: "2024",
      file: "/certificates/Python_SkillDzire_Certificate.jpg"
    }
  ];

  return (
    <section id="skills" className="bg-[#140d12] py-24 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans border-t border-[#2d1822]">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8b3852]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e59a68]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block border border-[#e59a68]/40 rounded-full px-5 py-1.5 text-xs text-[#e59a68] font-bold mb-4 uppercase tracking-widest bg-[#e59a68]/10">
            Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Skills & <span className="bg-gradient-to-r from-[#e59a68] to-[#d66f8a] bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-[#b8a4aa] max-w-xl font-medium text-sm md:text-base leading-relaxed">
            A comprehensive overview of my core programming competencies, databases, cloud platforms, and verified industry credentials from my resume.
          </p>
        </div>

        {/* Two-Column Grid: Skills on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Skills Grid - 7 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="bg-[#1e131a]/80 border border-white/10 hover:border-[#e59a68]/50 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(229,154,104,0.08)] group"
              >
                <h3 className="text-[#fde4d0] font-extrabold text-base mb-3.5 tracking-tight group-hover:text-[#e59a68] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e59a68]"></span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 text-[#f5ece6] border border-white/5 hover:bg-[#8b3852]/30 hover:border-[#e59a68]/40 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Stack - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div 
              data-aos="fade-left"
              className="bg-[#1e131a]/90 border border-white/10 p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <div className="w-8 h-8 rounded-lg bg-[#e59a68]/20 flex items-center justify-center text-[#e59a68]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 00-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                Verified Certifications
              </h3>
              
              <div className="flex flex-col gap-6">
                {(showAll ? certifications : certifications.slice(0, 5)).map((cert, idx) => (
                  <div 
                    key={idx}
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                    className="relative pl-6 border-l-2 border-white/10 hover:border-[#e59a68] transition-colors group pb-1 flex flex-col items-start"
                  >
                    {/* Circle marker */}
                    <div className="absolute -left-[6px] top-1.5 w-[10px] h-[10px] rounded-full bg-white/30 group-hover:bg-[#e59a68] group-hover:scale-125 transition-all duration-300"></div>
                    
                    <h4 className="text-sm md:text-base font-bold text-[#f5ece6] group-hover:text-white transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#b8a4aa] font-semibold mt-1">
                      {cert.provider} &bull; {cert.year}
                    </p>
                    {cert.file && (
                      <a 
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#e59a68] hover:text-[#f8d7c2] font-bold mt-2 transition-all duration-200"
                      >
                        View Certificate
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {certifications.length > 5 && (
                <div className="mt-8 text-center md:text-left">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-[#8b3852] hover:border-[#e59a68] hover:text-white text-xs font-bold transition-all duration-300"
                  >
                    {showAll ? 'View Less' : 'View More'}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;

