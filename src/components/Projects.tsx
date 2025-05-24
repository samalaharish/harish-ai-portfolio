
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Refurbished Product MVP",
      company: "Cdiscount",
      description: "User research + UI revamp leading to 85% engagement increase",
      image: "🛒",
      highlights: [
        "Conducted comprehensive user research",
        "Redesigned product discovery flow",
        "Achieved 85% increase in user engagement",
        "Improved conversion rates by 40%"
      ],
      tags: ["Product Design", "User Research", "A/B Testing"]
    },
    {
      title: "Power BI Investment Dashboard",
      company: "EDHEC Business School",
      description: "Built comprehensive dashboard to guide investment strategy decisions",
      image: "📊",
      highlights: [
        "Integrated multiple data sources",
        "Created real-time performance tracking",
        "Enabled data-driven investment decisions",
        "Reduced reporting time by 70%"
      ],
      tags: ["Power BI", "Data Analytics", "Investment Strategy"]
    },
    {
      title: "P&G Market Strategy",
      company: "P&G Consulting Project",
      description: "Data segmentation strategy resulting in 15% sales boost",
      image: "📈",
      highlights: [
        "Analyzed market segmentation opportunities",
        "Developed go-to-market strategy",
        "Achieved 15% sales increase",
        "Optimized product positioning"
      ],
      tags: ["Market Research", "Strategy", "Data Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful product initiatives that drive business growth and user satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">{project.company}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            View all projects
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
