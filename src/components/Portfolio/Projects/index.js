import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

function Projects() {
    const [featuredProjects] = useState([
        {
            imagePath: "breaking-code",
            title: "Breaking Code: Memory Game",
            deployedUrl: "https://fathomless-retreat-80150.herokuapp.com/",
            ghRepoUrl: "https://github.com/barrantesc/BreakingCode"

        },
        {
            imagePath: "skittydex",
            title: "Skittydex Pokemon Team Builder & Blog",
            deployedUrl: "https://skittydex.herokuapp.com",
            ghRepoUrl: "https://github.com/apark8496/SkittyDex"
        },
        {
            imagePath: "budget-tracker",
            title: "Budget Tracker",
            deployedUrl: "https://personal-budget-pwa.herokuapp.com/",
            ghRepoUrl: "https://github.com/apark8496/budget-tracker"
        },
        {
            imagePath: "weather-dashboard",
            title: "Weather Dashboard",
            deployedUrl: "https://apark8496.github.io/rainy-day-weather-app/",
            ghRepoUrl: "https://github.com/apark8496/rainy-day-weather-app/"
        },
        {
            imagePath: "book-hangover",
            title: "The Book Hangover Cure",
            deployedUrl: "https://apark8496.github.io/The-Book-Hangover-Cure/",
            ghRepoUrl: "https://github.com/apark8496/The-Book-Hangover-Cure"
        },

    ])
    return (
        // Project cards show last three and make hover detail effect on img
        //         <div>
        //             <h2>My Projects</h2>
        //             <div className="projects">
        //                 {featuredProjects.map((project) => (
        //                     <div className="project-card" key={project.title}>
        //                         <div className="card-title">
        //                             <h3 className="project-title">{project.title}</h3>
        //                             <div className="card-img">
        //                                 <img className="project-img" src={require(`../../../assets/project-images/${project.imagePath}.png`)} alt={project.title}></img>
        //                             </div>
        //                             <p>
        //                                 <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
        //                                     <img className="project-icon" src={require("../../../assets/icons/github-site.png")} alt="GitHub icon" />
        //                                 </a>
        //                                 <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
        //                                     <img className="project-icon" src={require("../../../assets/icons/site-link.png")} alt="Website icon" />
        //                                 </a>
        //                             </p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     )
        // };

        <div>
            <h2> My Projects</h2>
            {featuredProjects.map((project) => (
                <Card className="card" style={{ width: '30rem' }} key={project.title}>
                    <Card.Img className="card-img" style={{ width: '30rem' }} src={require(`../../../assets/project-images/${project.imagePath}.png`)} alt={project.title}>
                        {/* <img src={require(`../../../assets/project-images/${project.imagePath}.png`)} alt={project.title}></img> */}
                    </Card.Img>
                    <Card.Body className="card-info">
                        <Card.Title className="text-title">{project.title}</Card.Title>
                        <Card.Link className="text-body">
                            <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
                                <img className="project-icon" src={require("../../../assets/icons/github-site.png")} alt="GitHub icon" />
                            </a>
                            <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
                                <img className="project-icon" src={require("../../../assets/icons/site-link.png")} alt="Website icon" />
                            </a>
                        </Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
};

export default Projects;