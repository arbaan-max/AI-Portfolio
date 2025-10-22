import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Database, GitBranch, Smartphone, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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

  const skillCategories = [
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 92 },
        { name: 'Bloc Pattern', level: 90 },
        { name: 'Riverpod', level: 88 }
      ]
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Firebase', level: 82 }
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firestore', level: 80 },
        { name: 'SQLite', level: 75 },
        { name: 'PostgreSQL', level: 70 }
      ]
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'CI/CD', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-header">
          <div className="section-tag">
            <Zap size={20} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive toolkit built over 3 years of professional development experience
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-card ${inView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1 + 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;