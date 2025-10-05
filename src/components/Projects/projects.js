import React from 'react';
import './projects.css';

// Importing images (replace with your actual assets)
import chatApp from '../../assets/chatApp.png';
import wanderlust from '../../assets/wanderlust.png';
import login from '../../assets/login.png';
import dashboard from '../../assets/dashboard.png';
import simon from '../../assets/simon.png';
import spotify from '../../assets/spotify.png';

const Projects = () => {
  return (
    <section id='projects'>
      <span className='projectTitle'>My Projects</span>
      <span className='projectDesc'>
        Here are some of the projects I have worked on during my internships and personal learning journey.
      </span>

      <div className='projectCards'>

        {/* Mini WhatsApp */}
        <div className='projectCard'>
          <img className='projectImg' src={chatApp} alt='Mini WhatsApp' />
          <div className='projectText'>
            <h2>Mini WhatsApp Chat App</h2>
            <p>
              A MERN stack chat system with sender–receiver messages, timestamps,
              edit/delete options, and new chat creation.
            </p>
          </div>
        </div>

        {/* WanderLust */}
        <div className='projectCard'>
          <img className='projectImg' src={wanderlust} alt='Wanderlust' />
          <div className='projectText'>
            <h2>WanderLust (Airbnb Clone)</h2>
            <p>
              A full-stack Airbnb clone with property listings, image uploads,
              reviews, and CRUD operations using the MERN stack.
            </p>
          </div>
        </div>

        {/* Login System */}
        <div className='projectCard'>
          <img className='projectImg' src={login} alt='Login System' />
          <div className='projectText'>
            <h2>Login System</h2>
            <p>
              A login system built with Angular, Spring Boot, and MySQL. Includes
              user authentication and tested APIs with Postman.
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className='projectCard'>
          <img className='projectImg' src={dashboard} alt='Dashboard Project' />
          <div className='projectText'>
            <h2>Interactive Dashboard</h2>
            <p>
              Built a responsive dashboard with charts, cards, and clean UI
              using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

        {/* Simon Says Game */}
        <div className='projectCard'>
          <img className='projectImg' src={simon} alt='Simon Says Game' />
          <div className='projectText'>
            <h2>Simon Says Game</h2>
            <p>
              A fun memory-based game built with HTML, CSS, and JavaScript
              where players repeat random color sequences.
            </p>
          </div>
        </div>

        {/* Spotify Clone */}
        <div className='projectCard'>
          <img className='projectImg' src={spotify} alt='Spotify Clone' />
          <div className='projectText'>
            <h2>Spotify Clone</h2>
            <p>
              Created a frontend Spotify clone with a sleek UI and responsive
              design using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
