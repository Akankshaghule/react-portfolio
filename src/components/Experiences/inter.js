import React from 'react';
import './Experience.css';
import java from '../../assets/java.PNG';   // replace with your actual certificate image
import webInternCert from '../../assets/web.png';    // replace with your actual certificate image

const Experience = () => {
  return (
    <section id='experience'>
      <span className='expTitle'>Work Experience</span>
      <span className='expDesc'>
        Internships where I gained hands-on experience in software development and web technologies.
      </span>

      <div className='expContainer'>

        {/* Java Developer Internship */}
        <div className='expCard'>
          <img src={java} alt='Java Internship Certificate' className='expImg'/>
          <div className='expText'>
            <h2>Java Developer Intern</h2>
            <h3>Technogrowth Software Solutions, Pune</h3>
            <p className='expDate'>Dec 2024 – Jan 2025</p>
            <p>
              Built a basic login form using Java and MySQL, handled both frontend and backend database connection with JDBC.
            </p>
          </div>
        </div>

        {/* Web Development Internship */}
        <div className='expCard'>
          <img src={webInternCert} alt='Web Dev Internship Certificate' className='expImg'/>
          <div className='expText'>
            <h2>Web Development Intern</h2>
            <h3>Vaultsofcodes AICT</h3>
            <p className='expDate'>Feb 2024 – Mar 2024</p>
            <p>
              Created responsive web pages using HTML, CSS, and JavaScript. Learned frontend design and improved debugging skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
