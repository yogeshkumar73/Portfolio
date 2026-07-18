import { useEffect, useState } from "react";

const projects = [
  {
    name: "Exam Pattern Analyzer",
    link: "https://exampattern.netlify.app/",
  },
  {
    name: "College Management System",
    link: "https://your-project-link.com",
  },
  {
    name: "Mcqs Genrater",
    link: "https://quizgenrater.netlify.app/",
  },
];

function ProjectRotator() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % projects.length);
        setAnimate(true);
      }, 200);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <a
      href={projects[index].link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-header ${animate ? "show" : "hide"}`}
    >
      🚀 Featured Project:
      <span>{projects[index].name}</span>
      →
    </a>
  );
}

export default ProjectRotator;