import React from 'react';
import AdventureWorks from '/adventure-works.jpeg';
import HelmetLovers from '/helmet.jpeg';
import FNP from '/fnp.jpeg';
import CapGemini from '/capgemini.jpeg';
import PokemonGO from '/pokemon.png';
import Cafe from '/cafe.jpeg';
import Design2Code from '/design2code.jpeg';
import PersonaFeature from '/persona.png';
import LinkedInRedesign from '/linkedin.jpeg';
import ChromeBrave from '/chromebrave.png';
import AIProductWorkflow from '/product-management.png';
import Upraised from '/upraised.png';
import BigBoy from '/bigboy.png';
import SpaceTech from '/spacetech.jpeg';
import Waitlist from '/waitlist.jpeg';
import ProductScraper from '/productscraper.jpeg';
import LeadQualifier from '/leadqualifier.jpeg';

const Projects = () => {
  const dataProjects = [
    {
      title: "AdventureWorks Bike Shop – Power BI Sales Report",
      company: "Personal Project",
      description: "Interactive Power BI report analyzing revenue, orders, returns, and customer behavior.",
      image: AdventureWorks,
      highlights: [
        "Used anomaly detection and product-wise breakdown",
        "Multi-page dashboard for sales and returns",
        "Data modeling and DAX for actionable insights"
      ],
      tags: ["Power BI", "Sales Analysis", "DAX"],
      driveLink: "https://github.com/samalaharish/PowerBI_Projects/tree/main/Adventure_works",
      portfolioLink: ""
    },
    {
      title: "Helmet Lovers Market Insights",
      company: "Personal Project",
      description: "Investor-focused Power BI dashboard targeting niche high-margin segments.",
      image: HelmetLovers,
      highlights: [
        "Identified profitable product segments",
        "20% uplift via strategic segmentation",
        "Proposed data-backed investment strategy"
      ],
      tags: ["Power BI", "Market Segmentation", "Strategy"],
      driveLink: "https://github.com/samalaharish/PowerBI_Projects/tree/main/Helmet_lovers",
      portfolioLink: ""
    },
    {
      title: "FNP Sales Dashboard",
      company: "FNP",
      description: "Excel dashboard for analyzing seasonal sales trends and top products.",
      image: FNP,
      highlights: [
        "1000+ orders analyzed across occasions and cities",
        "Used Power Query for data cleaning",
        "Monthly trend and category-based insights"
      ],
      tags: ["Excel", "Power Query", "Sales Dashboard"],
      driveLink: "https://github.com/samalaharish/EXCEL/tree/main/Sales%20Dashboard",
      portfolioLink: ""
    },
    {
      title: "Ozone Telecom Analytics",
      company: "Capgemini Use Case",
      description: "Python analysis of churn, retention, and customer behavior in telecom.",
      image: CapGemini,
      highlights: [
        "Explored service usage and drop-off trends",
        "Generated churn insights in Jupyter Notebook",
        "Presented findings in client-ready deck"
      ],
      tags: ["Python", "Churn Analysis", "Telecom"],
      driveLink: "https://drive.google.com/drive/folders/1RMrCeqQP5zKgCysAkO5nlvyY887o0IuU?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "Pokémon GO User Behavior Analytics",
      company: "Personal Project",
      description: "Python-based analysis of user retention and engagement in Pokémon GO.",
      image: PokemonGO,
      highlights: [
        "Behavioral segmentation of user activity",
        "Churn reduction strategy and recommendations",
        "Stakeholder-ready report and deck"
      ],
      tags: ["Python", "Retention Analysis", "Gaming Analytics"],
      driveLink: "https://drive.google.com/drive/folders/1Vl2osvNYHFacdKhCa5klgbkGK7DemFPR?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "Angelina Café – Review Sentiment Analysis",
      company: "Paris Café Case Study",
      description: "Used NLP to uncover themes and sentiments in customer reviews.",
      image: Cafe,
      highlights: [
        "Cleaned and processed customer text feedback",
        "Visualized frequent themes and sentiment trends",
        "Actionable insights in a visual report"
      ],
      tags: ["NLP", "Sentiment Analysis", "Text Mining"],
      driveLink: "https://www.canva.com/design/DAGpvyN1Afw/W7_wkupIvEp24cUEuuSVsg/edit?utm_content=DAGpvyN1Afw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      portfolioLink: ""
    }
  ];
  
  const productCases = [
    {
      title: "Design2Code Copilot",
      company: "AI Product Case Study",
      description: "AI product to convert UI designs into production-ready code with metadata.",
      image: Design2Code,
      highlights: [
        "Wrote full PRD with user journeys and AI features",
        "Mapped user flows using Miro",
        "Streamlined design-to-dev handoffs"
      ],
      tags: ["AI", "Product Design", "UX Workflows"],
      driveLink: "https://drive.google.com/drive/folders/1cuzBHc94EoVzZDfGy5o73zSA9qzzPbt7?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "Persona-Based Feature Prioritization",
      company: "SaaS Thesis Project",
      description: "Segmented SaaS users via NLP and built feature roadmap based on personas.",
      image: PersonaFeature,
      highlights: [
        "Clustered user feedback using Python & NLP",
        "Created actionable personas",
        "Mapped feature needs to user segments"
      ],
      tags: ["NLP", "Customer Segmentation", "Product Roadmap"],
      driveLink: "https://drive.google.com/drive/folders/1EmNHCAY5qg4CehgII7F-Ck96K1QOwobr?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "LinkedIn Catch Up Redesign",
      company: "Engagement Case Study",
      description: "Reimagined LinkedIn's feature to increase job-seeker engagement.",
      image: LinkedInRedesign,
      highlights: [
        "Contextual feed recommendations for job seekers",
        "UX redesign and feature ideation",
        "Aligned with user momentum and transitions"
      ],
      tags: ["UX Strategy", "Engagement", "LinkedIn"],
      driveLink: "https://drive.google.com/drive/folders/1J09LgfZjSUXg2GZkZgte2IPwgst0Hpfi?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "Chrome vs Brave – UX & Feature Strategy",
      company: "Mobile UX Research",
      description: "Compared mobile UX and proposed AI-driven Smart Reading Mode for Chrome.",
      image: ChromeBrave,
      highlights: [
        "Defined personas and mapped user journeys",
        "Identified UX gaps and pain points",
        "Proposed AI TL;DR, distraction-free layout"
      ],
      tags: ["UX Research", "Feature Strategy", "AI Integration"],
      driveLink: "https://drive.google.com/drive/folders/1orFTktP2uVW0ce2Xgy7179a6QLkvPA7n?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "AI-Driven Product Management Workflow",
      company: "Fintech Case Study",
      description: "Blueprint for integrating AI tools in the entire product management lifecycle.",
      image: AIProductWorkflow,
      highlights: [
        "Used tools like Perplexity, Appbot, ChatPRD, Visily",
        "Built PRD and wireframes for a payments app",
        "Showcased end-to-end AI-powered PM flow"
      ],
      tags: ["Product Management", "AI Tools", "Fintech"],
      driveLink: "https://drive.google.com/drive/folders/1p9OlL091sctciK--BVThNmJf28YeAv3N?usp=sharing",
      portfolioLink: ""
    },
    {
      title: "Upraised KYS Test Optimization",
      company: "PM Case Study",
      description: "Improved test completion via UX fixes and gamification using AARRR + ICE.",
      image: Upraised,
      highlights: [
        "Analyzed drop-offs using AARRR funnel",
        "Gamified UI and mobile UX improvements",
        "Prioritized changes using ICE framework"
      ],
      tags: ["UX Optimization", "Funnel Analysis", "Gamification"],
      driveLink: "https://drive.google.com/drive/folders/1L6YG-VFUkKFYdDvZb2-_gM1vDGH-OOLk?usp=sharing",
      portfolioLink: ""
    }
  ];
  
  const aiAutomations = [
    {
      title: "Big Boy Sales Copilot",
      company: "Sales Automation",
      description: "AI agent that generates pitch-ready reports for sales calls in under a minute.",
      image: BigBoy,
      highlights: [
        "Scrapes websites and LinkedIn for context",
        "Summarizes into structured sales briefs",
        "No-code Relevance AI implementation"
      ],
      tags: ["Relevance AI", "Sales Enablement", "Automation"],
      driveLink: "https://app.relevanceai.com/agents/f1db6c/a08b95b32379-4e33-8145-6cbb116161f5/12627a0b-b6a6-4740-9667-6f38015c2d4b/clone",
      portfolioLink: ""
    },
    {
      title: "SpaceTech Digest Tracker",
      company: "News Automation",
      description: "AI pipeline that generates daily digests of space startup updates.",
      image: SpaceTech,
      highlights: [
        "Scrapes from RSS, Twitter, news",
        "Summarizes and filters for relevance",
        "Auto-delivered daily to email subscribers"
      ],
      tags: ["n8n", "Relevance AI", "Content Automation"],
      driveLink: "",
      portfolioLink: ""
    },
    {
      title: "Lead Qualifier Agent",
      company: "Marketing Automation",
      description: "Smart AI-based pipeline that qualifies, segments, and routes leads in real-time.",
      image: LeadQualifier,
      highlights: [
        "Triggered via form submission",
        "Segments leads via OpenAI agent",
        "Auto-notifies relevant internal teams"
      ],
      tags: ["OpenAI", "Lead Scoring", "n8n"],
      driveLink: "",
      portfolioLink: ""
    },
    {
      title: "Startup Waitlist Automation",
      company: "Lead Management",
      description: "No-code Zapier flow that captures, logs, and alerts teams on waitlist signups.",
      image: Waitlist,
      highlights: [
        "Automated tracking and Gmail alerts",
        "Logs to structured Google Sheets",
        "Zero manual lead management"
      ],
      tags: ["Zapier", "Waitlist Automation", "Gmail Integration"],
      driveLink: "",
      portfolioLink: ""
    },
    {
      title: "Product Scraper Agent",
      company: "Market Research Bot",
      description: "Scrapes product data and generates OpenAI-based summaries for research.",
      image: ProductScraper,
      highlights: [
        "Apify + n8n for scraping and merging",
        "OpenAI for summary generation",
        "Auto-email product reports"
      ],
      tags: ["n8n", "OpenAI", "Apify", "Automation"],
      driveLink: "",
      portfolioLink: ""
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-[550px]">
      <div className="h-48 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
        <div className="text-6xl h-full">
          {project.image ? (
            <img src={project.image} alt={project.title}  loading="lazy" className="w-full h-full object-cover" />
          ) : (
            <span className="text-white">📊</span>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 font-medium">{project.company}</p>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <ul className="space-y-1 mb-4">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <li key={idx} className="text-xs text-gray-500 flex items-start">
              <span className="text-gray-600 mr-2 mt-0.5">•</span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        {project.driveLink && (
          <div className="mt-auto">
            <button
              onClick={() => {
                if (project.driveLink && project.driveLink !== "ADD_YOUR_DRIVE_LINK_HERE") {
                  window.open(project.driveLink, '_blank');
                } else {
                  console.log('Add your drive link for:', project.title);
                  alert('Please add your drive link for this project in the code');
                }
              }}
              className="w-full bg-black hover:bg-gray-800 hover:text-white text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm whitespace-nowrap"
            >
              View Project
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const handleViewAllProjects = (portfolioLink) => {
    if (portfolioLink && portfolioLink !== "") {
      window.open(portfolioLink, '_blank');
    } else {
      console.log('Add your portfolio link in the project object');
      alert('Please add your portfolio link in the project object');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful initiatives across data analytics, product development, and AI automation
          </p>
        </div>
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Data Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleViewAllProjects('https://drive.google.com/drive/folders/1552msVvyxRiS-6yHVVKjJ10ETRq-Ndzz')}
              className="inline-flex text-gray-600 hover:text-gray-700 font-medium hover:underline transition-all duration-200"
            >
              View all Data Projects
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCases.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => handleViewAllProjects('https://drive.google.com/drive/folders/1L6YG-VFUkKFYdDvZb2-_gM1vDGH-OOLk')}
              className="inline-flex text-gray-600 hover:text-gray-700 font-medium hover:underline transition-all duration-200"
            >
              View all Product Cases
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI Automations and Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAutomations.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
