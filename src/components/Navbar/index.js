import NavItem from '../NavItem';
import React from 'react';

function Nav({ sections, currentSection, setCurrentSection }) {
	return (
		<nav className='navbar'>
			<h1 className='my-name'>Ashley Park</h1>
			<ul className='flex space-a'>
				{sections.map(section => (
					<NavItem
						key={section.name}
						section={section.name}
						currentSection={currentSection}
						setCurrentSection={setCurrentSection}
					/>
				))}
			</ul>
		</nav>
	);
}

export default Nav;