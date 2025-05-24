
import React from 'react';

const About = () => {
  const skills = {
    "Product & PM Tools": [
      "Roadmapping", "FRD/PRD", "RICE", "Scrum", "Jira", "Notion", "Miro", "Figma"
    ],
    "Data & Tech Stack": [
      "Power BI", "SQL", "Excel", "Python", "Tableau", "GA4"
    ],
    "AI & Prompt Engineering": [
      "ChatGPT", "Claude", "MS Copilot"
    ],
    "Soft Skills": [
      "Strategic thinking", "Communication", "Time optimization"
    ]
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8">
                <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💼</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">💡</span>
                In a Nutshell
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From dashboards to product roadmaps, I help businesses grow with clarity, creativity, and calculated decisions.
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hi, I'm Harish — a product guy who simplifies chaos. I specialize in automation, 
                user-first design, and turning customer insights into winning features.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a double degree in MSc Data & AI and Master in Management from EDHEC Business School, 
                I bridge the gap between technical possibilities and business impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Core Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
