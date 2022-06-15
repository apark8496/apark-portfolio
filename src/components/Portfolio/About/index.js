import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";
import GitHubCalendar from 'react-github-calendar';


function About() {
    const githubEndpoint = 'https://api.github.com/users/apark8496';
    const [githubData, setGithubData] = useState('');
    // github activity color scheme
    const activityTheme = {
        background: "transparent",
        text: "#ffffff",
        level4: "#727E66",
        level3: "#61764B",
        level2: "#A1AA9B",
        level1: "#C0C9BA",
        level0: "#DEE1DD",
      };

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
            <div className='title'>
                <h2 className='heading'>Hello! I'm Ashley</h2>
                <h3 className='sub-heading'>Full Stack Web Developer <br />
                    {/* <img
                        className='momo-gif'
                        src="https://64.media.tumblr.com/b1ad91b5fa08a0723d0c18db6d7fb6a7/tumblr_mmbekl0nCq1rfjowdo1_500.gif"
                        width='50'
                        height='50'
                        alt="momo"
                    /> */}
                </h3>
            </div>
            <div className='bio-container'>
                {/* import github profile picture */}
                <img
                    className='my-pic'
                    src={githubData.avatar_url}
                    alt='Ashley Park.'
                />
                {/* about section */}
                <aside className='bio' style={{ paddingBottom: "20px" }}>
                    <p>
                        I am a Fullstack web developer from North Carolina, and currently live with my husband and two cats. <br />
                        Apart from coding, you can find me spending my time doing all things nerdy! Such as reading, <br />
                        watching anime, playing Magic the Gathering, as well as D&D and playing video games! <br />
                        <br />
                        <br />
                        I have created multiple projects using front-end technologies <br />
                        such as JavaScript, React, HTML, and CSS as well as back-end <br />
                        tools such as Node.js, Express.js, MongoDB, GraphQL and MySQL <br />
                        while following development methods such as <br />
                        RESTful APIs, MVC structure and Single Page
                        Applications (SPAs).
                        <br />
                    </p>
                    {/* insert section on hobbies */}
                </aside>
            </div>

            {/* Github Activity Section */}
            <div className='github-activity'>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <h1 className="activity-heading">
                        Coding <strong>Activity</strong>
                    </h1>
                    <GitHubCalendar
                        username="apark8496"
                        theme={activityTheme}
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                     />
                </Row>
            </div>
        </section>
    );
}

export default About;