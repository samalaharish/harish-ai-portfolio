
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager Intern",
      company: "Alter Domus",
      location: "Luxembourg",
      period: "2024 - Present",
      description: "Leading agile ceremonies, feature delivery, and stakeholder alignment. Built comprehensive Power BI dashboards for data-driven decision making.",
      highlights: [
        "Streamlined sprint planning and delivery processes",
        "Enhanced stakeholder communication through clear roadmaps",
        "Developed Power BI dashboards for key performance metrics"
      ]
    },
    {
      title: "Product Analyst & Digital Analyst",
      company: "Ace Creations",
      location: "India",
      period: "2023 - 2024",
      description: "Conducted A/B testing, packaging insights, and customer analytics to drive product improvements and user engagement.",
      highlights: [
        "Executed A/B tests resulting in 25% conversion improvement",
        "Analyzed customer behavior patterns for product optimization",
        "Created comprehensive analytics reports for leadership"
      ]
    },
    {
      title: "Strategy Consultant",
      company: "P&G & Cdiscount Projects (via EDHEC)",
      location: "France",
      period: "2023",
      description: "Developed market entry strategies and ROI-driven execution plans for major retail and FMCG clients.",
      highlights: [
        "Achieved 15% sales boost through data segmentation",
        "Designed go-to-market strategy for new product lines",
        "Conducted comprehensive market research and competitive analysis"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc Data & AI",
      school: "EDHEC Business School",
      location: "Nice, France",
      period: "2022 - 2024"
    },
    {
      degree: "Master in Management",
      school: "EDHEC Business School",
      location: "Nice, France",
      period: "2022 - 2024"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building products and driving growth through data-driven insights and strategic thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">💼</span>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <div className="text-lg text-blue-600 font-medium mb-2">{exp.company}</div>
                    <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <span className="mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-blue-600 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-lg text-blue-600 font-medium">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.location}</div>
                </div>
              ))}
            </div>

            {/* AI Tools Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🤖</span>
                My Favorite AI Tools
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Always exploring, building, and prompting. Passionate about the future of AI in product."
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {["ChatGPT", "Claude", "Midjourney", "Copilot", "Bard", "Perplexity"].map((tool) => (
                    <div key={tool} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm font-medium text-gray-700">{tool}</div>
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

export default Experience;
