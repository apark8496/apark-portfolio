import Nav from '../Navbar';
import React from 'react';

function Header({ sections, currentSection, setCurrentSection }) {
	return (
		<header>
			<Nav
				sections={sections}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>
		</header>
	);
}

export default Header;