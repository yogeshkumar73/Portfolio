import React from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Education.css";

function Education() {
  const navigate=useNavigate();
  return (
    <section className="education">
      <div className="education-container">
        <div className="education-header-section">
          <h1>
            My <span>Education</span>
          </h1>

          <p>
            My academic journey has provided me with a strong foundation in
            Computer Science, Software Development, and emerging Artificial
            Intelligence technologies. Through continuous learning and practical
            projects, I am developing the skills required to become a
            professional AI & Machine Learning Engineer.
          </p>
        </div>

        {/* Bachelor's Degree */}
        <div className="education-card">
          <div className="card-top">
            <h2>Bachelor of Computer Applications (BCA)</h2>
            <span>2024 – 2026</span>
          </div>

          <h3>Bundelkhand University, Jhansi</h3>

          <p>
            Currently pursuing a Bachelor of Computer Applications with a focus
            on Computer Science fundamentals, programming, database management,
            software development, and modern web technologies. Alongside my
            academics, I actively build real-world projects and continuously
            improve my technical skills in Artificial Intelligence and Machine
            Learning.
          </p>

          <div className="subject-list">
            <span>Python</span>
            <span>C Programming</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>DBMS</span>
            <span>Object-Oriented Programming</span>
            <span>Data Structures</span>
            <span>Computer Networking</span>
            <span>Operating System</span>
            <span>Software Engineering</span>
            <span>Git & GitHub</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-card">
          <div className="card-top">
            <h2>Intermediate (Class XII)</h2>
            <span>2021</span>
          </div>

          <h3>Percentage: 71.5%</h3>

          <p>
            Successfully completed Higher Secondary Education with a strong
            academic performance, strengthening my analytical thinking,
            communication, and problem-solving abilities while building the
            foundation for higher education in computer applications.
          </p>
        </div>

        {/* High School */}
        <div className="education-card">
          <div className="card-top">
            <h2>High School (Class X)</h2>
            <span>2019</span>
          </div>

          <h3>Percentage: 70%</h3>

          <p>
            Completed secondary education with a solid academic record. During
            this period, I developed curiosity for technology, logical
            reasoning, and computer science, which inspired my journey into
            software development.
          </p>
        </div>

        {/* Certification */}
        <div className="education-card">
          <div className="card-top">
            <h2>Professional Certification</h2>
            <span>July 2025</span>
          </div>

          <h3>Object-Oriented Programming – Great Learning</h3>

          <p>
            Successfully completed a professional certification in
            Object-Oriented Programming, gaining practical knowledge of classes,
            objects, inheritance, polymorphism, abstraction, encapsulation, and
            software design principles.
          </p>
        </div>

        {/* Continuous Learning */}
        <div className="education-card">
          <div className="card-top">
            <h2>Continuous Learning</h2>
          </div>

          <p>
            I am continuously enhancing my expertise in Machine Learning, Data
            Analysis, Generative AI, and Full-Stack Development by building
            practical projects and exploring modern technologies.
          </p>

          <div className="subject-list">
            <span>Machine Learning</span>
            <span>NumPy</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>Generative AI</span>
            <span>Python</span>
            <span>Data Analysis</span>
          </div>
        </div>

       {/* Navigation Buttons */}

<div className="hero-buttons" style={{ marginTop: "40px", justifyContent: "center" }}>

  <button
    className="secondary-btn"
    onClick={() => navigate("/experience")}
  >
    ⬅ Back Experience
  </button>

  <button
    className="primary-btn"
    onClick={() => navigate("/resume")}
  >
    Next Page ➜ Resume
  </button>
        </div>
      </div>
    </section>
  );
}

export default Education;