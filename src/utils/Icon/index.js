import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// contact info in footer (github/linkedin)
function Icon({ links }) {
	return (
		<div className='flex centered wrap'>
			{links.map(link => (
				<span key={`${link.icon}-span`}>
					<a
						href={link.url}
						target='_blank'
						rel='noreferrer'
						className='icon-link link'
					>
						<FontAwesomeIcon
							className='icons'
							key={`${link.icon}-icon`}
							icon={link.iconName}
						/>
					</a>
				</span>
			))}
		</div>
	);
}

export default Icon;