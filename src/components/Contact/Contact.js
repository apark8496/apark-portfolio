import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Contact() {
	const [emailCopied, setEmailCopied] = useState('');

	const copyEmail = () => {
		const email = document.getElementById('email');

		navigator.clipboard
			.writeText(email.textContent)
			.then(() => {
				const message = 'Email Copied!';
				console.log(message);
			})
			.catch(error => {
				console.log('Email not copied:', error);
			});

		if (email) {
			setEmailCopied('Email Copied!');
			setTimeout(() => {
				setEmailCopied('');
			}, 3000);
		} else {
			setEmailCopied('');
		}
	};

	return (
		<section className='contact-me-section'>
			<h2 className='heading'>Contact Me</h2>
			<div>
				<div>
					<div className='content email-section'>
						<h3 className='sub-heading'>Email</h3>
						<p>Contact me at:</p>
						<div className='email'>
							<a id='email' href='mailto:apark8496@gmail.com'>
								thomaschestnut00@gmail.com
							</a>
							<button className='email-btn'>
								<FontAwesomeIcon onClick={copyEmail} icon={faCopy} />
							</button>
						</div>
						{emailCopied && (
							<span style={{ marginTop: '10px' }} className='email-message'>
								{emailCopied}
							</span>
						)}
					</div>
				</div>
				<div>
					<div className='content linkedin-section'>
						<h3 className='sub-heading'>LinkedIn</h3>
						<p>Connect with me on:</p>
						<a
							className='linkedin'
							href='https://www.linkedin.com/in/apark8496/'
							target='_blank'
							rel='noreferrer'
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;