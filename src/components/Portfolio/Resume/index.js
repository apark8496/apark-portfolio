import React from 'react';
import { SKILLS } from '../../../utils/skills.js';

function Resume() {
	// list known skills on resume page
	const frontendSkills = SKILLS.filter(skill => skill.type === 'front-end');
	const backendSkills = SKILLS.filter(skill => skill.type === 'back-end');
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
					href='https://docs.google.com/document/d/1BwiwBcrQ3dPY-qjf6rTSdzvwtokWaQ6S1bW1D_3AQSg/edit?usp=sharing'
				>
					here.
				</a>
			</p>

			{/* skills */}
			<h3 className='heading'>Front-End Skills</h3>
			<div className='icon-list'>
				{frontendSkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../../../assets/skill-icons/${skill.file}`)}
							className='skill-icon'
							alt={`Icon for ${skill.name}`}
						/>
						<span className='skill-text'>{skill.name}</span>
					</div>
				))}
			</div>
			<h3 className='heading'>Back-End Skills</h3>
			<div className='icon-list'>
				{backendSkills.map(skill => (
					<div key={skill.name} className='skill-div flex space-b'>
						<img
							src={require(`../../../assets/skill-icons/${skill.file}`)}
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

export default Resume;
