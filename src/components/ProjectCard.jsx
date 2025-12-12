import React from "react";
import "./ProjectCard.css";
import "./ProjectCard.css";

export default function ProjectCard({ item, title, onClick }) {
  return (
    <div className="project-card">
      <div className="project-img">
        {item.image && <img src={item.image} alt={title} className="card-img" />}
      </div>
      <p className="project-name">{title}</p>
      <button className="more-btn" onClick={() => window.open(item.github, "_blank")}>
        MORE
      </button>
    </div>
  );
}
