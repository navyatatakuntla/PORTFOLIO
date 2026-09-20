import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const items = [
    {
      type: "Award-Winning Project",
      badge: "1st Prize Winner",
      title: "HUNGRY HEARTS",
      company: "Aditya Engineering College, Surampalem",
      description: "Developed an impactful community food donation web application that connects donors with people in need and facilitates food distribution through monetary and meal contributions.",
      bullets: [
        "Won 1st Prize in project competition at Aditya Engineering College for social innovation and implementation.",
        "Built responsive donor dashboards, real-time donation tracking, and verified distribution channels."
      ],
      tags: ["React.js", "Node.js", "Full-Stack", "Community Impact", "1st Prize"],
      color: "border-[#8b3852]/30 hover:border-[#8b3852] hover:shadow-[0_15px_35px_rgba(139,56,82,0.15)]",
      badgeColor: "bg-[#8b3852]/10 text-[#8b3852] border-[#8b3852]/30"
    },
    {
      type: "Academic Platform",
      title: "VIDHYA VAULT",
      company: "Centralized Academic Resource Hub",
      description: "Developed a high-utility academic portal providing centralized, semester-wise access to vital learning resources for college students.",
      bullets: [
        "Integrated question banks, syllabi, model papers, previous semester exam papers, and faculty lecture notes.",
        "Designed an intuitive UI allowing quick filtering by regulation, semester, branch, and subject to simplify exam preparation."
      ],
      tags: ["React.js", "JavaScript", "Resource Management", "UI/UX", "Academic Portal"],
      color: "border-[#e59a68]/40 hover:border-[#e59a68] hover:shadow-[0_15px_35px_rgba(229,154,104,0.2)]",
      badgeColor: "bg-[#e59a68]/15 text-[#9e4e20] border-[#e59a68]/40"
    },
    {
      type: "Full-Stack Internship",
      title: "Online Book Store Application",
      company: "HMI Engineering Services (Nov 2023 - May 2024)",
      description: "Developed and deployed a complete Online Book Store web application during Java Full-Stack Development internship.",
      bullets: [
        "Architected user authentication, interactive shopping cart, order processing, and secure payment gateway integration.",
        "Implemented frontend with React, HTML, CSS, and JavaScript; built backend endpoints with Node.js and SQLite database."
      ],
      tags: ["React", "Node.js", "SQLite", "JavaScript", "Payment Gateway", "eCommerce"],
      color: "border-[#387652]/30 hover:border-[#387652] hover:shadow-[0_15px_35px_rgba(56,118,82,0.15)]",
      badgeColor: "bg-[#387652]/10 text-[#275a3c] border-[#387652]/30"
    },
    {
      type: "Certified Internship",
      title: "AI & Machine Learning Internship",
      company: "APSCHE - CSC India",
      description: "Completed intensive training and practical implementations in artificial intelligence and machine learning pipelines, data preprocessing, and model evaluation.",
      tags: ["AI/ML", "Python", "Data Processing", "Model Evaluation"],
      color: "border-[#7b4f80]/30 hover:border-[#7b4f80] hover:shadow-[0_15px_35px_rgba(123,79,128,0.15)]",
      badgeColor: "bg-[#7b4f80]/10 text-[#603a64] border-[#7b4f80]/30"
    },
    {
      type: "Development Internship",
      title: "Python Programming Internship",
      company: "SkillDzire",
      description: "Gained comprehensive practical expertise in core Python programming, data handling libraries, and algorithmic problem-solving paradigms.",
      tags: ["Python", "Data Handling", "Problem Solving", "Scripting"],
      color: "border-[#965c40]/30 hover:border-[#965c40] hover:shadow-[0_15px_35px_rgba(150,92,64,0.15)]",
      badgeColor: "bg-[#965c40]/10 text-[#7a442b] border-[#965c40]/30"
    }
  ];

  return (
    <section id="projects" className="bg-[#faf6f0] py-24 px-6 md:px-12 w-full text-[#1b1116] relative overflow-hidden font-sans border-t border-[#ebdcd0]">
      {/* Subtle warm decorative background shapes */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#e59a68]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#8b3852]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center md:text-left">
          <div className="inline-block border border-[#8b3852]/30 rounded-full px-5 py-1.5 text-xs text-[#8b3852] font-bold mb-4 uppercase tracking-widest bg-[#8b3852]/10">
            Portfolio & Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1e1218] mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Internships & <span className="text-[#8b3852]">Projects</span>
          </h2>
          <p className="text-[#68525b] max-w-xl font-medium text-sm md:text-base leading-relaxed">
            A showcase of my award-winning initiatives, enterprise internship development, and practical web applications from my academic journey.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`bg-white border ${item.color} p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group h-full shadow-sm hover:-translate-y-1`}
            >
              <div>
                {/* Badge Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${item.badgeColor || 'bg-gray-100 text-gray-700'}`}>
                    {item.badge || item.type}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-[#1e1218] mb-1.5 tracking-tight leading-snug group-hover:text-[#8b3852] transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </h3>
                
                {/* Company/Context */}
                <span className="text-xs font-semibold text-[#8b3852] block mb-4">
                  {item.company}
                </span>

                {/* Description */}
                <p className="text-sm font-medium text-[#5c4a52] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Optional Bullets */}
                {item.bullets && (
                  <ul className="list-disc pl-4 text-xs font-medium text-[#6b5860] flex flex-col gap-2 mb-4 leading-relaxed">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f0e4dc] mt-4">
                {item.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-[#faf6f0] border border-[#ebdcd0] text-[#5c4851]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

