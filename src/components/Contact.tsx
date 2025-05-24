
import React from 'react';
import { Linkedin, Youtube, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new projects, product opportunities, or potential collaborations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a 
            href="mailto:harish.samala@edhec.com"
            className="group bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">harish.samala@edhec.com</p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/harishsamala"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Linkedin size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </a>

          {/* YouTube */}
          <a 
            href="https://youtube.com/@harishsamala"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
              <Youtube size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">YouTube</h3>
            <p className="text-gray-300">Watch my content</p>
          </a>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing!</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform ideas into impactful products? I'd love to hear about your next challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:harish.samala@edhec.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Send me an email
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-medium">
              Download Resume
            </button>
          </div>
        </div>

        {/* Footer */}
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
