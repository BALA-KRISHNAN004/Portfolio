import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";
import secure_auth from "../assets/secure_auth.png";
import ecommerce from "../assets/ecommerce.png";
import social_media from "../assets/social_media.png";
import hotel_booking from "../assets/hotel_booking.png";
import  realtime_chart from "../assets/realtime_chart.png";
import employee_management from "../assets/employee_management.png";
import ai_voice_assistant from "../assets/ai_voice_assistant.png";
import Task_Manager from "../assets/Task_Manager.png";
import Weather_Application from "../assets/Weather_Application.png";

export default function ProjectGrid({ onProjectClick }) {
  const list = [
    { id: 1, title: "Secure User Authentication", github: "https://github.com/BALA-KRISHNAN004/Secure-User-Authentication-Webpage.git", image: secure_auth },
    { id: 2, title: "Local Store E-Commerce Platform", github: "https://github.com/BALA-KRISHNAN004/Local-E-Commerce-Store.git", image: ecommerce },
    { id: 3, title: "Social Media Platform", github: "https://github.com/BALA-KRISHNAN004/Social-Media-Platform.git", image: social_media },
    { id: 4, title: "Hotel Booking", github: "https://github.com/BALA-KRISHNAN004/Hotel-Booking.git", image: hotel_booking },
    { id: 5, title: "Real-Time Chat Application", github: "https://github.com/BALA-KRISHNAN004/Real-Time-Chart-Application.git", image: realtime_chart },
    { id: 6, title: "Employee Management System", github: "https://github.com/BALA-KRISHNAN004/Employee-Management-System.git", image: employee_management },
    { id: 7, title: "Task Manager", github: "https://github.com/BALA-KRISHNAN004/Task-Manager.git" , image: Task_Manager },
    { id: 8, title: "Weather Application" , github: "https://github.com/BALA-KRISHNAN004/Weather-Application.git" , image: Weather_Application},
    { id: 9, title: "AI voice assistant", github:"https://github.com/BALA-KRISHNAN004/AI-VOICE-ASSISTANT.git", image: ai_voice_assistant },
  ];

  return (
    <div className="project-grid-wrapper">
      <div className="project-title"><h2>PROJECTS</h2></div>
      <div className="project-grid">
        {list.map((item) => (
          <ProjectCard key={item.id} item={item} title={item.title} onClick={onProjectClick} />
        ))}

        
      </div>
    </div>
  );
}
