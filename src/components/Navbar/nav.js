import React from "react";

// Props are passed through our functional component.
function Nav(props) {
	const {
		navLinks = ["About", "Projects", "Contact", "Skills"],
		currentPage,
	} = props;

	return (

		<ul className="nav-links">
			{navLinks.map((navLink) => (
				//make sure you have the key name here!!!
				<li className="nav-item" key={navLink}>
					<a
						href={"/" + navLink.toLowerCase()}
						// Whenever a navLinks is clicked on,
						// the current page is set through the handlePageChange props.
						onClick={() => props.handlePageChange(navLink)}
						className={`${currentPage === navLink && 'current-page'} nav-links`}>
						{navLink}
					</a>
				</li>
			))}
		</ul>
	);
}

export default Nav;