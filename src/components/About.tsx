
import React from 'react';

// ABOUT SECTION
// CUSTOMIZATION: Update personal information, skills, and bio here
// COLOR SCHEME: Uses black, grey, and white only - matching reference design

const About = () => {
  // CUSTOMIZATION: Add or modify technical skills here
  const technicalSkills = [
    "SQL", "Metabase", "Excel",
    "PowerPoint", "Docs", "Notion",
    "Apollo", "Hubspot", "Figma"
  ];

  // CUSTOMIZATION: Add or modify soft skills here
  const softSkills = [
    "Problem Solving", "Communication",
    "Project Management", "Entrepreneurship"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* PROFILE IMAGE: Left side content */}
          {/* CUSTOMIZATION: Replace emoji with actual profile image */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">About Me</h2>
            <div className="relative">
              <div className="w-full max-w-md mx-auto bg-gray-200 rounded-2xl p-4">
                <div className="w-full h-96 bg-gray-300 rounded-xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💼</div>
                </div>
              </div>
            </div>

            {/* IN A NUTSHELL: Updated content section */}
            {/* CUSTOMIZATION: Update personal summary here */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-3">
                In a Nutshell
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From data dashboards to AI-powered product roadmaps, I help businesses grow with clarity, creativity, and calculated decisions — while identifying high-impact areas where AI can streamline operations, boost revenue, or unlock new value.
              </p>
            </div>
          </div>

          {/* SKILLS CONTENT: Right side skills and experience */}
          {/* STYLING: Maintains consistent spacing and typography */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-black">Core Skills</h3>
              </div>

              <div className="space-y-8">
                {/* TECHNICAL SKILLS: Grid layout for tools */}
                {/* CUSTOMIZATION: Modify technicalSkills array above to add/remove skills */}
                <div>
                  <h4 className="text-lg font-medium text-black mb-4">Technical Skills</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {technicalSkills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOFT SKILLS: Grid layout for personal skills */}
                {/* CUSTOMIZATION: Modify softSkills array above to add/remove skills */}
                <div>
                  <h4 className="text-lg font-medium text-black mb-4">Soft Skills</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE SECTION: Personal bio and background */}
            {/* CUSTOMIZATION: Update personal description here */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center mr-3">
                  <div className="w-3 h-2 bg-white"></div>
                </div>
                <h3 className="text-2xl font-semibold text-black">Experience</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Hi, I'm Harish — a product guy who simplifies chaos. I specialize in automation, 
                user-first design, and turning customer insights into winning features. With a double degree in MSc Data & AI and Master in Management from EDHEC Business School, 
                I bridge the gap between technical possibilities and business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
