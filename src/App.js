import React, { useState } from 'react';
import './App.css';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import Contact from "./Contact";

function ProjectCard({ title, videoSrc, summary, details, linkedinLink, websiteLink }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <video controls className="project-video">
        <source src={videoSrc} type="video/mp4" />
        הדפדפן שלך לא תומך בניגון וידאו.
      </video>
      <p>{summary}</p>

      {showDetails && (
        <p style={{ fontSize: "14px", marginTop: "10px" }}>{details}</p>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "10px"
        }}
      >
        {showDetails ? "הסתר פרטים" : "לפרטים"}
      </button>

      <br />
      {linkedinLink && (
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          View on LinkedIn
        </a>
      )}
      <br />
      {websiteLink && (
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          View Website
        </a>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="App">
        <header id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <h1>Sivan Zargari</h1>
              <h2>Full Stack Developer</h2>
              <a href="#contact">
                <button className="hire-btn">HIRE ME</button>
              </a>
            </div>
            <div className="hero-image fade-in">
              <img src="sivan-profile.jpg.JPG" alt="Sivan Zargari" />
            </div>
          </div>
        </header>

        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with experience in React, Node.js, and Python.
            I enjoy building clean, responsive, and interactive web applications.
          </p>
          <a href="Sivan Zargari.docx.pdf" download>
            <button className="download-btn">Download CV</button>
          </a>
        </section>

        <section id="skills" className="skills">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item"><FaReact size={30} color="#61DBFB" /> React</div>
            <div className="skill-item"><FaNodeJs size={30} color="#68A063" /> Node.js</div>
            <div className="skill-item"><FaPython size={30} color="#3776AB" /> Python</div>
            <div className="skill-item"><FaJsSquare size={30} color="#F0DB4F" /> JavaScript</div>
            <div className="skill-item"><SiFirebase size={30} color="#FFCA28" /> Firebase</div>
            <div className="skill-item"><FaGitAlt size={30} color="#F1502F" /> Git</div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>My Recent Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              title="Budget Management"
              videoSrc="video.mp4"
              summary="A budgeting platform built with React, Node.js, and Firebase."
              details="Helps users track expenses, visualize spending habits, and plan monthly budgets. Uses Firebase Auth and Realtime Database."
              linkedinLink="https://www.linkedin.com/posts/sivan-zargari_reactjs-nodejs-firebase-activity-7327600442853482496-u2qw"
              websiteLink="https://budget-management-56nw.vercel.app/"
            />

            <ProjectCard
              title="Hall of Fame"
              videoSrc="video2.mp4"
              summary="A memorial platform built with Django and SQLite."
              details="Includes virtual candles, user comments, image uploads, and profile pages. Built with Python and responsive HTML/CSS."
              linkedinLink="https://www.linkedin.com/posts/sivan-zargari_html-css-javascript-activity-7289561146615877632-d45v"
            />
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
