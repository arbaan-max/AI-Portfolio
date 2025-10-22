import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Code, Coffee, User } from 'lucide-react';
import './About.css';

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const [count, setCount] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    coffees: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (inView) {
      const targets = { years: 3, projects: 25, clients: 15, coffees: 1200 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCount({
          years: Math.floor(targets.years * progress),
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          coffees: Math.floor(targets.coffees * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
    { icon: <Briefcase size={24} />, value: count.years, label: 'Years Experience', suffix: '+' },
    { icon: <Code size={24} />, value: count.projects, label: 'Projects Completed', suffix: '+' },
    { icon: <Award size={24} />, value: count.clients, label: 'Happy Clients', suffix: '+' },
    { icon: <Coffee size={24} />, value: count.coffees, label: 'Cups of Coffee', suffix: '+' }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <div className="section-tag">
            <User size={20} />
            <span>Get to know me</span>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className={`about-text ${inView ? 'animate' : ''}`}>
            <p className="about-paragraph">
              I'm <strong>Arbaan Qureshi S</strong>, a passionate Flutter developer with over 3 years of 
              professional experience in building high-quality mobile applications. My journey in software 
              development started with a fascination for creating intuitive user experiences and has evolved 
              into a comprehensive skill set spanning mobile and backend technologies.
            </p>
            <p className="about-paragraph">
              I specialize in <strong>Flutter</strong> for cross-platform mobile development, utilizing state 
              management solutions like <strong>Bloc</strong> and <strong>Riverpod</strong> to build scalable 
              and maintainable applications. On the backend, I work with <strong>Node.js</strong> and 
              <strong>Express.js</strong>, coupled with <strong>MongoDB</strong> databases to create robust 
              RESTful APIs.
            </p>
            <p className="about-paragraph">
              Throughout my career, I've collaborated with diverse teams on projects ranging from e-commerce 
              platforms to social networking apps. I'm committed to writing clean, efficient code and staying 
              updated with the latest industry trends and best practices.
            </p>
            <p className="about-paragraph highlight-text">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical blog posts.
            </p>
          </div>

          <div className={`about-stats ${inView ? 'animate' : ''}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;