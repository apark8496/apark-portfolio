import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";
import GitHubCalendar from 'react-github-calendar';

function About() {
    // connect github to portfolio to obtain data
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

    // obtain data from github --> profile pic
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

    // about section
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
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                {/* import github profile picture */}
                <img
                    className='my-pic' style={{width: "350px"}}
                    src={githubData.avatar_url}
                    alt='Ashley Park.'
                />
                {/* about section */}
                <aside className='bio'>
                    <p>
                        I am a Fullstack web developer from North Carolina, and currently <br />
                        live with my husband and two cats. Apart from coding, you can find <br />
                        me spending my time doing all things nerdy! Such as reading, <br />
                        watching anime, playing Magic the Gathering, as well as D&D <br />
                        and playing video games! <br />
                        <br />
                        I have created multiple projects using front-end technologies <br />
                        such as JavaScript, React, HTML, and CSS as well as back-end <br />
                        tools such as Node.js, Express.js, MongoDB, GraphQL and MySQL <br />
                        while following development methods such as <br />
                        RESTful APIs, MVC structure and Single Page
                        Applications (SPAs).
                        <br />
                    </p>
                </aside>
                </Row>
            </div>

            {/* Github Activity Section */}
            <div className='github-activity'>
                <Row style={{ justifyContent: "center", maxWidth: "90%" }}>
                    <h2 className="activity-heading">
                        Coding <strong>Activity</strong>
                    </h2>
                    {/* show full year of current activity */}
                    <GitHubCalendar
                        responsive={true}
                        username="apark8496"
                        year={new Date().getFullYear()}
                        theme={activityTheme}
                        blockSize={12.5}
                        blockMargin={3}
                        blockRadius={6}
                        fontSize={13}
                     />
                </Row>
            </div>
        </section>
    );
}

export default About;