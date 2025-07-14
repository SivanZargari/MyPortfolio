import React, { useState } from 'react';
import './App.css';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import Contact from "./Contact";
import { useEffect } from 'react';

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

      <button onClick={() => setShowDetails(!showDetails)} className="send-btn">
        {showDetails ? "הסתר פרטים" : "לפרטים"}
      </button>

      {linkedinLink && (
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      )}
      {websiteLink && (
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      )}
    </div>
  );
}


function useFadeInOnScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
}

function App() {
  useFadeInOnScroll();
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
        {/* HERO */}
        <header id="home" className="hero">
          <div className="hero-content fade-in">
            <div className="hero-text">
              <h1>Sivan Zargari</h1>
              <h2>Full Stack Developer</h2>
              <div className="hero-buttons">
                <button className="hero-btn" onClick={() => window.location.href = '#contact'}>
                  HIRE ME
                </button>
                <button className="hero-btn" onClick={() => window.open('Sivan Zargari.docx.pdf')}>
                  Download CV
                </button>
              </div>
            </div>

            <div className="hero-image">
              <img src="sivan-profile.jpg.JPG" alt="Sivan Zargari" />
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section id="about" className="about fade-in-section">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with experience in React, Node.js, and Python.
            I enjoy building clean, responsive, and interactive web applications.
          </p>

        </section>

        {/* SKILLS */}
        <section id="skills" className="skills fade-in-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item"><FaReact size={24} color="#61DBFB" /> React</div>
            <div className="skill-item"><FaNodeJs size={24} color="#68A063" /> Node.js</div>
            <div className="skill-item"><FaPython size={24} color="#3776AB" /> Python</div>
            <div className="skill-item"><FaJsSquare size={24} color="#F0DB4F" /> JavaScript</div>
            <div className="skill-item"><SiFirebase size={24} color="#FFCA28" /> Firebase</div>
            <div className="skill-item"><FaGitAlt size={24} color="#F1502F" /> Git</div>
          </div>

          <h3 style={{ marginTop: "40px", fontSize: "20px" }}>Also Familiar With:</h3>
          <div className="skills-grid">
            <div className="skill-item">TypeScript</div>
            <div className="skill-item">Django</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Tailwind CSS</div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="certificates fade-in-section">
          <h2>Certificates</h2>
          <ul>
            <li>Full Stack Web Development Bootcamp – XYZ Academy</li>
            <li>Python for Data Science – Coursera</li>
            <li>SQL Fundamentals – SoloLearn</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects fade-in-section">
          <h2>Projects</h2>
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

        {/* CONTACT */}
        <section id="contact" className="fade-in-section">
          <Contact />
        </section>

        {/* FOOTER */}
        <footer style={{
          marginTop: "60px",
          padding: "30px 0",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          color: "#777",
          fontSize: "14px"
        }}>
          © {new Date().getFullYear()} Sivan Zargari. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
