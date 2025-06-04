
import React from 'react';

// PROJECTS SECTION
// CUSTOMIZATION: Update project categories, add/remove projects, and modify project links
// DRIVE LINKS: Add your Google Drive or GitHub links in the project objects below
// COLOR SCHEME: Uses black, grey, and white only

const Projects = () => {
  // DATA PROJECTS: Analytics and dashboard projects
  // CUSTOMIZATION: Add your drive links in the 'driveLink' property
  const dataProjects = [
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
      tags: ["Power BI", "Data Analytics", "Investment Strategy"],
      driveLink: "ADD_YOUR_DRIVE_LINK_HERE" // CUSTOMIZATION: Replace with actual Google Drive link
    },
    {
      title: "Market Analysis Dashboard",
      company: "P&G Consulting Project", 
      description: "Data segmentation strategy resulting in 15% sales boost",
      image: "📈",
      highlights: [
        "Analyzed market segmentation opportunities",
        "Developed go-to-market strategy",
        "Achieved 15% sales increase",
        "Optimized product positioning"
      ],
      tags: ["Market Research", "Strategy", "Data Analysis"],
      driveLink: "ADD_YOUR_DRIVE_LINK_HERE" // CUSTOMIZATION: Replace with actual Google Drive link
    }
  ];

  // PRODUCT CASES: Product management and UX projects
  // CUSTOMIZATION: Add your drive links in the 'driveLink' property
  const productCases = [
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
      tags: ["Product Design", "User Research", "A/B Testing"],
      driveLink: "ADD_YOUR_DRIVE_LINK_HERE" // CUSTOMIZATION: Replace with actual Google Drive link
    }
  ];

  // AI AUTOMATIONS: AI and automation projects
  // CUSTOMIZATION: Add your AI projects and drive links here
  const aiAutomations = [
    {
      title: "AI Customer Support Bot",
      company: "Personal Project",
      description: "Automated customer support reducing response time by 90%",
      image: "🤖",
      highlights: [
        "Built intelligent chatbot system",
        "Integrated with existing CRM",
        "Reduced response time by 90%",
        "Improved customer satisfaction scores"
      ],
      tags: ["AI", "Automation", "Customer Support"],
      driveLink: "ADD_YOUR_DRIVE_LINK_HERE" // CUSTOMIZATION: Replace with actual Google Drive link
    }
  ];

  // PROJECT CARD COMPONENT: Reusable card for all project types
  // FUNCTIONALITY: Handles project display and drive link navigation
  const ProjectCard = ({ project }: { project: any }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* PROJECT IMAGE: Icon/visual representation */}
      <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
        <div className="text-6xl">{project.image}</div>
      </div>

      {/* PROJECT CONTENT: Title, description, and details */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 font-medium">{project.company}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* PROJECT HIGHLIGHTS: Key achievements */}
        <ul className="space-y-1 mb-4">
          {project.highlights.slice(0, 2).map((highlight: string, idx: number) => (
            <li key={idx} className="text-xs text-gray-500 flex items-start">
              <span className="text-gray-600 mr-2 mt-0.5">•</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* PROJECT TAGS: Technology and skill tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* VIEW PROJECT BUTTON: Links to drive or project details */}
        {/* CUSTOMIZATION: This button will open the drive link when added */}
        <button 
          onClick={() => {
            // DRIVE LINK FUNCTIONALITY: Opens project in new tab
            if (project.driveLink && project.driveLink !== "ADD_YOUR_DRIVE_LINK_HERE") {
              window.open(project.driveLink, '_blank');
            } else {
              console.log('Add your drive link for:', project.title);
            }
          }}
          className="w-full bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm"
        >
          View Project
        </button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER: Main title and description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful initiatives across data analytics, product development, and AI automation
          </p>
        </div>

        {/* DATA PROJECTS SECTION */}
        {/* CUSTOMIZATION: Modify dataProjects array above to add/remove projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Data Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* PRODUCT CASES SECTION */}
        {/* CUSTOMIZATION: Modify productCases array above to add/remove projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCases.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* AI AUTOMATIONS SECTION */}
        {/* CUSTOMIZATION: Modify aiAutomations array above to add/remove projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI Automations and Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAutomations.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* VIEW ALL PROJECTS LINK */}
        {/* CUSTOMIZATION: Add link to portfolio or project gallery */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium">
            View all projects
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
