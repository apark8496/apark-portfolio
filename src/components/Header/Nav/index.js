import React from "react";

function Nav(props) {

    // destructure props
    const {
        navLinks = [],
        currentDisplay,
        setCurrentDisplay
    } = props;

    return (
        <nav>
            <ul className="nav-links">
                {/* create a list item per nav link */}
                {navLinks.map((navLink) => (
                    <li key={navLink} className="nav-item">
                        <span
                            // when nav link is clicked, it is set as 'active link'
                            onClick={() => {
                                setCurrentDisplay(navLink);
                            }}
                            // active link is highlighted
                            className={`${currentDisplay === navLink && 'active-link'} nav-link`}>
                            {navLink}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;