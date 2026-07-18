import React from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import "./Dashboard.css";

function Dashboard() {
 const navigate = useNavigate();
  return (
    <section className="dashboard">

      <div className="dashboard-container">

        {/* Hero Section */}
        

        <div className="dashboard-hero">

          <div className="hero-content">

            <h1>
              Welcome, I'm <span>Yogesh Kumar</span>
            </h1>

            <h2>
              Aspiring AI & Machine Learning Engineer
              <br />
              Python Developer | Full-Stack Developer
            </h2>

            <p>
              BCA student at Bundelkhand University, Jhansi, passionate about
              software development, Artificial Intelligence, and building
              practical solutions through technology.
            </p>


            <div className="hero-buttons">

              <Link to="/resume" className="primary-btn">
                📄 View Resume
              </Link>

              <Link to="/contact" className="secondary-btn">
                📩 Contact Me
              </Link>

            </div>

          </div>


          <div className="profile-circle">
            <div className="profile-section">

         
          <div className="profile-border">

            <img src={profile} alt="Profile" />

          </div>

            
            </div>

          </div>


        </div>



        {/* Stats Section */}

        <div className="stats">


          <div className="stat-card">

            <h2>6+</h2>
            <p>Months Freelance Experience</p>

          </div>


          <div className="stat-card">

            <h2>10+</h2>
            <p>Technologies Learned</p>

          </div>


          <div className="stat-card">

            <h2>4+</h2>
            <p>Completed Projects</p>

          </div>


          <div className="stat-card">

            <h2>BCA</h2>
            <p>Computer Applications</p>

          </div>


        </div>



        {/* Skills Section */}

        <div className="dashboard-section">

          <h2>Technical Expertise</h2>


          <div className="skills">

            <span>Python</span>
            <span>C Programming</span>
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
            <span>Computer Networking</span>
            <span>Machine Learning</span>
            <span>Generative AI</span>

          </div>

        </div>



        {/* Projects */}

        <div className="dashboard-section">

          <h2>Featured Projects</h2>


          <div className="project-grid">


            <div className="project-card">

              <h3>🎓 College Management System</h3>

              <p>
                Python-based CRUD application for managing student records with
                structured data storage and retrieval.
              </p>

            </div>



            <div className="project-card">

              <h3>📊 Exam Pattern Analyzer</h3>

              <p>
                Web application designed to analyze examination patterns and
                present useful insights.
              </p>

            </div>



            <div className="project-card">

              <h3>📝 Student Grade Calculator</h3>

              <p>
                Python application that calculates marks, percentages, and
                student grades.
              </p>

            </div>



          </div>

        </div>



        {/* Learning */}

        <div className="dashboard-section learning">

          <h2>Currently Learning</h2>

          <p>
            Improving my knowledge in Machine Learning, Data Analysis,
            NumPy, Pandas, Scikit-learn, and Generative AI while building
            practical projects.
          </p>

        </div>

      {/* Navigation Buttons */}

        <div className="hero-buttons" style={{ marginTop: "40px", justifyContent: "center", gap: "20px" }}>

  <Link to="/" className="secondary-btn">
    ⬅ Back Home
  </Link>

  <Link to="/about" className="primary-btn">
    Next Page ➜ About
  </Link>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;