import React from 'react';
import Harish from '/harish1.jpg';

const About = () => {
  const technicalSkills = [
    "SQL",
    "Database Management",
    "Data Cleaning & Preprocessing",
    "Excel",
    "Python (Basic)",
    "Power BI",
    "Tableau",
    "Google Analytics",
    "MS Office Suite"
  ];
  

  const softSkills = [
    "Effective Communication",
    "Agile Adaptability",
    "Strategic Thinking",
    "Detail Orientation",
    "Time Optimization",
    "Problem Solving"
  ];
  

  const productSkills = [
    "Product Discovery",
    "Product Strategy & Vision",
    "User Research & Validation",
    "Requirement Writing (PRDs, User Stories)",
    "UX/UI Collaboration",
    "Product Development Execution",
    "Product Analytics & A/B Testing",
    "Product Lifecycle Management"
  ];
  

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
      <h2 className="text-3xl font-bold text-black mb-6">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={Harish} 
                alt="Harish" 
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-4">In a Nutshell</h3>
              <p className="text-gray-600 leading-relaxed text-md">
                From data dashboards to AI-powered product roadmaps, I help businesses grow with clarity, creativity, and calculated decisions — while identifying high-impact areas where AI can streamline operations, boost revenue, or unlock new value.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl pl-6">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-black">Core Skills</h3>
            </div>
            <div className="space-y-6">
            <div>
                <h4 className="text-lg font-medium text-black mb-3">Product Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {productSkills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                      <span className="text-black text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Technical Skills</h4>
                <div className="grid grid-cols-3 gap-3">
                  {technicalSkills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                      <span className="text-black text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-3">Soft Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                      <span className="text-black text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
