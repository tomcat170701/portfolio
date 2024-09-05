import React, { useState, useEffect } from 'react';


const Skills = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true); // Trigger the animation after component mounts
  }, []);

  return (
    <section className="skills-section">
      <h1 className="skills-title">My <span className="highlight">Skills</span></h1>
      <div className="skills-container">
        
        {/* Coding Skills Section */}
        <div className="skills-category">
          <h2>Coding Skills</h2>
          <div className="skill">
            <p>HTML <span>100%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'html' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>CSS <span>70%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'css' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>JavaScript <span>65%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'javascript' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>Python <span>50%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'python' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="skills-category">
          <h2>Professional Skills</h2>
          <div className="skill">
            <p>Communication Systems <span>80%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'web-design' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>Web Development <span>67%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'web-development' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>VLSI <span>85%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'graphic-design' : ''}`}></div>
            </div>
          </div>

          <div className="skill">
            <p>Embedded Systems <span>75%</span></p>
            <div className="skill-bar">
              <div className={`skill-level ${animation ? 'embedded-systems' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
