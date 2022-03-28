import './index.css';

import React, { useState } from 'react';

// import the components for the portfolio into main App
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { SECTIONS } from './utils/navItems';

// Main page load is about
function App() {
	const [currentSection, setCurrentSection] = useState('About');

    // pages to render on click
	const renderPage = () => {
		switch (currentSection) {
			case 'Projects':
				return <Projects />;
			case 'Contact':
				return <Contact />;
			case 'Resume':
				return <Resume />;
			default:
				return <About />;
		}
	};

	return (
		<div className='app-container'>
			<div className='content-wrap'>
				<Header
					sections={SECTIONS}
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				/>
				{renderPage(currentSection)}
			</div>
			<Footer />
		</div>
	);
}

export default App;