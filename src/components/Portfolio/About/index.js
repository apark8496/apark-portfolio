
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
            <h2 className='heading'>Hello! I'm Ashley</h2>
            <h3 className='sub-heading'>Full Stack Web Developer <br />
                <img
                    className='momo-gif'
                    src="https://64.media.tumblr.com/b1ad91b5fa08a0723d0c18db6d7fb6a7/tumblr_mmbekl0nCq1rfjowdo1_500.gif"
                    width='50'
                    height='50'
                    alt="momo"
                />
            </h3>

            <div className='bio-container'>
                {/* profile picture */}
                <img
                    className='my-pic'
                    src={githubData.avatar_url}
                    alt='Ashley Park.'
                />
                {/* about section */}
                <aside className='bio'>
                    <p>
                        I'm a web developer from North Carolina, and currently live with my husband and two cats. <br />
                        Apart from coding, you can find me spending my time doing all things nerdy! Such as reading, <br />
                        playing Magic the Gathering, as well as D&D and playing video games! <br />
                        I have a certificate in Full Stack Web Development <br />
                        from the University of North Carolina at Charlotte's Coding Bootcamp.
                        <br />
                        <br />
                        I have created multiple projects using front-end technologies <br />
                        such as JavaScript, React, HTML, and CSS as well as back-end <br />
                        tools such as Node.js, Express.js, MongoDB, GraphQL and MySQL <br />
                        while following to development methods such as <br />
                        RESTful APIs, MVC structure and Single Page
                        Applications (SPAs).
                        <br />
                    </p>
                    {/* insert section on hobbies */}
                </aside>
            </div>
        </section>
    );
}

export default About;