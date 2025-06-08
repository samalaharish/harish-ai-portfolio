import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new projects, product opportunities, or potential collaborations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <a 
              href="mailto:harishchintu6@gmail.com"
              className="group bg-gray-300 rounded-xl p-8 text-center transition-colors duration-200 mb-8 block"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Mail size={24} className='text-white'/>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">harishchintu6@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/samala-harish/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-300 rounded-xl p-8 text-center transition-colors duration-200 block"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <Linkedin size={24} className='text-white'/>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-300 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing!</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform ideas into impactful products? I'd love to hear about your next challenge.
            </p>
            <div className="flex flex-col gap-4 justify-center">
              <a 
                href="mailto:harishchintu6@gmail.com"
                className="bg-black text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Send me an email
              </a>
              <a 
                href="/Harish_CV_PM_IN.pdf"
                download={"Harish_CV.pdf"}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-gray-400">
          <p className="text-gray-600">
            ❤️ Lovable AI | ©️ 2024 Harish Samala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
