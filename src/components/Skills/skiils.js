import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import databases from '../../assets/Databases.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I’m a final-year Computer Engineering student with skills in Java and the MERN stack. 
          I’ve completed internships in Java Development and Web Development, and 
          I enjoy creating full-stack projects, solving problems, and learning new technologies.</span>
          <div className='skillBars'>
            <div className='skillBar'>
              <img className='skillBarImg' src={UIDesign} alt='UIDesign'/>
              <div className='skillBarText'>
                <h2>Frontend Projects</h2>
                <p>Creating interactive websites and mini projects like Spotify Clone, Dashboards, and Games using HTML, CSS, and JavaScript.</p>
              </div>
            </div>
            <div className='skillBar'>
              <img className='skillBarImg' src={WebDesign} alt='WebDesign'/>
              <div className='skillBarText'>
                <h2>Web Development</h2>
                <p>Building responsive and user-friendly applications using the MERN stack (MongoDB, Express, React, Node.js).</p>
              </div>
            </div>
            <div className='skillBar'>
              <img className='skillBarImg' src={databases} alt='databases'/>
              <div className='skillBarText'>
                <h2>Database Management</h2>
                <p>Designing and managing databases with MySQL and MongoDB, ensuring efficient data handling.</p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Skills