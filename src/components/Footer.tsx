
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
