import React from "react";
import Nav from "./Nav";

function Header (props) {

    // destructure props
    const {
        navLinks,
        currentDisplay,
        setCurrentDisplay
    } = props;

    return (
        <header>
            <h1 href='/'>Ashley Park</h1>

            {/* passing nav links and current display settings on to header as props */}
            <Nav
                navLinks={navLinks}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
            ></Nav>
        </header>
    )
}

export default Header;