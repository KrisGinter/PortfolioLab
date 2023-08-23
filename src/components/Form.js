import React, { useState } from 'react';
import Decoration from '../assets/Decoration.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({name:'', email:'', message:''})
    const [submit, setSubmit] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
            const formData = {
                name,
                email,
                message,
            };
            try {
                fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                    .then(response => {
                        if (response.status === 200) {
                            setSubmit(true);
                        } else if (response.status === 400) {
                            setSubmit(false);
                            response.json().then(responseData => {
                                if (responseData.errors) {
                                    responseData.errors.forEach(err => {
                                        let error = ""
                                        if (err.param === "name") {
                                            error = "Podane imię jest nieprawidłowe!"
                                        } else if (err.param === "email") {
                                            error = "Podany email jest nieprawidłowy!"
                                        } else if (err.param === "message") {
                                            error = "Wiadomość musi mieć conajmniej 120 znaków!"
                                        }
                                        setErrors(prevState => ({...prevState, [err.param]: error}))
                                    });
                                }
                            });
                        } else {
                            console.error('Error response:', response.status);
                        }
                    })
                    .then(() => {
                        console.log('Data sent successfully');
                    })
                    .catch(error => {
                        console.error('Error sending form data:', error);
                    });
            } catch (error) {
                console.error('Error sending form data:', error);
            }
        }



    const validateForm = () => {
        const newErrors = {};

        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        if (!name.trim() || !/^\S+$/.test(name)) {
            newErrors.name = "Podane imię jest nieprawidłowe!";
        }

        if (!email.trim() || !isValidEmail(email)) {
            newErrors.email = "Podany email jest nieprawidłowy!";
        }

        if (message.length < 120) {
            newErrors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
        }

        return newErrors;
    }


    return (
        <div id="contact" className="container form__container">
            <div className="form__content">
            <div className="form__heading">
                <h1>Skontaktuj się z nami</h1>
                <img className="header__decoration" src={Decoration}/>
                <div className="success__container">{submit && <p>Wiadomość została wysłana!
                    Wkrótce się skontaktujemy.</p>}</div>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form__data">
                    <div className="form-group">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Krzysiek"
                        />
                        <div className="error__container">{errors.name && <p className="error">{errors.name}</p>}</div>
                    </div>
                        <div className="form-group">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="abc@xyz.pl"
                        />
                            <div className="error__container">{errors.email && <p className="error">{errors.email}</p>}</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <div className="error__container">{errors.message && <p className="error error__message">{errors.message}</p>}</div>
                    </div>
                    <button className="form__button" type="submit">Wyślij</button>
                </form>
            </div>
            </div>
            <div className="footer">
                <p>Copyright by Coders Lab</p>
                <div className="footer__icons">
                    <img className="footer__image" src={Facebook}></img>
                    <img className="footer__image" src={Instagram}></img>
                </div>

            </div>
        </div>
    )
}