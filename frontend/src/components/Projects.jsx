import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured e-commerce mobile application built with Flutter and Bloc state management. Includes user authentication, product catalog, cart management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aXxlbnwwfHx8fDE3NjExMDcxMTV8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Flutter', 'Bloc', 'Firebase', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management app with real-time updates using Riverpod for state management and Node.js backend with MongoDB database. Features include task assignment, progress tracking, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjB1aXxlbnwwfHx8fDE3NjExMDcxMTV8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Flutter', 'Riverpod', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Feature-rich social media dashboard with user profiles, post creation, real-time notifications, and direct messaging. Built with Flutter for mobile and Express.js backend.',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NjExMDcxMjF8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Flutter', 'Bloc', 'Express.js', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness tracking application with workout routines, calorie counter, progress analytics, and integration with wearable devices. Uses Firebase for backend services.',
      image: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg',
      tags: ['Flutter', 'Riverpod', 'Firebase', 'Charts'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={20} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Showcasing my latest work in mobile app development and full-stack solutions
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${inView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link interactive"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link interactive"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;