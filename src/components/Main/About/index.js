
import React, { useEffect, useState } from 'react';

function About() {
	const githubEndpoint = 'https://api.github.com/users/apark8496';
	const [githubData, setGithubData] = useState('');

    // get information from github --> profile pic
	useEffect(() => {
		getGithubData();
	}, []);

	const getGithubData = async () => {
		try {
			const res = await fetch(githubEndpoint);
			const data = await res.json();
			setGithubData(data);
		} catch (err) {
			console.error(err);
		}
	};

    return (
        <section>
            <h2 className='heading'>Hello! I'm Ashley.</h2>
            <h3 className='sub-heading'>Full Stack Web Developer</h3>
            <div className='bio-container'>
                {/* profile picture */}
               <img
					className='my-pic'
					src={githubData.avatar_url}
					alt='Ashley Park.'
				/>
                {/* about section */}
                <aside className='bio'>
                    I'm a web developer from North Carolina, and currently live with my husband and two cats. <br />
                    Apart from coding, you can find me spending my time doing all things nerdy! Such as reading, <br />
                    playing Magic the Gathering, as well as D&D and playing video games! <br />
                    I am currently earning a Full Stack Web Development <br />
                    Certificate from the University of North Carolina at Charlotte's Coding Bootcamp.
                    <br />
                    <br />
                    I have created multiple projects using front-end technology <br />
                    such as JavaScript, React, HTML, and CSS as well as back-end <br />
                    tools like Node.js, Express.js, MongoDB, GraphQL and MySQL <br />
                    while following to development methods such as <br />
                    RESTful APIs, MVC structure and Single Page 
                    Applications (SPAs).
                    <br />
                    {/* insert section on hobbies */}
                </aside>
            </div>
        </section>
    );
}

export default About;