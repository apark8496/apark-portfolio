import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function Main(props) {

    // destructure props
    const { currentDisplay } = props;

    // conditionally render each section of portfolio
    if (currentDisplay === 'About Me') {
        return <main><About></About></main>
    } else if (currentDisplay === 'My Projects') {
        return <main><Projects></Projects></main>
    } else if (currentDisplay === 'Contact Me') {
        return <main><Contact></Contact></main>
    } else {
        return <main><Resume></Resume></main>
    }
}

export default Main;