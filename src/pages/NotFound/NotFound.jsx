import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <div className="notfound-container">

        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or may have been moved.
          Please check the URL or return to the homepage to continue exploring
          my portfolio.
        </p>

        <div className="button-group">
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>

          <Link to="/" className="home-btn">
            🏠 Back to Home
          </Link>
        </div>

        <div className="help-text">
          <p>
            If you believe this page should exist, feel free to return to the
            homepage and navigate using the menu.
          </p>
        </div>

      </div>
    </section>
  );
}

export default NotFound;