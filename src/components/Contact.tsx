
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// CONTACT SECTION
// CUSTOMIZATION: Update contact information, social links, and styling here
// COLOR SCHEME: Uses black, grey, and white only - no colors

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER: Section title and description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new projects, product opportunities, or potential collaborations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* CONTACT CARDS: Two main contact methods */}
        {/* STYLING: Grid layout that stacks on mobile */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* EMAIL CARD */}
          {/* CUSTOMIZATION: Updated email address */}
          <a 
            href="mailto:harishchintu6@gmail.com"
            className="group bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-500 transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">harishchintu6@gmail.com</p>
          </a>

          {/* LINKEDIN CARD */}
          {/* CUSTOMIZATION: Update LinkedIn URL here */}
          <a 
            href="https://linkedin.com/in/harishsamala"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-500 transition-colors">
              <Linkedin size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </a>
        </div>

        {/* CTA SECTION: Call-to-action banner */}
        {/* STYLING: Gradient background with contrasting text */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing!</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform ideas into impactful products? I'd love to hear about your next challenge.
          </p>
          
          {/* ACTION BUTTONS: Primary and secondary CTAs */}
          {/* CUSTOMIZATION: Update button text and links here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:harishchintu6@gmail.com"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Send me an email
            </a>
            {/* RESUME DOWNLOAD: Add actual resume file link here */}
            {/* CUSTOMIZATION: Replace # with actual resume download link */}
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors duration-200 font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* FOOTER: Copyright and credits */}
        {/* CUSTOMIZATION: Update footer text here */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Created with ❤️ using Lovable AI | © 2024 Harish Samala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
