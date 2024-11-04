import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contact'>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img className="cmp" src={assets.Logo} alt="Company_logo" />
          <p>
          Join Cyberbots Today and learn from the best in the business. Elevate your skills, shape your career, and become a trailblazer in the world of technology!
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#cybertron">About</a></li>
            <li><a href="#events">Event</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@cyberbots.in</p>
          <p>Phone: +91 9514909991</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/2H1DDrorNTZ1npTH/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/team_cyberbots?igsh=MXFqcDhwZTB3aXU3bg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/cyberbots-robo-technologies/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Cyberbots. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
