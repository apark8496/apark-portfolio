import React, { useState } from "react";
import Navbar from "../components/Navbar/nav"
import About from "./About/about";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Skills from "./Skills/skills";

function Portfolio() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Skills":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to Navbar */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;