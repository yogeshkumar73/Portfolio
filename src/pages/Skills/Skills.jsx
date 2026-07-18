import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

function Skills() {
  const navigate = useNavigate();

  // Technical Skills
  const technicalSkills = [
    {
      title: "Programming Languages",
      icon: "💻",
      items: ["Python", "C Language", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      items: ["HTML5", "CSS3", "React.js", "Node.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: "🗄️",
      items: ["MySQL","MongoDB", "Database Management System", "SQL Queries"],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      items: [
        "Machine Learning",
        "Data Analysis",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Generative AI",
      ],
    },
    {
      title: "Computer Science",
      icon: "🧠",
      items: [
        "Object Oriented Programming",
        "DBMS",
        "Data Structures",
        "Computer Networking",
      ],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
    },
  ];

  // Soft Skills
  const softSkills = [
    {
      title: "Communication",
      icon: "🗣️",
      items: [
        "Verbal Communication",
        "Written Communication",
        "Presentation Skills",
      ],
    },
    {
      title: "Problem Solving",
      icon: "🧩",
      items: [
        "Analytical Thinking",
        "Critical Thinking",
        "Creative Solutions",
      ],
    },
    {
      title: "Teamwork",
      icon: "🤝",
      items: [
        "Collaboration",
        "Team Player",
        "Knowledge Sharing",
      ],
    },
    {
      title: "Leadership",
      icon: "🚀",
      items: [
        "Decision Making",
        "Responsibility",
        "Initiative",
      ],
    },
    {
      title: "Professional Skills",
      icon: "📈",
      items: [
        "Time Management",
        "Adaptability",
        "Quick Learning",
        "Attention to Detail",
      ],
    },
  ];

  const renderSkills = (skills) => (
    <section className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-icon">{skill.icon}</div>

          <h2>{skill.title}</h2>

          <ul>
            {skill.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );

  return (
    <div className="skills-page">
     <button
    className="secondary-btn"
    onClick={() => navigate("/About")}
  >
    ⬅ Back about
  </button>

  <button
    className="primary-btn"
    onClick={() => navigate("/projects")}
  >
    Next Page ➜ Projects
  </button>

      {/* Technical Skills */}
      <section className="skills-header">
        <h1>Technical Skills</h1>
        <p>
          A collection of technologies and concepts I use to build software
          applications, AI solutions, and modern web experiences.
        </p>
      </section>

      {renderSkills(technicalSkills)}

      {/* Soft Skills */}
      <section className="skills-header second-section">
        <h1>Soft Skills</h1>
        <p>
          Personal and professional qualities that help me collaborate,
          communicate effectively, solve problems, and adapt to new challenges.
        </p>
      </section>

      {renderSkills(softSkills)}
    </div>
  );
}

export default Skills;