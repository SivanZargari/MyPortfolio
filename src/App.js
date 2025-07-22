import React, { useState } from 'react';
import './App.css';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiDjango } from "react-icons/si";
import Contact from "./Contact";
import { useEffect } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

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

      <button onClick={() => setShowDetails(!showDetails)} className="details-btn">
        {showDetails ? "Hide details" : "Details"}
      </button>




      {linkedinLink && (
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="project-btn">
          <FaLinkedin style={{ marginRight: '6px' }} /> LinkedIn
        </a>
      )}
      {websiteLink && (
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-btn">
          <FaExternalLinkAlt style={{ marginRight: '6px' }} /> Website
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
   useEffect(() => {
    document.title = "Sivan Zargari Portfolio";
  }, []);
  
  useFadeInOnScroll();
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#certificates" className="nav-link">Certificates</a>
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
                <button className="hero-btn dark" onClick={() => window.location.href = '#contact'}>
                  HIRE ME
                </button>
                <button className="hero-btn light" onClick={() => window.open('Sivan Zargari.docx.pdf')}>
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
            Hello! I'm Sivan, a passionate and detail-oriented Full Stack Developer with a B.Sc. in Computer Science.<br /><br />
            I specialize in building clean, efficient, and maintainable web applications using technologies like React, Node.js, Python, and more. I'm especially drawn to creating responsive, user-friendly experiences that solve real-world problems.<br /><br />
            Having recently completed my academic journey, I'm eager to apply my skills in professional environments, continue learning, and collaborate on meaningful projects.<br /><br />
            If you’re looking for someone who’s committed to writing quality code, learning fast, and delivering results - let’s talk.
          </p>
        </section>


        {/* SKILLS */}
        <section id="skills" className="skills fade-in-section">
          <h2>My Skills</h2>
          <div className="skills-container">
            <div className="skills-section">
              <h3>Frontend</h3>
              <div className="skills-grid">
                <div className="skill-item"><FaReact size={24} color="#61DBFB" /> React</div>
                <div className="skill-item"><FaJsSquare size={24} color="#F0DB4F" /> JavaScript</div>
                <div className="skill-item"><FaGitAlt size={24} color="#F1502F" /> Git</div>
                <div className="skill-item"><FaGithub size={24} color="#333" /> GitHub</div>
              </div>
            </div>

            <div className="skills-section">
              <h3>Backend</h3>
              <div className="skills-grid">
                <div className="skill-item"><FaNodeJs size={24} color="#68A063" /> Node.js</div>
                <div className="skill-item"><SiFirebase size={24} color="#FFCA28" /> Firebase</div>
                <div className="skill-item"><FaPython size={24} color="#3776AB" /> Python</div>
                <div className="skill-item"><SiDjango size={24} color="#092E20" /> Django</div>
                <div className="skill-item"><FaDatabase size={24} color="#6c757d" /> SQL</div>
              </div>
            </div>
          </div>
        </section>


        {/* CERTIFICATES */}
        <section id="certificates" className="certificates fade-in-section">
          <h2>Certificates</h2>
          <div className="certificates-grid">
            <div className="certificate-card">
              <FaGraduationCap className="certificate-icon" />
              <span>B.Sc. in Computer Science</span>
            </div>
          </div>
        </section>



        {/* PROJECTS */}
        <section id="projects" className="projects fade-in-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              title="Personal Budget Management"
              videoSrc="video.mp4"
              summary="A personal web app to manage monthly budgets with income, expenses, reports, and smart saving tools."
              details={
                <>
                  <p>Features include:</p>
                  <ul>
                    <li>Input income and expenses by category</li>
                    <li>Calculate totals per page</li>
                    <li>Monthly reports comparing income and expenses</li>
                    <li>Send monthly summary via EmailJS</li>
                    <li>Secure login with Google (Firebase Authentication)</li>
                    <li>Save historical summaries for users</li>
                    <li>Random tips wheel for smart saving</li>
                    <li>Memory game matching daily expenses and savings</li>
                    <li>Quiz on personal finance with educational explanations</li>
                    <li>Financial behavior assessment using TensorFlow.js model</li>
                  </ul>
                  <p><b>Technologies:</b> React.js, Node.js + Express.js, Firebase, EmailJS, Google OAuth, TensorFlow.js</p>
                </>
              }
              linkedinLink="https://www.linkedin.com/posts/sivan-zargari_reactjs-nodejs-firebase-activity-7327600442853482496-u2qw"
              websiteLink="https://budget-management-56nw.vercel.app/"
            />

            <ProjectCard
              title='Hall of Fame - "Iron Swords" War'
              videoSrc="video2.mp4"
              summary="A memorial platform created in memory of the heroes of the 'Iron Swords' war, focusing on an emotional and interactive user experience."
              details={
                <>
                  <p>Features include:</p>
                  <ul>
                    <li>Reading testimonies from survivors, abductees, and ZAKA volunteers</li>
                    <li>Lighting virtual candles with personal dedications</li>
                    <li>Viewing testimonial videos with comment support for registered users</li>
                    <li>A separate page for sensitive uncensored content with a warning</li>
                  </ul>
                  <p><b>Technologies:</b> Python, Django, SQLite, Bootstrap, JavaScript, HTML, CSS</p>
                </>
              }
              linkedinLink="https://www.linkedin.com/posts/sivan-zargari_html-css-javascript-activity-7289561146615877632-d45v"
            />

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="fade-in-section">
          <Contact />
        </section>

        {/* FOOTER */}

        <footer>
          © {new Date().getFullYear()} Sivan Zargari. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
