import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";
import Skills from "../pages/Skills/Skills";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";



function AppRoutes(){

return(

<Routes>


<Route 
path="/"
element={<Home />}
/>


<Route 
path="/dashboard"
element={<Dashboard />}
/>


<Route 
path="/about"
element={<About />}
/>


<Route 
path="/projects"
element={<Projects />}
/>


<Route 
path="/resume"
element={<Resume />}
/>


<Route 
path="/education"
element={<Education />}
/>

<Route 
path="/experience"
element={<Experience />}
/>

<Route 
path="/skills"
element={<Skills />}
/>

<Route 
path="/blog"
element={<Blog />}
/>

<Route 
path="/contact"
element={<Contact />}
/>

<Route
path="*"
element={<NotFound />}
/>

</Routes>

);

}


export default AppRoutes;