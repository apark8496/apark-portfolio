import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {
	return (
		<>
			<Container>
				<Navbar collapseOnSelect expand="sm" variant="light">
					<Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="ml-auto">
							<Navbar.Brand href="/apark-portfolio">
								<h1 className="AP-logo">AP</h1>
							</Navbar.Brand>
							<Nav.Item className="nav-item">
								<NavLink className="nav-link"
									eventKey="1"
									as={Link}
									to="/apark-portfolio">
									About
								</NavLink>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<NavLink className="nav-link"
									eventKey="2"
									as={Link}
									to="/projects"
								>
									Projects
								</NavLink>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<NavLink className="nav-link"
									eventKey="3"
									as={Link}
									to="/contact"
								>
									Contact
								</NavLink>
							</Nav.Item>
							<Nav.Item className="nav-item">
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
			</Container>

		</>
	);
}

export default Navigation;
