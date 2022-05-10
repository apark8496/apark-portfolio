import React, { useState, useRef } from "react";
import validateEmail from "../../../utils/helpers";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Contact() {

    // copy email
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

    // set values for form input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // set error messages
    const [errorMessage, setErrorMessage] = useState('');

    // set 'form' as reference to form, to send email through emailjs
    const form = useRef();

    // use emailjs to send email
    const sendEmail = () => {
        emailjs.sendForm('service_5q8rlvc', 'template_4v2g57p', form.current, 'jRqq918ooN6c-C4Xm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // if no errors, upon submit, log value of input fields
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log(formState);
        }
        sendEmail(e);
    }

    // validate input fields and send error messages if not valid
    const handleChange = (e) => {
        // if email is not valid, send error message
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('**Please enter a valid e-mail address.');
            } else {
                setErrorMessage('');
            }
            // if name or message are not entered, send error message
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`**Please enter a ${e.target.name}.`);
            } else {
                setErrorMessage('');
            }
        };
        // if there are no error messages, set form input values
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });

        }
    };

    return (
        <section className='contact-section'>           
            <div style={{ marginBottom: '25px', padding: '10px' }}>
                <h2>Lets Work Together!</h2>
                <div className='email'>
                    <a id='email' href='mailto:apark8496@gmail.com'>
                        apark8496@gmail.com
                    </a>
                    <button className="copy">
                        <FontAwesomeIcon onClick={copyEmail} icon={faCopy} />
                        <span className="copyText">Copy</span>
                    </button>
                </div>
                {emailCopied && (
                    <span style={{ margin: '10px' }} className='copy-msg'>
                        {emailCopied}
                    </span>
                )}
            </div>

                {/* add a section talking about contributing/etc */}
                <form id="contact-section" ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" defaultValue={name} onBlur={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="3" defaultValue={message} onBlur={handleChange}></textarea>
                    </div>
                    {errorMessage && (
                        <div className="error-msg">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button className="submit-btn" type="submit" onClick={() => alert('Thank you for sending a message!')}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Send Message!
                    </button>
                </form>
        </section>

        // add in social media contacts column
    )
}

export default Contact;