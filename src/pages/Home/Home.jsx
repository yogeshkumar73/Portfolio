import React, {
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import VisitorCounter from "./VisitorCounter";
import ProjectRotator from "./ProjectRotator";
import "./home.css";

const CARD_WIDTH = 320;
const AUTO_SCROLL_TIME = 10000;

function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [visitorCount, setVisitorCount] = useState(null);

  // Auto Slider
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      const isLastCard =
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10;

      if (isLastCard) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: CARD_WIDTH,
          behavior: "smooth",
        });
      }
    }, AUTO_SCROLL_TIME);

    return () => clearInterval(interval);
  }, []);


//   // Visitor Counter API
//   useEffect(() => {
//     const fetchVisitorCount = async () => {
//       try {
//         const response = await fetch(
//           "https://api.countapi.xyz/hit/yogesh-portfolio/home"
//         );

//         const data = await response.json();

//         setVisitorCount(data.value);

//       } catch (error) {
//         console.error(
//           "Visitor counter error:",
//           error
//         );
//       }
//     };

//     fetchVisitorCount();

//   }, []);


  const handleNavigate = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );


  const pages = useMemo(
    () => [
      {
        id: "projects",
        title: "Projects",
        icon: "🚀",
        path: "/projects",
        desc: "AI, Machine Learning and Full Stack applications",
      },
      {
        id: "resume",
        title: "Resume",
        icon: "📄",
        path: "/resume",
        desc: "Professional profile, skills and achievements",
      },
      {
        id: "skills",
        title: "Skills",
        icon: "⚡",
        path: "/skills",
        desc: "Programming languages and technical expertise",
      },
      {
        id: "experience",
        title: "Experience",
        icon: "💼",
        path: "/experiences",
        desc: "Development experience and learning journey",
      },
      {
        id: "education",
        title: "Education",
        icon: "🎓",
        path: "/education",
        desc: "Academic background and certifications",
      },
      {
        id: "blog",
        title: "Blog",
        icon: "✍️",
        path: "/blog",
        desc: "Technical articles and learning updates",
      },
      {
        id: "contact",
        title: "Contact",
        icon: "📩",
        path: "/contact",
        desc: "Connect for collaboration and opportunities",
      },
    ],
    []
  );


  return (
    <main className="home">

      {/* Hero Section */}

      <section className="hero">
<div className="hero-content">

   <h1> Working Projects links</h1>
   

 <ProjectRotator />

    <div className="top-info">

        <p className="intro">
            👋 Hello, I'm
        </p>

        <VisitorCounter />

    </div>


    <TypeAnimation
        sequence={["Yogesh Kumar"]}
        wrapper="h1"
        className="typing-name"
    />



          <TypeAnimation
            sequence={[
              1800,
              "AI & Machine Learning Engineer"
            ]}
            wrapper="h2"
            speed={60}
            cursor={false}
            repeat={0}
            className="typing-title"
          />


          <TypeAnimation
            sequence={[
              4200,
              "Full Stack Developer"
            ]}
            wrapper="h3"
            speed={60}
            cursor={false}
            repeat={0}
            className="typing-subtitle"
          />


          <TypeAnimation
            sequence={[
              7000,
              "BCA student at Bundelkhand University building practical solutions with Python, React.js and modern AI technologies."
            ]}
            wrapper="p"
            speed={35}
            cursor={false}
            repeat={0}
            className="summary"
          />


        <TypeAnimation
  sequence={[
    13500,
    "Interested in Machine Learning, Generative AI and Full Stack Development. I enjoy creating useful applications that solve real-world problems."
  ]}
  wrapper="p"
  className="summary"
/>


          {/* Visitor Counter */}

          {/* <div className="visitor-counter">
            👀 Visitors:{" "}
            <strong>
              {
                visitorCount !== null
                  ? visitorCount
                  : "Loading..."
              }
            </strong>
          </div> */}


        </div>



        {/* Profile */}

        <div className="profile-section">

         

          <div className="profile-border">

            <img
              src="https://i.ibb.co/MykSXvPY/yogesh-profile.png"
              alt="Yogesh Kumar"
              className="profile-image"
              loading="lazy"
              decoding="async"
              draggable="false"
            />

          </div>


          <div className="profile-card">

            <h3>
              Developer Profile
            </h3>

            <p>
              🤖 AI / ML Engineer
            </p>

            <p>
              💻 Full Stack Developer
            </p>


            <div className="tech">

              <span>Python</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Machine Learning</span>
              <span>Generative AI</span>

            </div>

          </div>

        </div>

      </section>



      {/* Navigation */}

      <section className="navigation">

        <h2>
          Explore <span>Portfolio</span>
        </h2>


        <p>
          Explore my projects, skills, education and professional journey.
        </p>


        <div
          className="cards"
          ref={sliderRef}
        >

          {pages.map((item) => (

            <button
              key={item.id}
              type="button"
              className="card"
              onClick={() => handleNavigate(item.path)}
              aria-label={`Open ${item.title}`}
            >

              <div className="icon">
                {item.icon}
              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.desc}
              </p>


              <span className="card-btn">
                Open →
              </span>


            </button>

          ))}

        </div>

      </section>


    </main>
  );
}

export default Home;