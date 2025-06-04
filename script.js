// GLOBAL VARIABLES AND DATA
let isMobileMenuOpen = false;

// AI TOOLS DATA
// CUSTOMIZATION: Add or remove AI tools here
const aiTools = [
    { name: 'ChatGPT', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'GitHub Copilot', icon: '💻' },
    { name: 'Microsoft Copilot', icon: '🔧' },
    { name: 'Midjourney', icon: '🎨' },
    { name: 'Perplexity', icon: '🔍' },
    { name: 'HuggingFace', icon: '🤗' },
    { name: 'Bard', icon: '✨' }
];

// PROJECT DATA
// CUSTOMIZATION: Add your project data and drive links here
const dataProjects = [
    {
        title: "Power BI Investment Dashboard",
        company: "EDHEC Business School",
        description: "Built comprehensive dashboard to guide investment strategy decisions",
        image: "📊",
        highlights: [
            "Integrated multiple data sources",
            "Created real-time performance tracking"
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
            "Achieved 15% sales increase"
        ],
        tags: ["Market Research", "Strategy", "Data Analysis"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "SQL Performance Analytics",
        company: "Finance Corp",
        description: "Database optimization reducing query time by 60%",
        image: "🗄️",
        highlights: [
            "Optimized complex SQL queries",
            "Reduced processing time by 60%"
        ],
        tags: ["SQL", "Database", "Performance"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "Excel Advanced Analytics",
        company: "Retail Analytics",
        description: "Advanced Excel models for sales forecasting and trend analysis",
        image: "📋",
        highlights: [
            "Built predictive sales models",
            "Increased forecast accuracy by 85%"
        ],
        tags: ["Excel", "Forecasting", "Analytics"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    }
];

const productCases = [
    {
        title: "Refurbished Product MVP",
        company: "Cdiscount",
        description: "User research + UI revamp leading to 85% engagement increase",
        image: "🛒",
        highlights: [
            "Conducted comprehensive user research",
            "Achieved 85% increase in user engagement"
        ],
        tags: ["Product Design", "User Research", "A/B Testing"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "Mobile App UX Redesign",
        company: "FinTech Startup",
        description: "Complete mobile app redesign improving user retention by 120%",
        image: "📱",
        highlights: [
            "Redesigned entire user journey",
            "Improved user retention by 120%"
        ],
        tags: ["Mobile UX", "Product Strategy", "User Testing"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "E-commerce Platform Optimization",
        company: "Online Retail",
        description: "Product page optimization leading to 45% increase in conversions",
        image: "🎯",
        highlights: [
            "Optimized product page layouts",
            "Increased conversions by 45%"
        ],
        tags: ["E-commerce", "Conversion Optimization", "UX"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "SaaS Dashboard Redesign",
        company: "B2B Software",
        description: "Dashboard redesign improving user satisfaction and reducing support tickets",
        image: "💼",
        highlights: [
            "Redesigned complex dashboard interface",
            "Reduced support tickets by 50%"
        ],
        tags: ["SaaS", "Dashboard Design", "User Experience"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    }
];

const aiAutomations = [
    {
        title: "AI Customer Support Bot",
        company: "Personal Project",
        description: "Automated customer support reducing response time by 90%",
        image: "🤖",
        highlights: [
            "Built intelligent chatbot system",
            "Reduced response time by 90%"
        ],
        tags: ["AI", "Automation", "Customer Support"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "Document Processing AI",
        company: "Legal Tech",
        description: "AI-powered document analysis reducing manual work by 80%",
        image: "📄",
        highlights: [
            "Automated document classification",
            "Reduced manual processing by 80%"
        ],
        tags: ["NLP", "Document AI", "Automation"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "Predictive Analytics Model",
        company: "Healthcare Analytics",
        description: "Machine learning model predicting patient outcomes with 92% accuracy",
        image: "🔬",
        highlights: [
            "Developed ML prediction models",
            "Achieved 92% prediction accuracy"
        ],
        tags: ["Machine Learning", "Healthcare", "Predictive Analytics"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    },
    {
        title: "Smart Content Generator",
        company: "Marketing Agency",
        description: "AI tool generating personalized content increasing engagement by 150%",
        image: "✨",
        highlights: [
            "Created AI content generation tool",
            "Increased engagement by 150%"
        ],
        tags: ["AI Content", "Personalization", "Marketing Tech"],
        driveLink: "ADD_YOUR_DRIVE_LINK_HERE"
    }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Populate AI tools
    populateAITools();
    
    // Populate projects
    populateProjects();
});

// MOBILE MENU FUNCTIONS
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (isMobileMenuOpen) {
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function closeMobileMenu() {
    isMobileMenuOpen = false;
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// NAVIGATION FUNCTION
function scrollToSection(href) {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// AI TOOLS POPULATION
function populateAITools() {
    const toolsContainer = document.getElementById('tools-scroll');
    
    // Duplicate tools for seamless scroll
    const duplicatedTools = [...aiTools, ...aiTools];
    
    duplicatedTools.forEach((tool, index) => {
        const toolCard = createToolCard(tool, index);
        toolsContainer.appendChild(toolCard);
    });
}

function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <div class="tool-icon">
            <span>${tool.icon}</span>
        </div>
        <span class="tool-name">${tool.name}</span>
    `;
    return card;
}

// PROJECTS POPULATION
function populateProjects() {
    populateProjectCategory('data-projects', dataProjects);
    populateProjectCategory('product-cases', productCases);
    populateProjectCategory('ai-automations', aiAutomations);
}

function populateProjectCategory(containerId, projects) {
    const container = document.getElementById(containerId);
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-image">
            <div>${project.image}</div>
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-company">${project.company}</p>
            </div>
            <p class="project-description">${project.description}</p>
            <ul class="project-highlights">
                ${project.highlights.slice(0, 2).map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <button class="project-button" onclick="openProject('${project.driveLink}', '${project.title}')">
                View Project
            </button>
        </div>
    `;
    
    return card;
}

// PROJECT INTERACTION FUNCTIONS
function openProject(driveLink, projectTitle) {
    // DRIVE LINK FUNCTIONALITY: Opens project in new tab
    if (driveLink && driveLink !== "ADD_YOUR_DRIVE_LINK_HERE") {
        window.open(driveLink, '_blank');
    } else {
        console.log('Add your drive link for:', projectTitle);
        alert('Please add your drive link for this project in the code');
    }
}

function handleViewAllProjects() {
    // CUSTOMIZATION: Replace with your actual portfolio URL or GitHub projects page
    const portfolioUrl = "https://github.com/harishsamala"; // Add your GitHub or portfolio link here
    
    if (portfolioUrl && portfolioUrl !== "https://github.com/your-username") {
        window.open(portfolioUrl, '_blank');
    } else {
        console.log('Add your portfolio or GitHub link in handleViewAllProjects function');
        alert('Please add your portfolio or GitHub link in the code to view all projects');
    }
}

// RESUME DOWNLOAD FUNCTION
function downloadResume() {
    // CUSTOMIZATION: Replace with your actual resume file path or URL
    const resumeUrl = "/path/to/your/resume.pdf"; // Add your resume file path here
    
    // For now, we'll show an alert. Replace this with actual download functionality
    alert('Please add your resume file path in the downloadResume function to enable download');
    
    // Uncomment and modify the following lines when you have your resume file:
    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Harish_Samala_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}
