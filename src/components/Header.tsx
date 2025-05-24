
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CUSTOMIZATION: Update navigation items here
  // Add or remove menu items by modifying this array
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  // FUNCTIONALITY: Smooth scroll to sections
  // This function handles navigation to different sections of the page
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    // STYLING: Fixed header with black background
    // Header stays at top of page with proper z-index for layering
    <header className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* BRANDING: Company/Personal name logo */}
          {/* CUSTOMIZATION: Change name here */}
          <div className="text-xl font-bold text-white tracking-wider uppercase">
            HARISH SAMALA
          </div>

          {/* NAVIGATION: Desktop menu - hidden on mobile */}
          {/* STYLING: Horizontal layout with proper spacing */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* MOBILE: Hamburger menu button - only visible on mobile */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION: Dropdown menu for mobile devices */}
        {/* CONDITIONAL: Only shows when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-black">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
