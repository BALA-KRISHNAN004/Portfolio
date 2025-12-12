import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <button 
          className={`nav-btn home-btn ${activeTab === 'HOME' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('HOME'); setIsMenuOpen(false); }}
        >
          HOME
        </button>
        <button 
          className={`nav-btn about-btn ${activeTab === 'ABOUT' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('ABOUT'); setIsMenuOpen(false); }}
        >
          ABOUT
        </button>
        <button 
          className={`nav-btn skills-btn ${activeTab === 'SKILLS' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('SKILLS'); setIsMenuOpen(false); }}
        >
          SKILLS
        </button>
        <button 
          className={`nav-btn certificate-btn ${activeTab === 'CERTIFICATE' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('CERTIFICATE'); setIsMenuOpen(false); }}
        >
          CERTIFICATE
        </button>
        <button 
          className={`nav-btn publish-btn ${activeTab === 'PUBLISH' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('PUBLISH'); setIsMenuOpen(false); }}
        >
          PUBLISH
        </button>
        <button 
          className={`nav-btn project-btn ${activeTab === 'PROJECT' ? 'active' : ''}`} 
          onClick={() => { setActiveTab('PROJECT'); setIsMenuOpen(false); }}
        >
          PROJECT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
