import React, { useState, useRef } from "react";
import validateEmail from "../../../utils/helpers";
import emailjs from '@emailjs/browser';

function Contact () {

    // set values for form input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    
    // set error messages
    const [errorMessage, setErrorMessage] = useState('');

    // set 'form' as reference to form, to send email through emailjs
    const form = useRef();

    // use emailjs to send email
    const sendEmail = () => {
        // TODO use .env to hide ids?
        emailjs.sendForm('service_5q8rlvc', 'template_4v2g57p', form.current, 'ltpzhMJUSQ39yAQTh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    // if no errors, upon submit, log value of input fields
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log(formState);
        }
        sendEmail(e);
    }

    // validate input fields and send error messages if not valid
    const handleChange = (e) => {
        // if email is not valid, send error message
        if(e.target.name === 'email') {
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
            setFormState({ ...formState, [e.target.name]: e.target.value});

        }
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form id="contact-form" ref={form} onSubmit={handleSubmit}>
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
                <button className="submit-btn" type="submit">Send Message!</button>
                {errorMessage && (
                    <div className="error-msg">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact;