import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import envelopeIcon from '../assets/envelope.svg';

const SimpleResume = () => {
  return (
    <div className="simple-resume">
      <header className="header">
        <h1>Anthony Wang</h1>
        <nav>
          <a href="#work">experience</a>
          <a href="#leadership">leadership</a>
          <a href="mailto:anthonyjuan.wang@gmail.com">contact</a>
        </nav>
      </header>

      <main className="content">
        <section id="work" className="section">
          <h2>WORK</h2>
          <p>Software engineering internships and development roles</p>
          
          <div className="experience-item">
            <p>Accelerated feature flag adoption for 10+ teams at <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer">Shopify</a></p>
            <p className="details">SUMMER 2025 - TYPESCRIPT, PYTHON, VOWPAL WABBIT, RUBY, RAILS, BIGQUERY</p>
          </div>

          <div className="experience-item">
            <p>Automated manual data extraction process from MCD files at <a href="https://www.standardbio.com/" target="_blank" rel="noopener noreferrer">Standard BioTools</a></p>
            <p className="details">WINTER 2024 - C#, .NET, PYTHON</p>
          </div>

          <div className="experience-item">
            <p>Upgraded front-end of website from Node 7 to Node 16 at <a href="https://www.bluerover.ai/" target="_blank" rel="noopener noreferrer">blueRover</a></p>
            <p className="details">WINTER 2023 - REACT, JAVASCRIPT, HTML, CSS</p>
          </div>

          <div className="experience-item">
            <p>Refactored existing UI to UI 2.0 by recreating 12+ PHP components in React at <a href="https://firsthx.com/" target="_blank" rel="noopener noreferrer">FirstHX</a></p>
            <p className="details">SUMMER 2022 - REACT, JAVASCRIPT, HTML, CSS</p>
          </div>
        </section>

        <section id="leadership" className="section">
          <h2>LEADERSHIP</h2>
          <p>Community leadership and organizational involvement</p>
          
          <div className="experience-item">
            <p>Lead team of 15+ event coordinators to run fun and educational events at <a href="https://csclub.uwaterloo.ca/" target="_blank" rel="noopener noreferrer">UW Computer Science Club</a></p>
            <p className="details">WINTER 2022 - SUMMER 2024 - LEAD EVENT COORDINATOR</p>
          </div>

          <div className="experience-item">
            <p>Managed a group of 60+ executives to run the largest social events at <a href="https://www.instagram.com/uwcsa/" target="_blank" rel="noopener noreferrer">UW Chinese Students Association</a></p>
            <p className="details">WINTER 2024 - CO-PRESIDENT</p>
          </div>

          <div className="experience-item">
            <p>Overseeing creating a dynamic and inclusive community for Chinese students at <a href="https://www.instagram.com/uwcsa/" target="_blank" rel="noopener noreferrer">UW Chinese Students Association</a></p>
            <p className="details">SUMMER 2022 - SUMMER 2024 - VP INTERNAL</p>
          </div>

          <div className="experience-item">
            <p>Instructing children and adults of all ages in swimming and water safety at <a href="https://www.kitchener.ca/" target="_blank" rel="noopener noreferrer">City of Kitchener</a></p>
            <p className="details">2016 - 2022 - SWIM INSTRUCTOR & LIFEGUARD</p>
          </div>
        </section>
      </main>

      <footer className="social-footer">
        <div className="social-links">
          <a href="https://github.com/anthonyjuan-wang" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/anthony-wang3/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:aj3wang@uwaterloo.ca" className="social-link">
            <img src={envelopeIcon} alt="Email" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SimpleResume;
