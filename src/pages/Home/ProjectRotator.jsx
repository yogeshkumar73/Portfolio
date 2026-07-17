import { useEffect, useState } from "react";

const projects = [
  {
    name: "Exam Pattern Analyzer",
    link: "https://your-project-link.com"
  },
  {
    name: "College Management System",
    link: "https://your-project-link.com"
  },
  {
    name: "Portfolio Website",
    link: "https://your-portfolio-link.com"
  }
];


function ProjectRotator() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setIndex(
        (prev) => (prev + 1) % projects.length
      );

    }, 3000);


    return () => clearInterval(timer);

  }, []);



  return (

    <a
      href={projects[index].link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-header"
    >

      🚀 Featured Project:
      <span>
        {projects[index].name}
      </span>

      →

    </a>

  );

}


export default ProjectRotator;