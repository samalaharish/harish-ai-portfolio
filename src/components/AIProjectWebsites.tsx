import React from 'react';
import Ektara from '/ektara.png';
import Vaarahi from '/varahi.png';

const AIProjectWebsites: React.FC = () => {
    const websiteProjects = [
        {
          title: "Éktara – Jewellery Ecommerce",
          description: "A clean, AI-generated ecommerce website showcasing jewellery products, built using Lovable's AI website builder for rapid prototyping and brand alignment.",
          link: "https://lovable.dev/projects/9541284f-2b7c-4f1c-bda7-64a6a10c2824",
          image: Ektara,
          tags: ["Lovable", "AI Website", "Ecommerce", "Jewellery"],
        },
        {
          title: "Vaarahi Design Studio – Interior Brand Site",
          description: "A professional brand-aligned website for an interior design studio, prototyped with Lovable to highlight services and aesthetic appeal.",
          link: "https://lovable.dev/projects/d5ec5cae-113c-47ba-b8ab-060f2513f9dc",
          image: Vaarahi,
          tags: ["Lovable", "AI Website", "Interior Design"],
        },
    ];

  const WebsiteCard: React.FC<{ project: typeof websiteProjects[0] }> = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="w-full h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center mb-4">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy"/>
        ) : (
          <span className="text-white text-4xl">🌐</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full transition-colors duration-200 font-medium text-sm"
        >
          Visit Website
        </a>
      )}
    </div>
  );

  return (
    <section id="ai-websites" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Project Websites – Built with Lovable</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prototyped clean, brand-aligned websites for showcasing projects and services using Lovable's AI website builder.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websiteProjects.map((project, index) => (
            <WebsiteCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjectWebsites;
