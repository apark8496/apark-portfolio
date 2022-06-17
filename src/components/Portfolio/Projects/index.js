import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
            imagePath: "breaking-code",
            title: "Breaking Code: Memory Game",
            deployedUrl: "https://fathomless-retreat-80150.herokuapp.com/",
            ghRepoUrl: "https://github.com/barrantesc/BreakingCode",
            description: "A memory game application that makes coding technical interview questions fun by matching cards."
        },
        {
            imagePath: "skittydex",
            title: "Skittydex Pokemon Team Builder & Blog",
            deployedUrl: "https://skittydex.herokuapp.com",
            ghRepoUrl: "https://github.com/apark8496/SkittyDex",
            description: "An app for trainers looking to build their ideal team, communicate with others in the community through finding other trainers to battle and trade in game with."
        },
        {
            imagePath: "book-hangover",
            title: "The Book Hangover Cure",
            deployedUrl: "https://apark8496.github.io/The-Book-Hangover-Cure/",
            ghRepoUrl: "https://github.com/apark8496/The-Book-Hangover-Cure",
            description: "A book generator app that allows the reader to search a book and receive similar recommendations. To add a little spice as a play on the website title, the reader is also provided with a random cocktail to try with the book they searched."
        },
        {
            imagePath: "budget-tracker",
            title: "Budget Tracker",
            deployedUrl: "https://personal-budget-pwa.herokuapp.com/",
            ghRepoUrl: "https://github.com/apark8496/budget-tracker",
            description: "An app that allows users to keep track of their personal budget. It can be updated offline/online."
        },
        {
            imagePath: "weather-dashboard",
            title: "Weather Dashboard",
            deployedUrl: "https://apark8496.github.io/rainy-day-weather-app/",
            ghRepoUrl: "https://github.com/apark8496/rainy-day-weather-app/",
            description: "An app that allows users to view the 5 day forecast in their desired city."
        },
        {
            imagePath: "schedule",
            title: "Work Day Scheduler",
            deployedUrl: "https://apark8496.github.io/work-day-scheduler/",
            ghRepoUrl: "https://github.com/apark8496/work-day-scheduler/",
            description: "An app that lets users view their schedule for the day."
        },
        {
            imagePath: "social",
            title: "Social Network: Backend",
            ghRepoUrl: "https://github.com/apark8496/social-network",
            description: "The backend for a social network where a user can be created,updated, and deleted. Friends, thoughts, and reactions can also be added, updated, and deleted."
        }
            
    ])

    return (
        <div>
            <h2> My Projects</h2>
            {featuredProjects.map((project) => (
                <Row className="cards">
                    <Col>
                        <Card className="card" style={{ width: '30rem' }} key={project.title}>
                            <Card.Img className="card-img" style={{ width: '30rem' }} src={require(`../../../assets/project-images/${project.imagePath}.png`)} alt={project.title} />
                            <Card.Body className="card-info">
                                <Card.Title className="text-title">{project.title}</Card.Title>
                                <Card.Text className="card-description">{project.description}</Card.Text>
                                <Card.Link className="text-body">
                                    <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
                                        <img className="project-icon" src={require("../../../assets/icons/github.png")} alt="GitHub icon" />
                                    </a>
                                    <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
                                        <img className="project-icon" src={require("../../../assets/icons/site.png")} alt="Website icon" />
                                    </a>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    )
};

export default Projects;