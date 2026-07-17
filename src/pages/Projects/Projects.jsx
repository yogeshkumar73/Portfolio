import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css";

function Projects() {

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [

    {
      title: "College Management System",
      category: "Python Application",

      description:
        "A complete system to manage student records, academic details, and college-related information.",


      overview:
        "The College Management System is a Python-based application developed to simplify student data management. It allows users to store, update, search, and manage student information efficiently.",


      technologies:[
        "Python",
        "MySQL",
        "Object-Oriented Programming",
        "Database Management"
      ],


      features:[
        "Student record management",
        "Add, update, delete and search student data",
        "Structured database storage",
        "Easy data retrieval",
        "Improved record organization"
      ],


      development:
        "This project was developed to understand real-world application development, CRUD operations, database connectivity, and software design concepts.",


      future:
        "Adding authentication, web interface using React.js, cloud database support, and admin dashboard."

    },



    {
      title:"Exam Pattern Analyzer",

      category:"Data Analysis / Machine Learning",


      description:
        "A system that analyzes previous exam papers to identify important patterns and topics.",



      overview:
        "Exam Pattern Analyzer helps students and teachers understand examination trends by analyzing previous question papers and extracting useful insights.",



      technologies:[
        "Python",
        "Pandas",
        "NumPy",
        "Data Analysis",
        "Machine Learning Fundamentals"
      ],



      features:[
        "Question paper analysis",
        "Topic frequency calculation",
        "Pattern identification",
        "Data visualization",
        "Important topic prediction"
      ],



      development:
        "The project was built to explore data analysis concepts and understand how raw information can be converted into meaningful insights.",



      future:
        "Integration of advanced ML models for better prediction and automated recommendations."

    },



    {
      title:"Student Grade Calculator",

      category:"Python Project",



      description:
        "A Python application that calculates marks, percentages, and grades.",



      overview:
        "Student Grade Calculator is a simple but practical application designed to automate student result calculations and reduce manual calculation errors.",



      technologies:[
        "Python",
        "Conditional Logic",
        "Functions",
        "Data Handling"
      ],



      features:[
        "Calculate total marks",
        "Calculate percentage",
        "Generate grades",
        "Simple user interface",
        "Fast result processing"
      ],



      development:
        "Created to strengthen Python programming fundamentals including functions, conditions, and user input handling.",



      future:
        "Adding graphical interface and database integration."

    },



    {
      title:"AI Chatbot",

      category:"Artificial Intelligence",



      description:
        "An AI-powered chatbot that understands user queries and provides automated responses.",



      overview:
        "The AI Chatbot project focuses on Natural Language Processing concepts to create an interactive system that communicates with users.",



      technologies:[
        "Python",
        "NLP",
        "Machine Learning",
        "AI Models"
      ],



      features:[
        "User query processing",
        "Automated responses",
        "Natural language understanding",
        "Conversation handling"
      ],



      development:
        "Developed to understand how artificial intelligence systems process human language and generate responses.",



      future:
        "Adding voice support, advanced AI models, and personalized conversations."

    },



    {
      title:"Resume Analyzer",

      category:"AI / Machine Learning",


      description:
        "An AI-based application that analyzes resumes and matches skills with job requirements.",


      overview:
        "Resume Analyzer helps identify important skills from resumes and compares them with job descriptions.",


      technologies:[
        "Python",
        "Natural Language Processing",
        "Machine Learning",
        "Text Processing"
      ],


      features:[
        "Resume text extraction",
        "Skill identification",
        "Job matching analysis",
        "Candidate ranking"
      ],


      development:
        "Built to explore practical applications of AI in recruitment and document analysis.",


      future:
        "Adding AI recommendations, resume improvement suggestions, and web deployment."

    },



    {
      title:"Face Detection System",

      category:"Computer Vision",


      description:
        "Real-time face detection application using computer vision technology.",


      overview:
        "Face Detection System identifies human faces from images or video streams using computer vision algorithms.",


      technologies:[
        "Python",
        "OpenCV",
        "Computer Vision"
      ],


      features:[
        "Real-time face detection",
        "Image processing",
        "Camera integration",
        "Object recognition basics"
      ],


      development:
        "Created to understand computer vision concepts and how machines interpret visual information.",


      future:
        "Adding face recognition, attendance tracking, and security features."

    }

  ];




  useEffect(()=>{

    const slider = sliderRef.current;


    const autoSlide=setInterval(()=>{

      if(!slider) return;


      slider.scrollBy({

        left:340,

        behavior:"smooth"

      });


    },8000);



    return()=>clearInterval(autoSlide);


  },[]);



return (

<section className="projects-container">


<header className="projects-header">

<h1>
🚀 My Projects
</h1>


<button onClick={()=>navigate("/")}>
🏠 Home
</button>


</header>



<p className="subtitle">

Explore my development journey through AI,
Machine Learning, Python and Full-Stack projects.

</p>




<div 
className="projects-slider"
ref={sliderRef}
>


{

projects.map((project,index)=>(


<div

className="project-card"

key={index}

onClick={()=>setSelectedProject(project)}

>


<h3>
{project.title}
</h3>


<span className="category">

{project.category}

</span>



<p>
{project.description}
</p>



<button className="view-btn">

View Full Details →

</button>


</div>


))

}


</div>





{
selectedProject &&

<div className="project-modal">


<div className="modal-content">


<button 
className="close"
onClick={()=>setSelectedProject(null)}
>
✖
</button>



<h1>
{selectedProject.title}
</h1>


<h3>
{selectedProject.category}
</h3>



<h2>
Project Overview
</h2>


<p>
{selectedProject.overview}
</p>




<h2>
Technologies Used
</h2>


<div className="tech-list">

{

selectedProject.technologies.map((tech)=>(

<span key={tech}>
{tech}
</span>

))

}

</div>




<h2>
Main Features
</h2>


<ul>

{

selectedProject.features.map((item)=>(

<li key={item}>
{item}
</li>

))

}

</ul>




<h2>
Development Approach
</h2>


<p>
{selectedProject.development}
</p>



<h2>
Future Improvements
</h2>


<p>
{selectedProject.future}
</p>



<div className="modal-buttons">


<a 
href="https://github.com/yogeshkumar73"
target="_blank"
rel="noreferrer"
>
GitHub
</a>



<button
onClick={()=>setSelectedProject(null)}
>
Close
</button>


</div>


</div>


</div>

}



</section>

);


}


export default Projects;