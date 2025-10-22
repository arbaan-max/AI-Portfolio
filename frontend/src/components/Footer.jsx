import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-text">AQ</span>
              <span className="logo-bracket">{'/>'}</span>
            </div>
            <p className="footer-tagline">
              Crafting beautiful mobile experiences with Flutter and building robust backend solutions.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link interactive"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link interactive"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:arbaan.qureshi@example.com"
                className="footer-social-link interactive"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#home" className="footer-link interactive">Home</a>
                </li>
                <li>
                  <a href="#skills" className="footer-link interactive">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="footer-link interactive">Projects</a>
                </li>
                <li>
                  <a href="#about" className="footer-link interactive">About</a>
                </li>
                <li>
                  <a href="#contact" className="footer-link interactive">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-list">
                <li>
                  <span className="footer-link">Mobile App Development</span>
                </li>
                <li>
                  <span className="footer-link">Cross-Platform Solutions</span>
                </li>
                <li>
                  <span className="footer-link">Backend Development</span>
                </li>
                <li>
                  <span className="footer-link">API Integration</span>
                </li>
                <li>
                  <span className="footer-link">Consulting</span>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Technologies</h4>
              <ul className="footer-list">
                <li>
                  <span className="footer-link">Flutter & Dart</span>
                </li>
                <li>
                  <span className="footer-link">Bloc & Riverpod</span>
                </li>
                <li>
                  <span className="footer-link">Node.js & Express</span>
                </li>
                <li>
                  <span className="footer-link">MongoDB & Firebase</span>
                </li>
                <li>
                  <span className="footer-link">Git & GitHub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Arbaan Qureshi S. Built with <Heart size={16} className="heart-icon" /> using React
          </p>
          <button
            className="scroll-to-top interactive"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;