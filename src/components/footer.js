import Icon from '../utils/icon.js';
import React from 'react';
import { LINKS } from '../utils/footerLinks.js';

function Footer() {
	return (
		<div className='footer-basic'>
			<footer>
				<div className='social'>
					<Icon className='icon' links={LINKS}></Icon>
				</div>
				<p className='copyright'> © 2022 Ashley Park</p>
			</footer>
		</div>
	);
}

export default Footer;