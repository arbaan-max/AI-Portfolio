import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Flutter Developer',
    'Mobile App Developer',
    'Backend Engineer',
    'Full-Stack Developer'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, roles]);

  const terminalCommands = [
    '$ flutter create awesome_app',
    '$ cd awesome_app',
    '$ flutter pub add creativity',
    '$ flutter run',
    '> Building... Done!'
  ];

  const handleGetInTouch = () => {
    window.location.href = 'mailto:mergeme2@gmail.com?subject=Project Inquiry&body=Hi Arbaan, I would like to discuss a project with you.';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="parallax-layer layer-1"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Arbaan Qureshi </span>
          </h1>

          <div className="typing-container">
            <span className="typing-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-description">
            Passionate Flutter developer with 3 years of experience building beautiful,
            high-performance mobile applications. Specializing in state management with
            Bloc & Riverpod, and backend development with Node.js.
          </p>

          <div className="hero-actions">
            <button className="btn-primary interactive" onClick={handleGetInTouch}>
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="btn-secondary interactive">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/arbaan-max" target="_blank" rel="noopener noreferrer" className="social-link interactive">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arbaan-flutter-developer/" target="_blank" rel="noopener noreferrer" className="social-link interactive">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mergeme2@gmail.com" className="social-link interactive">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn red"></span>
              <span className="terminal-btn yellow"></span>
              <span className="terminal-btn green"></span>
            </div>
            <div className="terminal-title">
              <Terminal size={16} />
              <span>terminal</span>
            </div>
          </div>
          <div className="terminal-body">
            {terminalCommands.map((cmd, index) => (
              <div key={index} className="terminal-line" style={{ animationDelay: `${index * 0.5}s` }}>
                {cmd}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;