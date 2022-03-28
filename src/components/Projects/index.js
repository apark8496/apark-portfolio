
import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([

        {
            title: "Budget Tracker - PWA",
            deployedUrl: "https://tranquil-sea-41492.herokuapp.com/",
            ghRepoUrl: "https://github.com/apark8496/budget-tracker",
            imagePath: "budget-tracker"
        },
        {
            title: "Weather Dashboard",
            deployedUrl: "https://apark8496.github.io/rainy-day-weather-app/",
            ghRepoUrl: "https://github.com/apark8496/rainy-day-weather-app/",
            imagePath: "weather-dashboard"
        },
    ])
    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects">
                {featuredProjects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="card-img">
                            <img className="project-img" src={require(`../../../assets/images/project-screenshots/${project.imagePath}.png`)} alt={project.title}></img>
                        </div>
                        <div className="card-title">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-links">
                                <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
                                    <img className="project-link-icon" src={require("../../../assets/icons/project-link/repo-link.png")} alt="GitHub icon" />
                                </a>
                                <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
                                    <img className="project-link-icon" src={require("../../../assets/icons/project-link/app-link.png")} alt="Website icon" />
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;