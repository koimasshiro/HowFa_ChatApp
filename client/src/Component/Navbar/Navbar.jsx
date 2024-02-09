import React from "react";
import "./Navbar.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* <img src="" alt="" /> */}
        <h1>HowFa</h1>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="social-icons">
        <FaInstagram style={{margin: "10px", fontSize: '20px'}}/>
        <FaLinkedin style={{margin: "10px", fontSize: '20px'}}/>
        <FaGithub style={{margin: "10px", fontSize: '20px'}}/>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
