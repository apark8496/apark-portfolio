import React from 'react';
import { SKILLS } from '../utils/skills.js';
// import { Document } from 'react-pdf'
// import pdf from "../../documents/apark-resume.pdf";


function Skills() {
	// list known skills on resume page
	// const frontendSkills = SKILLS.filter(skill => skill.type === 'front-end');
	// const backendSkills = SKILLS.filter(skill => skill.type === 'back-end');
	const programmingSkills = SKILLS.filter(skill => skill.type === 'programming-language');
	const librarySkills = SKILLS.filter(skill => skill.type === 'library-framework');
	const databaseSkills = SKILLS.filter(skill => skill.type === 'database');
	const platformSkills = SKILLS.filter(skill => skill.type === 'platform');


	// add in more (frameworks/databases/programming languages --> not just front/back skill list)

	// provide resume
	return (
		<section className='resume-section'>
			<div>
				<h2 className='heading'>Resume</h2>
			</div>
			<p className='content resume-text'>
				View or download my full resume
				<a
					className='resume-link'
					href='https://drive.google.com/file/d/1ZveSb68Hi3uT1DTRJlyghEKwzc4ctFh2/view?usp=sharing'
					target="_blank"
					rel="noreferrer"
				>
					here.
				</a>
			</p>
			{/* <div className='resume-pdf'>
				<Document
					file="https://drive.google.com/file/d/1oNBfJwSB2rehwvO9XQ64tfgvXmAxgihI/view?usp=sharing">
				</Document>
			</div> */}

			{/* skills */}
			<h3 className='heading'>Programming Languages</h3>
			<div className='icon-list'>
				{programmingSkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../assets/skill-icons/${skill.file}`)}
							className='skill-icon'
							alt={`Icon for ${skill.name}`}
						/>
						<span className='skill-text'>{skill.name}</span>
					</div>
				))}
			</div>
			<h3 className='heading'>Libraries and Frameworks</h3>
			<div className='icon-list'>
				{librarySkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../assets/skill-icons/${skill.file}`)}
							className='skill-icon'
							alt={`Icon for ${skill.name}`}
						/>
						<span className='skill-text'>{skill.name}</span>
					</div>
				))}
			</div>
			<h3 className='heading'>Databases</h3>
			<div className='icon-list'>
				{databaseSkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../assets/skill-icons/${skill.file}`)}
							className='skill-icon'
							alt={`Icon for ${skill.name}`}
						/>
						<span className='skill-text'>{skill.name}</span>
					</div>
				))}
			</div>
			<h3 className='heading'>Platforms</h3>
			<div className='icon-list'>
				{platformSkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../assets/skill-icons/${skill.file}`)}
							className='skill-icon'
							alt={`Icon for ${skill.name}`}
						/>
						<span className='skill-text'>{skill.name}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
