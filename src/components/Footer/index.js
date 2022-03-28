import React, { useState } from "react";
import {
	faGithubSquare,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
	const [footerLinks] = useState([
		{
			siteName: 'LinkedIn',
			url: 'https://www.linkedin.com/in/apark8496/',
			icon: 'linkedin',
			iconName: faLinkedin,
		},
		{
			siteName: 'GitHub',
			url: 'https://github.com/apark8496',
			icon: 'github-square',
			iconName: faGithubSquare,
		}

    ]);


	return (
		<footer>
			<ul className="footer-links">
				{footerLinks.map((link) => (
					<li className="footer-link" key={link.siteName}>
						<a href={link.url} target="_blank" rel="noreferrer">
							<img
								alt={link.alt}
								className="footer-icons"
								src={link.defaultSrc}
								// change img source on hover to change color
								onMouseEnter={(e) => {
									e.target.setAttribute("src", `${link.hoverSrc}`);
								}}
								// change img source back to default when not hovering
								onMouseLeave={(e) => {
									e.target.setAttribute("src", `${link.defaultSrc}`);
								}}
							/>
						</a>
					</li>
				))}
			</ul>
		</footer>
	)
}

export default Footer;