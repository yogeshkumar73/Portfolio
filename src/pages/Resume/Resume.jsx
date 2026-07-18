import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Resume.css";

function Resume() {
  const navigate = useNavigate();
  return (
    <section className="resume">
      <div className="resume-container">

        <div className="resume-header">
          <h1>My Resume</h1>

          <p>
            Thank you for visiting my portfolio. You can download my latest
            resume to learn more about my education, technical skills,
            projects, and career objectives as an aspiring AI & Machine
            Learning Engineer and Full-Stack Developer.
          </p>
        </div>

        <div className="resume-card">

          <div className="resume-icon">
            📄
          </div>

          <h2>Yogesh Kumar</h2>

          <h3>
            Aspiring AI & Machine Learning Engineer
          </h3>

          <p>
            <strong>Education:</strong> Bachelor of Computer Applications
          </p>

          <p>
            <strong>University:</strong> Bundelkhand University, Jhansi
          </p>

          <p>
            <strong>Experience:</strong> 6 Months Freelance Web Development
          </p>

          <p>
            <strong>Skills:</strong> Python, React.js, Node.js, JavaScript,
            SQL, Machine Learning, Git & GitHub
          </p>

         <div className="button-group">

  {/* View Resume */}
  <a
    href="/Yogesh_Kumar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="view-btn"
  >
    👀 View Resume
  </a>


  {/* Download Resume */}
  <a
    href="/Yogesh_Kumar_Resume.pdf"
    download="Yogesh_Kumar_Resume.pdf"
    className="download-btn"
  >
    ⬇ Download Resume
  </a>


 {/* <div className="hero-buttons" style={{ marginTop: "40px", justifyContent: "center" }}> */}

  <button
    className="secondary-btn"
    onClick={() => navigate("/education")}
  >
    ⬅ Back Education
  </button>

  <button
    className="primary-btn"
    onClick={() => navigate("/blog")}
  >
    Next Page ➜ Blog
  </button>

</div>

        </div>

      </div>
    </section>
  );
}

export default Resume;