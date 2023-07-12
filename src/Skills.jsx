import React from 'react';
import './css/skills.css';

function Skills() {
  return (
    <>
      <div className="skills-section">
        <h1 className="section-heading"> Skills </h1>
        <div className="skills-section-boxes">
          <div className="skill-box">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
            <div> React JS </div>
          </div>

          <div className="skill-box">
            <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" />
            <div> HTML </div>
          </div>

          <div className="skill-box">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" />
            <div> CSS </div>
          </div>

          <div className="skill-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
            <div> JavaScript </div>
          </div>

          <div className="skill-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />
            <div> Python </div>
          </div>

          <div className="skill-box">
            <img src="https://logowik.com/content/uploads/images/flutter5786.jpg" />
            <div> Flutter </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
