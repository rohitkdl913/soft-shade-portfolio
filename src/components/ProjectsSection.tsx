
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Personal Blog Platform",
    description: "A full-stack blog application with custom CMS built with React and Django REST Framework.",
    tech: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and customers with data visualization.",
    tech: ["React", "Redux", "Node.js", "Chart.js", "Express"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Real-time weather application with location detection and 5-day forecast visualization.",
    tech: ["React", "OpenWeather API", "Geolocation API", "CSS3"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team assignment features.",
    tech: ["React", "Firebase", "Material UI", "Authentication"],
    link: "#",
    github: "#"
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 150);
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Here are some of the projects I've worked on. Each demonstrates different skills and technologies in my development journey.
        </p>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card opacity-0 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-1">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 border-t">
                <Button variant="link" className="text-teal-500 p-0 hover:text-teal-600" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button variant="link" className="text-teal-500 p-0 hover:text-teal-600" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
