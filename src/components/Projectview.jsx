import React from "react";
import "./Projectview.css";
import { FaPlay } from "react-icons/fa";

export default function ProjectPage({ project, onBack }) {
  return (
    <div className="project-wrapper">
      <h2 className="project-title">{project ? project.title : 'NAME!'}</h2>

      {/* Preview Box */}
      <div className="preview-box">
        <div className="preview-inner">
          <FaPlay className="play-icon" />
        </div>
      </div>

      {/* Buttons Row */}
      <div className="btn-row">
        <button className="btn-black">CODE</button>
        <button className="btn-black" onClick={onBack}>BACK</button>
      </div>

      {/* Output Box */}
      <div className="output-box">
        <p style={{padding: '20px', color: '#333', fontSize: '14px', lineHeight: '1.6'}}>
          This is a detailed description of Project {project ? project.title : ''}. 
          Here you can explain the features, technologies used, and the problem this project solves.
          It is designed to be responsive and look great on mobile devices.
        </p>
      </div>
    </div>
  );
}
