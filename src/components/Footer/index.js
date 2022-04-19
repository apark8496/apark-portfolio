import Icon from '../Icon';
import React from 'react';
import { LINKS } from '../../utils/footerLinks.js';

function Footer() {
	return (
		<footer className='footer'>
			<Icon links={LINKS}></Icon>
			<p> © 2022 Ashley Park</p>
		</footer>
	);
}

export default Footer;