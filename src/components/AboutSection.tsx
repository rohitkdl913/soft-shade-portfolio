
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('animate-fade-in');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square max-w-sm mx-auto md:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 delay-100">
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a computer engineering student passionate about building innovative web applications. My journey in tech started with curiosity about how websites work, which led me to explore both frontend and backend development.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Currently, I'm focused on mastering Django for robust backend solutions while continuing to improve my React skills. I enjoy solving complex problems and creating intuitive user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new tech, contributing to open-source projects, or learning about emerging technologies in the field of web development.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="tech-tag">React.js</div>
                <div className="tech-tag">Django</div>
                <div className="tech-tag">JavaScript</div>
                <div className="tech-tag">Python</div>
                <div className="tech-tag">HTML/CSS</div>
                <div className="tech-tag">Tailwind CSS</div>
                <div className="tech-tag">Git</div>
                <div className="tech-tag">RESTful APIs</div>
                <div className="tech-tag">SQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
