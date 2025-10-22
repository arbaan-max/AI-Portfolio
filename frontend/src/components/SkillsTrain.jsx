import React, { useEffect, useState } from 'react';
import './SkillsTrain.css';

const SkillsTrain = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const skills = [
  { name: 'Flutter', icon: 'https://iconape.com/wp-content/files/yb/61798/png/flutter-logo.png' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Git', icon: '📦' },
  { name: 'Dart', icon: '🎯' },
  { name: 'JavaScript', icon: '💛' }
];

  return (
    <div className="skills-train-container">
      <div 
        className="skills-train"
        style={{
          transform: `translateX(${-scrollY * 0.5}px)`
        }}
      >
        {/* Render skills twice for seamless loop */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="train-car">
            <div className="train-car-top">
              <span className="skill-icon-small">
  {skill.name === 'Flutter' ? (
    <img src={skill.icon} alt="Flutter" className="skill-img-small" />
  ) : (
    skill.icon
  )}
</span>

            </div>
            <div className="train-car-bottom">
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="train-wheels">
              <div className="wheel"></div>
              <div className="wheel"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second train moving in opposite direction */}
      <div 
        className="skills-train skills-train-reverse"
        style={{
          transform: `translateX(${scrollY * 0.3}px)`
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="train-car train-car-small">
            <div className="train-car-content">

<span className="skill-icon-small">
  {skill.name === 'Flutter' ? (
    <img src={skill.icon} alt="Flutter" className="skill-img-small" />
  ) : (
    skill.icon
  )}
</span>



            </div>
            <div className="train-wheels">
              <div className="wheel wheel-small"></div>
              <div className="wheel wheel-small"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Flutter Logo */}
<div 
  className="floating-flutter-logo"
  style={{
    transform: `translate(${scrollY * 0.2}px, ${Math.sin(scrollY * 0.01) * 50}px) rotate(${scrollY * 0.1}deg)`
  }}
>
  <img 
    src="https://iconape.com/wp-content/files/yb/61798/png/flutter-logo.png" 
    alt="Flutter Logo" 
  />
</div>


    </div>
  );
};

export default SkillsTrain;