import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


function Navigation() {
	return (
		<>
			<Navbar className="navigation" collapseOnSelect expand="lg">
				<Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav defaultActiveKey="/">
							<Navbar.Brand href="/">
								<img src="https://i.imgur.com/NN8PcF3.png"
									border="0"
									className="AP-logo"
									alt="Ashley Park logo"
								/> 
							</Navbar.Brand>
							<Nav.Item>
								<NavLink className="nav-link"
									eventKey="1"
									as={Link}
									to="/"
								>
									About
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link"
									eventKey="2"
									as={Link}
									to="/projects"
								>
									Projects
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link"
									eventKey="3"
									as={Link}
									to="/contact"
								>
									Contact
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link"
									eventKey="4"
									as={Link}
									to="/skills"
								>
									Skills
								</NavLink>
							</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		</>
	);
}

export default Navigation;
