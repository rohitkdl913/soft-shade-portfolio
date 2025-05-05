
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.stagger-animation > *');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div ref={containerRef} className="max-w-3xl stagger-animation">
          <p className="text-teal-500 font-medium mb-2 text-lg">Hello, I'm</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6">
            Computer Engineering Student
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            I build clean, efficient, and user-friendly web applications with a focus on both frontend and backend technologies. Currently mastering Django and expanding my React skills.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToProjects}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-teal-500 text-teal-500 hover:bg-teal-50"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          onClick={scrollToProjects}
          className="text-teal-500 cursor-pointer" 
          size={32} 
        />
      </div>
    </section>
  );
};

export default HeroSection;
