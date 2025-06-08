import React from 'react';
import Lovable from '/lovable.jpg';
import Claude from '/claude.png';
import Chatgpt from '/ChatGPT.jpg';
import Chatprd from '/chatprd.jpg';
import Gamma from '/Gamma_Ai.webp';
import Gemini from '/gemini.png';
import Manus from '/manus.jpeg';
import Copilot from '/copilot.webp';
import n8n from '/n8n.png';
import Perplexity from '/Perplexity.png';
import Visily from '/visily.jpg';
import Windframe from '/windframe.png';
import AppBot from '/appbot.png';
import FireBase from '/firebase.png';
import FormulaBot from '/formula-bot.jpeg';
import Hailuo from '/hailuo.png';
import NoteBookLm from '/notebooklm.png';
import RelevanceAi from '/relevanceai.jpeg';
import Runway from '/runway.png';
import DeepSeek from '/deepseek.webp';
import Zapier from '/zapier.jpg';


// AI TOOLS SECTION
// CUSTOMIZATION: Add or remove AI tools by modifying the aiTools array
// ANIMATION: Horizontal scrolling carousel with seamless loop
// STYLING: Black, grey, and white color scheme

const AITools = () => {
  // TOOL LIST: Define AI tools with imported images
  // CUSTOMIZATION: Add new tools or update existing ones here
  const aiTools = [
    { name: 'Lovable', logo: Lovable },
    { name: 'Claude', logo: Claude },
    { name: 'ChatGPT', logo: Chatgpt },
    { name: 'ChatPRD', logo: Chatprd },
    { name: 'Gamma', logo: Gamma },
    { name: 'Gemini', logo: Gemini },
    { name: 'Manus', logo: Manus },
    { name: 'Copilot', logo: Copilot },
    { name: 'n8n', logo: n8n },
    { name: 'Perplexity', logo: Perplexity },
    { name: 'Visily', logo: Visily },
    { name: 'Windframe', logo: Windframe },
    { name: 'AppBot', logo: AppBot },
    { name: 'Firebase', logo: FireBase },
    { name: 'Formula Bot', logo: FormulaBot },
    { name: 'Hailuo', logo: Hailuo },
    { name: 'NoteBookLM', logo: NoteBookLm },
    { name: 'Relevance AI', logo: RelevanceAi },
    { name: 'Runway', logo: Runway },
    { name: 'DeepSeek', logo: DeepSeek },
    { name: 'Zapier', logo: Zapier },
  ];

  // ANIMATION: Duplicate array for seamless infinite scroll
  const duplicatedTools = [...aiTools, ...aiTools];

  return (
    // SECTION CONTAINER: Full-width section with padding
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: Title and description */}
        {/* CUSTOMIZATION: Update title and description text here */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">AI Tools I Rely On</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From copilots to creative engines, these tools help me build smarter, faster, and better.
          </p>
        </div>

        {/* ANIMATION CONTAINER: Horizontal scrolling wrapper */}
        {/* CSS ANIMATION: Uses animate-scroll class defined in index.css */}
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {duplicatedTools.map((tool, index) => (
              // TOOL CARD: Individual AI tool display
              // STYLING: Square cards with hover effects
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  className="w-12 h-12 object-contain rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* TOOL NAME: Text label */}
                <span className="text-sm font-medium text-gray-700 text-center px-2">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
