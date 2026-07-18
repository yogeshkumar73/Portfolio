import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const navigate=useNavigate();
  const blogs = [
    {
      title: "My Journey into Software Development",
      date: "2025",
      category: "Career Journey",
      description:
        "Sharing my experience as a BCA student, learning programming, building projects, and developing my skills toward becoming a professional software developer."
    },

    {
      title: "Building Projects While Learning Programming",
      date: "2025",
      category: "Development",
      description:
        "How practical projects helped me understand Python, React.js, databases, and real-world software development concepts."
    },

    {
      title: "Exploring Artificial Intelligence and Machine Learning",
      date: "2025",
      category: "AI & ML",
      description:
        "My learning journey into Machine Learning, Data Analysis, Generative AI, and how these technologies can solve real-world problems."
    },

    {
      title: "Understanding Full-Stack Development",
      date: "2025",
      category: "Web Development",
      description:
        "Learning frontend and backend technologies including React.js, Node.js, REST APIs, and databases to create complete applications."
    }
  ];


  return (
    <section className="blog">

      <div className="blog-container">


        <div className="blog-header">

          <h1>
            My <span>Blog</span>
          </h1>

          <p>
            Welcome to my learning space where I share my experiences,
            technical knowledge, project insights, and lessons learned while
            growing as a developer.
          </p>

        </div>



        <div className="blog-grid">

          {blogs.map((blog, index) => (

            <article className="blog-card" key={index}>

              <span className="category">
                {blog.category}
              </span>

              <h2>
                {blog.title}
              </h2>

              <p>
                {blog.description}
              </p>

              <div className="blog-footer">

                <span>
                  📅 {blog.date}
                </span>

                <button>
                  Read More →
                </button>

              </div>


            </article>

          ))}

        </div>



        <div className="blog-message">

          <h2>
            Sharing Knowledge, Growing Together
          </h2>

          <p>
            I believe learning becomes more meaningful when we share our
            experiences. Through this blog, I aim to document my progress,
            project challenges, technical discoveries, and solutions that may
            help other developers and learners.
          </p>

        </div>



        {/* <div className="blog-button"> */}

          <div className="blog-button" style={{ marginTop: "40px", justifyContent: "center" }}>

  <button
    className="secondary-btn"
    onClick={() => navigate("/resume")}
  >
    ⬅ Back Resume
  </button>

  <button
    className="primary-btn"
    onClick={() => navigate("/contact")}
  >
    Next Page ➜ Contact
  </button>


        </div>


      </div>

    </section>
  );
}

export default Blog;