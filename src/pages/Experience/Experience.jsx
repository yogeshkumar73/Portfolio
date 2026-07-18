import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Experience.css";


function Experience() {
const navigate = useNavigate();
    const technologies = [
        "React.js",
        "JavaScript",
        "Node.js",
        "Python",
        "SQL",
        "REST API",
        "Git",
        "GitHub"
    ];


    const aiSkills = [
        "Machine Learning",
        "Data Analysis",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Generative AI"
    ];



    const projects = [

        "College Management System - Python CRUD application for managing student records.",

        "Exam Pattern Analyzer - Web application to analyze examination patterns and insights.",

        "Student Grade Calculator - Python application for calculating marks, percentages and grades.",

        "Number Guessing Game - Interactive Python project using random number generation."

    ];



    return (

        <section className="experience">


            <div className="experience-container">



                {/* Header */}

                <div className="experience-header-section">


                    <h1 className="experience-title">

                        My <span>Experience</span>

                    </h1>



                    <p className="experience-subtitle">

                        A journey of continuous learning,
                        software development and improving
                        my skills in Full Stack Development,
                        Python, Artificial Intelligence and
                        Machine Learning.

                    </p>


                </div>





                {/* Freelance Experience */}


                <div className="experience-card">


                    <div className="card-title">


                        <h2>
                            💼 Freelance Developer
                        </h2>


                        <span>
                            6 Months Experience
                        </span>


                    </div>




                    <p className="company">

                        Remote • Self Employed Developer

                        <br />

                        2025 - Present

                    </p>





                    <p className="description">


                        Worked on personal and freelance
                        development projects to improve
                        practical software development skills.


                        <br /><br />


                        Built responsive interfaces using
                        React.js, JavaScript and worked with
                        Python, SQL databases and modern
                        development tools.


                        <br /><br />


                        Focused on clean code, debugging,
                        application structure and creating
                        user-friendly experiences.


                    </p>




                    <h3>

                        Technologies Used

                    </h3>



                    <div className="skills">


                        {
                            technologies.map((tech,index)=>(

                                <span key={index}>

                                    {tech}

                                </span>

                            ))
                        }


                    </div>



                </div>









                {/* AI Journey */}



                <div className="experience-card">


                    <h2>

                        🤖 AI & Machine Learning Journey

                    </h2>




                    <p className="description">


                        Currently pursuing Bachelor of
                        Computer Applications (BCA) at
                        Bundelkhand University, Jhansi.


                        <br /><br />


                        Learning Machine Learning,
                        Data Analysis, NumPy, Pandas,
                        Scikit-learn and Generative AI
                        through practical projects.


                    </p>




                    <div className="skills">


                        {
                            aiSkills.map((skill,index)=>(

                                <span key={index}>

                                    {skill}

                                </span>

                            ))
                        }


                    </div>



                </div>









                {/* Projects */}



                <div className="experience-card">


                    <h2>

                        🚀 Project Development Experience

                    </h2>




                    <ul className="project-list">


                        {
                            projects.map((project,index)=>(

                                <li key={index}>

                                    {project}

                                </li>

                            ))
                        }


                    </ul>



                </div>









                {/* Education */}



                <div className="experience-card">


                    <h2>

                        🎓 Education Background

                    </h2>




                    <p className="description">


                        <strong>

                            Bachelor of Computer Applications (BCA)

                        </strong>


                        <br/>


                        Bundelkhand University, Jhansi


                        <br/>


                        2024 - 2026



                        <br/><br/>


                        Intermediate (2021): 71.5%


                        <br/>


                        High School (2019): 70%



                    </p>



                </div>









                {/* Buttons */}



               <div className="hero-buttons" style={{ marginTop: "40px", justifyContent: "center" }}>

  <button
    className="secondary-btn"
    onClick={() => navigate("/Projects")}
  >
    ⬅ Back Projects
  </button>

  <button
    className="primary-btn"
    onClick={() => navigate("/education")}
  >
    Next Page ➜ Education
  </button>
                </div>




            </div>


        </section>

    );


}



export default Experience;