
import React from 'react';

const AITools = () => {
  const aiTools = [
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Claude', logo: 'https://claude.ai/images/claude_app_icon.png' },
    { name: 'GitHub Copilot', logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot-logo.png' },
    { name: 'Microsoft Copilot', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Microsoft_Office_logo_%282019%E2%80%93present%29.svg' },
    { name: 'Midjourney', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Perplexity', logo: 'https://yt3.googleusercontent.com/yJ5h6vJ-hEz3gGh3iy0zyKxJ_-1q5z5Z5J4-r3J4-r3J4-r3J4-r3J4-r3J4-r3J4-r3J4=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
    { name: 'Bard', logo: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddceea7f3.svg' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTools = [...aiTools, ...aiTools];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">My Favorite AI Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Always exploring, building, and prompting. Passionate about the future of AI in product.
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🤖</span>
                </div>
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
