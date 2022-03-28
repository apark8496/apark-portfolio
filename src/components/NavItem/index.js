import React from 'react';

const NavItem = ({ section, currentSection, setCurrentSection }) => {
    return (
        <>
            <li
                key={section}
                className={currentSection === section ? 'active list' : 'list'}
                onClick={() => setCurrentSection(section)}
            >
                <span
                    className={currentSection === section ? '' : 'list-hover'}
                >
                    {section}
                </span>
            </li>
        </>
    );
};

export default NavItem;