import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-card">

          <div className="about-heading">
            <h1>
              About <span>Me</span>
            </h1>

            <p className="intro">
              Building my journey from a curious computer science student into
              a developer who creates meaningful and practical solutions.
            </p>
          </div>


          <div className="about-text">

            <p>
              Hi, I'm <strong>Yogesh Kumar</strong>, a Bachelor of Computer
              Applications (BCA) student at <strong>Bundelkhand University,
              Jhansi</strong>. I am passionate about software development,
              Artificial Intelligence, and Machine Learning.
            </p>


            <p>
              My interest in technology started with understanding how
              applications work and gradually turned into a passion for building
              them. I enjoy writing clean code, learning new technologies, and
              creating projects that solve practical problems.
            </p>


            <p>
              I have experience working on freelance web development projects
              where I have built responsive and user-friendly applications.
              Along with freelance work, I continuously work on personal
              projects to improve my programming skills and understand real-world
              software development practices.
            </p>


            <p>
              My current focus is improving my skills in Full-Stack Development,
              Python Programming, Machine Learning, Data Analysis, and
              Generative AI. I am also exploring open-source projects and
              learning how developers collaborate to build reliable software.
            </p>


            <p>
              I believe that consistent learning and practical experience are
              the best ways to grow as a developer. My goal is to become an
              AI & Machine Learning Engineer who can create technology that is
              useful, efficient, and impactful.
            </p>

          </div>


          <div className="journey-section">

            <h2>My Development Journey</h2>

            <div className="journey-grid">

              <div className="journey-box">
                <h3>🎓 Education</h3>
                <p>
                  BCA Student at Bundelkhand University, building strong
                  foundations in programming and computer science.
                </p>
              </div>


              <div className="journey-box">
                <h3>💻 Development</h3>
                <p>
                  Building web applications using React.js, Node.js, Python,
                  JavaScript, and SQL.
                </p>
              </div>


              <div className="journey-box">
                <h3>🤖 Future Goal</h3>
                <p>
                  Becoming an AI & Machine Learning Engineer by combining
                  software development with intelligent technologies.
                </p>
              </div>

            </div>

          </div>


          <div className="skill-section">

            <h2>Technical Skills</h2>

            <div className="skills">

              <span>Python</span>
              <span>C</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>SQL</span>
              <span>MySQL</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>REST APIs</span>
              <span>Git & GitHub</span>
              <span>DBMS</span>
              <span>OOP</span>
              <span>Data Structures</span>
              <span>Computer Networking</span>
              <span>Machine Learning</span>
              <span>Generative AI</span>

            </div>

          </div>


           <div className="hero-buttons" style={{ marginTop: "40px", justifyContent: "center", gap: "20px" }}>

  <Link to="/Dashboard" className="secondary-btn">
    ⬅ Back Dashboard
  </Link>

  <Link to="/skills" className="primary-btn">
    Next Page ➜ Skills
  </Link>

   </div>
        </div>

      </div>
    </section>
  );
}

export default About;