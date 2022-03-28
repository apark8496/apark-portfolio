import React from 'react';
import { PROJECTS } from '../../utils/projects';

function Project() {
	return (
		<div className='project-grid'>
			{PROJECTS.map((project, i) => (
				<div key={i} className={`grid-item project-${i}`}>
					<h2 className='project-title'>{project.title}</h2>
					<div className='card-body'>
						<div>
							<img
								src={project.image}
								alt={`Screenshot of ${project.title} App`}
								className='project-img'
							/>
						</div>
						<div>
							<p className='project-feature'>{project.features}</p>
						</div>
					</div>
					<div className='repo-link-wrap'>
						{project.type === 'back-end' ? (
							<a href={project.url} target='_blank' rel='noreferrer'>
								View Demo
							</a>
						) : (
							<a href={project.url} target='_blank' rel='noreferrer'>
								Visit App
							</a>
						)}
						<a
							href={`https://github.com/apark8496/${project.repo}`}
							target='_blank'
							rel='noreferrer'
							className='project-repo'
						>
							GitHub Repo
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default Project;