import React from 'react';
import './intro.css';
import bg from '../../assets/profile3.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I&apos;m <span className="introName">Akanksha</span>
          <br />
          Final Year Computer Engineering Student
        </span>
        <p className='introPara'>I’m a final-year Computer Engineering student skilled in Java and the MERN stack.
        Passionate about building full-stack applications and learning new technologies.</p>
        <Link to="contact" smooth={true} offset={-50} duration={500}>
          <button className='btn'>
            <img src={btnImg} alt='hireme' className='btnImg'/> Hire Me
          </button>
        </Link>

      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
