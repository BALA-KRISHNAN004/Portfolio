import React, { useState, useEffect } from "react";
import "./Certificate.css";
import XploreIT_Certificate from "../assets/XploreIT_Certificate.jpg";
import Accent_Techno_Soft_Certificate from "../assets/Accent_Techno_Soft_Certificate.jpg";
import MindLuster_Jira_Certificate from "../assets/MindLuster_Jira_Certificate.jpg";
import MindLuster_CSS_Variables from "../assets/MindLuster_CSS_Variables.jpg";
import MindLuster_Web_Animations from "../assets/MindLuster_Web_Animations.jpg";
import MindLuster_Soft_Skills from "../assets/MindLuster_Soft_Skills.jpg";
import Certificate_Appreciation_AI from "../assets/Certificate_Appreciation_AI.jpg";
import Certificate_Publication_Journal from "../assets/Certificate_Publication_Journal.jpg";



export default function CertificateSlider() {
  const cards = [
    { src: XploreIT_Certificate, title: "XploreIT Certificate" },
    { src: Accent_Techno_Soft_Certificate, title: "Accent Techno Soft" },
    { src: MindLuster_Jira_Certificate, title: "Atlassian JIRA and Bonfire" },
    { src: MindLuster_CSS_Variables, title: "CSS Variables" },
    { src: MindLuster_Web_Animations, title: "Mastering Web Animations Using SVG" },
    { src: MindLuster_Soft_Skills, title: "Soft Skills for developers" },
    { src: Certificate_Appreciation_AI, title: "Build a Voice Assistant with OpenAI" },
    { src: Certificate_Publication_Journal, title: "Certificate of Publication" }
  ];


  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedCertificate, setSelectedCertificate] = useState(null); // State for modal


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 520) {
        setItemsPerPage(cards.length); // Show all cards on mobile for vertical scroll
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleDotClick = (index) => {
    setCurrent(index * itemsPerPage);
  };

  return (
    <div className="certificate-section">
      <div className="certificate-title">CERTIFICATES</div>
      {/* Cards Container */}
      <div className="cards-wrapper">
        {cards.slice(current, current + itemsPerPage).map((card, index) => (
          <div className="certificate-card" key={index} onClick={() => setSelectedCertificate(card)}>
             <div className="certificate-name">{card.title}</div>
          </div>
        ))}
      </div>

      {/* Modal for Full View */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={() => setSelectedCertificate(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedCertificate(null)}>&times;</span>
            <img src={selectedCertificate.src} alt="Full Certificate" className="full-certificate-image" />
            <div className="full-certificate-title">{selectedCertificate.title}</div>
          </div>
        </div>
      )}


      {/* Pagination Dots */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            onClick={() => handleDotClick(i)}
            className={`dot ${Math.floor(current / itemsPerPage) === i ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
