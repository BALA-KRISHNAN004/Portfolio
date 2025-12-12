import React, { useState, useEffect } from "react";
import "./Skills.css";
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaBootstrap, FaPalette, FaComments, FaUsers, FaLightbulb, FaClock } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
  const technicalIcons = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JAVASCRIPT" },
    { icon: <FaReact />, name: "REACT" },
    { icon: <FaNodeJs />, name: "NODE.JS" },
    { icon: <SiExpress />, name: "EXPRESS.JS" },
    { icon: <SiMongodb />, name: "MONGO DB" },

    { icon: <FaGithub />, name: "GITHUB" },
    { icon: <FaFigma />, name: "FIGMA" },
    { icon: <FaPython />, name: "PYTHON" },
    { icon: <FaBootstrap />, name: "BOOTSTRAP" }
  ];
  const softIcons = [
    { icon: <FaComments />, name: "Communication" },
    { icon: <FaUsers />, name: "Teamwork" },
    { icon: <FaLightbulb />, name: "Problem Solving" },
    { icon: <FaClock />, name: "Time Management" }
  ];

  return (
    <div className="skills-page">
      <div className="skill-title">
         <SkillsSection title="TECHNICAL SKILLS" icons={technicalIcons} />
      <SkillsSection title="SOFT SKILLS" icons={softIcons} />

      </div>
     
    </div>
  );
}

function SkillsSection({ title, icons }) {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(icons.length / itemsPerPage);

  // Which icon is clicked
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (i) => {
    setActiveIndex(i);
  };

  const handleDotClick = (pageIndex) => {
    setCurrent(pageIndex * itemsPerPage);
  };

  return (
    <div className="skills-section">

      {/* Title */}
      <div className="skills-title">{title}</div>

      {/* Icons */}
      <div className="skills-icons">
        {icons.slice(current, current + itemsPerPage).map((item, index) => {
          const realIndex = current + index;
          const isActive = realIndex === activeIndex;

          return (
            <div
              key={index}
              className={`skill-card ${isActive ? "active-card" : ""}`}
              onClick={() => handleClick(realIndex)}
            >
              <div className={`skill-icon ${isActive ? "active-icon" : ""}`}>
                {item.icon}
              </div>
              <span className="skill-name">{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${Math.floor(current / itemsPerPage) === i ? "active-dot" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
