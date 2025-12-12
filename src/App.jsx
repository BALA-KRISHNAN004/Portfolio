import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import PublishCard from './components/Publish'
import ProjectGrid from './components/Project'
import CertificateSlider from './components/Certificate'
import ProjectView from './components/Projectview'
import GalaxyBackground from './components/GalaxyBackground'

function App() {
  const [role, setRole] = useState("WEB DEVELOPER")
  const [activeTab, setActiveTab] = useState("HOME")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(prevRole => prevRole === "WEB DEVELOPER" ? "UI/UX DESIGNER" : "WEB DEVELOPER")
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Intersection Observer to update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['HOME', 'ABOUT', 'SKILLS', 'CERTIFICATE', 'PUBLISH', 'PROJECT'];
      
      // Find the section that is currently most visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is within the viewport or close to it
          // Adjust the offset (e.g., 100) based on navbar height
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // When viewing a project, we might want to hide the main scroll view or just overlay
    // For now, let's keep the existing logic but maybe scroll to project section
    // setActiveTab('PROJECT_VIEW'); // This was switching the view entirely
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
      scrollToSection('PROJECT', 'auto');
    }, 100);
  };
  
  const scrollToSection = (sectionId, behavior = "smooth") => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior
      });
      setActiveTab(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      <GalaxyBackground />
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={scrollToSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {selectedProject ? (
        <main className="main-content">
           <ProjectView project={selectedProject} onBack={handleBackToProjects} />
        </main>
      ) : (
        <main className="main-content">
          <section id="HOME">
            <Home role={role} />
          </section>

          <section id="ABOUT">
            <About onContactClick={() => scrollToSection('CONTACT')} />
          </section>

          <section id="SKILLS">
            <Skills />
          </section>
          
          <section id="CERTIFICATE">
            <CertificateSlider />
          </section>

          <section id="PUBLISH">
            <PublishCard />
          </section>

          <section id="PROJECT">
            <ProjectGrid onProjectClick={handleProjectClick} />
          </section>

          <section id="CONTACT">
            <Contact />
          </section>
        </main>
      )}
    </div>
  )
}

export default App
