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
        <header className="header">
            <h1 className="AP-logo">AP</h1>
            {/* <a href='/'><img className='AP-logo' src="https://i.imgur.com/jkdCcPg.png" border="0"/></a> */}

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