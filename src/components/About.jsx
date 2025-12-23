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
              I’m <b>Bala Krishnan S</b>, a creative and detail-oriented <b>MERN Stack Developer (Fresher)</b> with a strong foundation in frontend development and UI design. I specialize in building responsive and scalable web applications using <b>MongoDB, Express.js, React, and Node.js</b>. I’m also proficient in <b>Figma</b> for designing intuitive, user-centered interfaces. I’m passionate about <b>writing clean, efficient code, optimizing performance, and delivering seamless user experiences</b>, while continuously learning and adapting to new technologies.
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
