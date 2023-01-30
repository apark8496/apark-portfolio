import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



function Projects() {
    const [featuredProjects] = useState([
        // {
        //     imagePath: "current",
        //     title: "Cat Tails: Adventure Text RPG",
        //     deployedUrl: "https://github.com/apark8496/cat-tails",
        //     ghRepoUrl: "https://github.com/apark8496/cat-tails",
        //     description: "Current Project under development!"
        // },
        {
            imagePath: "book-hangover",
            title: "The Book Hangover Cure",
            deployedUrl: "https://apark8496.github.io/The-Book-Hangover-Cure/",
            ghRepoUrl: "https://github.com/apark8496/The-Book-Hangover-Cure",
            description: "An that allows the reader to search a book and receive similar recommendations. To add a little spice as a play on the website title, the reader is also provided with a random cocktail to try with the book they searched.",
            tags: "HTML, CSS, JavaScript, googleAPI, CocktailDB API"
        },
        {
            imagePath: "weather-dashboard",
            title: "Weather Dashboard",
            deployedUrl: "https://apark8496.github.io/rainy-day-weather-app/",
            ghRepoUrl: "https://github.com/apark8496/rainy-day-weather-app/",
            description: "An app that allows users to view the 5 day forecast in their desired city.",
            tags: "HTML, CSS, JavaScript, OpenWeather API"

        },
        {
            imagePath: "schedule",
            title: "Work Day Scheduler",
            deployedUrl: "https://apark8496.github.io/work-day-scheduler/",
            ghRepoUrl: "https://github.com/apark8496/work-day-scheduler/",
            description: "An app that lets users view their schedule for the day.",
            tags: "HTML, CSS, JavaScript"

        },
        {
            imagePath: "social",
            title: "Social Network: Backend",
            deployedUrl: "https://youtu.be/NF04uPf6N7A",
            ghRepoUrl: "https://github.com/apark8496/social-network",
            description: "The backend for a social network where a user can be created,updated, and deleted. Friends, thoughts, and reactions can also be added, updated, and deleted.",
            tags: "HTML, CSS, JavaScript, dayJS, expressJS, Mongoose, Insomnia"

        },
        {
            imagePath: "breaking-code",
            title: "Breaking Code: Memory Game",
            deployedUrl: "https://fathomless-retreat-80150.herokuapp.com/",
            ghRepoUrl: "https://github.com/barrantesc/BreakingCode",
            description: "A memory game application that makes coding technical interview questions fun by matching cards.",
            tags: "React, NodeJS, ExpressJS, HTML, CSS, JavaScript, MongoDB, Apollo, JWT"
        },
        {
            imagePath: "skittydex",
            title: "Skittydex Pokemon Team Builder & Blog",
            deployedUrl: "https://skittydex.herokuapp.com",
            ghRepoUrl: "https://github.com/apark8496/SkittyDex",
            description: "An app for trainers looking to build their ideal team, and find other trainers to battle, trade, or communicate in game with.",
            tags: "NodeJS, ExpressJS, HTML, CSS, JavaScript, mySQL, sequelize, Handlebars, PokeAPI"

        },
        {
            imagePath: "budget-tracker",
            title: "Budget Tracker",
            deployedUrl: "https://personal-budget-pwa.herokuapp.com/",
            ghRepoUrl: "https://github.com/apark8496/budget-tracker",
            description: "An app that allows users to keep track of their personal budget. It can be updated offline/online.",
            tags: "HTML, CSS, JavaScript, PWA, NoSQL, Mongoose"
        }

    ])

    return (
        <div>
            <h2> My Projects</h2>
            {featuredProjects.map((project) => (
                <div className="container">
                    <div className="row" >
                        <div className="col-4">
                            <Card className="projects" style={{ width: '30rem' }} key={project.title}>
                                {/* project img overlay */}
                                <Card.Img className="card-img" style={{ width: '30rem' }} src={require(`../assets/project-images/${project.imagePath}.png`)} alt={project.title} />
                                <Card.Body className="card-info">
                                    {/* name of project */}
                                    <Card.Title className="text-title">{project.title}</Card.Title>
                                    {/* project description and links to gh/site */}
                                    <Card.Text className="card-description">{project.description}</Card.Text>
                                    <Card.Text className="card-description tags">Technologies: {project.tags}</Card.Text>
                                    <Card.Link href={project.ghRepoUrl} target="_blank" rel="noreferrer" className="text-body">Github
                                    </Card.Link>
                                    <Card.Link href={project.deployedUrl} target="_blank" rel="noreferrer" className="text-body">Site
                                    </Card.Link>
                                    {/* imgs for gh/site */}
                                    {/* <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
                                        <img className="project-icon" src={require("../../../assets/icons/github.png")} alt="GitHub icon" />
                                    </a>
                                    <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
                                        <img className="project-icon" src={require("../../../assets/icons/site.png")} alt="Website icon" />
                                    </a> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Projects;