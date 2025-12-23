import React from "react";
import "./About.css";
import about_profile from "../assets/about_profile.jpg";

const About = ({ onContactClick }) => {
  return (
    <div className="about-container">
      <div className="about-card">
        {/* Right Section - Image Placeholder (Now on Left) */}
        <div className="about-image">
           <img src={about_profile} alt="About Profile" className="about-img-content" />
        </div>

        {/* Left Section - Text (Now on Right) */}
        <div className="about-text">
          <h2>About Me,</h2>

          <div className="about-box">
            <p>
              I'm Bala Krishnan.S. Creative and detail-oriented MERN Stack Developer Fresher with a strong foundation in Frontend development and
UI design. Skilled in building responsive and scalable web applications using MongoDB, Express.js, React, and Node.js.
Proficient in Figma for crafting intuitive user interfaces. Passionate about clean code, performance optimization, and
delivering seamless user experiences while continuously learning new technologies.
            </p>
          </div>

          <div className="btn-row">
            <button className="btn" onClick={onContactClick}>Contact</button>
            
            <a href="/BALAKRISHNAN.S_RESUME.pdf" download="BALA KRISHNAN_RESUME.pdf">
              <button className="btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
