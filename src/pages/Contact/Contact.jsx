import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <header className="contact-header">
          <h1>
            Contact <span>Me</span>
          </h1>

          <p>
            I am open to internships, freelance opportunities,
            collaborations, and exciting software development
            projects. Feel free to connect with me.
          </p>
        </header>

        {/* Main Content */}
        <div className="contact-content">

          {/* Contact Card */}
          <article className="contact-card">
            <h2>Let's Connect</h2>

            <p>
              You can reach me through the following platforms.
              I would be happy to discuss development ideas,
              internships, freelance work, and collaborations.
            </p>

            <div className="contact-info">

              {/* Phone */}
              <a
                href="tel:+917379307099"
                className="info-box"
                aria-label="Call Yogesh Kumar"
              >
                <span aria-hidden="true">📞</span>

                <div>
                  <h3>Phone</h3>
                  <p>+91 7379307099</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:yogeshkumar737@gmail.com"
                className="info-box"
                aria-label="Send email to Yogesh Kumar"
              >
                <span aria-hidden="true">📧</span>

                <div>
                  <h3>Email</h3>
                  <p>yogeshkumar737@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yogeshkumar73"
                target="_blank"
                rel="noopener noreferrer"
                className="info-box"
                aria-label="Visit GitHub Profile"
              >
                <span aria-hidden="true">💻</span>

                <div>
                  <h3>GitHub</h3>
                  <p>github.com/yogeshkumar73</p>
                </div>
              </a>

            </div>
          </article>

          {/* Profile Card */}
          <section className="profile-card">
            <h2>Developer Profile</h2>

            <p>
              <strong>Name:</strong> Yogesh Kumar
            </p>

            <p>
              <strong>Role:</strong> Aspiring AI & Machine Learning Engineer
            </p>

            <p>
              <strong>Skills:</strong> Python Developer, Full-Stack Developer
            </p>

            <p>
              <strong>Education:</strong> BCA - Bundelkhand University, Jhansi
            </p>

            <div className="skills">
              <span>Python</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Machine Learning</span>
            </div>
          </section>

        </div>

        {/* Buttons */}
        <div className="contact-buttons">

          <a
            href="mailto:yogeshkumar737@gmail.com"
            className="email-btn"
            aria-label="Send Email"
          >
            ✉ Send Email
          </a>

          <Link
            to="/"
            className="home-btn"
            aria-label="Go back to Home Page"
          >
            🏠 Back to Home
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Contact;