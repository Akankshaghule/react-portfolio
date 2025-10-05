import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import Menu from '../../assets/menu.png';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to="experience" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experiences</Link>
      </div>

      <Link 
        activeClass="active" 
        to="contact" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={500} 
        className="desktopMenuBtn"
      >
      <img src={contactImg} alt="contact" className="desktopMenuImg" />
      Contact me
      </Link>


      <img src={Menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>

      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to="experience" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Experiences</Link>
        <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
