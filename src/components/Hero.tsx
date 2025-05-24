
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            Hello
            <br />
            <span className="font-normal">नमस्ते</span>
            <br />
            <span className="font-normal">Bonjour</span>
            <br />
            <span className="font-normal">Hallo!</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
