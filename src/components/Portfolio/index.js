import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function Portfolio(props) {

    // destructure props
    const { currentDisplay } = props;

    // conditionally render each section of portfolio
    if (currentDisplay === 'About') {
        return <main><About></About></main>
    } else if (currentDisplay === 'Projects') {
        return <main><Projects></Projects></main>
    } else if (currentDisplay === 'Contact') {
        return <main><Contact></Contact></main>
    } else {
        return <main><Resume></Resume></main>
    }
}

export default Portfolio;