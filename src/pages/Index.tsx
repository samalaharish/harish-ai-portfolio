
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import AITools from '../components/AITools';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// MAIN PAGE STRUCTURE
// This is the main landing page that combines all sections
// CUSTOMIZATION: Add or remove sections by modifying the components below

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER: Fixed navigation bar */}
      <Header />
      
      {/* HERO: Main banner section with greeting */}
      <Hero />
      
      {/* ABOUT: Personal information and skills */}
      <About />
      
      {/* AI TOOLS: Animated showcase of favorite AI tools */}
      {/* NOTE: Only one AI Tools section - removed duplicate */}
      <AITools />
      
      {/* EXPERIENCE: Work history and achievements */}
      <Experience />
      
      {/* PROJECTS: Portfolio showcase */}
      <Projects />
      
      {/* CONTACT: Contact information and form */}
      <Contact />
    </div>
  );
};

export default Index;
