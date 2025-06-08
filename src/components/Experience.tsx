import React from 'react';
import { Briefcase, GraduationCap, Star } from 'lucide-react';
import Lovable from '/lovable.jpg';
import Claude from '/claude.png';
import n8n from '/n8n.png';
import Perplexity from '/Perplexity.png';
import Chatgpt from '/ChatGPT.jpg';
import Windframe from '/windframe.png';

const Experience = () => {
  const aiTools = [
    { name: 'Claude', logo: Claude },
    { name: 'Perplexity', logo: Perplexity },
    { name: 'n8n', logo: n8n },
    { name: 'Lovable', logo: Lovable },
    { name: 'ChatGPT', logo: Chatgpt },
    { name: 'Windframe', logo: Windframe }
  ];

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
      title: "Product Analyst",
      company: "Ace Creations",
      location: "India",
      period: "2021-2022",
      description: "Conducted A/B testing, packaging insights, and customer analytics to drive product improvements and user engagement.",
      highlights: [
        "Executed A/B tests resulting in 25% conversion improvement",
        "Analyzed customer behavior patterns for product optimization",
        "Created comprehensive analytics reports for leadership"
      ]
    },
    {
      title: "Digital Analyst",
      company: "Mediamint",
      location: "Hyderabad, India",
      period: "Sep 2021 – Dec 2021",
      description: "Revamped digital advertising strategies using Google Ad Manager, leading to improved campaign performance. Conducted A/B testing to enhance ad creatives and audience segmentation, delivering measurable ROI growth.",
      highlights: [
        "Increased click-through rate (CTR) by 25% and conversion rates by 15% through optimized ad campaigns",
        "Conducted targeted A/B testing, resulting in a 10% boost in ROI",
        "Translated customer behavior data into actionable insights for better audience targeting and engagement"
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
    },
    {
      degree: "Bachelor of Technology (Mech)",
      school: "Vignana Bharathi Institute of Technology",
      location: "Hyderabad, India",
      period: "2018 - 2021"
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
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
                    </div>
                    <div className="text-lg text-gray-600 font-medium mb-2">{exp.company}</div>
                    <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-gray-500 mr-2 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-lg text-gray-600 font-medium">{edu.school}</div>
                  <div className="text-sm text-gray-500">{edu.location}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="mr-3 h-6 w-6" />
                My Favorite AI Tools
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <p className="text-gray-600 mb-4 italic">
                  Always exploring, building, and prompting. Passionate about the future of AI in product.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {aiTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        loading="lazy"
                        className="w-8 h-8 object-contain mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-gray-700">{tool.name}</div>
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
