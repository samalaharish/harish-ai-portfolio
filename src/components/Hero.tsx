const Hero = () => {
  return (
    <section className="p-4 sm:p-8 md:p-12 lg:p-20 pb-6 sm:pb-8 md:pb-10 bg-black">
      <div 
        className="relative mt-20 md:mt-0 min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-start justify-start bg-cover rounded-sm bg-[url('/hero-image-mobile.JPG')] xl:bg-[url('/hero-image.png')]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 md:pt-10 ml-0 sm:ml-4 md:ml-6 lg:ml-10">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-tight tracking-tight" style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)' }}>
              Hello
              <br />
              <span className="font-normal">నమస్కారం</span>
              <br />
              <span className="font-normal">नमस्ते</span>
              <br />
    
              
              <span className="font-normal">Bonjour</span>
              <br />
              <span className="font-normal">Hallo!</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
