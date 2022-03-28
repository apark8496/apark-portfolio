import React from "react";

function About() {    
    return (
        <section>
            <h2 className='heading'>Hello! I'm Ashley.</h2>
            <h3 className='sub-heading'>Full Stack Web Developer</h3>
            <div className='bio-container'>
               
                <article className='bio'>
                    I'm a web developer from North Carolina, and currently live with my husband and two cats 🐈.
                    Apart from coding, you can find me spending my time doing all things nerdy! 📜 Such as reading, 
                    playing Magic the Gathering, as well as D&D and playing video games!
                    I am currently earning a Full Stack Web Development
                    Certificate from the University of North Carolina at Charlotte's Coding
                    Bootcamp.
                    <br />
                    I have created multiple projects using front-end technology
                    such as JavaScript, React, HTML, and CSS as well as back-end
                    tools like Node.js, Express.js, MongoDB, GraphQL and MySQL
                    while following to development methods such as
                    RESTful APIs, MVC structure and Single Page
                    Applications (SPAs).
                    <br />
                    {/* insert section on hobbies */}
                </article>
            </div>
        </section>
    );
}

export default About;