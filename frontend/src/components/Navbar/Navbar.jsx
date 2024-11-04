import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // Import the close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='home'>
      <div className='set1'>
        <img className='banner' src={assets.Homepage_Banner} alt="Homepage_Banner" />
        <div className='nav-links'>
          <img className='log' src={assets.Logo} alt="Company_Logo" />
          <div className='nav-content'>
            <a href="#home"><p>Home</p></a>
            <a href="#cybertron"><p>About</p></a>
            <a href="#events"><p>Event</p></a>
            <a href="#blogs"><p>Blogs</p></a>
            <a href="#contact"><p>Contact us</p></a>
            {/* Updated register button to direct to Google Forms */}
            <a href="https://forms.gle/YS8fy2jXSK73RFQJ9" target="_blank" rel="noopener noreferrer">
              <button className='register-btn'>Register Now</button>
            </a>
          </div>

          <div className='hamburger'>
            <FiAlignJustify onClick={toggleMenu} className='hamburger-icon' />
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <IoClose onClick={toggleMenu} className='close-icon' /> {/* Close icon */}
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#cybertron" onClick={toggleMenu}>About</a>
          <a href="#events" onClick={toggleMenu}>Event</a>
          <a href="#blogs" onClick={toggleMenu}>Blogs</a>
          <a href="#contact" onClick={toggleMenu}>Contact us</a>
          {/* Updated register button in mobile menu */}
          <a href="https://forms.gle/YS8fy2jXSK73RFQJ9" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
            <button className="register-btn">Register</button>
          </a>
        </div>

        <div className='center-content'>
          <h2 className='sud'>CYBERBOTS Join with SUDHARSANAM VIDYAASHRAM</h2>
          <h1>SV-CYBERTRON 2k'25</h1>        
          <p>THE MOST RESPONSIBLE<br/>ROBOTICS EVENT IN TAMILNADU</p>
          {/* Updated register button in center content */}
          <a href="https://forms.gle/YS8fy2jXSK73RFQJ9" target="_blank" rel="noopener noreferrer">
            <button>Register Now</button>
          </a>
        </div>

        <div className='prize'>
          <p><b>Win Cash Prizes Worth ₹ 10000!</b></p>
          <p><b>Showcase Your Robotics Skills on a Grand Stage!</b></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
